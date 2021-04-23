events.listen('recipes', function (e) {
    const scale = 'mysticalagradditions:dragon_scale'
    var cuShaped = e.recipes.cucumber.shaped_no_mirror;
    const comb_types = [
        "certus",
        "diamond",
        "emerald",
        "fluorite",
        "lapis",
        "redstone",
        "allthemodium",
        "aluminum",
        "copper",
        "gold",
        "iron",
        "lead",
        "netherite",
        "nickel",
        "osmium",
        "platinum",
        "silver",
        "tin",
        "unobtainium",
        "uraninite",
        "uranium",
        "vibranium",
        "zinc",
        "coal",
        "obsidian",
        "soul_lava",
        "stoned",
        "blazing",
        "dragonic",
        "wither",
        "withered",
        "aquamarine",
        "quartz",
        "crimson_iron",
        "cobbee",
        "cropy",
        "glowing",
        "gravely",
        "icey",
        "lava",
        "leafy",
        "lumber",
        "mana",
        "mason",
        "mystical",
        "rgbee",
        "sandy",
        "water",
        "beeper",
        "ender",
        "guardian",
        "magma",
        "slimy",
        "spider",
        "spooky",
        "zombee"
    ]

    function energize(ingredient, result, rCount, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient,
            energy: power,
            result: {
                item: result,
                count: rCount
            }
        })
    }

    function mainfusion(output, middle, item1, item2, item3, item4, item5, item6, item7, item8) {
        e.recipes.mysticalagriculture.infusion({
            input: {
                item: middle
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

    //egg recipes
    mainfusion(`resourcefulbees:aquamarine_bee_spawn_egg`, scale, 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem', 'astralsorcery:aquamarine_sand_ore', 'astralsorcery:resonating_gem')
    mainfusion(`resourcefulbees:quartz_bee_spawn_egg`, scale, 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3', 'compressium:quartz_3')
    mainfusion(`resourcefulbees:crimson_iron_bee_spawn_egg`, scale, 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:golden_nether_banana', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_block', 'silentgear:crimson_steel_block', 'silentgear:crimson_steel_block')
    mainfusion(`resourcefulbees:cobbee_bee_spawn_egg`, scale, 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3', 'compressium:cobblestone_3')
    mainfusion(`resourcefulbees:cropy_bee_spawn_egg`, scale, 'thermal:phytogro', 'industrialforegoing:fertilizer', 'minecraft:bone_meal', 'mysticalagriculture:mystical_fertilizer', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_agglomeratio')
    mainfusion(`resourcefulbees:glowing_bee_spawn_egg`, scale, 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight', 'torchmaster:megatorch', 'minecraft:shroomlight')
    mainfusion(`resourcefulbees:gravely_bee_spawn_egg`, scale, 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4', 'excompressum:compressed_flint', 'compressium:gravel_4')
    mainfusion(`resourcefulbees:icey_bee_spawn_egg`, scale, 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice', 'thermal:blizz_powder', 'powah:dry_ice')
    mainfusion(`resourcefulbees:lava_bee_spawn_egg`, scale, 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal', 'bloodmagic:lavasigil', 'bloodmagic:lavacrystal')
    mainfusion(`resourcefulbees:leafy_bee_spawn_egg`, scale, 'compressium:dirt_4', 'compressium:dirt_4', 'compressium:dirt_4', 'compressium:dirt_4', 'minecraft:dried_kelp_block', 'quark:cactus_block', 'thermal:sugar_cane_block', 'thermal:bamboo_block')
    mainfusion(`resourcefulbees:lumber_bee_spawn_egg`, scale, 'minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'astralsorcery:crystal_axe', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log', 'astralsorcery:crystal_axe')
    mainfusion(`resourcefulbees:mana_bee_spawn_egg`, scale, 'botania:mana_pylon', 'botania:mana_pylon', 'botania:natura_pylon', 'botania:natura_pylon', 'botania:gaia_pylon', 'botania:gaia_pylon', 'mythicbotany:alfsteel_pylon', 'mythicbotany:alfsteel_pylon')
    mainfusion(`resourcefulbees:mason_bee_spawn_egg`, scale, 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4', 'ars_nouveau:mythical_clay', 'compressium:clay_4')
    mainfusion(`resourcefulbees:mystical_bee_spawn_egg`, scale, 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer', 'botania:jaded_amaranthus', 'botania:fertilizer')
    mainfusion(`resourcefulbees:rgbee_bee_spawn_egg`, scale, 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3', 'mysticalagriculture:dye_agglomeratio', 'compressium:lapis_3')
    mainfusion(`resourcefulbees:sandy_bee_spawn_egg`, scale, 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4', 'compressium:sand_4', 'compressium:redsand_4')
    mainfusion(`resourcefulbees:water_bee_spawn_egg`, scale, 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water', 'botania:rune_water')
    mainfusion(`resourcefulbees:beeper_bee_spawn_egg`, scale, 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt', 'thermal:gunpowder_block', 'minecraft:tnt')
    mainfusion(`resourcefulbees:ender_bee_spawn_egg`, scale, 'thermal:enderium_block', 'thermal:enderium_block', 'thermal:enderium_block', 'naturesaura:chorus_generator', 'thermal:enderium_block', 'thermal:enderium_block', 'thermal:enderium_block', 'naturesaura:chorus_generator')
    mainfusion(`resourcefulbees:guardian_bee_spawn_egg`, scale, 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike', 'exnihilosequentia:doll_guardian', 'xreliquary:guardian_spike')
    mainfusion(`resourcefulbees:magma_bee_spawn_egg`, scale, 'tconstruct:magma_cream_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_cream_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_cream_bucket', 'cyclic:magma_bucket', 'tconstruct:magma_cream_bucket', 'cyclic:magma_bucket')
    mainfusion(`resourcefulbees:slimy_bee_spawn_egg`, scale, 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl', 'industrialforegoing:pink_slime_ingot', 'xreliquary:slime_pearl')
    mainfusion(`resourcefulbees:spider_bee_spawn_egg`, scale, 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth', 'minecraft:fermented_spider_eye', 'silentgear:fine_silk_cloth')
    mainfusion(`resourcefulbees:spooky_bee_spawn_egg`, scale, 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone', 'mana-and-artifice:bone_ash', 'xreliquary:rib_bone')
    mainfusion(`resourcefulbees:zombee_bee_spawn_egg`, scale, 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head', 'eidolon:zombie_heart', 'minecraft:zombie_head')

    //Comb to Bucket
    e.shaped(`minecraft:water_bucket`, [
        ` C `,
        `CBC`,
        ` C `
    ], {
        C: `resourcefulbees:water_honeycomb`,
        B: `minecraft:bucket`
    }).id(`kubejs:water_comb_bucket`);
    e.shaped(`minecraft:lava_bucket`, [
        ` C `,
        `CBC`,
        ` C `
    ], {
        C: `resourcefulbees:lava_honeycomb`,
        B: `minecraft:bucket`
    }).id(`kubejs:lava_comb_bucket`);

    //Combs to dye
    const dyeShaped = (result, pattern) => {
        cuShaped(Item.of(`minecraft:${result}_dye`, 6), pattern, {
            C: `resourcefulbees:rgbee_honeycomb`
        });
        cuShaped(Item.of(`minecraft:${result}_dye`, 54), pattern, {
            C: `resourcefulbees:rgbee_honeycomb_block`
        });
    };
    dyeShaped(`red`, [
        `  C`,
        ` C `,
        ` C `
    ]);
    dyeShaped(`green`, [
        `  C`,
        `CC `,
        `   `
    ]);
    dyeShaped(`purple`, [
        `  C`,
        `  C`,
        ` C `
    ]);
    dyeShaped(`cyan`, [
        `C C`,
        ` C `,
        `   `
    ]);
    dyeShaped(`light_gray`, [
        ` C `,
        ` C `,
        `  C`
    ]);
    dyeShaped(`gray`, [
        `  C`,
        ` C `,
        `C  `
    ]);
    dyeShaped(`pink`, [
        `C  `,
        ` C `,
        `  C`
    ]);
    dyeShaped(`lime`, [
        `  C`,
        `  C`,
        `  C`
    ]);
    dyeShaped(`yellow`, [
        ` C `,
        ` C `,
        ` C `
    ]);
    dyeShaped(`light_blue`, [
        `C  `,
        `C  `,
        `C  `
    ]);
    dyeShaped(`magenta`, [
        `   `,
        `   `,
        `CCC`
    ]);
    dyeShaped(`orange`, [
        `   `,
        `CCC`,
        `   `
    ]);
    dyeShaped(`blue`, [
        `   `,
        ` C `,
        `C C`
    ]);
    dyeShaped(`brown`, [
        `  C`,
        ` C `,
        `  C`
    ]);
    dyeShaped(`black`, [
        `   `,
        `CC `,
        `  C`
    ]);
    dyeShaped(`white`, [
        `CCC`,
        `   `,
        `   `
    ]);

    //Combs to Mystical
    const mysticalShaped = (result, pattern) => {
        cuShaped(Item.of(`botania:${result}_mystical_flower`, 2), pattern, {
            C: `resourcefulbees:mystical_honeycomb`
        });
        cuShaped(Item.of(`botania:${result}_mystical_flower`, 18), pattern, {
            C: `resourcefulbees:mystical_honeycomb_block`
        });
    };

    mysticalShaped(`white`, [
        `  C`,
        ` C `,
        ` C `
    ]);
    mysticalShaped(`green`, [
        `  C`,
        `CC `,
        `   `
    ]);
    mysticalShaped(`purple`, [
        `  C`,
        `  C`,
        ` C `
    ]);
    mysticalShaped(`cyan`, [
        `C C`,
        ` C `,
        `   `
    ]);
    mysticalShaped(`light_gray`, [
        ` C `,
        ` C `,
        `  C`
    ]);
    mysticalShaped(`gray`, [
        `  C`,
        ` C `,
        `C  `
    ]);
    mysticalShaped(`pink`, [
        `C  `,
        ` C `,
        `  C`
    ]);
    mysticalShaped(`lime`, [
        `  C`,
        `  C`,
        `  C`
    ]);
    mysticalShaped(`yellow`, [
        ` C `,
        ` C `,
        ` C `
    ]);
    mysticalShaped(`light_blue`, [
        `C  `,
        `C  `,
        `C  `
    ]);
    mysticalShaped(`magenta`, [
        `   `,
        `   `,
        `CCC`
    ]);
    mysticalShaped(`orange`, [
        `   `,
        `CCC`,
        `   `
    ]);
    mysticalShaped(`blue`, [
        `   `,
        ` C `,
        `C C`
    ]);
    mysticalShaped(`brown`, [
        `  C`,
        ` C `,
        `  C`
    ]);
    mysticalShaped(`black`, [
        `   `,
        `CC `,
        `  C`
    ]);
    mysticalShaped(`red`, [
        `CCC`,
        `   `,
        `   `
    ]);

    //Combs to crop
    const cropComb = (result, pattern) => {
        cuShaped(Item.of(result, 3), pattern, {
            C: `resourcefulbees:cropy_honeycomb`
        });
        cuShaped(Item.of(result, 27), pattern, {
            C: `resourcefulbees:cropy_honeycomb_block`
        });
    };

    cropComb(`minecraft:wheat`, [
        `  C`,
        ` C `,
        ` C `
    ]);
    cropComb(`minecraft:beetroot`, [
        `  C`,
        `CC `,
        `   `
    ]);
    cropComb(`minecraft:carrot`, [
        `  C`,
        `  C`,
        ` C `
    ]);
    cropComb(`minecraft:potato`, [
        `C C`,
        ` C `,
        `   `
    ]);
    cropComb(`minecraft:melon_slice`, [
        ` C `,
        ` C `,
        `  C`
    ]);
    cropComb(`minecraft:pumpkin`, [
        `  C`,
        ` C `,
        `C  `
    ]);
    cropComb(`minecraft:bamboo`, [
        `C  `,
        ` C `,
        `  C`
    ]);
    cropComb(`minecraft:sweet_berries`, [
        `  C`,
        `  C`,
        `  C`
    ]);
    cropComb(`minecraft:brown_mushroom`, [
        ` C `,
        ` C `,
        ` C `
    ]);
    cropComb(`minecraft:red_mushroom`, [
        `C  `,
        `C  `,
        `C  `
    ]);

    comb_types.forEach(type => {
        e.recipes.thermal.press(`resourcefulbees:${type}_honeycomb_block`, [Item.of(`resourcefulbees:${type}_honeycomb`, 9), `thermal:press_packing_3x3_die`]);
        e.recipes.thermal.press(Item.of(`resourcefulbees:${type}_honeycomb`, 9), [`resourcefulbees:${type}_honeycomb_block`, `thermal:press_unpacking_die`]);
    });
});
