onEvent('recipes', e => {
    let drill = (result, min, max, weight, lens) => {
        let calc_weight = Math.ceil(weight * 0.15);

        if (calc_weight > 1) {
            e.custom({
                type: 'industrialforegoing:laser_drill_ore',
                output: Item.of(result).toResultJson(),
                rarity: [{
                    whitelist: {},
                    blacklist: {},
                    depth_min: min,
                    depth_max: max,
                    weight: weight
                }, {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 255,
                    weight: calc_weight
                }],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
            });
        } else {
            e.custom({
                type: 'industrialforegoing:laser_drill_ore',
                output: Item.of(result).toResultJson(),
                rarity: [{
                    whitelist: {},
                    blacklist: {},
                    depth_min: min,
                    depth_max: max,
                    weight: weight
                }],
                pointer: 0,
                catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
            });
        }
    };
    /*
    type: 'minecraft:worldgen/biome',
        values: [
            'minecraft:the_end',
            'minecraft:the_void',
            'minecraft:small_end_islands',
            'minecraft:end_barrens',
            'minecraft:end_highlands',
            'minecraft:end_midlands'
        ]
    */
    drill('rftoolsbase:dimensionalshard_overworld', 0, 32, 6, 0);
    drill('astralsorcery:rock_crystal_ore', 8, 32, 10, 0);
    drill('astralsorcery:aquamarine_sand_ore', 54, 72, 6, 3);
    drill('ars_nouveau:arcane_ore', 42, 60, 6, 2);
    drill('appliedenergistics2:quartz_ore', 33, 53, 20, 3);
    drill('mysticalagriculture:prosperity_ore', 0, 80, 20, 0);
    drill('mysticalagriculture:inferium_ore', 0, 32, 20, 5);
    drill('mysticalagriculture:soulium_ore', 0, 32, 20, 12);
    drill('powah:uraninite_ore', 4, 36, 7, 13);
    drill('thermal:apatite_ore', 39, 48, 6, 3);
    drill('forbidden_arcanus:arcane_crystal_ore', 0, 32, 12, 0);
    drill('forbidden_arcanus:runestone', 16, 32, 11, 10);
    drill('forbidden_arcanus:dark_runestone', 10, 18, 9, 7);
    drill('forbidden_arcanus:xpetrified_ore', 0, 42, 14, 5);
    drill('forbidden_arcanus:stella_arcanum', 15, 20, 1, 7);
    drill('silentgear:crimson_iron_ore', 25, 45, 16, 6);
    drill('silentgear:azure_silver_ore', 18, 32, 14, 10);
    //drill(ore, min_height, max_height, weight, lens);
});