onEvent(`recipes`, e => {
  const mekCrush = e.recipes.mekanism.crushing
  const mekEnrich = e.recipes.mekanism.enriching
  const bioFuels = [2, 4, 5, 7, 8]
  const caTypes = [
    `importer`,
    `exporter`,
    `constructor`,
    `destructor`,
    `disk_manipulator`
  ]
  const tiersPowah = [
    `starter`,
    `basic`,
    `hardened`,
    `blazing`,
    `niotic`,
    `spirited`,
    `nitro`
  ]
  const typesPowah = [
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
  ]
  const solars = [
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
  ]
  const resetNBT = [
    `rftoolsbase:filter_module`,
    `rftoolspower:dimensionalcell_simple`,
    `rftoolspower:dimensionalcell`,
    `rftoolspower:dimensionalcell_advanced`,
    `rftoolspower:powercell_card`,
    `rftoolsutility:syringe`
  ]
  const ingots = [
    `#forge:ingots/gold`,
    `#forge:ingots/iron`,
    `#forge:ingots/copper`,
    `#forge:ingots/tin`
  ]
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
  ]

  function salvage(item, results) {
    e.custom({
      type: `silentgear:salvaging`,
      ingredient: Ingredient.of(item).toJson(),
      results: results
    })
  }

  function caTier(tier, corners, processor, cables) {
    caTypes.forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, [
        `a a`,
        `bcb`,
        `a a`
      ], {
        a: corners,
        b: processor,
        c: `${cables}${caType}`
      })
    })
  }

  function caTierSingle(tier, corners, processor, cables, caType) {
    e.shaped(`cabletiers:${tier}_${caType}`, [
      `a a`,
      `bcb`,
      `a a`
    ], {
      a: corners,
      b: processor,
      c: `${cables}${caType}`
    })
  }

  function smithing(result, base, addition) {
    e.recipes.minecraft.smithing({
      base: Ingredient.of(base).toJson(),
      addition: Ingredient.of(addition).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  function jumbo(ingredients, result, xp) {
    e.custom({
      type: `jumbofurnace:jumbo_smelting`,
      ingredients: ingredients,
      result: Item.of(result).toResultJson(),
      experience: xp
    })
  }

  function makeDisk(disk, part, type, material, mid) {
    const processor = type === `advanced` ? `refinedstorage:${type}_processor` : `extradisks:${type}_processor`
    e.shaped(`${disk}_storage_part`, [
      `121`,
      `343`,
      `131`
    ], {
      1: processor,
      2: material,
      3: `${part}_storage_part`,
      4: mid
    })
  }

  function buildQuarkChest(type, material) {
    e.shaped(`quark:${type}_chest`, [
      `aaa`,
      `a a`,
      `aaa`
    ], {
      a: material
    })
    e.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, `minecraft:tripwire_hook`])
  }

  //Make bio fuel use tags instead of invidual items
  e.remove({
    output: `mekanism:bio_fuel`
  })

  bioFuels.forEach(bioFuel => {
    mekCrush(Item.of(`mekanism:bio_fuel`, bioFuel), `#misctags:biofuel${bioFuel}`)
  })

  //Misc recipes
  e.shaped(`minecraft:elytra`, [
    `msm`,
    `mbm`,
    `m m`
  ], {
    m: `minecraft:phantom_membrane`,
    s: `quark:dragon_scale`,
    b: `ironjetpacks:strap`
  })

  e.shapeless(Item.of(`appliedenergistics2:fluix_covered_cable`, 4), `appliedenergistics2:fluix_covered_dense_cable`)
  e.shapeless(Item.of(`appliedenergistics2:fluix_smart_cable`, 4), `appliedenergistics2:fluix_smart_dense_cable`)


  e.shaped(`appliedenergistics2:fluix_smart_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_smart_cable`
  })
  e.shaped(`appliedenergistics2:fluix_covered_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_covered_cable`
  })

  e.recipes.create.crushing([`create:cinder_flour`, Item.of(`create:cinder_flour`).withChance(0.5)], `exnihilosequentia:crushed_netherrack`)

  e.custom({
    type: `appliedenergistics2:grinder`,
    input: Ingredient.of(`#forge:flour_plants`).toJson(),
    result: {
      primary: Item.of(`pamhc2foodcore:flouritem`).toResultJson()
    },
    turns: 8
  })
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
  })
  e.shaped(`computercraft:turtle_advanced`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/gold`,
    C: `computercraft:computer_advanced`,
    A: `#forge:ingots/allthemodium`
  })
  e.shaped(`computercraft:turtle_normal`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/iron`,
    C: `computercraft:computer_normal`,
    A: `#forge:ingots/allthemodium`
  })
  e.shaped(`minecraft:totem_of_undying`, [
    ` E `,
    `GVG`,
    ` G `
  ], {
    E: `compressium:emerald_2`,
    G: `#forge:storage_blocks/gold`,
    V: `minecraft:villager_spawn_egg`
  })

 e.shaped(`chisel:basalt/raw`, [
    ` B `,
    `BBB`,
    ` B `
  ], {
    B: `exnihilosequentia:pebble_basalt`
  })

  e.smelting(Item.of(`appliedenergistics2:certus_quartz_crystal`), `#forge:ores/certus_quartz`).xp(1)
  e.smelting(Item.of(`minecraft:glass`), `#forge:sand`).xp(0.1)
  e.shapeless(Item.of(`minecraft:clay_ball`, 4), `#forge:storage_blocks/clay`)
  e.shapeless(Item.of(`minecraft:quartz`, 4), `#forge:storage_blocks/quartz`)
  e.shapeless(Item.of(`minecraft:glowstone_dust`, 4), `#forge:glowstone`)

  e.shaped(`appliedenergistics2:silicon_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:silicon_essence`
  })
  e.shaped(`appliedenergistics2:calculation_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:certus_quartz_essence`
  })
  e.shaped(`appliedenergistics2:engineering_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:diamond_essence`
  })
  e.shaped(`appliedenergistics2:logic_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:gold_essence`
  })
  e.shaped(`minecraft:hopper`, [
    `ILI`,
    `ILI`,
    ` I `
  ], {
    L: `#minecraft:logs`,
    I: `#forge:ingots/iron`
  })
  e.shaped(Item.of(`astralsorcery:marble_raw`, 8), [
    `III`,
    `ILI`,
    `III`
  ], {
    L: `minecraft:bone_meal`,
    I: `minecraft:stone`
  })
  e.shaped(Item.of(`minecraft:stick`, 16), [
    `L`,
    `L`
  ], {
    L: `#minecraft:logs`
  })

  //Misc recipes
  e.shaped(`minecraft:elytra`, [
    `msm`,
    `mbm`,
    `m m`
  ], {
    m: `minecraft:phantom_membrane`,
    s: `quark:dragon_scale`,
    b: `ironjetpacks:strap`
  })

  e.shapeless(`appliedenergistics2:ender_dust`, `#forge:dusts/ender_pearl`)
  e.shapeless(Item.of(`appliedenergistics2:fluix_covered_cable`, 4), `appliedenergistics2:fluix_covered_dense_cable`)
  e.shapeless(Item.of(`appliedenergistics2:fluix_smart_cable`, 4), `appliedenergistics2:fluix_smart_dense_cable`)

  e.shaped(`appliedenergistics2:fluix_smart_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_smart_cable`
  })
  e.shaped(`appliedenergistics2:fluix_covered_dense_cable`, [
    `AA`,
    `AA`
  ], {
    A: `appliedenergistics2:fluix_covered_cable`
  })

  e.recipes.create.crushing([`create:cinder_flour`, Item.of(`create:cinder_flour`).withChance(0.5)], `exnihilosequentia:crushed_netherrack`)

  e.custom({
    type: `appliedenergistics2:grinder`,
    input: Ingredient.of(`#forge:flour_plants`).toJson(),
    result: {
      primary: Item.of(`pamhc2foodcore:flouritem`).toResultJson()
    },
    turns: 8
  })

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
  })

  e.shaped(`computercraft:turtle_advanced`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/gold`,
    C: `computercraft:computer_advanced`,
    A: `#forge:ingots/allthemodium`
  })
  e.shaped(`computercraft:turtle_normal`, [
    `III`,
    `ICI`,
    `IAI`
  ], {
    I: `#forge:ingots/iron`,
    C: `computercraft:computer_normal`,
    A: `#forge:ingots/allthemodium`
  })
  e.shaped(`minecraft:totem_of_undying`, [
    ` E `,
    `GVG`,
    ` G `
  ], {
    E: `compressium:emerald_2`,
    G: `#forge:storage_blocks/gold`,
    V: `minecraft:villager_spawn_egg`
  })

  e.smelting(Item.of(`appliedenergistics2:certus_quartz_crystal`), `#forge:ores/certus_quartz`).xp(1)
  e.smelting(Item.of(`minecraft:glass`), `#forge:sand`).xp(0.1)
  e.smelting(Item.of(`alltheores:platinum_ingot`), `create:crushed_platinum_ore`).xp(0.1)

  e.shapeless(Item.of(`minecraft:clay_ball`, 4), `#forge:storage_blocks/clay`)
  e.shapeless(Item.of(`minecraft:quartz`, 4), `#forge:storage_blocks/quartz`)
  e.shapeless(Item.of(`minecraft:glowstone_dust`, 4), `#forge:glowstone`)

  e.shaped(`appliedenergistics2:silicon_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:silicon_essence`
  })
  e.shaped(`appliedenergistics2:calculation_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:certus_quartz_essence`
  })
  e.shaped(`appliedenergistics2:engineering_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:diamond_essence`
  })
  e.shaped(`appliedenergistics2:logic_processor_press`, [
    `EEE`,
    `EAE`,
    `EEE`
  ], {
    E: `mysticalagriculture:iron_essence`,
    A: `mysticalagriculture:gold_essence`
  })
  e.shaped(`minecraft:hopper`, [
    `ILI`,
    `ILI`,
    ` I `
  ], {
    L: `#minecraft:logs`,
    I: `#forge:ingots/iron`
  })
  e.shaped(Item.of(`astralsorcery:marble_raw`, 8), [
    `III`,
    `ILI`,
    `III`
  ], {
    L: `minecraft:bone_meal`,
    I: `minecraft:stone`
  })
  e.shaped(Item.of(`minecraft:stick`, 16), [
    `L`,
    `L`
  ], {
    L: `#minecraft:logs`
  })

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
  })

  mekCrush(Item.of(`minecraft:blaze_powder`, 4), `#forge:rods/blaze`)
  mekCrush(Item.of(`minecraft:quartz`, 4), `#forge:storage_blocks/quartz`)
  mekCrush(`6x thermal:sulfur`, `thermal:sulfur_ore`)
  mekCrush(`thermal:diamond_dust`, `minecraft:diamond`)
  mekCrush(`excompressum:compressed_dust`, `compressium:sand_1`)
  mekCrush(`excompressum:compressed_nether_gravel`, `compressium:netherrack_1`)
  mekCrush(`excompressum:compressed_ender_gravel`, `compressium:endstone_1`)
  e.recipes.immersiveengineering.crusher(`4x minecraft:nether_wart`, `minecraft:nether_wart_block`)
  mekEnrich(Item.of(`minecraft:blaze_rod`), [Item.of(`minecraft:blaze_powder`, 6)])
  mekEnrich(Item.of(`powah:uraninite`, 2), `powah:uraninite_ore_poor`)
  mekEnrich(Item.of(`powah:uraninite`, 4), `powah:uraninite_ore`)
  mekEnrich(Item.of(`powah:uraninite`, 8), `powah:uraninite_ore_dense`)

  //SGear salvaging
  salvage(`minecraft:anvil`, [
    Item.of(`minecraft:iron_ingot`, 31).toResultJson()
  ])
  salvage(`minecraft:diamond_horse_armor`, [
    Item.of(`minecraft:diamond`, 7).toResultJson()
  ])
  salvage(`minecraft:golden_horse_armor`, [
    Item.of(`minecraft:gold_ingot`, 7).toResultJson()
  ])
  salvage(`minecraft:iron_horse_armor`, [
    Item.of(`minecraft:iron_ingot`, 7).toResultJson()
  ])
  salvage(`minecraft:leather_horse_armor`, [
    Item.of(`minecraft:leather`, 7).toResultJson()
  ])
  salvage(`minecraft:minecart`, [
    Item.of(`minecraft:iron_ingot`, 5).toResultJson()
  ])
  salvage(`minecraft:saddle`, [
    Item.of(`minecraft:leather`, 5).toResultJson(),
    Item.of(`minecraft:iron_nugget`, 2).toResultJson()
  ])

  //Extrastorage fixes
  e.shaped(`extrastorage:iron_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/iron`,
    P: `refinedstorage:improved_processor`,
    C: `#refinedstorage:crafter`
  })
  e.shaped(`extrastorage:gold_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/gold`,
    P: `refinedstorage:advanced_processor`,
    C: `extrastorage:iron_crafter`
  })
  e.shaped(`extrastorage:diamond_crafter`, [
    `B B`,
    `PCP`,
    `B B`
  ], {
    B: `#forge:storage_blocks/diamond`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:gold_crafter`
  })
  e.shaped(`extrastorage:netherite_crafter`, [
    `BBB`,
    `PCP`,
    `BBB`
  ], {
    B: `#forge:ingots/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:diamond_crafter`
  })

  modifyShaped(e, `creativecrafter:creative_crafter`, 1, [
    `BUB`,
    `PCP`,
    `BUB`
  ], {
    B: `#forge:storage_blocks/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:netherite_crafter`,
    U: `#forge:ingots/unobtainium`
  })

  //Cable Tiers changes
  caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  caTier(`creative`, `#forge:ingots/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`)
  caTierSingle(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `rsrequestify:`, `requester`)
  caTierSingle(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`, `requester`)
  caTierSingle(`creative`, `#forge:storage_blocks/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`, `requester`)

  //NBT Resets
  resetNBT.forEach(reset => {
    e.shapeless(Item.of(reset), reset)
  })

  typesPowah.forEach(type => {
    tiersPowah.forEach(tier => {
      e.shapeless(Item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`)
    })
  })

  solars.forEach(solar => {
    e.shapeless(Item.of(`solarflux:sp_${solar}`), `solarflux:sp_${solar}`)
  })

  //Smithing stuff
  smithing(`metalbarrels:wood_to_netherite`, `metalbarrels:wood_to_obsidian`, `#forge:ingots/netherite`)

  //Reliquary changes
  e.remove({
    output: `xreliquary:fertile_lily_pad`,
    type: `minecraft:crafting_shapeless`
  })

  e.shaped(`xreliquary:fertile_lily_pad`, [
    `ESE`,
    `FLF`,
    `ESE`
  ], {
    E: `xreliquary:fertile_essence`,
    S: `mysticalagriculture:supremium_growth_accelerator`,
    L: `minecraft:lily_pad`,
    F: `mysticalagriculture:mystical_fertilizer`
  })

  //Mining Gadgets
  modifyShaped(e, `mininggadgets:upgrade_empty`, 1, [
    `RAL`,
    `DGD`,
    `LAR`
  ], {
    L: `#forge:storage_blocks/lapis`,
    R: `#forge:storage_blocks/redstone`,
    D: `#forge:gems/diamond`,
    A: `#forge:nuggets/allthemodium`,
    G: `minecraft:glass_pane`
  })

  //Mystical Agriculture
  modifyShaped(e, `mysticalagriculture:unattuned_augment`, 1, [
    `PMP`,
    `AMA`,
    `PMP`
  ], {
    P: `mysticalagriculture:prosperity_ingot`,
    M: `botania:manasteel_ingot`,
    A: `#forge:nuggets/allthemodium`
  })

  //Mekanism
  e.shaped('kubejs:yellow_cake_uranium_block', ['UUU', 'UUU', 'UUU'], {
    U: 'mekanism:yellow_cake_uranium'
  }).id(`kubejs:mekanism/yellow_cake_uranium_block`)
  modifyShaped(e, `mekanism:digital_miner`, 1, [
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
  })
  modifyShaped(e, `mekanism:atomic_disassembler`, 1, [
    `RER`,
    `RUR`,
    ` V `
  ], {
    E: `mekanism:energy_tablet`,
    R: `#mekanism:alloys/reinforced`,
    U: `#forge:circuits/ultimate`,
    V: `#forge:ingots/vibranium`
  })
  modifyShaped(e, `mekanismgenerators:wind_generator`, 1, [
    ` O `,
    `OCO`,
    `EBE`
  ], {
    E: `mekanism:energy_tablet`,
    C: `mekanismgenerators:electromagnetic_coil`,
    B: `#forge:circuits/basic`,
    O: `#forge:ingots/osmium`
  })

  //Jetpacks
  e.shaped(`ironjetpacks:diamond_cell`, [
    ` R `,
    `TCT`,
    ` R `
  ], {
    R: `#forge:dusts/redstone`,
    C: `ironjetpacks:advanced_coil`,
    T: `#forge:gems/diamond`
  })
  e.shaped(`ironjetpacks:diamond_thruster`, [
    `TAT`,
    `ACA`,
    `TFT`
  ], {
    F: `minecraft:furnace`,
    A: `ironjetpacks:advanced_coil`,
    C: `ironjetpacks:diamond_cell`,
    T: `#forge:gems/diamond`
  })
  e.shaped(`ironjetpacks:diamond_capacitor`, [
    `RCR`,
    `RCR`,
    `RCR`
  ], {
    R: `#forge:gems/diamond`,
    C: `ironjetpacks:diamond_cell`
  })
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
  })
  e.shaped(`ironjetpacks:platinum_cell`, [
    ` R `,
    `TCT`,
    ` R `
  ], {
    R: `#forge:dusts/redstone`,
    C: `ironjetpacks:advanced_coil`,
    T: `#forge:ingots/platinum`
  })
  e.shaped(`ironjetpacks:platinum_thruster`, [
    `TAT`,
    `ACA`,
    `TFT`
  ], {
    F: `minecraft:furnace`,
    A: `ironjetpacks:advanced_coil`,
    C: `ironjetpacks:platinum_cell`,
    T: `#forge:ingots/platinum`
  })
  e.shaped(`ironjetpacks:platinum_capacitor`, [
    `RCR`,
    `RCR`,
    `RCR`
  ], {
    R: `#forge:ingots/platinum`,
    C: `ironjetpacks:platinum_cell`
  })
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
  })

  //Foods
  e.shaped(`pamhc2foodcore:fruitpunchitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `#forge:fruits`,
    B: `pamhc2foodcore:applejuiceitem`
  })
  e.shaped(`pamhc2foodcore:applejuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:apple`,
    B: `minecraft:glass_bottle`
  })
  e.shaped(`pamhc2foodcore:melonjuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:melon_slice`,
    B: `minecraft:glass_bottle`
  })
  e.shaped(`pamhc2foodcore:sweetberryjuiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `minecraft:sweet_berries`,
    B: `minecraft:glass_bottle`
  })
  e.shaped(`pamhc2foodcore:p8juiceitem`, [
    `FFF`,
    `FBF`,
    `FFF`
  ], {
    F: `#forge:vegetables`,
    B: `minecraft:glass_bottle`
  })

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
  })
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
  })

  //Other recipes
  e.shaped(Item.of(`forbidden_arcanus:iron_chain`, 3), [
    `N  `,
    ` I `,
    `  N`
  ], {
    N: `#forge:nuggets/iron`,
    I: `#forge:ingots/iron`
  })
  modifyShaped(e, `entangled:block`, 1, [
    `UEU`,
    `ECE`,
    `UEU`
  ], {
    U: `#forge:ingots/unobtainium`,
    E: `#forge:ender_pearls`,
    C: `minecraft:ender_chest`
  })
  modifyShaped(e, `entangled:item`, 1, [
    ` EC`,
    ` UE`,
    `U  `
  ], {
    U: `#forge:ingots/unobtainium`,
    E: `#forge:ender_pearls`,
    C: `minecraft:ender_chest`
  })
  modifyShaped(e, 'forbidden_arcanus:eternal_stella', 1, [
    'DBC',
    'BAB',
    'CBD'
  ], {
    A: 'forbidden_arcanus:stellarite_piece',
    B: 'forbidden_arcanus:xpetrified_orb',
    C: 'allthemodium:allthemodium_ingot',
    D: 'allthemodium:vibranium_ingot'
  })
  //Mekasuit
  e.shaped(Item.of('mekanism:mekasuit_helmet', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', {
    HideFlags: 2
  }), [
    'HCH',
    'HUH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_boots'
  }).id(`kubejs:mekasuit_boots`)

  //Extra Disks
  makeDisk(`refinedstorage:4096k_fluid`, `refinedstorage:1024k_fluid`, `advanced`, `#forge:nuggets/allthemodium`, `minecraft:bucket`)
  makeDisk(`extradisks:16384k_fluid`, `refinedstorage:4096k_fluid`, `advanced`, `#forge:ingots/allthemodium`, `minecraft:bucket`)
  makeDisk(`extradisks:65536k_fluid`, `extradisks:16384k_fluid`, `advanced`, `#forge:ingots/allthemodium`, `minecraft:bucket`)
  makeDisk(`extradisks:262144k_fluid`, `extradisks:65536k_fluid`, `withering`, `#forge:ingots/vibranium`, `minecraft:bucket`)
  makeDisk(`extradisks:1048576k_fluid`, `extradisks:262144k_fluid`, `withering`, `#forge:ingots/unobtainium`, `minecraft:bucket`)
  makeDisk(`extradisks:infinite_fluid`, `extradisks:1048576k_fluid`, `withering`, `#forge:ingots/unobtainium`, `minecraft:bucket`)
  makeDisk(`extradisks:4096k`, `extradisks:1024k`, `advanced`, `#forge:nuggets/allthemodium`, `#forge:dusts/redstone`)
  makeDisk(`extradisks:16384k`, `extradisks:4096k`, `advanced`, `#forge:ingots/allthemodium`, `#forge:dusts/redstone`)
  makeDisk(`extradisks:65536k`, `extradisks:16384k`, `advanced`, `#forge:ingots/allthemodium`, `#forge:dusts/redstone`)
  makeDisk(`extradisks:262144k`, `extradisks:65536k`, `withering`, `#forge:ingots/vibranium`, `#forge:dusts/redstone`)
  makeDisk(`extradisks:1048576k`, `extradisks:262144k`, `withering`, `#forge:ingots/unobtainium`, `#forge:dusts/redstone`)
  makeDisk(`extradisks:infinite`, `extradisks:1048576k`, `withering`, `#forge:ingots/unobtainium`, `#forge:dusts/redstone`)

  //Quark
  e.shapeless(`minecraft:chest`, `#forge:chests/wooden`)
  e.shapeless(`minecraft:trapped_chest`, `#forge:chests/trapped`)

  const quarkWoodTypes = [`oak`, `dark_oak`, `acacia`, `spruce`, `birch`, `jungle`, `warped`, `crimson`]
  quarkWoodTypes.forEach(wood => {
    e.shapeless(`quark:${wood}_chest`, [`minecraft:${wood}_planks`, `#forge:chests/wooden`])
    e.shapeless(`quark:${wood}_trapped_chest`, [`quark:${wood}_chest`, `minecraft:tripwire_hook`])
  })

  buildQuarkChest(`nether_brick`, `minecraft:nether_bricks`)
  buildQuarkChest(`prismarine`, `minecraft:prismarine`)
  buildQuarkChest(`mushroom`, `#forge:mushroom_caps`)
  buildQuarkChest(`purpur`, `minecraft:purpur_block`)

  //RFTools
  modifyShaped(e, `rftoolsbuilder:builder`, 1, [
    `aea`,
    `rmr`,
    `ara`
  ], {
    a: `#forge:nuggets/allthemodium`,
    e: `#forge:ender_pearls`,
    r: `#forge:storage_blocks/redstone`,
    m: `rftoolsbase:machine_frame`
  })

  //Astral Sorcery
  e.shaped(`astralsorcery:altar_discovery`, [
    `MSM`,
    ` P `,
    `PPP`
  ], {
    M: `astralsorcery:marble_raw`,
    S: `astralsorcery:black_marble_raw`,
    P: `#minecraft:planks`
  })
  //Thermal
  e.recipes.thermal.sawmill([Item.of(`integrateddynamics:menril_planks`, 6), Item.of(`thermal:sawdust`).withChance(0.25)], `#integrateddynamics:menril_logs`).energy(1000)
  e.recipes.thermal.press(`minecraft:honeycomb_block`, [Item.of(`minecraft:honeycomb`, 9), `thermal:press_packing_3x3_die`])
  e.recipes.thermal.press(Item.of(`minecraft:honeycomb`, 9), [`minecraft:honeycomb_block`, `thermal:press_unpacking_die`])
  e.recipes.thermal.pulverizer([`mekanism:dust_coal`, Item.of(`thermal:sulfur_dust`).withChance(0.25)], `minecraft:coal`)
  e.recipes.thermal.pulverizer(`mekanism:dust_charcoal`, `#forge:charcoal`)
  e.recipes.thermal.smelter(`mekanism:ingot_steel`, [Item.of(`#forge:dusts/coal`, 2), `#forge:ingots/iron`])

  //Create
  e.recipes.create.mixing(`mekanism:ingot_steel`, [`#forge:dusts/coal`, `#forge:dusts/coal`, `#forge:ingots/iron`]).heated()

  //Blood Magic
  e.recipes.bloodmagic.altar(`integrateddynamics:menril_sapling`, `minecraft:spruce_sapling`).upgradeLevel(2)

  //Modified recipes
  modifyShaped(e, `pipez:universal_pipe`, 8, [
    `123`,
    `4A4`,
    `321`
  ], {
    1: `pipez:item_pipe`,
    2: `pipez:energy_pipe`,
    3: `pipez:fluid_pipe`,
    4: `pipez:gas_pipe`,
    A: `#forge:ingots/iron`
  })
  modifyShaped(e, `immersiveengineering:sawdust`, 27, [
    `SSS`
  ], {
    S: `thermal:sawdust_block`
  })
  modifyShapeless(e, `botania:lexicon`, 1, [`#minecraft:flowers`, `minecraft:book`])
  modifyShaped(e, `minecraft:honeycomb_block`, 1, [
    `CCC`,
    `CCC`,
    `CCC`
  ], {
    C: `minecraft:honeycomb`
  })
  e.shapeless(Item.of(`minecraft:honeycomb`, 9), `minecraft:honeycomb_block`)
  modifyShaped(e, `solarflux:mirror`, 3, [
    `GGG`,
    `III`
  ], {
    G: `#forge:glass`,
    I: `#forge:ingots`
  })
  modifyShaped(e, `solarflux:sp_1`, 1, [
    `MMM`,
    `ILI`,
    `III`
  ], {
    M: `solarflux:mirror`,
    L: `#forge:storage_blocks/lapis`,
    I: `#forge:ingots/iron`
  })
  modifyShaped(e, `minecraft:sticky_piston`, 1, [
    `B`,
    `P`
  ], {
    B: `#forge:slimeballs`,
    P: `minecraft:piston`
  })
  modifyShaped(e, `mekanismgenerators:solar_panel`, 1, [
    `PPP`,
    `RIR`,
    `OOO`
  ], {
    P: `powah:solar_panel_starter`,
    R: `#forge:dusts/redstone`,
    I: `mekanism:alloy_infused`,
    O: `#forge:ingots/osmium`
  })
  modifyShaped(e, `engineerstools:crushing_hammer`, 1, [
    `RI `,
    `BS `,
    `  S`
  ], {
    R: `#forge:string`,
    I: `#forge:ingots/iron`,
    B: `#forge:storage_blocks/iron`,
    S: `#forge:rods/wooden`
  })
  modifyShaped(e, `forbidden_arcanus:candle_lamp`, 1, [
    `NDN`,
    `GAG`,
    `NDN`
  ], {
    N: `forbidden_arcanus:arcane_gold_nugget`,
    A: `forbidden_arcanus:candle`,
    D: `forbidden_arcanus:darkstone`,
    G: `forbidden_arcanus:arcane_gold_ingot`
  })
  modifyShaped(e, `torchmaster:megatorch`, 1, [
    `TTT`,
    `GLG`,
    `DLD`
  ], {
    T: `xreliquary:interdiction_torch`,
    G: `#forge:storage_blocks/gold`,
    D: `#forge:storage_blocks/diamond`,
    L: `#minecraft:logs`
  })
  modifyShaped(e, `immersiveengineering:cloche`, 1, [
    `GEG`,
    `G G`,
    `TRT`
  ], {
    G: `#forge:glass`,
    E: `immersiveengineering:electron_tube`,
    T: `#forge:treated_wood`,
    R: `mekanism:resistive_heater`
  })
  modifyShapeless(e, `appliedenergistics2:cable_anchor`, 3, [ingots, `#appliedenergistics2:knife`])
  modifyShapeless(e, `appliedenergistics2:fluix_covered_cable`, 1, [`#minecraft:wool`, `appliedenergistics2:fluix_glass_cable`])
  modifyShapeless(e, `appliedenergistics2:crafting_card`, 1, [`minecraft:crafting_table`, `appliedenergistics2:basic_card`])
  modifyShapeless(e, `appliedenergistics2:fuzzy_card`, 1, [`#minecraft:wool`, `appliedenergistics2:advanced_card`])
  modifyShapeless(e, `appliedenergistics2:crafting_terminal`, 1, [`appliedenergistics2:terminal`, `minecraft:crafting_table`, `appliedenergistics2:calculation_processor`])
  modifyShaped(e, `appliedenergistics2:quartz_glass`, 4, [
    `GDG`,
    `DGD`,
    `GDG`
  ], {
    G: `#appliedenergistics2:dusts/quartz`,
    D: `#forge:glass`
  })
  modifyShaped(e, `appliedenergistics2:quartz_fiber`, 3, [
    `DDD`,
    `GGG`,
    `DDD`
  ], {
    G: `#appliedenergistics2:dusts/quartz`,
    D: `#forge:glass`
  })
  modifyShaped(e, `appliedenergistics2:chest`, 1, [
    `GTG`,
    `C C`,
    `IFI`
  ], {
    G: `#forge:glass`,
    T: `appliedenergistics2:terminal`,
    C: `appliedenergistics2:fluix_glass_cable`,
    I: `#forge:ingots/iron`,
    F: `#appliedenergistics2:crystals/fluix`
  })
  modifyShaped(e, `appliedenergistics2:condenser`, 1, [
    `IGI`,
    `GDG`,
    `IGI`
  ], {
    G: `#forge:glass`,
    I: `#forge:ingots/iron`,
    D: `#appliedenergistics2:dusts/fluix`,
  })
  modifyShaped(e, `appliedenergistics2:spatial_io_port`, 1, [
    `GGG`,
    `CPC`,
    `IEI`
  ], {
    G: `#forge:glass`,
    C: `appliedenergistics2:fluix_glass_cable`,
    P: `appliedenergistics2:io_port`,
    I: `#forge:ingots/iron`,
    E: `appliedenergistics2:engineering_processor`
  })
  modifyShaped(e, `appliedenergistics2:io_port`, 1, [
    `GGG`,
    `DCD`,
    `IPI`
  ], {
    G: `#forge:glass`,
    C: `appliedenergistics2:fluix_glass_cable`,
    P: `appliedenergistics2:logic_processor`,
    I: `#forge:ingots/iron`,
    D: `appliedenergistics2:drive`
  })
  modifyShaped(e, `appliedenergistics2:interface`, 1, [
    `IGI`,
    `A F`,
    `IGI`
  ], {
    G: `#forge:glass`,
    A: `appliedenergistics2:annihilation_core`,
    F: `appliedenergistics2:formation_core`,
    I: `#forge:ingots/iron`
  })
  modifyShaped(e, `appliedenergistics2:molecular_assembler`, 1, [
    `IGI`,
    `ACF`,
    `IGI`
  ], {
    G: `appliedenergistics2:quartz_glass`,
    A: `appliedenergistics2:annihilation_core`,
    F: `appliedenergistics2:formation_core`,
    I: `#forge:ingots/iron`,
    C: `minecraft:crafting_table`
  })
  modifyShaped(e, `appliedenergistics2:cell_workbench`, 1, [
    `WEW`,
    `ICI`,
    `III`
  ], {
    W: `#minecraft:wool`,
    E: `appliedenergistics2:calculation_processor`,
    I: `#forge:ingots/iron`,
    C: `#forge:chests/wooden`
  })
  modifyShaped(e, `minecraft:daylight_detector`, 1, [
    `GGG`,
    `QQQ`,
    `SSS`
  ], {
    G: `#forge:glass`,
    Q: `#forge:gems/quartz`,
    S: `#minecraft:wooden_slabs`
  })
  modifyShaped(e, `resourcefulbees:centrifuge_controller`, 1, [
    `ICI`,
    `BAB`,
    `IRI`
  ], {
    I: `resourcefulbees:centrifuge_casing`,
    C: `resourcefulbees:centrifuge`,
    B: `minecraft:iron_bars`,
    A: `minecraft:comparator`,
    R: `#forge:storage_blocks/redstone`
  })
  //ET
  modifyShaped(e, 'envirotech:erodium_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:erodium_crystal',
    M: 'envirotech:litherite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'minecraft:netherite_block'
  })
  modifyShaped(e, 'envirotech:kyronite_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:kyronite_crystal',
    M: 'envirotech:erodium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:allthemodium_block'
  })
  modifyShaped(e, 'envirotech:pladium_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:pladium_crystal',
    M: 'envirotech:kyronite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:vibranium_block'
  })
  modifyShaped(e, 'envirotech:ionite_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:ionite_crystal',
    M: 'envirotech:pladium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_block'
  })
  modifyShaped(e, 'envirotech:aethium_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:aethium_crystal',
    M: 'envirotech:ionite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:vibranium_allthemodium_alloy_block'
  })
  modifyShaped(e, 'envirotech:nanorite_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:nanorite_crystal',
    M: 'envirotech:aethium_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_allthemodium_alloy_block'
  })
  modifyShaped(e, 'envirotech:xerothium_void_miner_ccu', 1, [
    'CBC',
    'CMC',
    'CLC'
  ], {
    C: 'envirocore:xerothium_crystal',
    M: 'envirotech:nanorite_void_miner_ccu',
    L: 'envirocore:laser_core',
    B: 'allthemodium:unobtainium_vibranium_alloy_block'
  })
  modifySmelt(e, `refinedstorage:silicon`, [`#appliedenergistics2:crystals/quartz`, `#appliedenergistics2:purified_crystals`])
  e.replaceInput(`#appliedenergistics2:silicon`, `refinedstorage:silicon`)
  e.remove({
    id: `appliedenergistics2:inscriber/silicon_print`
  })
  e.custom({
    type: `appliedenergistics2:inscriber`,
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
  })
  e.remove({
    output: `#botanypots:botany_pots`
  })
  e.shaped(Item.of(`botanypots:botany_pot`), [
    `T T`,
    `TPT`,
    ` T `
  ], {
    T: `minecraft:terracotta`,
    P: `minecraft:flower_pot`
  })
  e.shaped(Item.of(`botanypots:hopper_botany_pot`), [
    `MPM`,
    ` H `
  ], {
    M: `#forge:nuggets/terrasteel`,
    P: `botanypots:botany_pot`,
    H: [`botania:hopperhock`, `botania:hopperhock_chibi`]
  })
  e.shaped(Item.of(`botanypots:hopper_botany_pot`), [
    `MPM`,
    ` H `
  ], {
    M: `pneumaticcraft:printed_circuit_board`,
    P: `botanypots:botany_pot`,
    H: `pneumaticcraft:omnidirectional_hopper`
  })

  //Dye stuff
  colors.forEach(color => {
    e.remove({
      output: `minecraft:${color}_bed`
    })
    e.remove({
      output: `minecraft:${color}_wool`
    })
    e.remove({
      output: `minecraft:${color}_carpet`
    })

    e.shapeless(Item.of(`minecraft:${color}_carpet`), [`#minecraft:carpets`, `#forge:dyes/${color}`])
    e.shapeless(Item.of(`minecraft:${color}_bed`), [`#minecraft:beds`, `#forge:dyes/${color}`])
    e.shapeless(Item.of(`botanypots:${color}_botany_pot`), [pots, `#forge:dyes/${color}`])
    e.shapeless(Item.of(`botanypots:hopper_${color}_botany_pot`), [`#botanypots:hopper_botany_pots`, `#forge:dyes/${color}`])
    e.shapeless(Item.of(`appliedenergistics2:${color}_covered_cable`, 4), `appliedenergistics2:${color}_covered_dense_cable`)
    e.shapeless(Item.of(`appliedenergistics2:${color}_smart_cable`, 4), `appliedenergistics2:${color}_smart_dense_cable`)

    e.shaped(Item.of(`minecraft:${color}_carpet`, 8), [
      `WWW`,
      `WCW`,
      `WWW`
    ], {
      C: `#forge:dyes/${color}`,
      W: `#minecraft:carpets`
    })
    e.shaped(Item.of(`minecraft:${color}_carpet`, 3), [
      `WW`
    ], {
      W: `minecraft:${color}_wool`
    })
    e.shaped(Item.of(`minecraft:${color}_stained_glass`, 3), [
      `GGG`,
      `G G`,
      `GGG`,
    ], {
      G: `minecraft:${color}_stained_glass_pane`
    })
    e.shaped(Item.of(`minecraft:${color}_concrete`, 8), [
      `PPP`,
      `PWP`,
      `PPP`,
    ], {
      P: `minecraft:${color}_concrete_powder`,
      W: ['resourcefulbees:water_honeycomb', 'mysticalagriculture:water_essence', 'minecraft:water_bucket']
    }).id(`kubejs:${color}_concrete`)
    e.shaped(Item.of(`minecraft:${color}_wool`, 8), [
      `WWW`,
      `WCW`,
      `WWW`
    ], {
      C: `#forge:dyes/${color}`,
      W: `#minecraft:wool`
    })
    e.shaped(Item.of(`minecraft:${color}_wool`, 2), [
      `C`,
      `C`,
      `C`,
    ], {
      C: `minecraft:${color}_carpet`
    })
    e.shaped(Item.of(`minecraft:${color}_bed`), [
      `WWW`,
      `PPP`
    ], {
      P: `#minecraft:planks`,
      W: `minecraft:${color}_wool`
    })
    e.shaped(`appliedenergistics2:${color}_smart_dense_cable`, [
      `AA`,
      `AA`
    ], {
      A: `appliedenergistics2:${color}_smart_cable`
    })
    e.shaped(`appliedenergistics2:${color}_covered_dense_cable`, [
      `AA`,
      `AA`
    ], {
      A: `appliedenergistics2:${color}_covered_cable`
    })
    e.shaped(Item.of(`botanypots:hopper_${color}_botany_pot`), [
      `MPM`,
      ` H `
    ], {
      M: `#forge:nuggets/terrasteel`,
      P: `botanypots:${color}_botany_pot`,
      H: [`botania:hopperhock`, `botania:hopperhock_chibi`]
    })
    e.shaped(Item.of(`botanypots:hopper_${color}_botany_pot`), [
      `MPM`,
      ` H `
    ], {
      M: `pneumaticcraft:printed_circuit_board`,
      P: `botanypots:${color}_botany_pot`,
      H: `pneumaticcraft:omnidirectional_hopper`
    })
  })

  e.shaped(Item.of(`minecraft:white_wool`), [
    `SS`,
    `SS`
  ], {
    S: `#forge:string`
  })
  e.shaped(Item.of(`minecraft:glass`, 3), [
    `GGG`,
    `G G`,
    `GGG`,
  ], {
    G: `minecraft:glass_pane`
  })
  e.shaped(`minecraft:elder_guardian_spawn_egg`, [
    'ACA',
    'BDB',
    'ACA'
  ], {
    A: `minecraft:sea_lantern`,
    B: `xreliquary:guardian_spike`,
    C: `minecraft:pufferfish_bucket`,
    D: `minecraft:guardian_spawn_egg`
  })
  e.shaped(`minecraft:spawner`, [
    'ACA',
    'BDB',
    'ACA'
  ], {
    A: `compressium:netherite_2`,
    B: `mysticalagradditions:creative_essence`,
    C: `forbidden_arcanus:spawner_scrap`,
    D: `minecraft:dragon_egg`
  })
  e.shaped(`forbidden_arcanus:spawner_scrap`, [
    'ABA',
    'CFD',
    'AEA'
  ], {
    A: `compressium:obsidian_2`,
    B: `allthemodium:allthemodium_block`,
    C: `allthemodium:vibranium_block`,
    D: `allthemodium:unobtainium_block`,
    E: `mekanism:teleportation_core`,
    F: `forbidden_arcanus:dark_nether_star`
  })
  e.replaceInput(`minecraft:glass_pane`, `#forge:glass_panes`)
  e.replaceInput(`allthecompressed:nether_star_block`, `kubejs:nether_star_block`)
  e.replaceOutput(`allthecompressed:nether_star_block`, `kubejs:nether_star_block`)
})
