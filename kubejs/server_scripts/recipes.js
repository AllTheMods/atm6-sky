onEvent(`recipes`, e => {
  var mekCrush = e.recipes.mekanism.crushing;
  var mekEnrich = e.recipes.mekanism.enriching;

  const energize = (ingredient, result, rCount, power) => {
    e.recipes.powah.energizing({
      ingredients: ingredient,
      energy: power,
      result: {
        item: result,
        count: rCount
      }
    });
  };

  const pressure = (inputs, result, rCount, pressure) => {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    });
  };

  //Make bio fuel use tags instead of invidual items
  e.remove({
    output: `mekanism:bio_fuel`
  });
  var bioFuels = [2, 4, 5, 7, 8];
  bioFuels.forEach(bioFuel => {
    mekCrush(Item.of(`mekanism:bio_fuel`, bioFuel), `#misctags:biofuel${bioFuel}`);
  });

  //Powah recipes
  energize([{
    tag: `forge:ingots/allthemodium`
  }, {
    tag: `forge:ingots/unobtainium`
  }], `allthemodium:unobtainium_allthemodium_alloy_ingot`, 1, 50000);
  energize([{
    tag: `forge:ingots/vibranium`
  }, {
    tag: `forge:ingots/allthemodium`
  }], `allthemodium:vibranium_allthemodium_alloy_ingot`, 1, 50000);
  energize([{
    tag: `forge:ingots/vibranium`
  }, {
    tag: `forge:ingots/unobtainium`
  }], `allthemodium:unobtainium_vibranium_alloy_ingot`, 1, 50000);
  energize([{
    tag: `forge:storage_blocks/iron`
  }, {
    tag: `forge:storage_blocks/gold`
  }], `powah:energized_steel_block`, 2, 90000);
  energize([{
    item: `botania:blaze_block`
  }], `powah:blazing_crystal_block`, 1, 810000);
  energize([{
    tag: `forge:storage_blocks/diamond`
  }], `powah:niotic_crystal_block`, 1, 2700000);
  energize([{
    tag: `forge:storage_blocks/emerald`
  }], `powah:spirited_crystal_block`, 1, 9000000);

  //Misc recipes
  e.shapeless(Item.of(`appliedenergistics2:fluix_covered_cable`, 4), `appliedenergistics2:fluix_covered_dense_cable`);
  e.shapeless(Item.of(`appliedenergistics2:fluix_smart_cable`, 4), `appliedenergistics2:fluix_smart_dense_cable`);
  e.shaped(`appliedenergistics2:fluix_smart_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_smart_cable`
  });
  e.shaped(`appliedenergistics2:fluix_covered_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_covered_cable`
  });
  e.recipes.create.crushing([`create:cinder_flour`, Item.of(`create:cinder_flour`).withChance(0.5)], `exnihilosequentia:crushed_netherrack`);
  e.custom({
    type: `appliedenergistics2:grinder`,
    input: Ingredient.of(`#forge:flour_plants`).toJson(),
    result: {
      primary: Item.of(`pamhc2foodcore:flouritem`).toResultJson()
    },
    turns: 8
  });
  e.custom({
    type: `cyclic:solidifier`,
    inputTop: Ingredient.of(`woot:light_blue_dyeplate`).toJson(),
    inputMiddle: Ingredient.of(`#minecraft:saplings`).toJson(),
    inputBottom: Ingredient.of(`woot:light_blue_dyeplate`).toJson(),
    mix: {
      fluid: `cyclic:slime`,
      count: 1000
    },
    result: Item.of(`integrateddynamics:menril_sapling`).toResultJson()
  });
  e.shaped(`computercraft:turtle_advanced`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/gold`,
    C: `computercraft:computer_advanced`,
    A: `#forge:ingots/allthemodium`
  });
  e.shaped(`computercraft:turtle_normal`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/iron`,
    C: `computercraft:computer_normal`,
    A: `#forge:ingots/allthemodium`
  });
  e.shaped(`minecraft:totem_of_undying`, [
    ` E `,
    `GVG`,
    ` G `
  ], {
    E: `compressium:emerald_3`,
    G: `#forge:storage_blocks/gold`,
    V: `minecraft:villager_spawn_egg`
  });
  e.smelting(Item.of(`appliedenergistics2:certus_quartz_crystal`), `#forge:ores/certus_quartz`).xp(1);
  e.smelting(Item.of(`minecraft:glass`), `#forge:sand`).xp(0.1);
  e.shapeless(Item.of(`minecraft:clay_ball`, 4), `minecraft:clay`);
  e.shapeless(Item.of(`minecraft:quartz`, 4), `minecraft:quartz_block`);
  e.shaped(`appliedenergistics2:silicon_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:silicon_essence`
  });
  e.shaped(`appliedenergistics2:calculation_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:certus_quartz_essence`
  });
  e.shaped(`appliedenergistics2:engineering_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:diamond_essence`
  });
  e.shaped(`appliedenergistics2:logic_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:gold_essence`
  });
  e.shaped(`minecraft:hopper`, [
    `ILI`,
    `ILI`,
    ` I `
  ], {
    L: `#minecraft:logs`,
    I: `#forge:ingots/iron`
  });
  e.shaped(Item.of(`minecraft:stick`, 16), [
    `L`,
    `L`
  ], {
    L: `#minecraft:logs`
  });
  /*
  e.shaped(`minecraft:water_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:water_honeycomb`,
    B: `minecraft:bucket`
  });
  e.shaped(`minecraft:lava_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:lava_honeycomb`,
    B: `minecraft:bucket`
  });
  */
  e.shaped(Item.of(`minecraft:chest`, 4), [
    `LLL`,
    `L L`,
    `LLL`
  ], {
    L: `#minecraft:logs`
  });
  e.custom({
    type: `industrialforegoing:dissolution_chamber`,
    input: [
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson(),
      Ingredient.of(`#minecraft:planks`).toJson()
    ],
    inputFluid: `{FluidName:\"immersiveengineering:creosote\",Amount:1000}`,
    processingTime: 1,
    output: Item.of(`immersiveengineering:treated_wood_horizontal`, 8).toResultJson()
  });

  mekCrush(Item.of(`minecraft:blaze_powder`, 4), `#forge:rods/blaze`);
  mekCrush(Item.of(`minecraft:quartz`, 4), `#forge:storage_blocks/quartz`);
  mekEnrich(Item.of(`minecraft:blaze_rod`), [Item.of(`minecraft:blaze_powder`, 6)]);
  mekEnrich(Item.of(`powah:uraninite`, 2), `powah:uraninite_ore_poor`);
  mekEnrich(Item.of(`powah:uraninite`, 4), `powah:uraninite_ore`);
  mekEnrich(Item.of(`powah:uraninite`, 8), `powah:uraninite_ore_dense`);

  //Creative recipes
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
  e.shapeless(Item.of(`botania:mana_tablet`, {
    mana: 500000,
    creative: 1
  }), [`botania:creative_pool`]);
  e.shapeless(`botania:creative_pool`, [Item.of(`botania:mana_tablet`, {
    mana: 500000,
    creative: 1
  })]);
  pressure([{
      type: `pneumaticcraft:stacked_item`,
      item: `mysticalagradditions:insanium_block`,
      count: 16
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:pellets/antimatter`,
      count: 16
    },
    {
      type: `pneumaticcraft:stacked_item`,
      item: `botania:gaia_ingot`,
      count: 8
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/allthemodium`,
      count: 4
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/vibranium`,
      count: 4
    },
    {
      type: `pneumaticcraft:stacked_item`,
      tag: `forge:storage_blocks/unobtainium`,
      count: 4
    },
    /*
      {
        type: `pneumaticcraft:stacked_item`,
        item: `elementalcraft:purerock`,
        count: 8
      }, */
    {
      type: `pneumaticcraft:stacked_item`,
      item: `xreliquary:angelheart_vial`,
      count: 12
    }
    /* ,
      {
        type: `pneumaticcraft:stacked_item`,
        item: `mahoutsukai:fae_essence`,
        count: 1
      } */
  ], `mysticalagradditions:creative_essence`, 1, 4.9);
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
  e.shaped(`create:creative_motor`, [
    `CCC`,
    `FEA`,
    `CCC`
  ], {
    C: `mysticalagradditions:creative_essence`,
    A: `create:shaft`,
    E: `create:furnace_engine`,
    F: `create:brass_casing`
  });
  /*
  e.shaped(`rats:rat_upgrade_creative`, [
    `HUH`,
    `CCC`,
    `HUH`
  ], {
    C: `mysticalagradditions:creative_essence`,
    H: `rats:creative_cheese`,
    U: `rats:rat_upgrade_nonbeliever`
  });
  */

  //SGear salvaging
  const salvage = (item, results) => {
    e.custom({
      type: `silentgear:salvaging`,
      ingredient: Ingredient.of(item).toJson(),
      results: results
    });
  };
  salvage(`minecraft:anvil`, [
    Item.of(`minecraft:iron_ingot`, 31).toResultJson()
  ]);
  salvage(`minecraft:diamond_horse_armor`, [
    Item.of(`minecraft:diamond`, 7).toResultJson()
  ]);
  salvage(`minecraft:golden_horse_armor`, [
    Item.of(`minecraft:gold_ingot`, 7).toResultJson()
  ]);
  salvage(`minecraft:iron_horse_armor`, [
    Item.of(`minecraft:iron_ingot`, 7).toResultJson()
  ]);
  salvage(`minecraft:leather_horse_armor`, [
    Item.of(`minecraft:leather`, 7).toResultJson()
  ]);
  salvage(`minecraft:minecart`, [
    Item.of(`minecraft:iron_ingot`, 5).toResultJson()
  ]);
  salvage(`minecraft:saddle`, [
    Item.of(`minecraft:leather`, 5).toResultJson(),
    Item.of(`minecraft:iron_nugget`, 2).toResultJson()
  ]);

  //Pedestal stuff
  var coinRF = [
    `import`,
    `export`,
    `crusher`,
    `smelter`,
    `sawmill`,
    `quarry`,
    `quarryb`
  ];
  var coinXP = [
    `dropper`,
    `magnet`
  ];

  coinRF.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`#forge:storage_blocks/redstone`).toJson()
      ],
      result: Item.of(`pedestals:coin/rf${name}`).toResultJson()
    });
  });
  coinXP.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`minecraft:experience_bottle`).toJson()
      ],
      result: Item.of(`pedestals:coin/xp${name}`).toResultJson()
    });
  });

  e.remove({
    output: `pedestals:dustflour`
  });

  const pedestalCrush = (result, count, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };

  const pedestalSaw = (result, count, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_sawing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };
  const cobbleGen = (result, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_cobblegen`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    });
  };
  const cobbleGenSilk = (result, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_cobblegensilk`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    });
  };
  cobbleGen(`mysticalagriculture:soulstone_cobble`, `mysticalagriculture:soulium_block`);
  cobbleGenSilk(`mysticalagriculture:soulstone`, `mysticalagriculture:soulium_block`);
  cobbleGenSilk(`astralsorcery:marble_raw`, `enviromats:marble`);
  e.remove({
    id: `appliedenergistics2:grinder/flour`
  });
  var pedSawRemove = [
    `#minecraft:signs`,
    `#minecraft:wooden_stairs`,
    `#minecraft:wooden_slabs`,
    `#minecraft:wooden_trapdoors`,
    `#minecraft:wooden_pressure_plates`,
    `minecraft:stick`,
  ];
  pedSawRemove.forEach(pedsr => {
    e.remove({
      output: pedsr,
      type: `pedestals:pedestal_sawing`
    });
  });
  pedestalCrush(`pamhc2foodcore:flouritem`, 1, `#forge:flour_plants`);
  pedestalCrush(`appliedenergistics2:fluix_dust`, 1, `appliedenergistics2:fluix_crystal`);
  pedestalCrush(`appliedenergistics2:certus_quartz_dust`, 1, `#forge:gems/certus_quartz`);
  pedestalCrush(`thermal:quartz_dust`, 1, `#forge:gems/quartz`);
  pedestalCrush(`mekanism:dust_fluorite`, 1, `#forge:gems/fluorite`);
  pedestalSaw(`thermal:sawdust`, 1, `#forge:rods/wooden`);
  pedestalSaw(`minecraft:stick`, 4, `#minecraft:planks`);
  pedestalSaw(`minecraft:stick`, 2, `#minecraft:wooden_slabs`);
  //Exrastorage fixes
  e.remove({
    mod: `extrastorage`
  });

  e.shaped(`extrastorage:iron_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/iron`,
    P: `refinedstorage:improved_processor`,
    C: `#refinedstorage:crafter`
  });
  e.shaped(`extrastorage:gold_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/gold`,
    P: `refinedstorage:advanced_processor`,
    C: `extrastorage:iron_crafter`
  });
  e.shaped(`extrastorage:diamond_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/diamond`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:gold_crafter`
  });
  e.shaped(`extrastorage:netherite_crafter`, [
    `BBB`,
    `PCP`,
    `BBB`
  ], {
    B: `#forge:ingots/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:diamond_crafter`
  });
  e.shaped(`extrastorage:advanced_exporter`, [
    ` T `,
    `PCP`,
    ` T `
  ], {
    T: `minecraft:redstone_torch`,
    P: `refinedstorage:improved_processor`,
    C: `refinedstorage:exporter`
  });
  e.shaped(`extrastorage:advanced_importer`, [
    ` T `,
    `PCP`,
    ` T `
  ], {
    T: `minecraft:redstone_torch`,
    P: `refinedstorage:improved_processor`,
    C: `refinedstorage:importer`
  });
  //NBT Resets
  var resetNBT = [
    `rftoolsbase:filter_module`,
    `rftoolspower:dimensionalcell_simple`,
    `rftoolspower:dimensionalcell`,
    `rftoolspower:dimensionalcell_advanced`,
    `rftoolspower:powercell_card`,
    `rftoolsutility:syringe`
  ];
  resetNBT.forEach(reset => {
    e.shapeless(Item.of(reset), reset);
  });

  var tiersPowah = [
    `starter`,
    `basic`,
    `hardened`,
    `blazing`,
    `niotic`,
    `spirited`,
    `nitro`
  ];
  var typesPowah = [
    `energy_cell`,
    `reactor`,
    `furnator`,
    `magmator`,
    `thermo_generator`,
    `solar_panel`,
    `player_transmitter`,
    `energy_hopper`,
    `energy_discharger`,
    `energizing_rod`
  ];
  typesPowah.forEach(type => {
    tiersPowah.forEach(tier => {
      e.shapeless(Item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`);
    });
  });
  var solars = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    /*
    `custom_allthemodium`,
    `custom_vibranium`,
    `custom_unobtainium`
    */
  ];
  solars.forEach(solar => {
    e.shapeless(Item.of(`solarflux:sp_${solar}`), `solarflux:sp_${solar}`);
  });
  //Smithing stuff
  const smithing = (result, base, addition) => {
    e.recipes.minecraft.smithing({
      base: Ingredient.of(base).toJson(),
      addition: Ingredient.of(addition).toJson(),
      result: Item.of(result).toResultJson()
    });
  };
  smithing(`metalbarrels:wood_to_netherite`, `metalbarrels:wood_to_obsidian`, `#forge:ingots/netherite`);

  //Astral Recipes
  e.custom({
    type: `astralsorcery:block_transmutation`,
    input: [{
      block: `minecraft:spruce_sapling`
    }],
    output: {
      block: `integrateddynamics:menril_sapling`
    },
    starlight: 100.0
  });

  const astralAltar = (tier, duration, starlight, pattern, items, result) => {
    e.custom({
      type: `astralsorcery:altar`,
      altar_type: tier,
      duration: duration,
      starlight: starlight,
      pattern: pattern,
      key: items,
      output: [Item.of(result).toResultJson()],
      effects: [
        `astralsorcery:built_in_effect_discovery_central_beam`
      ]
    });
  };

  astralAltar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:ingots/iron`).toJson(),
    2: Ingredient.of(`#forge:dusts/glowstone`).toJson(),
    3: Ingredient.of(`minecraft:clay_ball`).toJson(),
    4: Ingredient.of(`#forge:leather`).toJson()
  }, `astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:armara`
    }
  });
  astralAltar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#minecraft:saplings`).toJson(),
    2: Ingredient.of(`minecraft:sugar_cane`).toJson(),
    3: Ingredient.of(`#minecraft:seeds`).toJson(),
    4: Ingredient.of(`#astralsorcery:stardust`).toJson()
  }, `astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:aevitas`
    }
  });
  astralAltar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:feathers`).toJson(),
    2: Ingredient.of(`#minecraft:fishes`).toJson(),
    3: Ingredient.of(`#forge:string`).toJson(),
    4: Ingredient.of(`#forge:sugar/sugar`).toJson()
  }, `astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:vicio`
    }
  });
  astralAltar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`minecraft:flint`).toJson(),
    2: Ingredient.of(`#forge:dusts/redstone`).toJson(),
    3: Ingredient.of(`#minecraft:arrows`).toJson(),
    4: Ingredient.of(`#forge:ingots/iron`).toJson()
  }, `astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:dicidia`
    }
  });
  astralAltar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:cobblestone`).toJson(),
    2: Ingredient.of(`minecraft:tnt`).toJson(),
    3: Ingredient.of(`#forge:gunpowder`).toJson(),
    4: Ingredient.of(`minecraft:flint`).toJson()
  }, `astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:evorsio`
    }
  });

  //Jumbo Furnace
  /*
  const jumbo = (ingredients, result, xp) => {
    e.custom({
      type: `jumbofurnace:jumbo_smelting`,
      ingredients: ingredients,
      result: Item.of(result).toResultJson(),
      experience: xp
    });
  };
  jumbo([
      Ingredient.of(`storagedrawers:emerald_storage_upgrade`, 16).toJson(),
      Ingredient.of(`#forge:ingots/unobtainium`, 2).toJson(),
      Ingredient.of(`#forge:ingots/allthemodium`, 4).toJson(),
      Ingredient.of(`#forge:ender_pearls`, 16).toJson()
    ],
    `storagedrawers:creative_storage_upgrade`, 5
  );
  */
  //Quark marble to Astral Sorcery Marble
  /*
  e.custom({
    type: `astralsorcery:block_transmutation`,
    input: {
      block: `quark:marble`,
    },
    output: {
      block: `astralsorcery:marble_raw`
    },
    starlight: 200.0
  });

  e.custom({
    type: `astralsorcery:infuser`,
    fluidInput: `astralsorcery:liquid_starlight`,
    input: {
      item: `quark:marble`
    },
    output: {
      item: `astralsorcery:marble_raw`,
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
    output: `xreliquary:fertile_lily_pad`,
    type: `minecraft:crafting_shapeless`
  });
  e.shaped(`xreliquary:fertile_lily_pad`, [
    `ESE`,
    `FLF`,
    `ESE`
  ], {
    E: `xreliquary:fertile_essence`,
    S: `mysticalagriculture:supremium_growth_accelerator`,
    L: `minecraft:lily_pad`,
    F: `mysticalagriculture:mystical_fertilizer`
  });

  /*
  //QuarryPlus
  e.shaped(`quarryplus:solidquarry`, [
    `FFF`,
    `DGD`,
    `AAA`
  ], {
    F: `minecraft:furnace`,
    D: `minecraft:diamond_pickaxe`,
    G: `#forge:storage_blocks/gold`,
    A: `#forge:nuggets/allthemodium`
  });
  e.shaped(`quarryplus:workbenchplus`, [
    `III`,
    `GDG`,
    `AAA`
  ], {
    I: `#forge:storage_blocks/iron`,
    G: `#forge:storage_blocks/gold`,
    D: `#forge:storage_blocks/diamond`,
    A: `#forge:nuggets/allthemodium`
  });
  */

  //Mining Gadgets
  e.shaped(`mininggadgets:upgrade_empty`, [
    `RAL`,
    `DGD`,
    `LAR`
  ], {
    L: `#forge:storage_blocks/lapis`,
    R: `#forge:storage_blocks/redstone`,
    D: `#forge:gems/diamond`,
    A: `#forge:nuggets/allthemodium`,
    G: `minecraft:glass_pane`
  });

  //Mystical Agriculture
  e.shaped(`mysticalagriculture:unattuned_augment`, [
    `PMP`,
    `AMA`,
    `PMP`
  ], {
    P: `mysticalagriculture:prosperity_ingot`,
    M: `botania:manasteel_ingot`,
    A: `#forge:nuggets/allthemodium`
  });

  //Mekanism
  e.shaped(`mekanism:digital_miner`, [
    `AUA`,
    `LRL`,
    `TST`
  ], {
    L: `mekanism:logistical_sorter`,
    R: `mekanism:robit`,
    T: `mekanism:teleportation_core`,
    A: `#mekanism:alloys/atomic`,
    S: `mekanism:steel_casing`,
    U: `#forge:ingots/unobtainium`
  });
  e.shaped(`mekanism:atomic_disassembler`, [
    `RER`,
    `RUR`,
    ` V `
  ], {
    E: `mekanism:energy_tablet`,
    R: `#mekanism:alloys/reinforced`,
    U: `#forge:circuits/ultimate`,
    V: `#forge:ingots/vibranium`
  });
  e.shaped(`mekanismgenerators:wind_generator`, [
    ` O `,
    `OCO`,
    `EBE`
  ], {
    E: `mekanism:energy_tablet`,
    C: `mekanismgenerators:electromagnetic_coil`,
    B: `#forge:circuits/basic`,
    O: `#forge:ingots/osmium`
  });

  /* //Jetpacks

  e.shaped(`ironjetpacks:diamond_cell`, [
    ` R `,
    `TCT`,
    ` R `
  ], {
    R: `#forge:dusts/redstone`,
    C: `ironjetpacks:advanced_coil`,
    T: `#forge:gems/diamond`
  });
  e.shaped(`ironjetpacks:diamond_thruster`, [
    `TAT`,
    `ACA`,
    `TFT`
  ], {
    F: `minecraft:furnace`,
    A: `ironjetpacks:advanced_coil`,
    C: `ironjetpacks:diamond_cell`,
    T: `#forge:gems/diamond`
  });
  e.shaped(`ironjetpacks:diamond_capacitor`, [
    `RCR`,
    `RCR`,
    `RCR`
  ], {
    R: `#forge:gems/diamond`,
    C: `ironjetpacks:diamond_cell`
  });
  e.shaped(`ironjetpacks:diamond_jetpack`, [
    `DCD`,
    `DJD`,
    `TRT`
  ], {
    D: `#forge:gems/diamond`,
    C: `ironjetpacks:diamond_capacitor`,
    J: [`ironjetpacks:steel_jetpack`, `ironjetpacks:electrum_jetpack`, `ironjetpacks:invar_jetpack`],
    T: `ironjetpacks:diamond_thruster`,
    R: `angelring:itemdiamondring`
  });
  e.shaped(`ironjetpacks:platinum_cell`, [
    ` R `,
    `TCT`,
    ` R `
  ], {
    R: `#forge:dusts/redstone`,
    C: `ironjetpacks:advanced_coil`,
    T: `#forge:ingots/platinum`
  });
  e.shaped(`ironjetpacks:platinum_thruster`, [
    `TAT`,
    `ACA`,
    `TFT`
  ], {
    F: `minecraft:furnace`,
    A: `ironjetpacks:advanced_coil`,
    C: `ironjetpacks:platinum_cell`,
    T: `#forge:ingots/platinum`
  });
  e.shaped(`ironjetpacks:platinum_capacitor`, [
    `RCR`,
    `RCR`,
    `RCR`
  ], {
    R: `#forge:ingots/platinum`,
    C: `ironjetpacks:platinum_cell`
  });
  e.shaped(`ironjetpacks:platinum_jetpack`, [
    `PCP`,
    `PJP`,
    `TRT`
  ], {
    P: `#forge:ingots/platinum`,
    C: `ironjetpacks:platinum_capacitor`,
    J: [`ironjetpacks:steel_jetpack`, `ironjetpacks:electrum_jetpack`, `ironjetpacks:invar_jetpack`],
    T: `ironjetpacks:platinum_thruster`,
    R: `angelring:itemdiamondring`
  }); */

  //Foods
  e.shaped(`pamhc2foodcore:fruitpunchitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `#forge:fruits`,
    B: `pamhc2foodcore:applejuiceitem`
  });
  e.shaped(`pamhc2foodcore:applejuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:apple`,
    B: `minecraft:glass_bottle`
  });
  e.shaped(`pamhc2foodcore:melonjuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:melon_slice`,
    B: `minecraft:glass_bottle`
  });
  e.shaped(`pamhc2foodcore:sweetberryjuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:sweet_berries`,
    B: `minecraft:glass_bottle`
  });
  e.shaped(`pamhc2foodcore:p8juiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `#forge:vegetables`,
    B: `minecraft:glass_bottle`
  });

  //Angel Ring
  e.shaped(`angelring:itemdiamondring`, [
    `DND`,
    `VEU`,
    `DAD`
  ], {
    D: `#forge:storage_blocks/diamond`,
    N: `#forge:storage_blocks/netherite`,
    V: `#forge:storage_blocks/vibranium`,
    U: `#forge:storage_blocks/unobtainium`,
    A: `#forge:storage_blocks/allthemodium`,
    E: `minecraft:elytra`
  });
  e.shaped(`angelring:itemring`, [
    `CAC`,
    `ARA`,
    `DGD`
  ], {
    C: `botania:pixie_dust`,
    A: `#forge:storage_blocks/terrasteel`,
    R: `angelring:itemdiamondring`,
    D: `#forge:nether_stars`,
    G: `botania:gaia_ingot`
  });

  //Other recipes
  e.shaped(Item.of(`forbidden_arcanus:iron_chain`, 3), [
    `N  `,
    ` I `,
    `  N`
  ], {
    N: `#forge:nuggets/iron`,
    I: `#forge:ingots/iron`
  });
  e.shaped(`entangled:block`, [
    `UEU`,
    `ECE`,
    `UEU`
  ], {
    U: `#forge:ingots/unobtainium`,
    E: `#forge:ender_pearls`,
    C: `minecraft:ender_chest`
  });
  e.shaped(`entangled:item`, [
    ` EC`,
    ` UE`,
    `U  `
  ], {
    U: `#forge:ingots/unobtainium`,
    E: `#forge:ender_pearls`,
    C: `minecraft:ender_chest`
  });

  //Extra Disks
  const makeDisk = (disk, part, type, material, mid) => {
    const processor = type === `advanced` ? `refinedstorage:${type}_processor` : `extradisks:${type}_processor`;
    e.shaped(`${disk}_storage_part`, [
      `121`,
      `343`,
      `131`
    ], {
      1: processor,
      2: material,
      3: `${part}_storage_part`,
      4: mid
    });
  };
  makeDisk(`refinedstorage:4096k_fluid`, `refinedstorage:1024k_fluid`, `advanced`, `#forge:nuggets/allthemodium`, `minecraft:bucket`);
  makeDisk(`extradisks:16384k_fluid`, `refinedstorage:4096k_fluid`, `advanced`, `#forge:ingots/allthemodium`, `minecraft:bucket`);
  makeDisk(`extradisks:65536k_fluid`, `extradisks:16384k_fluid`, `advanced`, `#forge:ingots/allthemodium`, `minecraft:bucket`);
  makeDisk(`extradisks:262144k_fluid`, `extradisks:65536k_fluid`, `withering`, `#forge:ingots/vibranium`, `minecraft:bucket`);
  makeDisk(`extradisks:1048576k_fluid`, `extradisks:262144k_fluid`, `withering`, `#forge:ingots/unobtainium`, `minecraft:bucket`);
  makeDisk(`extradisks:infinite_fluid`, `extradisks:1048576k_fluid`, `withering`, `#forge:ingots/unobtainium`, `minecraft:bucket`);
  makeDisk(`extradisks:4096k`, `extradisks:1024k`, `advanced`, `#forge:nuggets/allthemodium`, `#forge:dusts/redstone`);
  makeDisk(`extradisks:16384k`, `extradisks:4096k`, `advanced`, `#forge:ingots/allthemodium`, `#forge:dusts/redstone`);
  makeDisk(`extradisks:65536k`, `extradisks:16384k`, `advanced`, `#forge:ingots/allthemodium`, `#forge:dusts/redstone`);
  makeDisk(`extradisks:262144k`, `extradisks:65536k`, `withering`, `#forge:ingots/vibranium`, `#forge:dusts/redstone`);
  makeDisk(`extradisks:1048576k`, `extradisks:262144k`, `withering`, `#forge:ingots/unobtainium`, `#forge:dusts/redstone`);
  makeDisk(`extradisks:infinite`, `extradisks:1048576k`, `withering`, `#forge:ingots/unobtainium`, `#forge:dusts/redstone`);

  /*
  //Quark
  e.shapeless(`minecraft:chest`, `#forge:chests/wooden`);
  e.shapeless(`quark:oak_chest`, [`minecraft:oak_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:dark_oak_chest`, [`minecraft:dark_oak_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:acacia_chest`, [`minecraft:acacia_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:spruce_chest`, [`minecraft:spruce_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:birch_chest`, [`minecraft:birch_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:jungle_chest`, [`minecraft:jungle_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:warped_chest`, [`minecraft:warped_planks`, `#forge:chests/wooden`]);
  e.shapeless(`quark:crimson_chest`, [`minecraft:crimson_planks`, `#forge:chests/wooden`]);
  */

  //RFTools
  e.shaped(`rftoolsbuilder:builder`, [
    `aea`,
    `rmr`,
    `ara`
  ], {
    a: `#forge:nuggets/allthemodium`,
    e: `#forge:ender_pearls`,
    r: `#forge:storage_blocks/redstone`,
    m: `rftoolsbase:machine_frame`
  });

  //Astral Sorcery
  e.shaped(`astralsorcery:altar_discovery`, [
    `MSM`,
    ` P `,
    `PPP`
  ], {
    M: `astralsorcery:marble_raw`,
    S: `astralsorcery:black_marble_raw`,
    P: `#minecraft:planks`
  });
  /*
  e.custom({
    type: `immersiveengineering:shaped_fluid`,
    pattern: [
      `www`,
      `wbw`,
      `www`
    ],
    key: {
      w: {
        tag: `minecraft:planks`
      },
      b: {
        tag: `forge:creosote`,
        amount: 1000,
        type: `immersiveengineering:fluid`
      }
    },
    result: {
      item: `immersiveengineering:treated_wood_horizontal`,
      count: 8
    }
  });
  e.custom({
    type: `immersiveengineering:shapeless_fluid`,
    ingredients: [{
        tag: `forge:dusts/wood`
      },
      {
        tag: `forge:dusts/wood`
      },
      {
        tag: `forge:dusts/wood`
      },
      {
        tag: `forge:dusts/wood`
      },
      {
        tag: `minecraft:water`,
        amount: 1000,
        type: `immersiveengineering:fluid`
      }
    ],
    result: {
      item: `minecraft:paper`,
      count: 2
    }
  });
  */

  //Thermal
  e.recipes.thermal.sawmill([Item.of(`integrateddynamics:menril_planks`, 6), Item.of(`thermal:sawdust`).withChance(0.25)], `#integrateddynamics:menril_logs`).energy(1000);

  //Create

  //Blood Magic
  e.recipes.bloodmagic.altar(`integrateddynamics:menril_sapling`, `minecraft:spruce_sapling`).upgradeLevel(2);
});