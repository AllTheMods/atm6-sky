events.listen('recipes', function (e) {
  const scale = 'mysticalagradditions:dragon_scale'

  function mainfusion(output, item1, item2, item3, item4, item5, item6, item7, item8) {
    e.recipes.mysticalagriculture.infusion({
      input: {
        item: 'mysticalagradditions:dragon_scale'
      },
      ingredients: [{
        item: item1
      },
      {
        item: item2
      },
      {
        item: item3
      },
      {
        item: item4
      },
      {
        item: item5
      },
      {
        item: item6
      },
      {
        item: item7
      },
      {
        item: item8
      }
      ],
      result: {
        item: output
      }
    })
  }

  function kittenBee(beds) {
    beds.forEach(bed => {
      mainfusion(`resourcefulbees:kitten_bee_spawn_egg`, scale, 'minecraft:cod', 'minecraft:cod', 'minecraft:salmon', 'minecraft:salmon', bed, 'botania:cosmetic_cat_ears', 'excompressum:cat_bait', 'excompressum:ocelot_bait')
    })
  }

  //egg recipes
  mainfusion(`resourcefulbees:aquamarine_bee_spawn_egg`, 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem')
  mainfusion(`resourcefulbees:quartz_bee_spawn_egg`, 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3')
  mainfusion(`resourcefulbees:crimson_iron_bee_spawn_egg`, 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_block', 'silentgear:crimson_steel_block', 'silentgear:crimson_steel_block')
  mainfusion(`resourcefulbees:cobbee_bee_spawn_egg`, 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3')
  mainfusion(`resourcefulbees:cropy_bee_spawn_egg`, 'thermal:phytogro', 'industrialforegoing:fertilizer', 'minecraft:bone_meal', 'mysticalagriculture:mystical_fertilizer', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio')
  mainfusion(`resourcefulbees:glowing_bee_spawn_egg`, 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight')
  mainfusion(`resourcefulbees:gravely_bee_spawn_egg`, 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4')
  mainfusion(`resourcefulbees:icey_bee_spawn_egg`, 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice')
  mainfusion(`resourcefulbees:lava_bee_spawn_egg`, 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal')
  mainfusion(`resourcefulbees:leafy_bee_spawn_egg`, 'compressium:dirt_4', 'compressium:dirt_4', 'compressium:dirt_4', 'compressium:dirt_4', 'minecraft:dried_kelp_block', 'quark:cactus_block', 'thermal:sugar_cane_block', 'thermal:bamboo_block')
  mainfusion(`resourcefulbees:lumber_bee_spawn_egg`, 'minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'astralsorcery:crystal_axe', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'astralsorcery:crystal_axe')
  mainfusion(`resourcefulbees:mana_bee_spawn_egg`, 'botania:mana_pylon', 'botania:mana_pylon', 'botania:natura_pylon', 'botania:natura_pylon', 'botania:gaia_pylon', 'botania:gaia_pylon', 'mythicbotany:alfsteel_pylon', 'mythicbotany:alfsteel_pylon')
  mainfusion(`resourcefulbees:mason_bee_spawn_egg`, 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4')
  mainfusion(`resourcefulbees:mystical_bee_spawn_egg`, 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer')
  mainfusion(`resourcefulbees:rgbee_bee_spawn_egg`, 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3')
  mainfusion(`resourcefulbees:sandy_bee_spawn_egg`, 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4')
  mainfusion(`resourcefulbees:water_bee_spawn_egg`, 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water')
  mainfusion(`resourcefulbees:beeper_bee_spawn_egg`, 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt')
  mainfusion(`resourcefulbees:ender_bee_spawn_egg`, 'thermal:enderium_block', 'thermal:enderium_block', 'thermal:enderium_block', 'naturesaura:chorus_generator', 'thermal:enderium_block', 'thermal:enderium_block', 'thermal:enderium_block', 'naturesaura:chorus_generator')
  mainfusion(`resourcefulbees:guardian_bee_spawn_egg`, 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike')
  mainfusion(`resourcefulbees:magma_bee_spawn_egg`, 'tconstruct:magma_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_bucket', 'cyclic:magma_bucket')
  mainfusion(`resourcefulbees:slimy_bee_spawn_egg`, 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl')
  mainfusion(`resourcefulbees:spider_bee_spawn_egg`, 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth')
  mainfusion(`resourcefulbees:spooky_bee_spawn_egg`, 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone')
  mainfusion(`resourcefulbees:zombee_bee_spawn_egg`, 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head')
  mainfusion(`resourcefulbees:kobee_beef_bee_spawn_egg`, 'minecraft:porkchop', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:beef')
  mainfusion(`resourcefulbees:cobalt_bee_spawn_egg`, 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_block', 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_block', 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_block', 'tconstruct:cobalt_ingot', 'tconstruct:cobalt_block')
  mainfusion(`resourcefulbees:salt_baee_bee_spawn_egg`, 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt', 'mekanism:block_salt')
  mainfusion(`resourcefulbees:stan_bee_spawn_egg`, 'minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt')
  mainfusion(`resourcefulbees:dirty_bee_spawn_egg`, 'minecraft:dirt', 'minecraft:mycelium', 'minecraft:coarse_dirt', 'minecraft:podzol', 'mob_grinding_utils:delightful_dirt', 'mob_grinding_utils:dreadful_dirt', 'engineersdecor:dense_grit_dirt_block', 'minecraft:grass')

  kittenBee([
    'minecraft:white_bed', 'minecraft:light_gray_bed', 'minecraft:gray_bed', 'minecraft:black_bed',
    'minecraft:red_bed', 'minecraft:orange_bed', 'minecraft:yellow_bed', 'minecraft:lime_bed',
    'minecraft:green_bed', 'minecraft:light_blue_bed', 'minecraft:cyan_bed', 'minecraft:blue_bed',
    'minecraft:purple_bed', 'minecraft:magenta_bed', 'minecraft:pink_bed', 'minecraft:brown_bed'
  ])

  //Honey Compatibility
  const honey = [
    'resourcefulbees:honey',
    'cyclic:honey',
    'create:honey',
  ]

  honey.forEach(type => {
    e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000))
  })

  const customhoney = [
    'resourcefulbees:rainbow_honey',
    'resourcefulbees:catnip_honey',
  ]

  customhoney.forEach(type => {
    e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
    e.shaped('compressium:honey_1', [
      'AAA',
      'AAA',
      'AAA'
    ], {
      A: `${type}_block`
    })
  })

  //Comb to Bucket
  e.shaped(`minecraft:water_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:water_honeycomb`,
    B: `minecraft:bucket`
  }).id(`kubejs:water_comb_bucket`)

  e.shaped(`minecraft:lava_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:lava_honeycomb`,
    B: `minecraft:bucket`
  }).id(`kubejs:lava_comb_bucket`)
})