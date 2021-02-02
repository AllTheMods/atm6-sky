//priority: 1000
onEvent(`item.tags`, e => {
  e.add(`appliedenergistics2:dusts/ender`, `#forge:dusts/ender_pearl`);
  e.add(`forge:rubber`, [`thermal:cured_rubber`]);
  e.add(`forge:ores/allthemodium`, `kubejs:chunk_mod`);
  e.add(`forge:ores/vibranium`, `kubejs:chunk_vib`);
  e.add(`forge:ores/unobtainium`, `kubejs:chunk_unob`);
  e.add(`forge:swords`, [`allthemodium:alloy_paxel`]);
  e.add(`forge:dusts/certus_quartz`, [`appliedenergistics2:certus_quartz_dust`]);
  e.add(`curios:curio`, [`simplemagnets:basicmagnet`, `simplemagnets:advancedmagnet`]);
  e.add(`curios:angelring`, [`botania:flight_tiara`]);
  e.add(`forge:ores/certus_quartz`, [`appliedenergistics2:quartz_ore`, `appliedenergistics2:charged_quartz_ore`]);
  e.add(`forge:ores/dimensionalshard`, /rftoolsbase:dimensionalshard_.*/);
  e.add(`forge:plastic`, [`#pneumaticcraft:plastic_sheets`, /* `silents_mechanisms:plastic_sheet`, */ `mekanism:hdpe_sheet`]);
  e.add(`misctags:farmland/tier6`, [`mysticalagradditions:insanium_farmland`]);
  e.add(`misctags:farmland/tier5`, [`mysticalagriculture:supremium_farmland`, `#misctags:farmland/tier6`]);
  e.add(`misctags:farmland/tier4`, [`mysticalagriculture:imperium_farmland`, `#misctags:farmland/tier5`]);
  e.add(`misctags:farmland/tier3`, [`mysticalagriculture:tertium_farmland`, `#misctags:farmland/tier4`]);
  e.add(`misctags:farmland/tier2`, [`mysticalagriculture:prudentium_farmland`, `#misctags:farmland/tier3`]);
  e.add(`misctags:farmland/tier1`, [`mysticalagriculture:inferium_farmland`, `#misctags:farmland/tier2`]);
  e.add(`misctags:biofuel2`, [`#minecraft:saplings`, `#minecraft:leaves`, `#forge:seeds`, `minecraft:dried_kelp`, `minecraft:kelp`, `minecraft:seagrass`, `minecraft:grass`]);
  e.add(`misctags:biofuel4`, [`#forge:fruits`, `minecraft:tall_grass`, `minecraft:nether_sprouts`, `minecraft:dried_kelp_block`, `minecraft:cactus`, `minecraft:sugar_cane`, `minecraft:weeping_vines`, `minecraft:twisting_vines`, `minecraft:vine`, `minecraft:melon_slice`]);
  e.add(`misctags:biofuel5`, [`#forge:vegetables`, `#forge:cookies`, `#forge:flour_plants`, `#forge:mushrooms`, `#forge:mushroom_stems`, `#minecraft:flowers`, `minecraft:lily_pad`, `minecraft:sea_pickle`, `minecraft:shroomlight`, `minecraft:large_fern`, `minecraft:fern`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:carved_pumpkin`, `minecraft:nether_wart`, `minecraft:cocoa_beans`]);
  e.add(`misctags:biofuel7`, [`#minecraft:wart_blocks`, `#forge:mushroom_caps`, `minecraft:baked_potato`, `minecraft:hay_block`, `#forge:bread`]);
  e.add(`misctags:biofuel8`, [`minecraft:cake`, `minecraft:pumpkin_pie`]);
  //e.add(`forge:axes`, [`byg:pendorite_battleaxe`, `engineerstools:redia_tool`]);
  //e.add(`forge:shovels`, [`engineerstools:redia_tool`]);
  e.add(`forge:pickaxes`, [`allthemodium:alloy_pick` /* , `engineerstools:redia_tool` */ ]);
  e.add(`minecraft:stone_tool_materials`, [`#forge:stone`, `#forge:cobblestone`]);
  e.add(`minecraft:stone_crafting_materials`, [`#forge:stone`, `#forge:cobblestone`]);
  e.add(`appliedenergistics2:nether_quartz_dust`, `#forge:dusts/quartz`);
  e.add(`appliedenergistics2:dusts/nether_quartz`, `#forge:dusts/quartz`);
  e.add(`appliedenergistics2:dusts/quartz`, `#forge:dusts/quartz`);
  e.add(`appliedenergistics2:purified_crystals`, /appliedenergistics2:purified_.*/);
  e.add(`forge:seeds`, [ /* `bluepower:flax_seeds`,  */ `immersiveengineering:seed`]);
  //e.add(`engineerstools:musli_bar_seeds`, `#forge:seeds`);
  e.add(`forge:ingots`, [`#forge:ingots/unobtainium_allthemodium_alloy`, `#forge:ingots/vibranium_unobtainium_alloy`, `#forge:ingots/vibranium_allthemodium_alloy`]);
  e.add(`forge:mushrooms`, [`minecraft:warped_fungus`, `minecraft:crimson_fungus`]);
  e.add(`misctags:bat_wing`, [`xreliquary:bat_wing`, `forbidden_arcanus:bat_wing`]);
  /*
  e.add(`misctags:flowers/draconic_flowers`, [`minecraft:dragon_egg`]);
  e.add(`misctags:flowers/end_flowers`, [`minecraft:chorus_flower`, `minecraft:chorus_plant`]);
  e.add(`misctags:flowers/forest_flowers`, [`#minecraft:flowers`, `minecraft:sweet_berries`]);
  e.add(`misctags:flowers/glowing_flowers`, [`minecraft:shroomlight`, `minecraft:glowstone`, `minecraft:redstone_lamp`]);
  e.add(`misctags:flowers/magical_flowers`, [`#botania:e.add_flowers`, `#botania:mystical_flowers`, `#botania:double_mystical_flowers`]);
  e.add(`misctags:flowers/nether_flowers`, [`minecraft:crimson_fungus`, `minecraft:warped_fungus`, `minecraft:nether_wart`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:weeping_vines`, `minecraft:twisting_vines`]);
  e.add(`misctags:flowers/swamp_flowers`, [`byg:tiny_lilypads`, `byg:reeds`, `byg:cattail`, `minecraft:lily_pad`, `minecraft:sugar_cane`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`]);
  e.add(`misctags:flowers/wither_flowers`, [`minecraft:wither_rose`]);
  */
  e.add(`forge:storage_blocks/nether_star`, `kubejs:nether_star_block`);
  e.add(`forge:storage_blocks/aquamarine`, `kubejs:aquamarine_block`);
  e.add(`forge:storage_blocks/fluorite`, `kubejs:fluorite_block`);
  e.add(`forge:storage_blocks/lithium`, `kubejs:lithium_block`);
  e.add(`minecraft:wart_blocks`, [/.*_wart_block/]);
  e.add(`forge:axes`, [/.*_axe/, /.*_paxel/, /.*:axe_.*/]);
  e.add(`forge:pickaxes`, [/.*_pickaxe/, /.*_paxel/, /.*:pickaxe_.*/]);
  e.add(`forge:shovels`, [/.*_shovel/, /.*_paxel/, /.*:shovel_.*/]);
  e.add(`forge:swords`, [/.*_sword/, /.*:sword_.*/]);
  e.add(`forge:hoes`, [/.*_hoe/, /.*:hoe_.*/]);
  e.add(`integrateddynamics:menril_logs`, /integrateddynamics:menril_log/);
  e.add(`create:crushed_ores`, /.*:crushed_.*_ore/);
  e.add(`forge:dusts`, /#forge:dusts\/.*/);
  e.add(`forge:gems`, /#forge:gems\/.*/);
  e.add(`forge:ores`, /#forge:ores\/.*/);
  e.add(`forge:ingots`, /#forge:ingots\/.*/);
  e.add(`forge:storage_blocks`, /#forge:storage_blocks\/.*/);

  //Remove
  e.remove(`curios:charm`, [`simplemagnets:basicmagnet`, `simplemagnets:advancedmagnet`]);
  e.remove(`forge:dusts/certus_quartz`, `jaopca:dusts.certus_quartz`);
  e.remove(`forge:leather`, `forbidden_arcanus:rotten_leather`);
  e.remove(`engineerstools:musli_bar_food_blacklisted`, `minecraft:chicken`);
  e.remove(`forge:nether_stars`, `forbidden_arcanus:dark_nether_star`);
  e.remove(`appliedenergistics2:glass`, [`#forge:glass`, `minecraft:glass`]);
  e.remove(`appliedenergistics2:metal_ingots`, [`#forge:ingots/gold`, `#forge:ingots/iron`]);
  e.remove(`appliedenergistics2:wool`, `#minecraft:wool`);
  e.remove(`appliedenergistics2:workbench`, `minecraft:crafting_table`);
  e.remove(`forge:dyes/yellow`, `mekanism:dust_sulfur`);
  //e.remove(`minecraft:beehives`, [`resourcefulbees:t1_beehive`, `resourcefulbees:t2_beehive`, `resourcefulbees:t3_beehive`, `resourcefulbees:t4_beehive`]);
});

//Block tags go here
onEvent(`block.tags`, e => {
  //Add
  e.add(`forge:ores/certus_quartz`, [`appliedenergistics2:quartz_ore`, `appliedenergistics2:charged_quartz_ore`]);
  e.add(`forge:ores/dimensionalshard`, /rftoolsbase:dimensionalshard_.*/);
  e.add(`ftbchunks:interact_whitelist`, [/compactmachines:.*/, `#minecraft:buttons`]);
  e.add(`misctags:concrete`, /minecraft:.*_concrete/);
  e.add(`misctags:no_moving`, [/refinedstorage:.*/, /extrastorage:.*/, /waystones:.*/, /appliedenergistics2:.*/, `#minecraft:wither_immune`, `appliedenergistics2:cable_bus`, /compactmachines:.*/, /compactcrafting:.*/]); // `potionsmaster:cauldron`,
  e.add(`mekanism:cardboard_blacklist`, `#misctags:no_moving`);
  /*
  e.add(`bagofyurting:blacklist`, `#misctags:no_moving`);
  e.add(`misctags:flowers/draconic_flowers`, [`minecraft:dragon_egg`]);
  e.add(`misctags:flowers/end_flowers`, [`minecraft:chorus_flower`, `minecraft:chorus_plant`]);
  e.add(`misctags:flowers/forest_flowers`, [`#minecraft:flowers`, `minecraft:sweet_berry_bush`]);
  e.add(`misctags:flowers/glowing_flowers`, [`minecraft:shroomlight`, `minecraft:glowstone`, `minecraft:redstone_lamp`]);
  e.add(`misctags:flowers/magical_flowers`, [`#botania:e.add_flowers`, `#botania:mystical_flowers`, `#botania:double_mystical_flowers`]);
  e.add(`misctags:flowers/nether_flowers`, [`minecraft:crimson_fungus`, `minecraft:warped_fungus`, `minecraft:nether_wart`, `minecraft:crimson_roots`, `minecraft:warped_roots`, `minecraft:weeping_vines`, `minecraft:twisting_vines`]);
  e.add(`misctags:flowers/swamp_flowers`, [`byg:tiny_lilypads`, `byg:reeds`, `byg:cattail`, `minecraft:lily_pad`, `minecraft:sugar_cane`, `minecraft:brown_mushroom`, `minecraft:red_mushroom`]);
  e.add(`misctags:flowers/wither_flowers`, [`minecraft:wither_rose`]);
  */
  e.add(`forge:mushrooms`, [`minecraft:warped_fungus`, `minecraft:crimson_fungus`]);
  e.add(`forge:storage_blocks/aquamarine`, `kubejs:aquamarine_block`);
  e.add(`forge:storage_blocks/fluorite`, `kubejs:fluorite_block`);
  e.add(`forge:storage_blocks/lithium`, `kubejs:lithium_block`);
  e.add(`forge:storage_blocks/nether_star`, `kubejs:nether_star_block`);
  e.add(`cyclic:scythe_brush`, `#minecraft:flowers`);
  e.add(`forge:storage_blocks`, /#forge:storage_blocks\/.*/);
  e.add(`forge:ores`, /#forge:ores\/.*/);

  /*
  //Resourceful Bees Apiary Tags
  //Removed  as it was not coming up as a valid item.
  e.add(`resourcefulbees:valid_apiary`, [`#repurposed_structures:nether_stronghold_bookshelves`, `#misctags:concrete`, `#mcwwindows:window`, `modularrouters:item_router`, `botania:mana_glass`, `botania:elf_glass`, `minecraft:soul_sand`, `#minecraft:nylium`, `byg:nylium_soul_sand`, `byg:nylium_soul_soil`, `minecraft:soul_soil`, `minecraft:glowstone`, `minecraft:water`]);
  e.add(`resourcefulbees:valid_apiary`, [`#minecraft:base_stone_nether`, `#minecraft:stone_bricks`, `#minecraft:wart_blocks`, `#minecolonies:decoblocks`, `#forge:bookshelves`, `#forge:cobblestone`, `#forge:mushroom_caps`, `#forge:mushroom_stems`, `#forge:terracotta`]);
  e.add(`resourcefulbees:valid_apiary`, [`minecraft:white_glazed_terracotta`, `minecraft:orange_glazed_terracotta`, `minecraft:magenta_glazed_terracotta`, `minecraft:light_blue_glazed_terracotta`, `minecraft:yellow_glazed_terracotta`, `minecraft:lime_glazed_terracotta`, `minecraft:pink_glazed_terracotta`, `minecraft:gray_glazed_terracotta`, `minecraft:light_gray_glazed_terracotta`, `minecraft:cyan_glazed_terracotta`, `minecraft:purple_glazed_terracotta`, `minecraft:blue_glazed_terracotta`, `minecraft:brown_glazed_terracotta`, `minecraft:green_glazed_terracotta`, `minecraft:red_glazed_terracotta`, `minecraft:black_glazed_terracotta`]);
  e.add(`resourcefulbees:valid_apiary`, [`minecraft:polished_basalt`, `minecraft:crying_obsidian`, `minecraft:smooth_quartz`, `minecraft:quartz_pillar`, `minecraft:quartz_bricks`, `minecraft:chiseled_quartz_block`, `minecraft:chiseled_nether_bricks`, `minecraft:cracked_nether_bricks`, `minecraft:nether_bricks`, `minecraft:red_nether_bricks`]);
  e.add(`resourcefulbees:valid_apiary`, [`minecraft:purpur_block`, `minecraft:purpur_pillar`, `minecraft:end_stone_bricks`]);
  e.add(`resourcefulbees:valid_apiary`, [`minecraft:sea_lantern`, `minecraft:dark_prismarine`, `minecraft:prismarine_bricks`, `minecraft:prismarine`]);
  //Removed `minecraft:permafrost_bricks` as they are replaced by Quark
  e.add(`resourcefulbees:valid_apiary`, [`minecraft:bone_block`, `minecraft:smooth_stone`]);
  //Quark
  e.add(`resourcefulbees:valid_apiary`, [`#quark:crystal`, `quark:red_crystal_pane`, `quark:orange_crystal_pane`, `quark:yellow_crystal_pane`, `quark:green_crystal_pane`, `quark:blue_crystal_pane`, `quark:indigo_crystal_pane`, `quark:violet_crystal_pane`, `quark:white_crystal_pane`, `quark:black_crystal_pane`]);
  e.add(`resourcefulbees:valid_apiary`, [`#quark:vertical_slab`, `quark:vertical_white_stained_planks`, `quark:vertical_orange_stained_planks`, `quark:vertical_magenta_stained_planks`, `quark:vertical_light_blue_stained_planks`, `quark:vertical_yellow_stained_planks`, `quark:vertical_lime_stained_planks`, `quark:vertical_pink_stained_planks`, `quark:vertical_gray_stained_planks`, `quark:vertical_light_gray_stained_planks`, `quark:vertical_cyan_stained_planks`, `quark:vertical_purple_stained_planks`, `quark:vertical_blue_stained_planks`, `quark:vertical_brown_stained_planks`, `quark:vertical_green_stained_planks`, `quark:vertical_red_stained_planks`, `quark:vertical_black_stained_planks`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:white_stained_planks`, `quark:orange_stained_planks`, `quark:magenta_stained_planks`, `quark:light_blue_stained_planks`, `quark:yellow_stained_planks`, `quark:lime_stained_planks`, `quark:pink_stained_planks`, `quark:gray_stained_planks`, `quark:light_gray_stained_planks`, `quark:cyan_stained_planks`, `quark:purple_stained_planks`, `quark:blue_stained_planks`, `quark:brown_stained_planks`, `quark:green_stained_planks`, `quark:red_stained_planks`, `quark:black_stained_planks`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:sandy_bricks`, `quark:snow_bricks`, `quark:charred_nether_bricks`, `quark:blue_nether_bricks`, `quark:sandstone_bricks`, `quark:red_sandstone_bricks`, `quark:soul_sandstone_bricks`, `quark:magma_bricks`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:biotite_block`, `quark:smooth_biotite`, `quark:chiseled_biotite_block`, `quark:biotite_pillar`, `quark:biotite_bricks`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:granite_bricks`, `quark:chiseled_granite_bricks`, `quark:granite_pavement`, `quark:granite_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:diorite_bricks`, `quark:chiseled_diorite_bricks`, `quark:diorite_pavement`, `quark:diorite_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:andesite_bricks`, `quark:chiseled_andesite_bricks`, `quark:andesite_pavement`, `quark:andesite_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:marble_bricks`, `quark:chiseled_marble_bricks`, `quark:marble_pavement`, `quark:marble_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:limestone_bricks`, `quark:chiseled_limestone_bricks`, `quark:limestone_pavement`, `quark:limestone_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:jasper_bricks`, `quark:chiseled_jasper_bricks`, `quark:jasper_pavement`, `quark:jasper_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:slate_bricks`, `quark:chiseled_slate_bricks`, `quark:slate_pavement`, `quark:slate_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:basalt_bricks`, `quark:chiseled_basalt_bricks`, `quark:basalt_pavement`, `quark:basalt_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:sugar_cane_block`, `quark:bamboo_block`, `quark:cactus_block`, `quark:chorus_fruit_block`, `quark:stick_block`, `quark:midori_block`, `quark:midori_pillar`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:shingles`, `quark:white_shingles`, `quark:orange_shingles`, `quark:magenta_shingles`, `quark:light_blue_shingles`, `quark:yellow_shingles`, `quark:lime_shingles`, `quark:pink_shingles`, `quark:gray_shingles`, `quark:light_gray_shingles`, `quark:cyan_shingles`, `quark:purple_shingles`, `quark:blue_shingles`, `quark:brown_shingles`, `quark:green_shingles`, `quark:red_shingles`, `quark:black_shingles`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:elder_prismarine`, `quark:elder_prismarine_bricks`, `quark:dark_elder_prismarine`, `quark:elder_sea_lantern`, `quark:myalite_crystal`, `quark:duskbound_block`, `quark:duskbound_lantern`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:brimstone_bricks`, `quark:blaze_lantern`, `quark:soul_sandstone`, `quark:chiseled_soul_sandstone`, `quark:cut_soul_sandstone`, `quark:smooth_soul_sandstone`]);
  e.add(`resourcefulbees:valid_apiary`, [`quark:lit_lamp`, `quark:paper_wall`, `quark:paper_wall_big`, `quark:paper_wall_sakura`]);
  */
  //e.add(`resourcefulbees:valid_apiary`, [/mcwwindows:.*_win/, /mcwroofs:.*_roof/, /darkutils:filter_.*/, /rftoolsbuilder:.*/, /enviromats:alabaster.*/]); //, ^\\w+_glass$

  //Removal
  e.removeAll(`minecraft:enderman_holdable`);
});

//Fluid tags go here
onEvent(`fluid.tags`, e => {
  //Add
  e.add(`forge:essence`, `pneumaticcraft:memory_essence`);
  e.add(`forge:creosote`, `thermal:creosote`);
  e.add(`forge:latex`, `thermal:latex`);
  e.add(`forge:crude_oil`, `thermal:crude_oil`);
});