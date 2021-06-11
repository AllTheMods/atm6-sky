onEvent(`recipes`, e => {
  function drillB(result, min, max, weight, lens, bList) {
    let calc_weight = Math.ceil(weight * 0.15)

    if (calc_weight > 1) {
      e.custom({
        type: `industrialforegoing:laser_drill_ore`,
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: {},
          blacklist: bList,
          depth_min: min,
          depth_max: max,
          weight: weight
        }, {
          whitelist: {},
          blacklist: bList,
          depth_min: 0,
          depth_max: 255,
          weight: calc_weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    } else {
      e.custom({
        type: `industrialforegoing:laser_drill_ore`,
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: {},
          blacklist: bList,
          depth_min: min,
          depth_max: max,
          weight: weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    }
  }

  function drillW(result, min, max, weight, lens, wList) {
    let calc_weight = Math.ceil(weight * 0.15)

    if (calc_weight > 1) {
      e.custom({
        type: `industrialforegoing:laser_drill_ore`,
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: wList,
          blacklist: {},
          depth_min: min,
          depth_max: max,
          weight: weight
        }, {
          whitelist: wList,
          blacklist: {},
          depth_min: 0,
          depth_max: 255,
          weight: calc_weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    } else {
      e.custom({
        type: `industrialforegoing:laser_drill_ore`,
        output: Item.of(result).toResultJson(),
        rarity: [{
          whitelist: wList,
          blacklist: {},
          depth_min: min,
          depth_max: max,
          weight: weight
        }],
        pointer: 0,
        catalyst: Ingredient.of(`industrialforegoing:laser_lens${lens}`).toJson()
      })
    }
  }

  function drillOw(result, min, max, weight, lens) {
    drillB(result, min, max, weight, lens, {
      type: `minecraft:worldgen/biome`,
      values: [
        `minecraft:the_end`,
        `minecraft:the_void`,
        `minecraft:small_end_islands`,
        `minecraft:end_barrens`,
        `minecraft:end_highlands`,
        `minecraft:end_midlands`,
        "minecraft:nether_wastes",
        "minecraft:basalt_deltas",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
      ]
    })
  }

  function drillNet(result, min, max, weight, lens) {
    drillW(result, min, max, weight, lens, {
      type: `minecraft:worldgen/biome`,
      values: [
        "minecraft:nether_wastes",
        "minecraft:basalt_deltas",
        "minecraft:warped_forest",
        "minecraft:crimson_forest",
        "minecraft:soul_sand_valley"
      ]
    })
  }

  function drillEnd(result, min, max, weight, lens) {
    drillW(result, min, max, weight, lens, {
      type: `minecraft:worldgen/biome`,
      values: [
        `minecraft:the_end`,
        `minecraft:the_void`,
        `minecraft:small_end_islands`,
        `minecraft:end_barrens`,
        `minecraft:end_highlands`,
        `minecraft:end_midlands`
      ]
    })
  }

  drillOw(`rftoolsbase:dimensionalshard_overworld`, 0, 32, 6, 0)
  drillOw(`astralsorcery:rock_crystal_ore`, 8, 32, 10, 0)
  drillOw(`astralsorcery:aquamarine_sand_ore`, 54, 72, 6, 3)
  drillOw(`ars_nouveau:arcane_ore`, 42, 60, 6, 2)
  drillOw(`appliedenergistics2:quartz_ore`, 33, 53, 20, 3)
  drillOw(`mysticalagriculture:prosperity_ore`, 0, 80, 20, 0)
  drillOw(`mysticalagriculture:inferium_ore`, 0, 32, 20, 5)
  drillNet(`mysticalagriculture:soulium_ore`, 0, 32, 20, 12)
  drillOw(`powah:uraninite_ore`, 4, 36, 7, 13)
  drillOw(`thermal:apatite_ore`, 39, 48, 6, 3)
  drillOw(`forbidden_arcanus:arcane_crystal_ore`, 0, 32, 12, 0)
  drillOw(`forbidden_arcanus:runestone`, 16, 32, 11, 10)
  drillOw(`forbidden_arcanus:dark_runestone`, 10, 18, 9, 7)
  drillOw(`forbidden_arcanus:xpetrified_ore`, 0, 42, 14, 5)
  drillOw(`forbidden_arcanus:stella_arcanum`, 15, 20, 1, 7)
  drillNet(`silentgear:crimson_iron_ore`, 25, 45, 16, 6)
  drillEnd(`silentgear:azure_silver_ore`, 18, 32, 14, 10)
  drillOw(`mana-and-artifice:vinteum_ore`, 5, 68, 20, 11)
  //drill(ore, min_height, max_height, weight, lens)
})
