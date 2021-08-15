//priority: 999
onEvent(`recipes`, e => {
  //Remove via recipe IDs
  const idRemove = [
    `minecraft:comparator`,
    `minecraft:glass`,

    `botania:conversions/blazeblock_deconstruct`,
    `botania:blaze_block`,

    `pedestals:pedestal_crushing/dustnethergold`,

    `forbidden_arcanus:leather`,

    'creativeapiary:tcreative_apiary',
    'creativeapiary:creative_apiary_storage',
    'creativeapiary:creative_apiary_breeder',

    `computercraft:turtle_normal`,
    `computercraft:turtle_advanced`,

    `xreliquary:alkahestry/crafting/nether_star`,

    `create:milling/sand`,
    `create:crushing/sand`,
    `create:crushing/netherrack`,

    `immersiveengineering:crafting/paper_from_sawdust`,

    `exnihilosequentia:heat/ens_wall_torch`,
    `exnihilosequentia:heat/ens_fire`,
    `exnihilosequentia:heat/ens_magma_block`,
    `exnihilosequentia:heat/ens_lava`,

    `excompressum:hammer/logs`,

    `thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log`,
    `thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log_filled`,

    `astralsorcery:altar/illuminator`,

    `mekanism:atomic_disassembler`,

    'thermal:machine/press/unpacking/press_honeycomb_unpacking',

    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'mekanism:compat/appliedenergistics2/certus_crystal_purification',
    'mekanism:compat/appliedenergistics2/fluix_crystal_purification',

    'immersiveengineering:crusher/nether_wart'
  ]
  //Remove via mod name
  const modRemove = [
    `extrastorage`,
    `cabletiers`,
  ]
  //Recipe via output
  const outputRemove = [
    `appliedenergistics2:silicon`,

    `mekanism:upgrade_anchor`,
    `mekanism:block_charcoal`,

    `forbidden_arcanus:rotten_leather`,
    `forbidden_arcanus:iron_chain`,

    `xreliquary:alkahestry_tome`,

    `cyclic:uncrafter`,
    `cyclic:tile_transporter_empty`,
    /cyclic:.*_pipe/,
    `cyclic:cable_wrench`,
    `cyclic:sleeping_mat`,

    `solarflux:sp_6`,
    `solarflux:sp_7`,
    `solarflux:sp_8`,

    /titanium:/,

    `pamhc2foodcore:fruitpunchitem`,
    `pamhc2foodcore:applejuiceitem`,
    `pamhc2foodcore:melonjuiceitem`,
    `pamhc2foodcore:sweetberryjuiceitem`,
    `pamhc2foodcore:p8juiceitem`,

    /angelring:/,

    `silentgear:iron_rod`,

    /entangled:/,

    `refinedstorage:4096k_fluid_storage_part`,

    `extradisks:4096k_storage_part`,
    `extradisks:16384k_fluid_storage_part`,
    `extradisks:16384k_storage_part`,
    `extradisks:65536k_fluid_storage_part`,
    `extradisks:65536k_storage_part`,
    `extradisks:262144k_fluid_storage_part`,
    `extradisks:262144k_storage_part`,
    `extradisks:1048576k_fluid_storage_part`,
    `extradisks:1048576k_storage_part`,
    `extradisks:infinite_fluid_storage_part`,
    `extradisks:infinite_storage_part`,

    `darkutils:ender_hopper`,

    `excompressum:compressed_cobblestone`,
    `excompressum:compressed_gravel`,
    `excompressum:compressed_sand`,
    `excompressum:compressed_dirt`,
    `excompressum:compressed_soul_sand`,
    `excompressum:compressed_netherrack`,
    `excompressum:compressed_end_stone`,
    `excompressum:compressed_diorite`,
    `excompressum:compressed_granite`,
    `excompressum:compressed_andesite`,
    /excompressum:.*_crucible/,

    `pedestals:dustflour`,

    /tinyredstone:silicon/
  ]

  idRemove.forEach(iR => {
    e.remove({
      id: iR
    })
  })

  modRemove.forEach(mR => {
    e.remove({
      mod: mR
    })
  })

  outputRemove.forEach(oR => {
    e.remove({
      output: oR
    })
  })

  //Remove via input
  e.remove({
    input: [
      `appliedenergistics2:flour`
    ]
  })

  //Remove via recipe type
  e.remove({
    type: `xreliquary:alkahestry_charging`
  })
})