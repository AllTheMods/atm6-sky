onEvent(`recipes`, e => {
  function mShaped(result, pattern, count) {
    e.custom({
      type: `cucumber:shaped_no_mirror`,
      pattern: pattern,
      key: {
        U: {
          item: `kubejs:uu_matter`
        }
      },
      result: Item.of(result, !!count ? count : 1).toResultJson()
    })
  }

  //Unobtanium
  e.custom({
    type: `mekanism:nucleosynthesizing`,
    itemInput: {
      ingredient: Ingredient.of(`#forge:dusts/unobtainium_vibranium_alloy`).toJson()
    },
    gasInput: {
      amount: 1,
      gas: `mekanism:antimatter`
    },
    output: Item.of(`kubejs:uu_matter`, 16).toResultJson(),
    duration: 1000
  })

  e.custom({
    type: `psi:trick_crafting`,
    input: Ingredient.of(`#forge:dusts/unobtainium_vibranium_alloy`).toJson(),
    output: Item.of(`kubejs:uu_matter`, 4).toResultJson(),
    cad: {
      item: `psi:cad_assembly_psimetal`
    },
    trick: `psi:trick_ebony_ivory`
  })

  mShaped(`alltheores:ore_aluminum`, [
    ` UU`,
    `UUU`,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_copper`, [
    `U U`,
    `UUU`,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_lead`, [
    `UU `,
    `UUU`,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_nickel`, [
    `UUU`,
    ` UU`,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_osmium`, [
    `UUU`,
    `U U`,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_platinum`, [
    `UUU`,
    `UU `,
    `UUU`
  ], 12)
  mShaped(`alltheores:ore_silver`, [
    `UUU`,
    `UUU`,
    ` UU`
  ], 12)
  mShaped(`alltheores:ore_tin`, [
    `UUU`,
    `UUU`,
    `U U`
  ], 12)
  mShaped(`alltheores:ore_uranium`, [
    `UUU`,
    `UUU`,
    `UU `
  ], 12)
  mShaped(`alltheores:ore_zinc`, [
    ` UU`,
    `UUU`,
    `UU `
  ], 12)
  mShaped(`minecraft:gold_ore`, [
    ` UU`,
    `UUU`,
    ` UU`
  ], 12)
  mShaped(`minecraft:iron_ore`, [
    `UU `,
    `UUU`,
    `UU `
  ], 12)
  mShaped(`minecraft:nether_quartz_ore`, [
    `UUU`,
    `UUU`,
    `U U`
  ], 12)
  mShaped(`minecraft:redstone`, [
    `U U`,
    `U  `,
    `U U`
  ], 16)
  mShaped(`minecraft:glowstone_dust`, [
    `U U`,
    `  U`,
    `U U`
  ], 16)
  mShaped(`minecraft:end_stone`, [
    `U U`,
    `UUU`,
    `UUU`
  ], 32)
  mShaped(`minecraft:slime_ball`, [
    `U U`,
    `   `,
    `U U`
  ], 16)
  mShaped(`industrialforegoing:plastic`, [
    `U U`,
    `U U`,
    `U U`
  ], 4)
  mShaped(`minecraft:white_wool`, [
    ` U `,
    `U U`,
    ` U `
  ], 16)
  mShaped(`minecraft:obsidian`, [
    `UUU`,
    `U U`,
    `UUU`
  ], 16)
  mShaped(`minecraft:oak_log`, [
    ` U `,
    `UUU`,
    ` U `
  ], 32)
  mShaped(`minecraft:bone`, [
    `  U`,
    ` U `,
    `U  `
  ], 8)
  mShaped(`minecraft:leather`, [
    `U  `,
    ` U `,
    `  U`
  ], 4)
  mShaped(`minecraft:gunpowder`, [
    `U U`,
    ` U `,
    `U U`
  ], 16)
})