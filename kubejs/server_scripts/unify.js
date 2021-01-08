//priority: 997
onEvent('recipes', e => {
  const multiSmelt = (output, input) => {
    e.smelting(output, input).xp(0.5);
    e.blasting(output, input).xp(0.5);
  };

  const unifyMetal = (name, ingotItem, dustItem, blockItem, nuggetItem) => {
    e.replaceOutput(`#forge:ingots/${name}`, ingotItem);
    e.replaceOutput(`#forge:dusts/${name}`, dustItem);
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);
    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:smelting'
    });
    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:blasting'
    });
    e.remove({
      input: `#forge:ores/${name}`,
      output: `#forge:dusts/${name}`,
      type: 'mekanism:enriching'
    });
    /*
    e.remove({
      input: `mekanism:dirty_dust_${name}`,
      output: `mekanism:dust_${name}`,
      type: 'mekanism:enriching'
    });
    e.remove({
      input: `#mekanism:clumps/${name}`,
      output: `mekanism:dirty_dust_${name}`,
      type: 'mekanism:crushing'
    });
    e.remove({
      input: `#forge:ores/${name}`,
      output: `mekanism:clump_${name}`,
      type: 'mekanism:purifying'
    });
    e.remove({
      input: `mekanism:shard_${name}`,
      output: `mekanism:clump_${name}`,
      type: 'mekanism:purifying'
    });
    e.remove({
      input: `#forge:ores/${name}`,
      output: `mekanism:shard_${name}`,
      type: 'mekanism:injecting'
    });
    e.remove({
      input: `#mekanism:crystals/${name}`,
      output: `mekanism:shard_${name}`,
      type: 'mekanism:injecting'
    });
    e.remove({
      input: {
        slurry: `mekanism:clean_${name}`,
        amount: 200
      },
      output: `mekanism:crystal_${name}`,
      type: 'mekanism:crystallizing'
    });
    e.remove({
      input: {
        slurry: `mekanism:dirty_${name}`,
        amount: 1
      },
      output: {
        slurry: `mekanism:clean_${name}`,
        amount: 1
      },
      type: 'mekanism:washing'
    });
    e.remove({
      input: `#forge:ores/${name}`,
      output: {
        slurry: `mekanism:dirty_${name}`,
        amount: 1000
      },
      type: 'mekanism:dissolution'
    });
    */
    e.remove({
      input: `#forge:ores/${name}`,
      type: 'immersiveengineering:crusher'
    });
    e.remove({
      input: `#forge:ingots/${name}`,
      type: 'immersiveengineering:crusher'
    });
    e.remove({
      id: `appliedenergistics2:grinder/${name}_dust_ingot`
    });
    multiSmelt(ingotItem, `#forge:dusts/${name}`);
    e.custom({
      type: 'pedestals:pedestal_crushing',
      ingredient: Ingredient.of(`#forge:ingots/${name}`).toJson(),
      result: Item.of(dustItem).toResultJson()
    });
    e.custom({
      type: 'appliedenergistics2:grinder',
      input: Ingredient.of(`#forge:ingots/${name}`).toJson(),
      result: {
        primary: Item.of(dustItem).toResultJson()
      },
      turns: 8
    });
    e.recipes.immersiveengineering.crusher(item.of(dustItem), `#forge:ingots/${name}`);
    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      multiSmelt(ingotItem, `#forge:ores/${name}`);
      e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`);
      //e.recipes.mekanism.enriching(item.of(dustItem), `#mekanism:dirty_dusts/${name}`);
      //This is here to stop crushing hammer recipes for modium from generating
      /*
      if (name !== 'allthemodium' && name !== 'vibranium' && name !== 'unobtainium') {
        e.remove({
          id: `engineerstools:crushing/${name}_grit_crushing_recipe`
        });
        e.custom({
          type: 'engineerstools:crafting_extended_shapeless',
          group: 'grit',
          ingredients: [
            Ingredient.of(`#forge:ingots/${name}`).toJson(),
            Ingredient.of('engineerstools:crushing_hammer').toJson(),
          ],
          result: Item.of(dustItem, 2).toResultJson(),
          aspects: {
            tool: 'engineerstools:crushing_hammer',
            tool_damage: 25
          }
        });
      }
      */
      e.recipes.immersiveengineering.crusher(item.of(dustItem, 2), `#forge:ores/${name}`);
      e.remove({
        id: `pedestals:pedestal_crushing/dust${name}`
      });
      e.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: Ingredient.of(`#forge:ingots/${name}`).toJson(),
        result: Item.of(dustItem, 2).toResultJson()
      });
      e.remove({
        id: `appliedenergistics2:grinder/${name}_dust_ore`
      });
      e.custom({
        type: 'appliedenergistics2:grinder',
        input: Ingredient.of(`#forge:ingots/${name}`).toJson(),
        result: {
          primary: Item.of(dustItem, 2).toResultJson()
        },
        turns: 8
      });
    }
  };

  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget');
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget');
  unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget');
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget');
  unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget');
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget');
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget');
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget');
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget');
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget');
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget');
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget');
  unifyMetal('allthemodium', 'allthemodium:allthemodium_ingot', 'allthemodium:allthemodium_dust', 'allthemodium:allthemodium_block', 'allthemodium:allthemodium_nugget');
  unifyMetal('vibranium', 'allthemodium:vibranium_ingot', 'allthemodium:vibranium_dust', 'allthemodium:vibranium_block', 'allthemodium:vibranium_nugget');
  unifyMetal('unobtainium', 'allthemodium:unobtainium_ingot', 'allthemodium:unobtainium_dust', 'allthemodium:unobtainium_block', 'allthemodium:unobtainium_nugget');
  unifyMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel');
  unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget');
  unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget');
  unifyMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget');
  unifyMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget');
  unifyMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget');

  const replace = (gone, item, tag) => {
    if (tag != null) {
      e.replaceInput(gone, tag);
    }
    if (item != null) {
      e.replaceOutput(gone, item);
    }
  };
  replace('#appliedenergistics2:dusts/ender', 'thermal:ender_pearl_dust');
  replace('#forge:dusts/sulfur', 'thermal:sulfur_dust', '#forge:dusts/sulfur');
  replace('#forge:sawdust', 'thermal:sawdust', '#forge:sawdust');
  replace('#forge:dusts/diamond', 'thermal:diamond_dust', '#forge:dusts/diamond');
  replace('#forge:dusts/emerald', 'thermal:emerald_dust', '#forge:dusts/emerald');
  replace('#forge:dusts/quartz', 'thermal:quartz_dust', '#forge:dusts/quartz');
  replace('#forge:dusts/lapis', 'thermal:lapis_dust', '#forge:dusts/lapis');
  replace('#forge:dusts/coal', 'mekanism:dust_coal', '#forge:dusts/coal');
});