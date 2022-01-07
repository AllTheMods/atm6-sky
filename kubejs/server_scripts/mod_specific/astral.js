onEvent(`recipes`, e => {
  function transmutate(block, output, starlight) {
    e.custom({
      type: `astralsorcery:block_transmutation`,
      input: [{
        block: block
      }],
      output: {
        block: output
      },
      starlight: starlight
    })
  }

  function altar(tier, duration, starlight, pattern, items, result) {
    e.custom({
      type: `astralsorcery:altar`,
      altar_type: tier,
      duration: duration,
      starlight: starlight,
      pattern: pattern,
      key: items,
      output: [result.toResultJson()],
      effects: [
        `astralsorcery:built_in_effect_discovery_central_beam`
      ]
    })
  }

  //Transmutation recipes
  transmutate(`minecraft:spruce_sapling`, `integrateddynamics:menril_sapling`, 100)

  //Altar recipes
  altar(0, 100, 200, [
    `_____`,
    `_131_`,
    `_242_`,
    `_131_`,
    `_____`
  ], {
    1: Ingredient.of(`#forge:gems/emerald`).toJson(),
    2: Ingredient.of(`astralsorcery:glass_lens`).toJson(),
    3: Ingredient.of(`astralsorcery:liquid_starlight_bucket`).toJson(),
    4: Ingredient.of(`#forge:gems/arcane_crystal`).toJson()
  }, Item.of(`astralsorcery:rock_crystal_ore`))

  altar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:ingots/iron`).toJson(),
    2: Ingredient.of(`#forge:dusts/glowstone`).toJson(),
    3: Ingredient.of(`minecraft:clay_ball`).toJson(),
    4: Ingredient.of(`#forge:leather`).toJson()
  }, Item.of(`astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:armara`
    }
  }))
  altar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#minecraft:saplings`).toJson(),
    2: Ingredient.of(`minecraft:sugar_cane`).toJson(),
    3: Ingredient.of(`#minecraft:seeds`).toJson(),
    4: Ingredient.of(`#astralsorcery:stardust`).toJson()
  }, Item.of(`astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:aevitas`
    }
  }))
  altar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:feathers`).toJson(),
    2: Ingredient.of(`#minecraft:fishes`).toJson(),
    3: Ingredient.of(`#forge:string`).toJson(),
    4: Ingredient.of(`#forge:sugar/sugar`).toJson()
  }, Item.of(`astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:vicio`
    }
  }))
  altar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`minecraft:flint`).toJson(),
    2: Ingredient.of(`#forge:dusts/redstone`).toJson(),
    3: Ingredient.of(`#minecraft:arrows`).toJson(),
    4: Ingredient.of(`#forge:ingots/iron`).toJson()
  }, Item.of(`astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:discidia`
    }
  }))
  altar(0, 100, 200, [
    `_____`,
    `_1A2_`,
    `_DBD_`,
    `_3C4_`,
    `_____`
  ], {
    A: Ingredient.of(`#forge:feathers`).toJson(),
    B: Ingredient.of(`astralsorcery:parchment`).toJson(),
    C: Ingredient.of(`#forge:dyes/black`).toJson(),
    D: Ingredient.of(`#astralsorcery:stardust`).toJson(),
    1: Ingredient.of(`#forge:cobblestone`).toJson(),
    2: Ingredient.of(`minecraft:tnt`).toJson(),
    3: Ingredient.of(`#forge:gunpowder`).toJson(),
    4: Ingredient.of(`minecraft:flint`).toJson()
  }, Item.of(`astralsorcery:constellation_paper`, {
    astralsorcery: {
      constellationName: `astralsorcery:evorsio`
    }
  }))
})
