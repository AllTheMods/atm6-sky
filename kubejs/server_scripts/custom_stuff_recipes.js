onEvent(`recipes`, e => {
  e.shapeless(`kubejs:rotten_leather`, [`minecraft:rotten_flesh`, `minecraft:rotten_flesh`, `minecraft:rotten_flesh`])
  e.smelting(Item.of(`minecraft:leather`), `kubejs:rotten_leather`).xp(0.5)
  e.recipes.minecraft.smoking(Item.of(`minecraft:leather`), `kubejs:rotten_leather`).xp(0.5)

  e.custom({
    type: `botania:runic_altar`,
    output: Item.of(`kubejs:rune_of_sins`).toResultJson(),
    mana: 25000,
    ingredients: [
      Ingredient.of(`#botania:runes/lust`).toJson(),
      Ingredient.of(`#botania:runes/gluttony`).toJson(),
      Ingredient.of(`#botania:runes/greed`).toJson(),
      Ingredient.of(`#botania:runes/sloth`).toJson(),
      Ingredient.of(`#botania:runes/wrath`).toJson(),
      Ingredient.of(`#botania:runes/envy`).toJson(),
      Ingredient.of(`#botania:runes/pride`).toJson()
    ]
  })

  e.custom({
    type: `botania:petal_apothecary`,
    output: Item.of(`kubejs:mass_of_wills`).toResultJson(),
    ingredients: [
      Ingredient.of(`botania:ancient_will_ahrim`).toJson(),
      Ingredient.of(`botania:ancient_will_dharok`).toJson(),
      Ingredient.of(`botania:ancient_will_guthan`).toJson(),
      Ingredient.of(`botania:ancient_will_torag`).toJson(),
      Ingredient.of(`botania:ancient_will_verac`).toJson(),
      Ingredient.of(`botania:ancient_will_karil`).toJson()
    ]
  })

  e.custom({
    type: `mysticalagriculture:infusion`,
    input: Ingredient.of(`botania:overgrowth_seed`).toJson(),
    ingredients: [
      Ingredient.of(`botania:gaia_ingot`).toJson(),
      Ingredient.of(`mysticalagradditions:insanium_block`).toJson(),
      Ingredient.of(`botania:gaia_ingot`).toJson(),
      Ingredient.of(`mysticalagradditions:insanium_block`).toJson(),
      Ingredient.of(`botania:gaia_ingot`).toJson(),
      Ingredient.of(`mysticalagradditions:insanium_block`).toJson(),
      Ingredient.of(`botania:gaia_ingot`).toJson(),
      Ingredient.of(`mysticalagradditions:insanium_block`).toJson()
    ],
    result: Item.of(`kubejs:magical_soil`).toResultJson()
  })

  function customBlock(block, item) {
    e.shapeless(Item.of(item, 9), block)
    e.shaped(block, [
      `AAA`,
      `AAA`,
      `AAA`
    ], {
      A: item
    })
  }

  customBlock(`kubejs:nether_star_block`, `minecraft:nether_star`)
  customBlock(`kubejs:aquamarine_block`, `astralsorcery:aquamarine`)
  customBlock(`kubejs:fluorite_block`, `mekanism:fluorite_gem`)
  customBlock(`kubejs:lithium_block`, `mekanism:dust_lithium`)
  customBlock(`botania:blaze_block`, `#forge:rods/blaze`)
})