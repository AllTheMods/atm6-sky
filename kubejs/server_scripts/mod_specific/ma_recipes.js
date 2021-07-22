onEvent(`recipes`, e => {
  //Functions
  function plus(result, count, name) {
    e.shaped(Item.of(result, count), [
      ` a `,
      `aaa`,
      ` a `
    ], {
      a: `mysticalagriculture:${name}_essence`
    })
  }

  function circle(result, count, name) {
    e.shaped(Item.of(result, count), [
      `aaa`,
      `a a`,
      `aaa`
    ], {
      a: `mysticalagriculture:${name}_essence`
    })
  }

  //Recipes
  e.shaped(Item.of(`minecraft:grass`, 12), [
    ` a `,
    `a a`
  ], {
    a: `mysticalagriculture:nature_essence`
  })

  circle(`allthemodium:allthemodium_nugget`, 1, `allthemodium`)
  circle(`allthemodium:vibranium_nugget`, 1, `vibranium`)
  circle(`allthemodium:unobtainium_nugget`, 1, `unobtainium`)

  circle(`silentgear:azure_electrum_ingot`, 4, `azure_electrum`)
  circle(`silentgear:azure_silver_ingot`, 6, `azure_silver`)
  circle(`silentgear:crimson_iron_ingot`, 6, `crimson_iron`)
  circle(`silentgear:crimson_steel_ingot`, 4, `crimson_steel`)
})
