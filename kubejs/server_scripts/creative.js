onEvent(`recipes`, e => {
  const energize = (ingredient, result, rCount, power) => {
    e.custom({
      type: `powah:energizing`,
      ingredients: ingredient,
      energy: power,
      result: Item.of(result, rCount).toResultJson()
    });
  };

  const pressure = (inputs, result, rCount, pressure) => {
    e.custom({
      type: `pneumaticcraft:pressure_chamber`,
      inputs: inputs,
      pressure: pressure,
      results: [Item.of(result, rCount).toResultJson()]
    });
  };

  const jumbo = (ingredients, result, xp) => {
    e.custom({
      type: `jumbofurnace:jumbo_smelting`,
      ingredients: ingredients,
      result: Item.of(result).toResultJson(),
      experience: xp
    });
  };
  /*
  e.shaped(Item.of(`ctiers:centrifuge_casing_tier_creative`, 3), [
    `IRG`,
    `RTR`,
    `DCE`
  ], {
    I: `#ctiers:quadruple_compressed_iron_blocks_2`,
    R: `minecraft:redstone`,
    G: `#ctiers:quadruple_compressed_gold_blocks_2`,
    T: `ctiers:centrifuge_casing_tier_5`,
    D: `#ctiers:quadruple_compressed_diamond_blocks_2`,
    E: `#ctiers:quadruple_compressed_emerald_blocks_2`,
    C: `mysticalagradditions:creative_essence`

  });
  e.shaped(`ctiers:centrifuge_controller_tier_creative`, [
    `ICG`,
    `STS`,
    `DME`
  ], {
    I: `#ctiers:sextuple_compressed_iron_blocks_2`,
    C: `ctiers:centrifuge_casing_tier_creative`,
    G: `#ctiers:sextuple_compressed_gold_blocks_2`,
    T: `ctiers:centrifuge_controller_tier_5`,
    S: `atmadditions:dragon_soul`,
    D: `#ctiers:sextuple_compressed_diamond_blocks_2`,
    E: `#ctiers:sextuple_compressed_emerald_blocks_2`,
    M: `compressium:cobblestone_9`

  });
  */
  e.shaped(`botania:creative_pool`, [
    `CSC`,
    `CPC`,
    `CWC`
  ], {
    C: `mysticalagradditions:creative_essence`,
    P: `botania:fabulous_pool`,
    S: `kubejs:rune_of_sins`,
    W: `kubejs:mass_of_wills`
  });
  e.shaped(`pneumaticcraft:creative_compressor`, [
    `CLC`,
    `FCA`,
    `CEC`
  ], {
    C: `mysticalagradditions:creative_essence`,
    L: `pneumaticcraft:advanced_liquid_compressor`,
    A: `pneumaticcraft:advanced_air_compressor`,
    E: `pneumaticcraft:electrostatic_compressor`,
    F: `pneumaticcraft:flux_compressor`
  });
  //Create
  e.recipes.create.mechanical_crafting('create:creative_motor', [
    'ABA',
    'CDC',
    'BEB'
  ], {
    A: 'create:cogwheel',
    B: 'create:large_cogwheel',
    C: 'create:shaft',
    D: atm_star,
    E: 'create:gearbox'
  })
  energize([{
    item: `appliedenergistics2:dense_energy_cell`
  }], `appliedenergistics2:creative_energy_cell`, 1, 420000000);
  energize([{
    item: `refinedstorage:controller`
  }], `refinedstorage:creative_controller`, 1, 420000000);
  energize([{
    item: `refinedstorageaddons:wireless_crafting_grid`
  }], `refinedstorageaddons:creative_wireless_crafting_grid`, 1, 420000);
  energize([{
    item: `refinedstorage:wireless_crafting_monitor`
  }], `refinedstorage:creative_wireless_crafting_monitor`, 1, 420000);
  energize([{
    item: `refinedstorage:wireless_fluid_grid`
  }], `refinedstorage:creative_wireless_fluid_grid`, 1, 420000);
  energize([{
    item: `refinedstorage:wireless_grid`
  }], `refinedstorage:creative_wireless_grid`, 1, 420000);
  e.shapeless(item.of(`botania:mana_tablet`, {
    mana: 500000,
    creative: 1
  }), [`botania:creative_pool`]);
  e.shapeless(`botania:creative_pool`, [item.of(`botania:mana_tablet`, {
    mana: 500000,
    creative: 1
  })]);
  pressure([
    {
      type: `pneumaticcraft:stacked_item`,
      item: `mysticalagradditions:insanium_block`,
      count: 10
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:pellets/antimatter`,
      count: 8
    },
    {
      type: `pneumaticcraft:stacked_item`,
      item: `botania:gaia_ingot`,
      count: 3
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/allthemodium`,
      count: 2
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/vibranium`,
      count: 2
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/unobtainium`,
      count: 2
    },
    {
      type: `pneumaticcraft:stacked_item`,
      item: `xreliquary:angelheart_vial`,
      count: 12
    },
    {
      type: `pneumaticcraft:stacked_item`,
      item: `mahoutsukai:fae_essence`,
      count: 2
    }
  ], `mysticalagradditions:creative_essence`, 1, 4.9);
  jumbo([
    {
      type: `forge:nbt`,
      item: `storagedrawers:emerald_storage_upgrade`,
      count: 16
    },
    {
      type: `jumbofurnace:tag_stack`,
      tag: `forge:ingots/unobtainium`,
      count: 2
    },
    {
      type: `jumbofurnace:tag_stack`,
      tag: `forge:ingots/allthemodium`,
      count: 4
    },
    {
      type: `jumbofurnace:tag_stack`,
      tag: `forge:ender_pearls`,
      count: 16
    }
  ], `storagedrawers:creative_storage_upgrade`, 5);
});
