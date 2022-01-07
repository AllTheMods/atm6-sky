//priority: 1000
onEvent(`item.tags`, e => {
  e.add(`misctags:ore_pieces`, [/kubejs:piece_.*/, /exnihilosequentia:piece_.*/])
  e.add(`misctags:ore_chunks`, [/kubejs:chunk_.*/, /exnihilosequentia:chunk_.*/])
  e.add(`appliedenergistics2:dusts/ender`, `#forge:dusts/ender_pearl`)
  e.add(`forge:rubber`, [`thermal:cured_rubber`])
  e.add(`forge:ores/allthemodium`, `kubejs:chunk_mod`)
  e.add(`forge:ores/vibranium`, `kubejs:chunk_vib`)
  e.add(`forge:ores/unobtainium`, `kubejs:chunk_unob`)
  e.add(`forge:ores/osmium`, `kubejs:chunk_osmium`)
  e.add(`forge:swords`, [`allthemodium:alloy_paxel`])
  e.add(`forge:gems`, [`quark:biotite`, `psi:psigem`, `mekanism:fluorite_gem`, `iceandfire:amythest_gem`, `forbidden_arcanus:end_crystal_gem`, `astralsorcery:aquamarine`, `appliedenergistics2:fluix_crystal`, `appliedenergistics2:charged_certus_quartz_crystal`, `appliedenergistics2:certus_quartz_crystal`])
  e.add(`forge:dusts`, [`appliedenergistics2:sky_dust`, `appliedenergistics2:fluix_dust`, `appliedenergistics2:certus_quartz_dust`])
  e.add(`forge:dusts/certus_quartz`, [`appliedenergistics2:certus_quartz_dust`])
  e.add(`curios:curio`, [`simplemagnets:basicmagnet`, `simplemagnets:advancedmagnet`])
  e.add(`curios:angelring`, [`botania:flight_tiara`])
  e.add(`forge:ores/certus_quartz`, [`appliedenergistics2:quartz_ore`, `appliedenergistics2:charged_quartz_ore`])
  e.add(`forge:ores/dimensionalshard`, /rftoolsbase:dimensionalshard_.*/)
  e.add(`forge:plastic`, [`#pneumaticcraft:plastic_sheets`, `mekanism:hdpe_sheet`])
  e.add(`misctags:farmland/tier6`, [`mysticalagradditions:insanium_farmland`])
  e.add(`misctags:farmland/tier5`, [`mysticalagriculture:supremium_farmland`, `#misctags:farmland/tier6`])
  e.add(`misctags:farmland/tier4`, [`mysticalagriculture:imperium_farmland`, `#misctags:farmland/tier5`])
  e.add(`misctags:farmland/tier3`, [`mysticalagriculture:tertium_farmland`, `#misctags:farmland/tier4`])
  e.add(`misctags:farmland/tier2`, [`mysticalagriculture:prudentium_farmland`, `#misctags:farmland/tier3`])
  e.add(`misctags:farmland/tier1`, [`mysticalagriculture:inferium_farmland`, `#misctags:farmland/tier2`])
  e.add(`misctags:biofuel2`, [`#minecraft:saplings`, `#minecraft:leaves`, `#forge:seeds`, `minecraft:dried_kelp`, `minecraft:kelp`, `minecraft:seagrass`, `minecraft:grass`])
  e.add(`misctags:biofuel4`, [`#forge:fruits`, `minecraft:tall_grass`, `minecraft:nether_sprouts`, `minecraft:dried_kelp_block`, `minecraft:cactus`, `minecraft:sugar_cane`, `minecraft:weeping_vines`, `minecraft:twisting_vines`, `minecraft:vine`, `minecraft:melon_slice`])
  e.add(`misctags:biofuel5`, [`#forge:vegetables`, `#forge:cookies`, `#forge:flour_plants`, `#forge:mushrooms`, `#forge:mushroom_stems`, `#minecraft:flowers`, `minecraft:lily_pad`, `minecraft:sea_pickle`, `minecraft:shroomlight`, `minecraft:large_fern`, `minecraft:fern`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:carved_pumpkin`, `minecraft:nether_wart`, `minecraft:cocoa_beans`])
  e.add(`misctags:biofuel7`, [`#minecraft:wart_blocks`, `#forge:mushroom_caps`, `minecraft:baked_potato`, `minecraft:hay_block`, `#forge:bread`])
  e.add(`misctags:biofuel8`, [`minecraft:cake`, `minecraft:pumpkin_pie`])
  e.add(`forge:axes`, [`engineerstools:redia_tool`])
  e.add(`forge:shovels`, [`engineerstools:redia_tool`])
  e.add(`forge:pickaxes`, [`allthemodium:alloy_pick`, `engineerstools:redia_tool`])
  e.add(`minecraft:stone_tool_materials`, [`#forge:stone`, `#forge:cobblestone`])
  e.add(`minecraft:stone_crafting_materials`, [`#forge:stone`, `#forge:cobblestone`])
  e.add(`appliedenergistics2:nether_quartz_dust`, `#forge:dusts/quartz`)
  e.add(`appliedenergistics2:dusts/nether_quartz`, `#forge:dusts/quartz`)
  e.add(`appliedenergistics2:dusts/quartz`, `#forge:dusts/quartz`)
  e.add(`appliedenergistics2:purified_crystals`, /appliedenergistics2:purified_.*/)
  e.add(`forge:seeds`, [`immersiveengineering:seed`])
  e.add(`engineerstools:musli_bar_seeds`, `#forge:seeds`)
  e.add(`forge:ingots`, [`#forge:ingots/unobtainium_allthemodium_alloy`, `#forge:ingots/vibranium_unobtainium_alloy`, `#forge:ingots/vibranium_allthemodium_alloy`])
  e.add(`forge:mushrooms`, [`minecraft:warped_fungus`, `minecraft:crimson_fungus`])
  e.add(`misctags:bat_wing`, [`xreliquary:bat_wing`, `forbidden_arcanus:bat_wing`])
  e.add('dankstorage:blacklisted_usage', ['/^usefulbackpacks:/'])
  e.add(`forge:storage_blocks/nether_star`, `kubejs:nether_star_block`)
  e.add(`forge:storage_blocks/aquamarine`, `kubejs:aquamarine_block`)
  e.add(`forge:storage_blocks/fluorite`, `kubejs:fluorite_block`)
  e.add(`forge:storage_blocks/lithium`, `kubejs:lithium_block`)
  e.add(`minecraft:wart_blocks`, [/.*_wart_block/])
  e.add(`forge:axes`, [/.*_axe/, /.*_paxel/, /.*:axe_.*/])
  e.add(`forge:pickaxes`, [/.*_pickaxe/, /.*_paxel/, /.*:pickaxe_.*/])
  e.add(`forge:shovels`, [/.*_shovel/, /.*_paxel/, /.*:shovel_.*/])
  e.add(`forge:swords`, [/.*_sword/, /.*:sword_.*/])
  e.add(`forge:hoes`, [/.*_hoe/, /.*:hoe_.*/])
  e.add(`integrateddynamics:menril_logs`, /integrateddynamics:menril_log/)
  e.add(`create:crushed_ores`, /.*:crushed_.*_ore/)
  e.add(`refinedstorage:crafting_tables`, [`craftingstation:crafting_station`, `cyclic:workbench`])
  e.add(`excompressum:heavy_sieve`, `excompressum:spruce_heavy_sieve`)
  e.add(`thermal:crafting/dies`, /woot:.*_die$/)

  //Flower tags for Resourceful bees
  e.add(`misctags:flowers/draconic_flowers`, [`minecraft:dragon_egg`])
  e.add(`misctags:flowers/end_flowers`, [`minecraft:chorus_flower`, `minecraft:chorus_plant`])
  e.add(`misctags:flowers/forest_flowers`, [`#minecraft:flowers`, `minecraft:sweet_berries`])
  e.add(`misctags:flowers/glowing_flowers`, [`minecraft:shroomlight`, `minecraft:glowstone`, `minecraft:redstone_lamp`])
  e.add(`misctags:flowers/magical_flowers`, [`#botania:e.add_flowers`, `#botania:mystical_flowers`, `#botania:double_mystical_flowers`])
  e.add(`misctags:flowers/nether_flowers`, [`minecraft:crimson_fungus`, `minecraft:warped_fungus`, `minecraft:nether_wart`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:weeping_vines`, `minecraft:twisting_vines`])
  e.add(`misctags:flowers/swamp_flowers`, [`minecraft:lily_pad`, `minecraft:sugar_cane`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`])
  e.add(`misctags:flowers/wither_flowers`, [`minecraft:wither_rose`])

  //Remove
  e.remove(`minecraft:small_flowers`, `#botania:special_flowers`) //Removed special flowers from tag so they don't get generated by botanical void miner
  e.remove(`curios:charm`, [`simplemagnets:basicmagnet`, `simplemagnets:advancedmagnet`])
  e.remove(`forge:leather`, `forbidden_arcanus:rotten_leather`)
  e.remove(`engineerstools:musli_bar_food_blacklisted`, `minecraft:chicken`)
  e.remove(`forge:nether_stars`, `forbidden_arcanus:dark_nether_star`)
  e.remove(`appliedenergistics2:glass`, [`#forge:glass`, `minecraft:glass`])
  e.remove(`appliedenergistics2:metal_ingots`, [`#forge:ingots/gold`, `#forge:ingots/iron`])
  e.remove(`appliedenergistics2:wool`, `#minecraft:wool`)
  e.remove(`appliedenergistics2:workbench`, `minecraft:crafting_table`)
  e.remove(`forge:dyes/yellow`, `mekanism:dust_sulfur`)
  e.remove(`forge:clay`, `minecraft:clay`)
  e.remove(`minecraft:beehives`, [`resourcefulbees:t1_beehive`, `resourcefulbees:t2_beehive`, `resourcefulbees:t3_beehive`, `resourcefulbees:t4_beehive`])
})

//Block tags go here
onEvent(`block.tags`, e => {
  //Add
  e.add(`forge:ores/certus_quartz`, [`appliedenergistics2:quartz_ore`, `appliedenergistics2:charged_quartz_ore`])
  e.add(`forge:ores/dimensionalshard`, /rftoolsbase:dimensionalshard_.*/)
  e.add(`ftbchunks:interact_whitelist`, [/compactmachines:.*/, `#minecraft:buttons`])
  e.add(`misctags:concrete`, /minecraft:.*_concrete/)
  e.add(`misctags:no_moving`, [/refinedstorage:.*/, /extrastorage:.*/, /waystones:.*/, /appliedenergistics2:.*/, `#minecraft:wither_immune`, `appliedenergistics2:cable_bus`, /compactmachines:.*/, /compactcrafting:.*/])
  e.add(`mekanism:cardboard_blacklist`, `#misctags:no_moving`)

  e.add(`forge:mushrooms`, [`minecraft:warped_fungus`, `minecraft:crimson_fungus`])
  e.add(`forge:storage_blocks/aquamarine`, `kubejs:aquamarine_block`)
  e.add(`forge:storage_blocks/fluorite`, `kubejs:fluorite_block`)
  e.add(`forge:storage_blocks/lithium`, `kubejs:lithium_block`)
  e.add(`forge:storage_blocks/nether_star`, `kubejs:nether_star_block`)
  e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
  e.add(`cyclic:scythe_brush`, `#minecraft:flowers`)

  //Flower tags for Resourceful bees
  e.add(`misctags:flowers/draconic_flowers`, [`minecraft:dragon_egg`])
  e.add(`misctags:flowers/end_flowers`, [`minecraft:chorus_flower`, `minecraft:chorus_plant`])
  e.add(`misctags:flowers/forest_flowers`, [`#minecraft:flowers`, `minecraft:sweet_berry_bush`])
  e.add(`misctags:flowers/glowing_flowers`, [`minecraft:shroomlight`, `minecraft:glowstone`, `minecraft:redstone_lamp`])
  e.add(`misctags:flowers/magical_flowers`, [`#botania:flowers`, `#botania:mystical_flowers`, `#botania:double_mystical_flowers`])
  e.add(`misctags:flowers/nether_flowers`, [`minecraft:crimson_fungus`, `minecraft:warped_fungus`, `minecraft:nether_wart`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:weeping_vines`, `minecraft:twisting_vines`])
  e.add(`misctags:flowers/swamp_flowers`, [`minecraft:lily_pad`, `minecraft:sugar_cane`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`])
  e.add(`misctags:flowers/wither_flowers`, [`minecraft:wither_rose`])

  //No Moving
  e.add('misctags:no_moving', [
    '#minecraft:wither_immune',
    'appliedenergistics2:cable_bus',
    'cookingforblockheads:fridge',
    /^refinedstorage:/,
    /^extrastorage:/,
    /^waystones:/,
    /^compactmachines:/,
    /^appliedenergistics2:/,
  ])
  e.add('create:brittle', '#misctags:no_moving')
  //Removal
  e.removeAll(`minecraft:enderman_holdable`)
})

//Entity tags
onEvent('entity_type.tags', e => {
  e.add('industrialforegoing:mob_imprisonment_tool_blacklist', [
    /resourcefulbees:.+_bee/,
    /iceandfire:.+_dragon/,
    'iceandfire:dragon_multipart',
    'iceandfire:dragon_egg',])
  e.add('mob_grinding_utils:noswab', [
    /resourcefulbees:.+_bee/,
    /iceandfire:.+_dragon/,
    'iceandfire:dragon_multipart',
    'iceandfire:dragon_egg',])
})

//Fluid tags go here
onEvent(`fluid.tags`, e => {
  //Add
  e.add(`forge:essence`, [`pneumaticcraft:memory_essence`, `cyclic:xpjuice`])
  e.add(`forge:creosote`, `thermal:creosote`)
  e.add(`forge:latex`, `thermal:latex`)
  e.add(`forge:crude_oil`, `thermal:crude_oil`)
})