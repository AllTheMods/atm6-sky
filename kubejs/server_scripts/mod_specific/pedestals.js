onEvent(`recipes`, e => {
  const coinRF = [
    `import`,
    `export`,
    `crusher`,
    `smelter`,
    `sawmill`,
    `quarry`,
    `quarryb`
  ]

  const coinXP = [
    `dropper`,
    `magnet`
  ]

  coinRF.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`#forge:storage_blocks/redstone`).toJson()
      ],
      result: Item.of(`pedestals:coin/rf${name}`).toResultJson()
    })
  })

  coinXP.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`minecraft:experience_bottle`).toJson()
      ],
      result: Item.of(`pedestals:coin/xp${name}`).toResultJson()
    })
  })

  function pedestalCrush(result, count, ingredient) {
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    })
  }

  function pedestalSaw(result, count, ingredient) {
    e.custom({
      type: `pedestals:pedestal_sawing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    })
  }

  function cobbleGen(result, ingredient) {
    e.custom({
      type: `pedestals:pedestal_cobblegen`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  function cobbleGenSilk(result, ingredient) {
    e.custom({
      type: `pedestals:pedestal_cobblegensilk`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  cobbleGen(`mysticalagriculture:soulstone_cobble`, `mysticalagriculture:soulium_block`)
  cobbleGenSilk(`mysticalagriculture:soulstone`, `mysticalagriculture:soulium_block`)
  cobbleGen(`astralsorcery:marble_raw`, `astralsorcery:marble_bricks`)
  cobbleGen(`enviromats:marble`, `enviromats:marble_brick`)

  e.remove({
    id: `appliedenergistics2:grinder/flour`
  })

  const pedSawRemove = [
    `#minecraft:signs`,
    `#minecraft:wooden_stairs`,
    `#minecraft:wooden_slabs`,
    `#minecraft:wooden_trapdoors`,
    `#minecraft:wooden_pressure_plates`,
    `minecraft:stick`,
  ]

  pedSawRemove.forEach(pedsr => {
    e.remove({
      output: pedsr,
      type: `pedestals:pedestal_sawing`
    })
  })

  pedestalCrush(`pamhc2foodcore:flouritem`, 1, `#forge:flour_plants`)
  pedestalCrush(`appliedenergistics2:fluix_dust`, 1, `appliedenergistics2:fluix_crystal`)
  pedestalCrush(`appliedenergistics2:certus_quartz_dust`, 1, `#forge:gems/certus_quartz`)
  pedestalCrush(`thermal:quartz_dust`, 1, `#forge:gems/quartz`)
  pedestalCrush(`mekanism:dust_fluorite`, 1, `#forge:gems/fluorite`)

  pedestalSaw(`thermal:sawdust`, 1, `#forge:rods/wooden`)
  pedestalSaw(`minecraft:stick`, 4, `#minecraft:planks`)
  pedestalSaw(`minecraft:stick`, 2, `#minecraft:wooden_slabs`)

  // Remove Fluid XP Conversiond defaults.
  e.remove({ id: 'pedestals:pedestal_fluid_to_xp/if_essence_to_xp' })
  e.remove({ id: 'pedestals:pedestal_fluid_to_xp/lava_to_xp' })

  // With default settings, cyclic appears to use a 91/1 ratio here.
  // This already created a kind of fluid xp loop which is very hard
  // to fix, so we simply do our best to not make it worse.
  const expMappings = [
    ['industrialforegoing:essence_bucket', 91],
    ['cyclic:xpjuice_bucket', 91],
    ['integrateddynamics:bucket_menril_resin', 60],
    ['bloodmagic:life_essence_bucket', 60], // Some automation can make this a double tap, so it's not 1:1 with xp.
    ['minecraft:lava_bucket', 5], // Since lava is trivially infinite, make it even less profitable.
  ]

  function registerPedestalsFluidConversion(tup) {
    const id = tup[0]
    const amt = tup[1]

    if (!!id && !!amt) {
      e.custom({
        type: 'pedestals:pedestal_fluid_to_xp',
        ingredient: {
          item: id
        },
        result: {
          item: "minecraft:experience_bottle",
          count: amt
        },
      })
    } else {
      console.warn('Skipped invalid recipe for Pedestals fluid conversion')
    }
  }

  expMappings.forEach(registerPedestalsFluidConversion)
})

// Limit Break Pedestals.
onEvent('item.tags', event => {
  event.get('pedestals:enchant_limits/advanced_blacklist').remove('pedestals:coin/xpanvil')
})

