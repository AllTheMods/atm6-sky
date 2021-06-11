//priority: 997
const atOres = [
  `aluminum`,
  `copper`,
  `lead`,
  `nickel`,
  `osmium`,
  `platinum`,
  `silver`,
  `tin`,
  `uranium`,
  `zinc`,
]
const atmOres = [
  `allthemodium`,
  `vibranium`,
  `unobtainium`,
]
const waterReplace = [
  `thermal:rubber_from_vine`,
  `thermal:rubber_from_dandelion`,
  `xreliquary:items/attraction_potion`,
  `xreliquary:items/fertile_potion`,
  `xreliquary:items/glowing_water`,
  `appliedenergistics2:network/cables/smart_fluix_clean`,
  `appliedenergistics2:network/cables/dense_smart_fluix_clean`,
  `appliedenergistics2:network/cables/dense_covered_fluix_clean`,
  `appliedenergistics2:network/cables/glass_fluix_clean`,
  `immersiveengineering:crafting/concrete`,
  `create:crafting/appliances/dough`,
  `gardenofglass:magma_cream_to_slime_ball`,
]
const plates = [
  `iron`,
  `gold`,
  `copper`,
  `tin`,
  `lead`,
  `silver`,
  `nickel`,
  `bronze`,
  `electrum`,
  `invar`,
  `constantan`,
  `signalum`,
  `lumium`,
  `enderium`
]

onEvent(`recipes`, e => {
  function multiSmelt(output, input) {
    e.smelting(output, input).xp(0.5)
    e.blasting(output, input).xp(0.5)
  }

  function unifyMetal(item, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceOutput(`#forge:ingots/${item}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${item}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${item}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${item}`, blockItem)
    e.remove({
      input: [`#forge:ores/${item}`, `#forge:dusts/${item}`],
      output: `#forge:ingots/${item}`,
      type: `minecraft:smelting`
    })
    e.remove({
      input: [`#forge:ores/${item}`, `#forge:dusts/${item}`],
      output: `#forge:ingots/${item}`,
      type: `minecraft:blasting`
    })
    e.remove({
      input: `#forge:ores/${item}`,
      output: `#forge:dusts/${item}`,
      type: `mekanism:enriching`
    })
    e.remove({
      input: `#forge:ores/${item}`,
      type: `immersiveengineering:crusher`
    })
    e.remove({
      input: `#forge:ingots/${item}`,
      type: `immersiveengineering:crusher`
    })
    e.remove({
      id: `appliedenergistics2:grinder/${item}_dust_ingot`
    })
    multiSmelt(ingotItem, `#forge:dusts/${item}`)
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(`#forge:ingots/${item}`).toJson(),
      result: Item.of(dustItem).toResultJson()
    })
    e.custom({
      type: `appliedenergistics2:grinder`,
      input: Ingredient.of(`#forge:ingots/${item}`).toJson(),
      result: {
        primary: Item.of(dustItem).toResultJson()
      },
      turns: 8
    })
    e.recipes.immersiveengineering.crusher(Item.of(dustItem), `#forge:ingots/${item}`)
    if (!Ingredient.of(`#forge:ores/${item}`).stacks.empty) {
      multiSmelt(ingotItem, `#forge:ores/${item}`)
      e.recipes.mekanism.enriching(Item.of(dustItem, 2), `#forge:ores/${item}`)
      e.recipes.immersiveengineering.crusher(Item.of(dustItem, 2), `#forge:ores/${item}`)
      e.remove({
        id: `pedestals:pedestal_crushing/dust${item}`
      })
      e.custom({
        type: `pedestals:pedestal_crushing`,
        ingredient: Ingredient.of(`#forge:ores/${item}`).toJson(),
        result: Item.of(dustItem, 2).toResultJson()
      })
      e.remove({
        id: `appliedenergistics2:grinder/${item}_dust_ore`
      })
      e.custom({
        type: `appliedenergistics2:grinder`,
        input: Ingredient.of(`#forge:ores/${item}`).toJson(),
        result: {
          primary: Item.of(dustItem, 2).toResultJson()
        },
        turns: 8
      })
    }
  }

  function replace(replaced, item, rep_In) {
    if (!!item) e.replaceOutput(replaced, item)
    if (rep_In) e.replaceInput(replaced, replaced)
  }

  unifyMetal(`iron`, `minecraft:iron_ingot`, `alltheores:iron_dust`, `minecraft:iron_block`, `minecraft:iron_nugget`)
  unifyMetal(`gold`, `minecraft:gold_ingot`, `alltheores:gold_dust`, `minecraft:gold_block`, `minecraft:gold_nugget`)
  unifyMetal(`aluminum`, `alltheores:aluminum_ingot`, `alltheores:aluminum_dust`, `alltheores:aluminum_block`, `alltheores:aluminum_nugget`)
  unifyMetal(`uranium`, `alltheores:uranium_ingot`, `alltheores:uranium_dust`, `alltheores:uranium_block`, `alltheores:uranium_nugget`)
  unifyMetal(`copper`, `alltheores:copper_ingot`, `alltheores:copper_dust`, `alltheores:copper_block`, `alltheores:copper_nugget`)
  unifyMetal(`tin`, `alltheores:tin_ingot`, `alltheores:tin_dust`, `alltheores:tin_block`, `alltheores:tin_nugget`)
  unifyMetal(`silver`, `alltheores:silver_ingot`, `alltheores:silver_dust`, `alltheores:silver_block`, `alltheores:silver_nugget`)
  unifyMetal(`lead`, `alltheores:lead_ingot`, `alltheores:lead_dust`, `alltheores:lead_block`, `alltheores:lead_nugget`)
  unifyMetal(`nickel`, `alltheores:nickel_ingot`, `alltheores:nickel_dust`, `alltheores:nickel_block`, `alltheores:nickel_nugget`)
  unifyMetal(`zinc`, `alltheores:zinc_ingot`, `alltheores:zinc_dust`, `alltheores:zinc_block`, `alltheores:zinc_nugget`)
  unifyMetal(`platinum`, `alltheores:platinum_ingot`, `alltheores:platinum_dust`, `alltheores:platinum_block`, `alltheores:platinum_nugget`)
  unifyMetal(`osmium`, `alltheores:osmium_ingot`, `alltheores:osmium_dust`, `alltheores:osmium_block`, `alltheores:osmium_nugget`)
  unifyMetal(`allthemodium`, `allthemodium:allthemodium_ingot`, `allthemodium:allthemodium_dust`, `allthemodium:allthemodium_block`, `allthemodium:allthemodium_nugget`)
  unifyMetal(`vibranium`, `allthemodium:vibranium_ingot`, `allthemodium:vibranium_dust`, `allthemodium:vibranium_block`, `allthemodium:vibranium_nugget`)
  unifyMetal(`unobtainium`, `allthemodium:unobtainium_ingot`, `allthemodium:unobtainium_dust`, `allthemodium:unobtainium_block`, `allthemodium:unobtainium_nugget`)
  unifyMetal(`steel`, `mekanism:ingot_steel`, `mekanism:dust_steel`, `mekanism:block_steel`, `mekanism:nugget_steel`)
  unifyMetal(`azure_silver`, `silentgear:azure_silver_ingot`, `silentgear:azure_silver_dust`, `silentgear:azure_silver_block`, `silentgear:azure_silver_nugget`)
  unifyMetal(`crimson_iron`, `silentgear:crimson_iron_ingot`, `silentgear:crimson_iron_dust`, `silentgear:crimson_iron_block`, `silentgear:crimson_iron_nugget`)
  unifyMetal(`bronze`, `thermal:bronze_ingot`, `thermal:bronze_dust`, `thermal:bronze_block`, `thermal:bronze_nugget`)
  unifyMetal(`constantan`, `thermal:constantan_ingot`, `thermal:constantan_dust`, `thermal:constantan_block`, `thermal:constantan_nugget`)
  unifyMetal(`electrum`, `thermal:electrum_ingot`, `thermal:electrum_dust`, `thermal:electrum_block`, `thermal:electrum_nugget`)

  replace(`#forge:dusts/sulfur`, `thermal:sulfur_dust`, true)
  replace(`#forge:sawdust`, `thermal:sawdust`, true)
  replace(`#forge:dusts/diamond`, `thermal:diamond_dust`, true)
  replace(`#forge:dusts/emerald`, `thermal:emerald_dust`, true)
  replace(`#forge:dusts/quartz`, `thermal:quartz_dust`, true)
  replace(`#forge:dusts/lapis`, `thermal:lapis_dust`, true)
  replace(`#forge:dusts/coal`, `mekanism:dust_coal`, true)
  replace(`#forge:slag`, `thermal:slag`, true)
  replace(`#forge:salt`, `mekanism:salt`, false)

  e.replaceInput({
    id: `minecraft:beehive`
  }, `minecraft:honeycomb`, `#resourcefulbees:resourceful_honeycomb`)
  e.replaceInput([`xreliquary:bat_wing`, `forbidden_arcanus:bat_wing`], `#misctags:bat_wing`)

  waterReplace.forEach(wR => {
    e.replaceInput({
      id: wR
    }, `minecraft:water_bucket`, `#forge:water`)
  })

  plates.forEach(plate => {
    if (!Ingredient.of(`#forge:plates/${plate}`).stacks.empty) {
      e.replaceOutput(`#forge:plates/${plate}`, `thermal:${plate}_plate`)
    }
  })

  atmOres.forEach(item => {
    replace(`#mekanism:clumps/${item}`, `allthemodium:${item}_clump`, true)
    replace(`#mekanism:crystals/${item}`, `allthemodium:${item}_crystal`, true)
    replace(`#mekanism:shards/${item}`, `allthemodium:${item}_shard`, true)
    replace(`#mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`, true)
  })
})

onEvent(`item.tags`, e => {
  atmOres.forEach(item => {
    //Mek Clumps
    e.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    //Mek Dirty Dusts
    e.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    //Mek Shards
    e.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    //Mek Crystals
    e.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })

  atOres.forEach(item => {
    //Mek Clumps
    e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    //Mek Dirty Dusts
    e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    //Mek Shards
    e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    //Mek Crystals
    e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })
})