onEvent('recipes', e => {
  var mekCrush = e.recipes.mekanism.crushing;
  var mekEnrich = e.recipes.mekanism.enriching;

  const energize = (ingredient, result, rCount, power) => {
    e.custom({
      type: 'powah:energizing',
      ingredients: ingredient,
      energy: power,
      result: {
        item: result,
        count: rCount
      }
    });
  };

  const pressure = (inputs, result, rCount, pressure) => {
    e.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    });
  };

  const kjsShaped = (result, pattern, ingredients, count) => {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients);
  };

  const kjsShapeless = (result, ingredients, count) => {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients);
  };

  //Make bio fuel use tags instead of invidual items
  e.remove({
    output: 'mekanism:bio_fuel'
  });
  var bioFuels = [2, 4, 5, 7, 8];
  bioFuels.forEach(bioFuel => {
    mekCrush(item.of('mekanism:bio_fuel', bioFuel), `#misctags:biofuel${bioFuel}`);
  });

  //Powah recipes
  energize([{
    tag: 'forge:ingots/allthemodium'
  }, {
    tag: 'forge:ingots/unobtainium'
  }], 'allthemodium:unobtainium_allthemodium_alloy_ingot', 1, 50000);
  energize([{
    tag: 'forge:ingots/vibranium'
  }, {
    tag: 'forge:ingots/allthemodium'
  }], 'allthemodium:vibranium_allthemodium_alloy_ingot', 1, 50000);
  energize([{
    tag: 'forge:ingots/vibranium'
  }, {
    tag: 'forge:ingots/unobtainium'
  }], 'allthemodium:unobtainium_vibranium_alloy_ingot', 1, 50000);
  energize([{
    tag: 'forge:storage_blocks/iron'
  }, {
    tag: 'forge:storage_blocks/gold'
  }], 'powah:energized_steel_block', 2, 90000);
  energize([{
    item: 'botania:blaze_block'
  }], 'powah:blazing_crystal_block', 1, 810000);
  energize([{
    tag: 'forge:storage_blocks/diamond'
  }], 'powah:niotic_crystal_block', 1, 2700000);
  energize([{
    tag: 'forge:storage_blocks/emerald'
  }], 'powah:spirited_crystal_block', 1, 9000000);

  //Misc recipes
  e.custom({
    type: 'cyclic:solidifier',
    inputTop: Ingredient.of('woot:light_blue_dyeplate').toJson(),
    inputMiddle: Ingredient.of('#minecraft:saplings').toJson(),
    inputBottom: Ingredient.of('woot:light_blue_dyeplate').toJson(),
    mix: {
      fluid: 'cyclic:slime',
      count: 1000
    },
    result: Item.of('integrateddynamics:menril_sapling').toResultJson()
  });
  kjsShaped('computercraft:turtle_advanced', [
    'III',
    'ICI',
    'IAI'
  ], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  });
  kjsShaped('computercraft:turtle_normal', [
    'III',
    'ICI',
    'IAI'
  ], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  });
  kjsShaped('minecraft:totem_of_undying', [
    ' E ',
    'GVG',
    ' G '
  ], {
    E: 'compressium:emerald_3',
    G: '#forge:storage_blocks/gold',
    V: 'minecraft:villager_spawn_egg'
  });
  e.smelting(item.of('appliedenergistics2:certus_quartz_crystal'), '#forge:ores/certus_quartz').xp(1);
  e.smelting(item.of('minecraft:glass'), '#forge:sand').xp(0.1);
  e.shapeless(item.of('minecraft:clay_ball', 4), 'minecraft:clay');
  e.shapeless(item.of('minecraft:quartz', 4), 'minecraft:quartz_block');
  kjsShaped('appliedenergistics2:silicon_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    E: 'mysticalagriculture:iron_essence',
    A: 'mysticalagriculture:silicon_essence'
  });
  kjsShaped('appliedenergistics2:calculation_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    E: 'mysticalagriculture:iron_essence',
    A: 'mysticalagriculture:certus_quartz_essence'
  });
  kjsShaped('appliedenergistics2:engineering_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    E: 'mysticalagriculture:iron_essence',
    A: 'mysticalagriculture:diamond_essence'
  });
  kjsShaped('appliedenergistics2:logic_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    E: 'mysticalagriculture:iron_essence',
    A: 'mysticalagriculture:gold_essence'
  });
  kjsShaped('minecraft:hopper', [
    'ILI',
    'ILI',
    ' I '
  ], {
    L: '#minecraft:logs',
    I: '#forge:ingots/iron'
  });
  kjsShaped('minecraft:stick', [
    'L',
    'L'
  ], {
    L: '#minecraft:logs'
  }, 16);
  /* kjsShaped('minecraft:water_bucket', [
    ' C ',
    'CBC',
    ' C '
  ], {
    C: 'resourcefulbees:water_honeycomb',
    B: 'minecraft:bucket'
  });
  kjsShaped('minecraft:lava_bucket', [
    ' C ',
    'CBC',
    ' C '
  ], {
    C: 'resourcefulbees:lava_honeycomb',
    B: 'minecraft:bucket'
  }); */
  kjsShaped('minecraft:chest', [
    'LLL',
    'L L',
    'LLL'
  ], {
    L: '#minecraft:logs'
  }, 4);
  e.recipes.industrialforegoing.dissolution_chamber({
    input: [{
      tag: 'minecraft:planks'
    }],
    inputFluid: '{FluidName:\'immersiveengineering:creosote\',Amount:125}',
    processingTime: 1,
    output: {
      item: 'immersiveengineering:treated_wood_horizontal',
      count: 1
    }
  });

  mekCrush(item.of('minecraft:blaze_powder', 4), '#forge:rods/blaze');
  mekCrush(item.of('minecraft:quartz', 4), '#forge:storage_blocks/quartz');
  mekEnrich(item.of('minecraft:blaze_rod'), [item.of('minecraft:blaze_powder', 4)]);
  mekEnrich(item.of('powah:uraninite', 2), 'powah:uraninite_ore_poor');
  mekEnrich(item.of('powah:uraninite', 4), 'powah:uraninite_ore');
  mekEnrich(item.of('powah:uraninite', 8), 'powah:uraninite_ore_dense');

  //Creative recipes
  energize([{
    item: 'appliedenergistics2:dense_energy_cell'
  }], 'appliedenergistics2:creative_energy_cell', 1, 420000000);
  energize([{
    item: 'refinedstorage:controller'
  }], 'refinedstorage:creative_controller', 1, 420000000);
  energize([{
    item: 'refinedstorageaddons:wireless_crafting_grid'
  }], 'refinedstorageaddons:creative_wireless_crafting_grid', 1, 420000);
  energize([{
    item: 'refinedstorage:wireless_crafting_monitor'
  }], 'refinedstorage:creative_wireless_crafting_monitor', 1, 420000);
  energize([{
    item: 'refinedstorage:wireless_fluid_grid'
  }], 'refinedstorage:creative_wireless_fluid_grid', 1, 420000);
  energize([{
    item: 'refinedstorage:wireless_grid'
  }], 'refinedstorage:creative_wireless_grid', 1, 420000);
  e.shapeless(item.of('botania:mana_tablet', {
    mana: 500000,
    creative: 1
  }), ['botania:creative_pool']);
  e.shapeless('botania:creative_pool', [item.of('botania:mana_tablet', {
    mana: 500000,
    creative: 1
  })]);
  pressure([{
      type: 'pneumaticcraft:stacked_item',
      item: 'mysticalagradditions:insanium_block',
      count: 16
    },
    {
      type: 'pneumaticcraft:stacked_item',
      tag: 'forge:pellets/antimatter',
      count: 16
    },
    {
      type: 'pneumaticcraft:stacked_item',
      item: 'botania:gaia_ingot',
      count: 8
    },
    {
      type: 'pneumaticcraft:stacked_item',
      tag: 'forge:storage_blocks/allthemodium',
      count: 4
    },
    {
      type: 'pneumaticcraft:stacked_item',
      tag: 'forge:storage_blocks/vibranium',
      count: 4
    },
    {
      type: 'pneumaticcraft:stacked_item',
      tag: 'forge:storage_blocks/unobtainium',
      count: 4
    },
    /*
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'elementalcraft:purerock',
          count: 8
        }, */
    {
      type: 'pneumaticcraft:stacked_item',
      item: 'xreliquary:angelheart_vial',
      count: 12
    }
    /* ,
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'mahoutsukai:fae_essence',
          count: 1
        } */
  ], 'mysticalagradditions:creative_essence', 1, 4.9);
  kjsShaped('botania:creative_pool', [
    'CSC',
    'CPC',
    'CWC'
  ], {
    C: 'mysticalagradditions:creative_essence',
    P: 'botania:fabulous_pool',
    S: 'kubejs:rune_of_sins',
    W: 'kubejs:mass_of_wills'
  });
  kjsShaped('pneumaticcraft:creative_compressor', [
    'CLC',
    'FCA',
    'CEC'
  ], {
    C: 'mysticalagradditions:creative_essence',
    L: 'pneumaticcraft:advanced_liquid_compressor',
    A: 'pneumaticcraft:advanced_air_compressor',
    E: 'pneumaticcraft:electrostatic_compressor',
    F: 'pneumaticcraft:flux_compressor'
  });
  kjsShaped('create:creative_motor', [
    'CCC',
    'FEA',
    'CCC'
  ], {
    C: 'mysticalagradditions:creative_essence',
    A: 'create:shaft',
    E: 'create:furnace_engine',
    F: 'create:brass_casing'
  });
  /*   kjsShaped('rats:rat_upgrade_creative', [
      'HUH',
      'CCC',
      'HUH'
    ], {
      C: 'mysticalagradditions:creative_essence',
      H: 'rats:creative_cheese',
      U: 'rats:rat_upgrade_nonbeliever'
    }); */

  //SGear salvaging
  const salvage = (item, results) => {
    e.custom({
      type: 'silentgear:salvaging',
      ingredient: Ingredient.of(item).toJson(),
      results: results
    });
  };
  salvage('minecraft:netherite_sword', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:stick').toResultJson(),
    Item.of('minecraft:diamond', 2).toResultJson()
  ]);
  salvage('minecraft:netherite_shovel', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:stick', 2).toResultJson(),
    Item.of('minecraft:diamond', 1).toResultJson()
  ]);
  salvage('minecraft:netherite_pickaxe', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:stick', 2).toResultJson(),
    Item.of('minecraft:diamond', 3).toResultJson()
  ]);
  salvage('minecraft:netherite_hoe', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:stick', 2).toResultJson(),
    Item.of('minecraft:diamond', 2).toResultJson()
  ]);
  salvage('minecraft:netherite_axe', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:stick', 2).toResultJson(),
    Item.of('minecraft:diamond', 3).toResultJson()
  ]);
  salvage('minecraft:netherite_boots', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:diamond', 4).toResultJson()
  ]);
  salvage('minecraft:netherite_leggings', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:diamond', 7).toResultJson()
  ]);
  salvage('minecraft:netherite_chestplate', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:diamond', 8).toResultJson()
  ]);
  salvage('minecraft:netherite_helmet', [
    Item.of('minecraft:netherite_ingot').toResultJson(),
    Item.of('minecraft:diamond', 5).toResultJson()
  ]);
  salvage('minecraft:anvil', [
    Item.of('minecraft:iron_ingot', 31).toResultJson()
  ]);
  salvage('minecraft:diamond_horse_armor', [
    Item.of('minecraft:diamond', 7).toResultJson()
  ]);
  salvage('minecraft:golden_horse_armor', [
    Item.of('minecraft:gold_ingot', 7).toResultJson()
  ]);
  salvage('minecraft:iron_horse_armor', [
    Item.of('minecraft:iron_ingot', 7).toResultJson()
  ]);
  salvage('minecraft:leather_horse_armor', [
    Item.of('minecraft:leather', 7).toResultJson()
  ]);
  salvage('minecraft:minecart', [
    Item.of('minecraft:iron_ingot', 5).toResultJson()
  ]);
  salvage('minecraft:saddle', [
    Item.of('minecraft:leather', 5).toResultJson(),
    Item.of('minecraft:iron_nugget', 2).toResultJson()
  ]);

  //Pedestal stuff
  var coinRF = [
    'import',
    'export',
    'crusher',
    'smelter',
    'sawmill',
    'quarry',
    'quarryb'
  ];
  var coinXP = [
    'dropper',
    'magnet'
  ];

  coinRF.forEach(name => {
    e.custom({
      type: 'allthemodium:atmshapeless_crafting',
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of('#forge:storage_blocks/redstone').toJson()
      ],
      result: Item.of(`pedestals:coin/rf${name}`).toResultJson()
    });
  });
  coinXP.forEach(name => {
    e.custom({
      type: 'allthemodium:atmshapeless_crafting',
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of('minecraft:experience_bottle').toJson()
      ],
      result: Item.of(`pedestals:coin/xp${name}`).toResultJson()
    });
  });

  e.remove({
    output: 'pedestals:dustflour'
  });

  const pedestalCrush = (result, count, ingredient) => {
    e.custom({
      type: 'pedestals:pedestal_crushing',
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };

  const pedestalSaw = (result, count, ingredient) => {
    e.custom({
      type: 'pedestals:pedestal_sawing',
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };
  e.remove({
    id: 'appliedenergistics2:grinder/flour'
  });
  e.remove({
    output: '#minecraft:signs',
    type: 'pedestals:pedestal_sawing'
  });
  e.remove({
    output: '#minecraft:wooden_stairs',
    type: 'pedestals:pedestal_sawing'
  });
  e.remove({
    output: '#minecraft:wooden_slabs',
    type: 'pedestals:pedestal_sawing'
  });
  e.remove({
    output: '#minecraft:wooden_trapdoors',
    type: 'pedestals:pedestal_sawing'
  });
  e.remove({
    output: '#minecraft:wooden_pressure_plates',
    type: 'pedestals:pedestal_sawing'
  });
  e.remove({
    output: 'minecraft:stick',
    type: 'pedestals:pedestal_sawing'
  });
  pedestalCrush('pamhc2foodcore:flouritem', 1, '#forge:flour_plants');
  pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal');
  pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, '#forge:gems/certus_quartz');
  pedestalCrush('thermal:quartz_dust', 1, '#forge:gems/quartz');
  pedestalCrush('mekanism:dust_fluorite', 1, '#forge:gems/fluorite');
  pedestalSaw('thermal:sawdust', 1, '#forge:rods/wooden');
  pedestalSaw('minecraft:stick', 4, '#minecraft:planks');
  pedestalSaw('minecraft:stick', 2, '#minecraft:wooden_slabs');
  e.custom({
    type: 'appliedenergistics2:grinder',
    input: {
      tag: 'forge:flour_plants'
    },
    result: {
      primary: {
        item: 'pamhc2foodcore:flouritem',
        count: 1
      }
    },
    turns: 8
  });
  //Exrastorage fixes
  e.remove({
    mod: 'extrastorage'
  });

  const extraBlock = (size) => {
    e.shaped(`extrastorage:block_${size}`, [
      'QPQ',
      'QCQ',
      'QRQ'
    ], {
      Q: 'refinedstorage:quartz_enriched_iron',
      C: 'refinedstorage:machine_casing',
      R: '#forge:dusts/redstone',
      P: `extradisks:${size}_storage_part`
    });
  };
  extraBlock('256k');
  extraBlock('1024k');
  extraBlock('4096k');
  extraBlock('16384k');
  extraBlock('16384k_fluid');
  extraBlock('65536k_fluid');
  extraBlock('262144k_fluid');
  extraBlock('1048576k_fluid');
  kjsShaped('extrastorage:iron_crafter', [
    'B B',
    'PCP',
    'B B'
  ], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  });
  kjsShaped('extrastorage:gold_crafter', [
    'B B',
    'PCP',
    'B B'
  ], {
    B: '#forge:storage_blocks/gold',
    P: 'refinedstorage:advanced_processor',
    C: 'extrastorage:iron_crafter'
  });
  kjsShaped('extrastorage:diamond_crafter', [
    'B B',
    'PCP',
    'B B'
  ], {
    B: '#forge:storage_blocks/diamond',
    P: 'refinedstorage:advanced_processor',
    C: 'extrastorage:gold_crafter'
  });
  kjsShaped('extrastorage:netherite_crafter', [
    'BBB',
    'PCP',
    'BBB'
  ], {
    B: '#forge:ingots/netherite',
    P: 'refinedstorage:advanced_processor',
    C: 'extrastorage:diamond_crafter'
  });
  kjsShaped('extrastorage:advanced_exporter', [
    ' T ',
    'PCP',
    ' T '
  ], {
    T: 'minecraft:redstone_torch',
    P: 'refinedstorage:improved_processor',
    C: 'refinedstorage:exporter'
  });
  kjsShaped('extrastorage:advanced_importer', [
    ' T ',
    'PCP',
    ' T '
  ], {
    T: 'minecraft:redstone_torch',
    P: 'refinedstorage:improved_processor',
    C: 'refinedstorage:importer'
  });
  //NBT Resets
  var resetNBT = [
    'rftoolsbase:filter_module',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:powercell_card',
    'rftoolsutility:syringe'
  ];
  resetNBT.forEach(reset => {
    e.shapeless(item.of(reset), reset);
  });

  var tiersPowah = [
    'starter',
    'basic',
    'hardened',
    'blazing',
    'niotic',
    'spirited',
    'nitro'
  ];
  var typesPowah = [
    'energy_cell',
    'reactor',
    'furnator',
    'magmator',
    'thermo_generator',
    'solar_panel',
    'player_transmitter',
    'energy_hopper',
    'energy_discharger',
    'energizing_rod'
  ];
  typesPowah.forEach(type => {
    tiersPowah.forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`);
    });
  });
  var solars = [
    '1',
    '2',
    '3',
    '4',
    '5'
    /* ,
        'custom_allthemodium',
        'custom_vibranium',
        'custom_unobtainium' */
  ];
  solars.forEach(solar => {
    e.shapeless(item.of(`solarflux:sp_${solar}`), `solarflux:sp_${solar}`);
  });
  //Smithing stuff
  function smithing(result, base, addition) {
    e.recipes.minecraft.smithing({
      base: {
        item: base
      },
      addition: {
        item: addition
      },
      result: {
        item: result
      }
    });
  }
  smithing('metalbarrels:wood_to_netherite', 'metalbarrels:wood_to_obsidian', 'minecraft:netherite_ingot');

  //Astral Recipes
  e.custom({
    type: 'astralsorcery:block_transmutation',
    input: [{
      block: 'minecraft:spruce_sapling'
    }],
    output: {
      block: 'integrateddynamics:menril_sapling'
    },
    starlight: 100.0
  });

  const astralAltar = (tier, duration, starlight, pattern, items, result) => {
    e.custom({
      type: 'astralsorcery:altar',
      altar_type: tier,
      duration: duration,
      starlight: starlight,
      pattern: pattern,
      key: items,
      output: [
        Item.of(result).toResultJson()
      ],
      effects: [
        'astralsorcery:built_in_effect_discovery_central_beam'
      ]
    });
  };

  astralAltar(0, 100, 200, [
    '_____',
    '_1A2_',
    '_DBD_',
    '_3C4_',
    '_____'
  ], {
    A: Ingredient.of('#forge:feathers').toJson(),
    B: Ingredient.of('astralsorcery:parchment').toJson(),
    C: Ingredient.of('#forge:dyes/black').toJson(),
    D: Ingredient.of('#astralsorcery:stardust').toJson(),
    1: Ingredient.of('#forge:ingots/iron').toJson(),
    2: Ingredient.of('#forge:dusts/glowstone').toJson(),
    3: Ingredient.of('minecraft:clay_ball').toJson(),
    4: Ingredient.of('#forge:leather').toJson()
  }, 'astralsorcery:constellation_paper', {
    astralsorcery: {
      constellationName: 'astralsorcery:armara'
    }
  });
  astralAltar(0, 100, 200, [
    '_____',
    '_1A2_',
    '_DBD_',
    '_3C4_',
    '_____'
  ], {
    A: Ingredient.of('#forge:feathers').toJson(),
    B: Ingredient.of('astralsorcery:parchment').toJson(),
    C: Ingredient.of('#forge:dyes/black').toJson(),
    D: Ingredient.of('#astralsorcery:stardust').toJson(),
    1: Ingredient.of('#minecraft:saplings').toJson(),
    2: Ingredient.of('minecraft:sugar_cane').toJson(),
    3: Ingredient.of('#minecraft:seeds').toJson(),
    4: Ingredient.of('#astralsorcery:stardust').toJson()
  }, 'astralsorcery:constellation_paper', {
    astralsorcery: {
      constellationName: 'astralsorcery:aevitas'
    }
  });
  astralAltar(0, 100, 200, [
    '_____',
    '_1A2_',
    '_DBD_',
    '_3C4_',
    '_____'
  ], {
    A: Ingredient.of('#forge:feathers').toJson(),
    B: Ingredient.of('astralsorcery:parchment').toJson(),
    C: Ingredient.of('#forge:dyes/black').toJson(),
    D: Ingredient.of('#astralsorcery:stardust').toJson(),
    1: Ingredient.of('#forge:feathers').toJson(),
    2: Ingredient.of('#minecraft:fishes').toJson(),
    3: Ingredient.of('#forge:string').toJson(),
    4: Ingredient.of('#forge:sugar/sugar').toJson()
  }, 'astralsorcery:constellation_paper', {
    astralsorcery: {
      constellationName: 'astralsorcery:vicio'
    }
  });
  astralAltar(0, 100, 200, [
    '_____',
    '_1A2_',
    '_DBD_',
    '_3C4_',
    '_____'
  ], {
    A: Ingredient.of('#forge:feathers').toJson(),
    B: Ingredient.of('astralsorcery:parchment').toJson(),
    C: Ingredient.of('#forge:dyes/black').toJson(),
    D: Ingredient.of('#astralsorcery:stardust').toJson(),
    1: Ingredient.of('minecraft:flint').toJson(),
    2: Ingredient.of('#forge:dusts/redstone').toJson(),
    3: Ingredient.of('#minecraft:arrows').toJson(),
    4: Ingredient.of('#forge:ingots/iron').toJson()
  }, 'astralsorcery:constellation_paper', {
    astralsorcery: {
      constellationName: 'astralsorcery:dicidia'
    }
  });
  astralAltar(0, 100, 200, [
    '_____',
    '_1A2_',
    '_DBD_',
    '_3C4_',
    '_____'
  ], {
    A: Ingredient.of('#forge:feathers').toJson(),
    B: Ingredient.of('astralsorcery:parchment').toJson(),
    C: Ingredient.of('#forge:dyes/black').toJson(),
    D: Ingredient.of('#astralsorcery:stardust').toJson(),
    1: Ingredient.of('#forge:cobblestone').toJson(),
    2: Ingredient.of('minecraft:tnt').toJson(),
    3: Ingredient.of('#forge:gunpowder').toJson(),
    4: Ingredient.of('minecraft:flint').toJson()
  }, 'astralsorcery:constellation_paper', {
    astralsorcery: {
      constellationName: 'astralsorcery:evorsio'
    }
  });

  //Jumbo Furnace
  /*
  function jumbo(ingredients, result, xp) {
    e.custom({
      type: 'jumbofurnace:jumbo_smelting',
      ingredients: ingredients,
      result: {
        item: result
      },
      experience: xp
    });
  }
  jumbo(
    [{
        type: 'forge:nbt',
        item: 'storagedrawers:emerald_storage_upgrade',
        count: 16
      },
      {
        type: 'jumbofurnace:tag_stack',
        tag: 'forge:ingots/unobtainium',
        count: 2
      },
      {
        type: 'jumbofurnace:tag_stack',
        tag: 'forge:ingots/allthemodium',
        count: 4
      },
      {
        type: 'jumbofurnace:tag_stack',
        tag: 'forge:ender_pearls',
        count: 16
      }
    ],
    'storagedrawers:creative_storage_upgrade', 5
  );
  */
  //Quark marble to Astral Sorcery Marble
  /*
  e.custom({
    type: 'astralsorcery:block_transmutation',
    input: {
      block: 'quark:marble',
    },
    output: {
      block: 'astralsorcery:marble_raw'
    },
    starlight: 200.0
  });

  e.custom({
    type: 'astralsorcery:infuser',
    fluidInput: 'astralsorcery:liquid_starlight',
    input: {
      item: 'quark:marble'
    },
    output: {
      item: 'astralsorcery:marble_raw',
      count: 1
    },
    consumptionChance: 0.1,
    duration: 100,
    consumeMultipleFluids: false,
    acceptChaliceInput: true,
    copyNBTToOutputs: false
  });
  */
  //Reliquary changes
  e.remove({
    output: 'xreliquary:fertile_lily_pad',
    type: 'minecraft:crafting_shapeless'
  });
  e.shaped('xreliquary:fertile_lily_pad', [
    'ESE',
    'FLF',
    'ESE'
  ], {
    E: 'xreliquary:fertile_essence',
    S: 'mysticalagriculture:supremium_growth_accelerator',
    L: 'minecraft:lily_pad',
    F: 'mysticalagriculture:mystical_fertilizer'
  });

  /* //QuarryPlus
  e.shaped('quarryplus:solidquarry', [
    'FFF',
    'DGD',
    'AAA'
  ], {
    F: 'minecraft:furnace',
    D: 'minecraft:diamond_pickaxe',
    G: '#forge:storage_blocks/gold',
    A: '#forge:nuggets/allthemodium'
  });
  e.shaped('quarryplus:workbenchplus', [
    'III',
    'GDG',
    'AAA'
  ], {
    I: '#forge:storage_blocks/iron',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    A: '#forge:nuggets/allthemodium'
  }); */

  //Mining Gadgets
  e.shaped('mininggadgets:upgrade_empty', [
    'RAL',
    'DGD',
    'LAR'
  ], {
    L: '#forge:storage_blocks/lapis',
    R: '#forge:storage_blocks/redstone',
    D: '#forge:gems/diamond',
    A: '#forge:nuggets/allthemodium',
    G: 'minecraft:glass_pane'
  });

  //Mystical Agriculture
  e.shaped('mysticalagriculture:unattuned_augment', [
    'PMP',
    'AMA',
    'PMP'
  ], {
    P: 'mysticalagriculture:prosperity_ingot',
    M: 'botania:manasteel_ingot',
    A: '#forge:nuggets/allthemodium'
  });

  //Mekanism
  e.shaped('mekanism:digital_miner', [
    'AUA',
    'LRL',
    'TST'
  ], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:ingots/unobtainium'
  });
  e.shaped('mekanism:atomic_disassembler', [
    'RER',
    'RUR',
    ' V '
  ], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/vibranium'
  });
  e.shaped('mekanismgenerators:wind_generator', [
    ' O ',
    'OCO',
    'EBE'
  ], {
    E: 'mekanism:energy_tablet',
    C: 'mekanismgenerators:electromagnetic_coil',
    B: '#forge:circuits/basic',
    O: '#forge:ingots/osmium'
  });

  /* //Jetpacks

  e.shaped('ironjetpacks:diamond_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    R: '#forge:dusts/redstone',
    C: 'ironjetpacks:advanced_coil',
    T: '#forge:gems/diamond'
  });
  e.shaped('ironjetpacks:diamond_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    F: 'minecraft:furnace',
    A: 'ironjetpacks:advanced_coil',
    C: 'ironjetpacks:diamond_cell',
    T: '#forge:gems/diamond'
  });
  e.shaped('ironjetpacks:diamond_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    R: '#forge:gems/diamond',
    C: 'ironjetpacks:diamond_cell'
  });
  e.shaped('ironjetpacks:diamond_jetpack', [
    'DCD',
    'DJD',
    'TRT'
  ], {
    D: '#forge:gems/diamond',
    C: 'ironjetpacks:diamond_capacitor',
    J: ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    T: 'ironjetpacks:diamond_thruster',
    R: 'angelring:itemdiamondring'
  });
  e.shaped('ironjetpacks:platinum_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    R: '#forge:dusts/redstone',
    C: 'ironjetpacks:advanced_coil',
    T: '#forge:ingots/platinum'
  });
  e.shaped('ironjetpacks:platinum_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    F: 'minecraft:furnace',
    A: 'ironjetpacks:advanced_coil',
    C: 'ironjetpacks:platinum_cell',
    T: '#forge:ingots/platinum'
  });
  e.shaped('ironjetpacks:platinum_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    R: '#forge:ingots/platinum',
    C: 'ironjetpacks:platinum_cell'
  });
  e.shaped('ironjetpacks:platinum_jetpack', [
    'PCP',
    'PJP',
    'TRT'
  ], {
    P: '#forge:ingots/platinum',
    C: 'ironjetpacks:platinum_capacitor',
    J: ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    T: 'ironjetpacks:platinum_thruster',
    R: 'angelring:itemdiamondring'
  }); */

  //Foods
  e.shaped('pamhc2foodcore:fruitpunchitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: '#forge:fruits',
    B: 'pamhc2foodcore:applejuiceitem'
  });
  e.shaped('pamhc2foodcore:applejuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: 'minecraft:apple',
    B: 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:melonjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: 'minecraft:melon_slice',
    B: 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:sweetberryjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: 'minecraft:sweet_berries',
    B: 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:p8juiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    F: '#forge:vegetables',
    B: 'minecraft:glass_bottle'
  });

  //Angel Ring
  e.shaped('angelring:itemdiamondring', [
    'DND',
    'VEU',
    'DAD'
  ], {
    D: '#forge:storage_blocks/diamond',
    N: '#forge:storage_blocks/netherite',
    V: '#forge:storage_blocks/vibranium',
    U: '#forge:storage_blocks/unobtainium',
    A: '#forge:storage_blocks/allthemodium',
    E: 'minecraft:elytra'
  });
  e.shaped('angelring:itemring', [
    'CAC',
    'ARA',
    'DGD'
  ], {
    C: 'botania:pixie_dust',
    A: '#forge:storage_blocks/terrasteel',
    R: 'angelring:itemdiamondring',
    D: '#forge:nether_stars',
    G: 'botania:gaia_ingot'
  });

  //Other recipes
  e.shaped(item.of('forbidden_arcanus:iron_chain', 3), [
    'N  ',
    ' I ',
    '  N'
  ], {
    N: '#forge:nuggets/iron',
    I: '#forge:ingots/iron'
  });
  e.shaped('entangled:block', [
    'UEU',
    'ECE',
    'UEU'
  ], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  });
  e.shaped('entangled:item', [
    ' EC',
    ' UE',
    'U  '
  ], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  });

  //Extra Disks
  e.shaped('refinedstorage:4096k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:1024k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:nuggets/allthemodium'
  });
  e.shaped('extradisks:4096k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1024k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:nuggets/allthemodium'
  });
  e.shaped('extradisks:16384k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:4096k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:16384k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:4096k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  });

  e.shaped('extradisks:65536k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:65536k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:262144k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/vibranium'
  });
  e.shaped('extradisks:262144k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/vibranium'
  });
  e.shaped('extradisks:1048576k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:1048576k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:infinite_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:infinite_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  });

  /* //Quark
  e.shapeless('minecraft:chest', '#forge:chests/wooden');
  e.shapeless('quark:oak_chest', ['minecraft:oak_planks', '#forge:chests/wooden']);
  e.shapeless('quark:dark_oak_chest', ['minecraft:dark_oak_planks', '#forge:chests/wooden']);
  e.shapeless('quark:acacia_chest', ['minecraft:acacia_planks', '#forge:chests/wooden']);
  e.shapeless('quark:spruce_chest', ['minecraft:spruce_planks', '#forge:chests/wooden']);
  e.shapeless('quark:birch_chest', ['minecraft:birch_planks', '#forge:chests/wooden']);
  e.shapeless('quark:jungle_chest', ['minecraft:jungle_planks', '#forge:chests/wooden']);
  e.shapeless('quark:warped_chest', ['minecraft:warped_planks', '#forge:chests/wooden']);
  e.shapeless('quark:crimson_chest', ['minecraft:crimson_planks', '#forge:chests/wooden']); */

  //RFTools
  e.shaped('rftoolsbuilder:builder', [
    'aea',
    'rmr',
    'ara'
  ], {
    a: '#forge:nuggets/allthemodium',
    e: '#forge:ender_pearls',
    r: '#forge:storage_blocks/redstone',
    m: 'rftoolsbase:machine_frame'
  });

  //Astral Sorcery
  e.shaped('astralsorcery:altar_discovery', [
    'MSM',
    ' P ',
    'PPP'
  ], {
    M: 'astralsorcery:marble_raw',
    S: 'astralsorcery:black_marble_raw',
    P: '#minecraft:planks'
  });
});