const colors = [
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
]

const refined = [
  `controller`,
  `creative_controller`,
  `grid`,
  `crafting_grid`,
  `pattern_grid`,
  `fluid_grid`,
  `network_receiver`,
  `network_transmitter`,
  `relay`,
  `detector`,
  `security_manager`,
  `wireless_transmitter`,
  `disk_manipulator`,
  `crafter`,
  `crafter_manager`,
  `crafting_monitor`
]

onEvent(`jei.information`, e => {
  e.add(`allthemodium:molten_bluelava_bucket`, [`Soul Lava appears occasionally in the nether.`, `(Small source blocks only - no pools.)`])
  e.add(`allthemodium:allthemodium_ore`, [`Check all the oceans for Allthemodium.`, `(Y 5-45)`])
  e.add(`allthemodium:vibranium_ore`, [`Vibranium can be found in warped forests in the Nether.`, `(Y 80-127)`])
  e.add(`allthemodium:unobtainium_ore`, [`Unobtainium can be obtained from the Highland biomes in the End.`])
})

onEvent(`jei.add.items`, e => {
  e.add([
    `minecraft:dragon_egg`
  ])
})

onEvent(`jei.hide.items`, e => {
  e.hide([
    /quark:ancient_tome/,
    `quark:crate`,
    `quark:ravager_hide`,
    `quark:backpack`,
    `quark:slime_in_a_bucket`,
    `quark:trowel`,
    `quark:magnet`,
    `quark:soul_compass`,
    `quark:pipe`,
    `quark:boded_ravager_hide`,
    /quark:.*_shard/,
    /quark:.*_rune/,

    `@curios`,

    `@titanium`,

    `forbidden_arcanus:rotten_leather`,

    `appliedenergistics2:silicon`,
    `appliedenergistics2:flour`,
    /appliedenergistics2:facade/,

    `cyclic:tile_transporter_empty`,
    /cyclic:.*_pipe/,
    `cyclic:cable_wrench`,
    `cyclic:uncrafter`,
    `cyclic:sleeping_mat`,

    //`naturesaura:chunk_loader`,

    /extrastorage:disk_/,
    /extrastorage:storagepart_/,
    /extrastorage:block_/,
    `extrastorage:advanced_exporter`,
    `extrastorage:advanced_importer`,

    `bloodmagic:saltpeter`,
    `bloodmagic:sulfur`,
    `bloodmagic:coalsand`,
    `bloodmagic:ironsand`,
    `bloodmagic:goldsand`,

    /pedestals:dust/,
    /pedestals:pedestal\/stone(?!333)\d{3}/,

    `mekanism:copper_ore`,
    `mekanism:tin_ore`,
    `mekanism:osmium_ore`,
    `mekanism:uranium_ore`,
    `mekanism:lead_ore`,
    `mekanism:sawdust`,
    `mekanism:block_charcoal`,

    /immersiveengineering:.*coke$/,
    `immersiveengineering:slag`,

    /exnihilosequentia:ingot_/,

    `darkutils:ender_hopper`,

    /biggerreactors:yello/,

    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,

    /xreliquary:alkahestry_tome/,

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

    /tinyredstone:silicon/,

    `eidolon:sulfur`,
    `eidolon:lead_ore`,
    `eidolon:lead_ingot`,
    `eidolon:lead_block`,
    `eidolon:lead_nugget`,

    `mininggadgets:minerslight`,

    `platforms:ramp`,
    `platforms:rise`,
    `platforms:rail`,
    `platforms:floor`,
    `platforms:flat`,
    `platforms:frame`,

    /engineerstools:.+_grit/,

    `allthecompressed:nether_star_block`
  ])

  colors.forEach(color => {
    refined.forEach(refin => {
      e.hide([
        `refinedstorage:${color}_${refin}`
      ])
    })
  })

  const hideMetal = (mod, name, types) => {
    types.forEach(type => {
      const typeFirst = [`mekanism`, `immersiveengineering`]
      const id = typeFirst.includes(mod) ?
        `${mod}:${type}_${name}` :
        `${mod}:${name}_${type}`
      if (!Ingredient.of(id).isEmpty()) {
        e.hide(id)
      }
    })
  }

  //Hides items based name, format: `mod`, `metal`, [`type1`, `type2`, `etc`]
  hideMetal(`immersiveengineering`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `aluminum`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `uranium`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `steel`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `electrum`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `constantan`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])

  hideMetal(`mekanism`, `copper`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `tin`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `uranium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `lead`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `osmium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `bronze`, [`ingot`, `dust`, `nugget`, `block`])

  hideMetal(`create`, `copper`, [`ingot`, `ore`, `nugget`, `block`])
  hideMetal(`create`, `zinc`, [`ingot`, `ore`, `nugget`, `block`])

  hideMetal(`thermal`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `tin`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

  hideMetal(`iceandfire`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`iceandfire`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

  hideMetal(`tmechworks`, `copper`, [`ingot`, `ore`, `block`, `nugget`])
  hideMetal(`tmechworks`, `aluminum`, [`ingot`, `ore`, `block`, `nugget`])

  const hideStuff = (mod, type, names) => {
    names.forEach(name => {
      const typeFirst = [`mekanism`, `immersiveengineering`]
      const id = typeFirst.includes(mod) ?
        `${mod}:${type}_${name}` :
        `${mod}:${name}_${type}`
      if (!Ingredient.of(id).isEmpty()) {
        e.hide(id)
      }
    })
  }

  //Hides items based on type, format: `mod`, `type`, [`name1`, `name2`, `etc`]
  hideStuff(`immersiveengineering`, `dust`, [`iron`, `gold`, `sulfur`, `wood`])
  hideStuff(`immersiveengineering`, `plate`, [`iron`, `gold`, `copper`, `aluminum`, `lead`, `silver`, `nickel`, `constantan`, `electrum`])

  hideStuff(`mekanism`, `dust`, [`sulfur`, `lapis_lazuli`, `emerald`, `diamond`, `quartz`, `iron`, `gold`])
  hideStuff(`mekanism`, `crystal`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `shard`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `dirty_dust`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `clump`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])

  hideStuff(`appliedenergistics2`, `dust`, [`nether_quartz`, `ender`, `iron`, `gold`])

  hideStuff(`create`, `sheet`, [`iron`, `golden`, `copper`])

  hideStuff(`thermal`, `dust`, [`iron`, `gold`])
})

onEvent(`item.tooltip`, e => {
  refined.forEach(refin => {
    e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`)
  })
  e.add(`pedestals:pedestal/stone333`, [`Press show uses(default U) key on §6§lColored Pallet§r`, `to show different colored pedestals you can make.`])
  e.add(`allthemodium:teleport_pad`, Text.of(`The Mining dimension is disabled.`).red())
  e.add(`#resourcefulbees:valid_apiary`, `Valid Apiary Block`)
  e.add(`atmadditions:atm_star_shard`, `Check JEI Info page for more info`)
})