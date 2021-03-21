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
  e.shaped(`minecraft:elytra`, [
    `msm`,
    `mbm`,
    `m m`
  ], {
    m: `minecraft:phantom_membrane`,
    s: `quark:dragon_scale`,
    b: `ironjetpacks:strap`
  });
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
    inputTop: Ingredient.of(`integrateddynamics:menril_berries`).toJson(),
    inputMiddle: Ingredient.of(`minecraft:spruce_sapling`).toJson(),
    inputBottom: Ingredient.of(`integrateddynamics:menril_berries`).toJson(),
    mix: {
      fluid: `cyclic:slime`,
      count: 200
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
  e.shapeless(Item.of(`minecraft:clay_ball`, 4), `#forge:storage_blocks/clay`);
  e.shapeless(Item.of(`minecraft:quartz`, 4), `#forge:storage_blocks/quartz`);
  e.shapeless(Item.of(`minecraft:glowstone_dust`, 4), `#forge:glowstone`);
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
  e.shaped(Item.of(`astralsorcery:marble_raw`, 8), [
    `III`,
    `ILI`,
    `III`
  ], {
    L: `minecraft:bone_meal`,
    I: `minecraft:stone`
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
  e.shaped(`pipez:infinity_upgrade`, [
    `CIC`,
    `EUG`,
    `CTC`
  ], {
    C: `mysticalagradditions:nether_star_crux`,
    I: `industrialforegoing:supreme_black_hole_unit`,
    E: [`mekanism:ultimate_induction_provider`, `powah:energy_cell_nitro`],
    U: `pipez:ultimate_upgrade`,
    G: `mekanism:ultimate_chemical_tank`,
    T: `industrialforegoing:supreme_black_hole_tank`
  });
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

  //Quark
  e.shapeless(`minecraft:chest`, `#forge:chests/wooden`);
  e.shapeless(`minecraft:trapped_chest`, `#forge:chests/trapped`);

  const quarkWoodTypes = [`oak`, `dark_oak`, `acacia`, `spruce`, `birch`, `jungle`, `warped`, `crimson`];
  quarkWoodTypes.forEach(wood => {
    e.shapeless(`quark:${wood}_chest`, [`minecraft:${wood}_planks`, `#forge:chests/wooden`]);
    e.shapeless(`quark:${wood}_trapped_chest`, [`quark:${wood}_chest`, `minecraft:tripwire_hook`]);
  });

  const buildQuarkChest = (type, material) => {
    e.shaped(`quark:${type}_chest`, [
      `aaa`,
      `a a`,
      `aaa`
    ], {
      a: material
    });
    e.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, `minecraft:tripwire_hook`]);
  };

  buildQuarkChest(`nether_brick`, `minecraft:nether_bricks`);
  buildQuarkChest(`prismarine`, `minecraft:prismarine`);
  buildQuarkChest(`mushroom`, `#forge:mushroom_caps`);
  buildQuarkChest(`purpur`, `minecraft:purpur_block`);

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
  e.recipes.thermal.pulverizer([`mekanism:dust_coal`, Item.of(`thermal:sulfur_dust`).withChance(0.25)], `minecraft:coal`);
  e.recipes.thermal.pulverizer(`mekanism:dust_charcoal`, `#forge:charcoal`);
  e.recipes.thermal.smelter(`mekanism:ingot_steel`, [Item.of(`#forge:dusts/coal`, 2), `#forge:ingots/iron`]);

  //Create
  e.recipes.create.mixing(`mekanism:ingot_steel`, [`#forge:dusts/coal`, `#forge:dusts/coal`, `#forge:ingots/iron`]).heated();

  //Blood Magic
  e.recipes.bloodmagic.altar(`integrateddynamics:menril_sapling`, `minecraft:spruce_sapling`).upgradeLevel(2);

  //Functions
  const modifyShaped = (result, count, pattern, ingridients) => {
    e.remove({
      output: result,
      type: `minecraft:crafting_shaped`
    });
    e.shaped(Item.of(result, count),
      pattern,
      ingridients
    );
  };

  const modifyShapeless = (result, count, ingridients) => {
    e.remove({
      output: result,
      type: `minecraft:crafting_shapeless`
    });
    e.shapeless(Item.of(result, count), ingridients);
  };

  const modifySmelt = (result, ingridients) => {
    e.remove({
      output: result,
      type: `minecraft:smelting`
    });
    e.smelting(result, ingridients);
  };

  /*
  e.replaceOutput(`#forge:cheese`, `rats:cheese`);
  */

  //Modified recipes
  /*
  const combBlock = `#resourcefulbees:resourceful_honeycomb_block`;
  modifyShaped(`resourcefulbees:t1_apiary`, 1, [
    `CHC`,
    `HSH`,
    `CHC`
  ], {
    C: combBlock,
    H: `resourcefulbees:t4_beehive`,
    S: `#forge:nether_stars`
  });
  modifyShaped(`resourcefulbees:t2_apiary`, 1, [
    `CHC`,
    `HSH`,
    `CHC`
  ], {
    C: combBlock,
    H: `resourcefulbees:t1_apiary`,
    S: `#forge:nether_stars`
  });
  modifyShaped(`resourcefulbees:t3_apiary`, 1, [
    `SHS`,
    `HCH`,
    `SHS`
  ], {
    C: combBlock,
    H: `resourcefulbees:t2_apiary`,
    S: `#forge:nether_stars`
  });
  modifyShaped(`resourcefulbees:t4_apiary`, 1, [
    `SHS`,
    `HCH`,
    `SHS`
  ], {
    C: combBlock,
    H: `resourcefulbees:t3_apiary`,
    S: `#forge:nether_stars`
  });
  */
  modifyShaped(`pipez:universal_pipe`, 8, [
    `123`,
    `4A4`,
    `321`
  ], {
    1: `pipez:item_pipe`,
    2: `pipez:energy_pipe`,
    3: `pipez:fluid_pipe`,
    4: `pipez:gas_pipe`,
    A: `#forge:ingots/iron`
  });
  modifyShaped(`immersiveengineering:sawdust`, 27, [
    `SSS`
  ], {
    S: `thermal:sawdust_block`
  });
  modifyShapeless(`botania:lexicon`, 1, [`#minecraft:flowers`, `minecraft:book`]);
  modifyShaped(`buildinggadgets:gadget_exchanging`, 1, [
    `iri`,
    `dld`,
    `iai`
  ], {
    i: `#forge:ingots/iron`,
    r: `#forge:dusts/redstone`,
    l: `#forge:gems/lapis`,
    d: `#forge:gems/diamond`,
    a: `#forge:nuggets/allthemodium`
  }); //gated since it can change modium ores easily
  modifyShaped(`minecraft:honeycomb_block`, 1, [
    `CCC`,
    `CCC`,
    `CCC`
  ], {
    C: `minecraft:honeycomb`
  });
  e.shapeless(Item.of(`minecraft:honeycomb`, 9), `minecraft:honeycomb_block`);
  modifyShaped(`solarflux:mirror`, 3, [
    `GGG`,
    `III`
  ], {
    G: `#forge:glass`,
    I: `#forge:ingots`
  });
  modifyShaped(`solarflux:sp_1`, 1, [
    `MMM`,
    `ILI`,
    `III`
  ], {
    M: `solarflux:mirror`,
    L: `#forge:storage_blocks/lapis`,
    I: `#forge:ingots/iron`
  });
  modifyShaped(`minecraft:sticky_piston`, 1, [
    `B`,
    `P`
  ], {
    B: `#forge:slimeballs`,
    P: `minecraft:piston`
  });
  modifyShaped(`mekanismgenerators:solar_panel`, 1, [
    `PPP`,
    `RIR`,
    `OOO`
  ], {
    P: `powah:solar_panel_starter`,
    R: `#forge:dusts/redstone`,
    I: `mekanism:alloy_infused`,
    O: `#forge:ingots/osmium`
  });
  /*
  modifyShaped(`engineerstools:crushing_hammer`, 1, [
    `RI `,
    `BS `,
    `  S`
  ], {
    R: `#forge:string`,
    I: `#forge:ingots/iron`,
    B: `#forge:storage_blocks/iron`,
    S: `#forge:rods/wooden`
  });
  */
  modifyShaped(`forbidden_arcanus:candle_lamp`, 1, [
    `NDN`,
    `GAG`,
    `NDN`
  ], {
    N: `forbidden_arcanus:arcane_gold_nugget`,
    A: `forbidden_arcanus:candle`,
    D: `forbidden_arcanus:darkstone`,
    G: `forbidden_arcanus:arcane_gold_ingot`
  });
  modifyShaped(`torchmaster:megatorch`, 1, [
    `TTT`,
    `GLG`,
    `DLD`
  ], {
    T: `xreliquary:interdiction_torch`,
    G: `#forge:storage_blocks/gold`,
    D: `#forge:storage_blocks/diamond`,
    L: `#minecraft:logs`
  });
  modifyShaped(`immersiveengineering:cloche`, 1, [
    `GEG`,
    `G G`,
    `TRT`
  ], {
    G: `#forge:glass`,
    E: `immersiveengineering:electron_tube`,
    T: `#forge:treated_wood`,
    R: `mekanism:resistive_heater`
  });
  /*
  e.remove({
    id: `bagofyurting:bag_of_yurting`
  });
  e.shaped(Item.of(`bagofyurting:bag_of_yurting`, 1), [
    `WSW`,
    `WEW`,
    `WWW`
  ], {
    W: `#minecraft:wool`,
    E: `#forge:ender_pearls`,
    S: `#forge:string`
  });
  */
  var ingots = [
    `#forge:ingots/gold`,
    `#forge:ingots/iron`,
    `#forge:ingots/copper`,
    `#forge:ingots/tin`
  ];
  modifyShapeless(`appliedenergistics2:cable_anchor`, 3, [ingots, `#appliedenergistics2:knife`]);
  modifyShapeless(`appliedenergistics2:fluix_covered_cable`, 1, [`#minecraft:wool`, `appliedenergistics2:fluix_glass_cable`]);
  modifyShapeless(`appliedenergistics2:crafting_card`, 1, [`minecraft:crafting_table`, `appliedenergistics2:basic_card`]);
  modifyShapeless(`appliedenergistics2:fuzzy_card`, 1, [`#minecraft:wool`, `appliedenergistics2:advanced_card`]);
  modifyShapeless(`appliedenergistics2:crafting_terminal`, 1, [`appliedenergistics2:terminal`, `minecraft:crafting_table`, `appliedenergistics2:calculation_processor`]);
  modifyShaped(`appliedenergistics2:quartz_glass`, 4, [
    `GDG`,
    `DGD`,
    `GDG`
  ], {
    G: `#appliedenergistics2:dusts/quartz`,
    D: `#forge:glass`
  });
  modifyShaped(`appliedenergistics2:quartz_fiber`, 3, [
    `DDD`,
    `GGG`,
    `DDD`
  ], {
    G: `#appliedenergistics2:dusts/quartz`,
    D: `#forge:glass`
  });
  modifyShaped(`appliedenergistics2:chest`, 1, [
    `GTG`,
    `C C`,
    `IFI`
  ], {
    G: `#forge:glass`,
    T: `appliedenergistics2:terminal`,
    C: `appliedenergistics2:fluix_glass_cable`,
    I: `#forge:ingots/iron`,
    F: `#appliedenergistics2:crystals/fluix`
  });
  modifyShaped(`appliedenergistics2:condenser`, 1, [
    `IGI`,
    `GDG`,
    `IGI`
  ], {
    G: `#forge:glass`,
    I: `#forge:ingots/iron`,
    D: `#appliedenergistics2:dusts/fluix`,
  });
  modifyShaped(`appliedenergistics2:spatial_io_port`, 1, [
    `GGG`,
    `CPC`,
    `IEI`
  ], {
    G: `#forge:glass`,
    C: `appliedenergistics2:fluix_glass_cable`,
    P: `appliedenergistics2:io_port`,
    I: `#forge:ingots/iron`,
    E: `appliedenergistics2:engineering_processor`
  });
  modifyShaped(`appliedenergistics2:io_port`, 1, [
    `GGG`,
    `DCD`,
    `IPI`
  ], {
    G: `#forge:glass`,
    C: `appliedenergistics2:fluix_glass_cable`,
    P: `appliedenergistics2:logic_processor`,
    I: `#forge:ingots/iron`,
    D: `appliedenergistics2:drive`
  });
  modifyShaped(`appliedenergistics2:interface`, 1, [
    `IGI`,
    `A F`,
    `IGI`
  ], {
    G: `#forge:glass`,
    A: `appliedenergistics2:annihilation_core`,
    F: `appliedenergistics2:formation_core`,
    I: `#forge:ingots/iron`
  });
  modifyShaped(`appliedenergistics2:molecular_assembler`, 1, [
    `IGI`,
    `ACF`,
    `IGI`
  ], {
    G: `appliedenergistics2:quartz_glass`,
    A: `appliedenergistics2:annihilation_core`,
    F: `appliedenergistics2:formation_core`,
    I: `#forge:ingots/iron`,
    C: `minecraft:crafting_table`
  });
  modifyShaped(`appliedenergistics2:cell_workbench`, 1, [
    `WEW`,
    `ICI`,
    `III`
  ], {
    W: `#minecraft:wool`,
    E: `appliedenergistics2:calculation_processor`,
    I: `#forge:ingots/iron`,
    C: `#forge:chests/wooden`
  });
  modifyShaped(`minecraft:daylight_detector`, 1, [
    `GGG`,
    `QQQ`,
    `SSS`
  ], {
    G: `#forge:glass`,
    Q: `#forge:gems/quartz`,
    S: `#minecraft:wooden_slabs`
  });
  /*
  modifyShaped(`minecraft:beehive`, 1, [
    `PPP`,
    `CCC`,
    `PPP`
  ], {
    P: `#minecraft:planks`,
    C: `#resourcefulbees:resourceful_honeycomb`
  });
  modifyShaped(`resourcefulbees:centrifuge_controller`, 1, [
    `ICI`,
    `BAB`,
    `IRI`
  ], {
    I: `resourcefulbees:centrifuge_casing`,
    C: `resourcefulbees:centrifuge`,
    B: `minecraft:iron_bars`,
    A: `minecraft:comparator`,
    R: `#forge:storage_blocks/redstone`
  });
  modifyShaped(`minecolonies:blockhutbuilder`, 1, [
    `PTP`,
    `PDP`,
    `PPP`
  ], {
    P: `#minecraft:planks`,
    D: `#minecraft:wooden_doors`,
    T: `structurize:sceptergold`
  });
  */
  modifySmelt(`refinedstorage:silicon`, [`#appliedenergistics2:crystals/quartz`, `#appliedenergistics2:purified_crystals`]);
  e.replaceInput(`#appliedenergistics2:silicon`, `refinedstorage:silicon`);
  e.remove({
    id: `appliedenergistics2:inscriber/silicon_print`
  });
  e.recipes.appliedenergistics2.inscriber({
    mode: `inscribe`,
    result: {
      item: `appliedenergistics2:printed_silicon`
    },
    ingredients: {
      top: {
        item: `appliedenergistics2:silicon_press`
      },
      middle: {
        tag: `forge:silicon`
      }
    }
  });
  e.remove({
    output: `#botanypots:botany_pots`
  });
  e.shaped(Item.of(`botanypots:botany_pot`), [
    `T T`,
    `TPT`,
    ` T `
  ], {
    T: `minecraft:terracotta`,
    P: `minecraft:flower_pot`
  });
  e.shaped(Item.of(`botanypots:hopper_botany_pot`), [
    `MPM`,
    ` H `
  ], {
    M: `#forge:nuggets/terrasteel`,
    P: `botanypots:botany_pot`,
    H: [`botania:hopperhock`, `botania:hopperhock_chibi`]
  });
  e.shaped(Item.of(`botanypots:hopper_botany_pot`), [
    `MPM`,
    ` H `
  ], {
    M: `pneumaticcraft:printed_circuit_board`,
    P: `botanypots:botany_pot`,
    H: `pneumaticcraft:omnidirectional_hopper`
  });

  const pots = [
    `botanypots:botany_pot`,
    `botanypots:white_botany_pot`,
    `botanypots:orange_botany_pot`,
    `botanypots:magenta_botany_pot`,
    `botanypots:light_blue_botany_pot`,
    `botanypots:yellow_botany_pot`,
    `botanypots:lime_botany_pot`,
    `botanypots:pink_botany_pot`,
    `botanypots:gray_botany_pot`,
    `botanypots:light_gray_botany_pot`,
    `botanypots:cyan_botany_pot`,
    `botanypots:purple_botany_pot`,
    `botanypots:blue_botany_pot`,
    `botanypots:brown_botany_pot`,
    `botanypots:green_botany_pot`,
    `botanypots:red_botany_pot`,
    `botanypots:black_botany_pot`,
  ];
  var colors = [
    `white`,
    `light_gray`,
    `gray`,
    `black`,
    `red`,
    `orange`,
    `yellow`,
    `lime`,
    `green`,
    `light_blue`,
    `cyan`,
    `blue`,
    `purple`,
    `magenta`,
    `pink`,
    `brown`
  ];

  //Dye stuff
  colors.forEach(color => {
    e.shapeless(Item.of(`appliedenergistics2:${color}_covered_cable`, 4), `appliedenergistics2:${color}_covered_dense_cable`);
    e.shapeless(Item.of(`appliedenergistics2:${color}_smart_cable`, 4), `appliedenergistics2:${color}_smart_dense_cable`);
    e.shaped(`appliedenergistics2:${color}_smart_dense_cable`, [
      `AA`,
      `AA`
    ], {
      A: `appliedenergistics2:${color}_smart_cable`
    });
    e.shaped(`appliedenergistics2:${color}_covered_dense_cable`, [
      `AA`,
      `AA`
    ], {
      A: `appliedenergistics2:${color}_covered_cable`
    });
    e.shaped(Item.of(`botanypots:hopper_${color}_botany_pot`), [
      `MPM`,
      ` H `
    ], {
      M: `#forge:nuggets/terrasteel`,
      P: `botanypots:${color}_botany_pot`,
      H: [`botania:hopperhock`, `botania:hopperhock_chibi`]
    });
    e.shaped(Item.of(`botanypots:hopper_${color}_botany_pot`), [
      `MPM`,
      ` H `
    ], {
      M: `pneumaticcraft:printed_circuit_board`,
      P: `botanypots:${color}_botany_pot`,
      H: `pneumaticcraft:omnidirectional_hopper`
    });
    e.shapeless(Item.of(`botanypots:${color}_botany_pot`), [pots, `#forge:dyes/${color}`]);
    e.shapeless(Item.of(`botanypots:hopper_${color}_botany_pot`), [`#botanypots:hopper_botany_pots`, `#forge:dyes/${color}`]);
    /*
    e.recipes.mekanism.enriching(Item.of(`minecraft:${color}_dye`, 2), `#byg:${color}_dye`);
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(`#byg:${color}_dye`).toJson(),
      result: Item.of(`minecraft:${color}_dye`, 2).toResultJson()
    });
    */
    e.remove({
      output: `minecraft:${color}_bed`
    });
    //e.replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`);
    e.shaped(Item.of(`minecraft:${color}_bed`), [
      `WWW`,
      `PPP`
    ], {
      P: `#minecraft:planks`,
      W: `minecraft:${color}_wool`
    });
    e.shapeless(Item.of(`minecraft:${color}_bed`), [`#minecraft:beds`, `#forge:dyes/${color}`]);
    e.remove({
      output: `minecraft:${color}_wool`
    });
    e.shaped(Item.of(`minecraft:${color}_wool`, 8), [
      `WWW`,
      `WCW`,
      `WWW`
    ], {
      C: `#forge:dyes/${color}`,
      W: `#minecraft:wool`
    });
    e.shaped(Item.of(`minecraft:${color}_wool`, 2), [
      `C`,
      `C`,
      `C`,
    ], {
      C: `minecraft:${color}_carpet`
    });
    e.remove({
      output: `minecraft:${color}_carpet`
    });
    e.shapeless(Item.of(`minecraft:${color}_carpet`), [`#minecraft:carpets`, `#forge:dyes/${color}`]);
    e.shaped(Item.of(`minecraft:${color}_carpet`, 8), [
      `WWW`,
      `WCW`,
      `WWW`
    ], {
      C: `#forge:dyes/${color}`,
      W: `#minecraft:carpets`
    });
    e.shaped(Item.of(`minecraft:${color}_carpet`, 3), [
      `WW`
    ], {
      W: `minecraft:${color}_wool`
    });
    /*
    e.remove({
        output: `comforts:sleeping_bag_${color}`
    });
    if (color !== `light_gray`) {
      e.shaped(Item.of(`comforts:sleeping_bag_${color}`), [
        `WWW`,
        `SSS`,
        `WWW`,
      ], {
        W: `absentbydesign:slab_wool_${color}`,
        S: `#forge:string`
      });
      e.shaped(Item.of(`minecraft:${color}_wool`), [
        `W`,
        `W`
      ], {
        W: `absentbydesign:slab_wool_${color}`
      });
    } else {
      e.shaped(Item.of(`comforts:sleeping_bag_light_gray`), [
        `WWW`,
        `SSS`,
        `WWW`,
      ], {
        W: `absentbydesign:slab_wool_silver`,
        S: `#forge:string`
      });
      e.shaped(Item.of(`minecraft:light_gray_wool`), [
        `W`,
        `W`
      ], {
        W: `absentbydesign:slab_wool_silver`
      });
    }
    */
    e.shaped(Item.of(`minecraft:${color}_stained_glass`, 3), [
      `GGG`,
      `G G`,
      `GGG`,
    ], {
      G: `minecraft:${color}_stained_glass_pane`
    });
  });
  e.shaped(Item.of(`minecraft:white_wool`), [
    `SS`,
    `SS`
  ], {
    S: `#forge:string`
  });
  e.shaped(Item.of(`minecraft:glass`, 3), [
    `GGG`,
    `G G`,
    `GGG`,
  ], {
    G: `minecraft:glass_pane`
  });
  e.replaceInput(`minecraft:glass_pane`, `#forge:glass_panes`);
});
