onEvent('recipes', e => {
  var mekCrush = e.recipes.mekanism.crushing;
  var mekEnrich = e.recipes.mekanism.enriching;
  var pedCrush = e.recipes.pedestals.pedestal_crushing;
  var pedSaw = e.recipes.pedestals.pedestal_sawing;

  function energize(ingredient, result, rCount, power) {
    e.recipes.powah.energizing({
      ingredients: ingredient,
      energy: power,
      result: {
        item: result,
        count: rCount
      }
    });
  }

  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    });
  }

  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients);
  }

  function kjsShapeless(result, ingredients, count) {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients);
  }

  //Make bio fuel use tags instead of invidual items
  e.remove({
    output: 'mekanism:bio_fuel'
  });
  var bioFuels = [2, 4, 5, 7, 8];
  utils.listOf(bioFuels).forEach(function (bioFuel) {
    mekCrush(item.of('mekanism:bio_fuel', bioFuel), '#misctags:biofuel' + bioFuel);
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
    'E': 'mysticalagriculture:iron_essence',
    'A': 'mysticalagriculture:silicon_essence'
  });
  kjsShaped('appliedenergistics2:calculation_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:iron_essence',
    'A': 'mysticalagriculture:certus_quartz_essence'
  });
  kjsShaped('appliedenergistics2:engineering_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:iron_essence',
    'A': 'mysticalagriculture:diamond_essence'
  });
  kjsShaped('appliedenergistics2:logic_processor_press', [
    'EEE',
    'EAE',
    'EEE'
  ], {
    'E': 'mysticalagriculture:iron_essence',
    'A': 'mysticalagriculture:gold_essence'
  });
  kjsShaped('minecraft:hopper', [
    'ILI',
    'ILI',
    ' I '
  ], {
    'L': '#minecraft:logs',
    'I': '#forge:ingots/iron'
  });
  kjsShaped('minecraft:stick', [
    'L',
    'L'
  ], {
    'L': '#minecraft:logs'
  }, 16);
  /* kjsShaped('minecraft:water_bucket', [
    ' C ',
    'CBC',
    ' C '
  ], {
    'C': 'resourcefulbees:water_honeycomb',
    'B': 'minecraft:bucket'
  });
  kjsShaped('minecraft:lava_bucket', [
    ' C ',
    'CBC',
    ' C '
  ], {
    'C': 'resourcefulbees:lava_honeycomb',
    'B': 'minecraft:bucket'
  }); */
  kjsShaped('minecraft:chest', [
    'LLL',
    'L L',
    'LLL'
  ], {
    'L': '#minecraft:logs'
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
  mekCrush(item.of('exnihilosequentia:dust'), '#minecraft:sand');
  mekCrush(item.of('exnihilosequentia:crushed_end_stone'), 'minecraft:end_stone');
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
      'type': 'pneumaticcraft:stacked_item',
      'item': 'mysticalagradditions:insanium_block',
      'count': 16
    },
    {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:pellets/antimatter',
      'count': 16
    },
    {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'botania:gaia_ingot',
      'count': 8
    },
    {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:storage_blocks/allthemodium',
      'count': 4
    },
    {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:storage_blocks/vibranium',
      'count': 4
    },
    {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:storage_blocks/unobtainium',
      'count': 4
    },/* 
    {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'elementalcraft:purerock',
      'count': 8
    }, */
    {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'xreliquary:angelheart_vial',
      'count': 12
    }/* ,
    {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'mahoutsukai:fae_essence',
      'count': 1
    } */
  ], 'mysticalagradditions:creative_essence', 1, 4.9);
  kjsShaped('botania:creative_pool', [
    'CSC',
    'CPC',
    'CWC'
  ], {
    'C': 'mysticalagradditions:creative_essence',
    'P': 'botania:fabulous_pool',
    'S': 'kubejs:rune_of_sins',
    'W': 'kubejs:mass_of_wills'
  });
  kjsShaped('pneumaticcraft:creative_compressor', [
    'CLC',
    'FCA',
    'CEC'
  ], {
    'C': 'mysticalagradditions:creative_essence',
    'L': 'pneumaticcraft:advanced_liquid_compressor',
    'A': 'pneumaticcraft:advanced_air_compressor',
    'E': 'pneumaticcraft:electrostatic_compressor',
    'F': 'pneumaticcraft:flux_compressor'
  });
  kjsShaped('create:creative_motor', [
    'CCC',
    'FEA',
    'CCC'
  ], {
    'C': 'mysticalagradditions:creative_essence',
    'A': 'create:shaft',
    'E': 'create:furnace_engine',
    'F': 'create:brass_casing'
  });
  /*   kjsShaped('rats:rat_upgrade_creative', [
      'HUH',
      'CCC',
      'HUH'
    ], {
      'C': 'mysticalagradditions:creative_essence',
      'H': 'rats:creative_cheese',
      'U': 'rats:rat_upgrade_nonbeliever'
    }); */

  //SGear salvaging
  function salvage(item, results) {
    e.recipes.silentgear.salvaging({
      ingredient: {
        item: item
      },
      results: results
    });
  }
  salvage('minecraft:netherite_sword', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:stick',
      'count': 1
    },
    {
      'item': 'minecraft:diamond',
      'count': 2
    }
  ]);
  salvage('minecraft:netherite_shovel', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:stick',
      'count': 2
    },
    {
      'item': 'minecraft:diamond',
      'count': 1
    }
  ]);
  salvage('minecraft:netherite_pickaxe', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:stick',
      'count': 2
    },
    {
      'item': 'minecraft:diamond',
      'count': 3
    }
  ]);
  salvage('minecraft:netherite_hoe', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:stick',
      'count': 2
    },
    {
      'item': 'minecraft:diamond',
      'count': 2
    }
  ]);
  salvage('minecraft:netherite_axe', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:stick',
      'count': 2
    },
    {
      'item': 'minecraft:diamond',
      'count': 3
    }
  ]);
  salvage('minecraft:netherite_boots', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:diamond',
      'count': 4
    }
  ]);
  salvage('minecraft:netherite_leggings', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:diamond',
      'count': 7
    }
  ]);
  salvage('minecraft:netherite_chestplate', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:diamond',
      'count': 8
    }
  ]);
  salvage('minecraft:netherite_helmet', [{
      'item': 'minecraft:netherite_ingot',
      'count': 1
    },
    {
      'item': 'minecraft:diamond',
      'count': 5
    }
  ]);
  salvage('minecraft:anvil', [{
    'item': 'minecraft:iron_ingot',
    'count': 31
  }]);
  salvage('minecraft:diamond_horse_armor', [{
    'item': 'minecraft:diamond',
    'count': 7
  }]);
  salvage('minecraft:golden_horse_armor', [{
    'item': 'minecraft:gold_ingot',
    'count': 7
  }]);
  salvage('minecraft:iron_horse_armor', [{
    'item': 'minecraft:iron_ingot',
    'count': 7
  }]);
  salvage('minecraft:leather_horse_armor', [{
    'item': 'minecraft:leather',
    'count': 7
  }]);
  salvage('minecraft:minecart', [{
    'item': 'minecraft:iron_ingot',
    'count': 5
  }]);
  salvage('minecraft:saddle', [{
      'item': 'minecraft:leather',
      'count': 5
    },
    {
      'item': 'minecraft:iron_nugget',
      'count': 2
    }
  ]);

  //Pedestal stuff
  function coinUpgrade(name, type) {
    if (type == 'rf') {
      e.recipes.allthemodium.atmshapeless_crafting({
        ingredients: [{
            item: 'pedestals:coin/' + name
          },
          {
            tag: 'forge:storage_blocks/redstone'
          }
        ],
        result: {
          item: 'pedestals:coin/' + type + name
        }
      });
    } else {
      e.recipes.allthemodium.atmshapeless_crafting({
        ingredients: [{
            item: 'pedestals:coin/' + name
          },
          {
            item: 'minecraft:experience_bottle'
          }
        ],
        result: {
          item: 'pedestals:coin/' + type + name
        }
      });
    }
  }
  coinUpgrade('import', 'rf');
  coinUpgrade('export', 'rf');
  coinUpgrade('crusher', 'rf');
  coinUpgrade('smelter', 'rf');
  coinUpgrade('sawmill', 'rf');
  coinUpgrade('quarry', 'rf');
  coinUpgrade('quarryb', 'rf');
  coinUpgrade('dropper', 'xp');
  coinUpgrade('magnet', 'xp');

  e.remove({
    output: 'pedestals:dustflour'
  });

  function pedestalCrush(result, count, ingredient, type) {
    if (type == 1) {
      pedCrush({
        ingredient: {
          tag: ingredient
        },
        result: {
          item: result,
          count: count
        }
      });
    } else {
      pedCrush({
        ingredient: {
          item: ingredient
        },
        result: {
          item: result,
          count: count
        }
      });
    }
  }

  function pedestalSaw(result, count, ingredient, type) {
    if (type == 1) {
      pedSaw({
        ingredient: {
          tag: ingredient
        },
        result: {
          item: result,
          count: count
        }
      });
    } else {
      pedSaw({
        ingredient: {
          item: ingredient
        },
        result: {
          item: result,
          count: count
        }
      });
    }
  }
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
  pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1);
  pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0);
  pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1);
  pedestalCrush('mekanism:dust_quartz', 1, 'forge:gems/quartz', 1);
  pedestalCrush('exnihilosequentia:dust', 1, 'minecraft:sand', 1);
  pedestalCrush('exnihilosequentia:crushed_end_stone', 1, 'minecraft:end_stone', 0);
  pedestalSaw('mekanism:sawdust', 1, 'forge:rods/wooden', 1);
  pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1);
  pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1);
  e.recipes.appliedenergistics2.grinder({
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

  function extraBlock(size) {
    kjsShaped('extrastorage:block_' + size, [
      'QPQ',
      'QCQ',
      'QRQ'
    ], {
      Q: 'refinedstorage:quartz_enriched_iron',
      C: 'refinedstorage:machine_casing',
      R: '#forge:dusts/redstone',
      P: 'extradisks:' + size + '_storage_part'
    });
  }
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
      e.shapeless(item.of('powah:' + type + '_' + tier), 'powah:' + type + '_' + tier);
    });
  });
  var solars = [
    '1',
    '2',
    '3',
    '4',
    '5'/* ,
    'custom_allthemodium',
    'custom_vibranium',
    'custom_unobtainium' */
  ];
  solars.forEach(solar => {
    e.shapeless(item.of('solarflux:sp_' + solar), 'solarflux:sp_' + solar);
  });
  //Smithing stuff
  function smithing(result, base, addition) {
    e.recipes.minecraft.smithing({
      'base': {
        'item': base
      },
      'addition': {
        'item': addition
      },
      'result': {
        'item': result
      }
    });
  }
  smithing('metalbarrels:wood_to_netherite', 'metalbarrels:wood_to_obsidian', 'minecraft:netherite_ingot');
  //Jumbo Furnace
  /*   function jumbo(ingredients, result, xp) {
      e.recipes.jumbofurnace.jumbo_smelting({
        'ingredients': ingredients,
        'result': {
          'item': result
        },
        'experience': xp
      });
    }
    jumbo(
      [{
          'type': 'forge:nbt',
          'item': 'storagedrawers:emerald_storage_upgrade',
          'count': 16
        },
        {
          'type': 'jumbofurnace:tag_stack',
          'tag': 'forge:ingots/unobtainium',
          'count': 2
        },
        {
          'type': 'jumbofurnace:tag_stack',
          'tag': 'forge:ingots/allthemodium',
          'count': 4
        },
        {
          'type': 'jumbofurnace:tag_stack',
          'tag': 'forge:ender_pearls',
          'count': 16
        }
      ],
      'storagedrawers:creative_storage_upgrade', 5
    );*/
  //Quark marble to Astral Sorcery Marble
  /*   e.recipes.astralsorcery.block_transmutation({
      "input": {
        "block": "quark:marble",
      },
      "output": {
        "block": "astralsorcery:marble_raw"
      },
      "starlight": 200.0
    });

    e.recipes.astralsorcery.infuser({
      "fluidInput": "astralsorcery:liquid_starlight",
      "input": {
        "item": "quark:marble"
      },
      "output": {
        "item": "astralsorcery:marble_raw",
        "count": 1
      },
      "consumptionChance": 0.1,
      "duration": 100,
      "consumeMultipleFluids": false,
      "acceptChaliceInput": true,
      "copyNBTToOutputs": false
    }); */

  e.remove({
    id: 'appliedenergistics2:grinder/flour'
  });
  e.remove({
    output: [
      '#minecraft:signs',
      '#minecraft:wooden_stairs',
      '#minecraft:wooden_slabs',
      '#minecraft:wooden_trapdoors',
      '#minecraft:wooden_pressure_plates',
      'minecraft:stick'
    ],
    type: 'pedestals:pedestal_sawing'
  });
  pedestalCrush('pamhc2foodcore:flouritem', 1, 'forge:flour_plants', 1);
  pedestalCrush('appliedenergistics2:fluix_dust', 1, 'appliedenergistics2:fluix_crystal', 0);
  pedestalCrush('appliedenergistics2:certus_quartz_dust', 1, 'forge:gems/certus_quartz', 1);
  pedestalCrush('mekanism:dust_quartz', 1, 'forge:gems/quartz', 1);
  pedestalSaw('mekanism:sawdust', 1, 'forge:rods/wooden', 1);
  pedestalSaw('minecraft:stick', 4, 'minecraft:planks', 1);
  pedestalSaw('minecraft:stick', 2, 'minecraft:wooden_slabs', 1);
  e.recipes.appliedenergistics2.grinder({
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
    'F': 'minecraft:furnace',
    'D': 'minecraft:diamond_pickaxe',
    'G': '#forge:storage_blocks/gold',
    'A': '#forge:nuggets/allthemodium'
  });
  e.shaped('quarryplus:workbenchplus', [
    'III',
    'GDG',
    'AAA'
  ], {
    'I': '#forge:storage_blocks/iron',
    'G': '#forge:storage_blocks/gold',
    'D': '#forge:storage_blocks/diamond',
    'A': '#forge:nuggets/allthemodium'
  }); */

  //Mining Gadgets
  e.shaped('mininggadgets:upgrade_empty', [
    'RAL',
    'DGD',
    'LAR'
  ], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': 'minecraft:glass_pane'
  });

  //Mystical Agriculture
  e.shaped('mysticalagriculture:unattuned_augment', [
    'PMP',
    'AMA',
    'PMP'
  ], {
    'P': 'mysticalagriculture:prosperity_ingot',
    'M': 'botania:manasteel_ingot',
    'A': '#forge:nuggets/allthemodium'
  });

  //Mekanism
  e.shaped('mekanism:digital_miner', [
    'AUA',
    'LRL',
    'TST'
  ], {
    'L': 'mekanism:logistical_sorter',
    'R': 'mekanism:robit',
    'T': 'mekanism:teleportation_core',
    'A': '#mekanism:alloys/atomic',
    'S': 'mekanism:steel_casing',
    'U': '#forge:ingots/unobtainium'
  });
  e.shaped('mekanism:atomic_disassembler', [
    'RER',
    'RUR',
    ' V '
  ], {
    'E': 'mekanism:energy_tablet',
    'R': '#mekanism:alloys/reinforced',
    'U': '#forge:circuits/ultimate',
    'V': '#forge:ingots/vibranium'
  });
  e.shaped('mekanismgenerators:wind_generator', [
    ' O ',
    'OCO',
    'EBE'
  ], {
    'E': 'mekanism:energy_tablet',
    'C': 'mekanismgenerators:electromagnetic_coil',
    'B': '#forge:circuits/basic',
    'O': '#forge:ingots/osmium'
  });

  /* //Jetpacks

  e.shaped('ironjetpacks:diamond_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:gems/diamond'
  });
  e.shaped('ironjetpacks:diamond_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:diamond_cell',
    'T': '#forge:gems/diamond'
  });
  e.shaped('ironjetpacks:diamond_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_cell'
  });
  e.shaped('ironjetpacks:diamond_jetpack', [
    'DCD',
    'DJD',
    'TRT'
  ], {
    'D': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:diamond_thruster',
    'R': 'angelring:itemdiamondring'
  });
  e.shaped('ironjetpacks:platinum_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:ingots/platinum'
  });
  e.shaped('ironjetpacks:platinum_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:platinum_cell',
    'T': '#forge:ingots/platinum'
  });
  e.shaped('ironjetpacks:platinum_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_cell'
  });
  e.shaped('ironjetpacks:platinum_jetpack', [
    'PCP',
    'PJP',
    'TRT'
  ], {
    'P': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:platinum_thruster',
    'R': 'angelring:itemdiamondring'
  }); */

  //Foods
  e.shaped('pamhc2foodcore:fruitpunchitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': '#forge:fruits',
    'B': 'pamhc2foodcore:applejuiceitem'
  });
  e.shaped('pamhc2foodcore:applejuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:apple',
    'B': 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:melonjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:melon_slice',
    'B': 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:sweetberryjuiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': 'minecraft:sweet_berries',
    'B': 'minecraft:glass_bottle'
  });
  e.shaped('pamhc2foodcore:p8juiceitem', [
    'FFF',
    'FBF',
    'FFF'
  ], {
    'F': '#forge:vegetables',
    'B': 'minecraft:glass_bottle'
  });

  //Angel Ring
  e.shaped('angelring:itemdiamondring', [
    'DND',
    'VEU',
    'DAD'
  ], {
    'D': '#forge:storage_blocks/diamond',
    'N': '#forge:storage_blocks/netherite',
    'V': '#forge:storage_blocks/vibranium',
    'U': '#forge:storage_blocks/unobtainium',
    'A': '#forge:storage_blocks/allthemodium',
    'E': 'minecraft:elytra'
  });
  e.shaped('angelring:itemring', [
    'CAC',
    'ARA',
    'DGD'
  ], {
    'C': 'botania:pixie_dust',
    'A': '#forge:storage_blocks/terrasteel',
    'R': 'angelring:itemdiamondring',
    'D': '#forge:nether_stars',
    'G': 'botania:gaia_ingot'
  });

  //Other recipes
  e.shaped(item.of('forbidden_arcanus:iron_chain', 3), [
    'N  ',
    ' I ',
    '  N'
  ], {
    'N': '#forge:nuggets/iron',
    'I': '#forge:ingots/iron'
  });
  e.shaped('entangled:block', [
    'UEU',
    'ECE',
    'UEU'
  ], {
    'U': '#forge:ingots/unobtainium',
    'E': '#forge:ender_pearls',
    'C': 'minecraft:ender_chest'
  });
  e.shaped('entangled:item', [
    ' EC',
    ' UE',
    'U  '
  ], {
    'U': '#forge:ingots/unobtainium',
    'E': '#forge:ender_pearls',
    'C': 'minecraft:ender_chest'
  });

  //Extra Disks
  e.shaped('refinedstorage:4096k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'refinedstorage:1024k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:nuggets/allthemodium'
  });
  e.shaped('extradisks:4096k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1024k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:nuggets/allthemodium'
  });
  e.shaped('extradisks:16384k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'refinedstorage:4096k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:16384k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:4096k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/allthemodium'
  });

  e.shaped('extradisks:65536k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:16384k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:65536k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:16384k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/allthemodium'
  });
  e.shaped('extradisks:262144k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:65536k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/vibranium'
  });
  e.shaped('extradisks:262144k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:65536k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/vibranium'
  });
  e.shaped('extradisks:1048576k_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:262144k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:1048576k_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:262144k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:infinite_fluid_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1048576k_fluid_storage_part',
    'b': 'minecraft:bucket',
    'n': '#forge:ingots/unobtainium'
  });
  e.shaped('extradisks:infinite_storage_part', [
    'ana',
    'fbf',
    'afa'
  ], {
    'a': 'refinedstorage:advanced_processor',
    'f': 'extradisks:1048576k_storage_part',
    'b': '#forge:dusts/redstone',
    'n': '#forge:ingots/unobtainium'
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
    'a': '#forge:nuggets/allthemodium',
    'e': '#forge:ender_pearls',
    'r': '#forge:storage_blocks/redstone',
    'm': 'rftoolsbase:machine_frame'
  });
});