events.listen('recipes', e => {
  const cuShaped = e.recipes.cucumber.shaped_no_mirror
  const colors = [
    `white`,
    `light_gray`,
    `gray`,
    `black`,
    `red`,
    `orange`,
    `yellow`,
    `lime`,
    `green`,
    `light_blue`,
    `cyan`,
    `blue`,
    `purple`,
    `magenta`,
    `pink`,
    `brown`
  ]
  const craftingShapes = [
    //vertical
    [
      '  C',
      '  C',
      '  C'
    ], [
      ' C ',
      ' C ',
      ' C '
    ], [
      'C  ',
      'C  ',
      'C  '
    ],
    //horizontal 
    [
      'CCC',
      '   ',
      '   '
    ], [
      '   ',
      'CCC',
      '   '
    ], [
      '   ',
      '   ',
      'CCC'
    ],
    //diagonal
    [
      '  C',
      ' C ',
      'C  '
    ], [
      'C  ',
      ' C ',
      '  C'
    ],
    //misc
    [
      '  C',
      ' C ',
      ' C '
    ], [
      ' C ',
      'C  ',
      'C  '
    ], [
      '  C',
      'CC ',
      '   '
    ], [
      '   ',
      '  C',
      'CC '
    ], [
      '  C',
      '  C',
      ' C '
    ], [
      ' C ',
      ' C ',
      'C  '
    ], [
      'C C',
      ' C ',
      '   '
    ], [
      '   ',
      'C C',
      ' C '
    ], [
      ' C ',
      ' C ',
      '  C'
    ], [
      'C  ',
      'C  ',
      ' C '
    ], [
      '   ',
      ' C ',
      'C C'
    ], [
      ' C ',
      'C C',
      '   '
    ], [
      '  C',
      ' C ',
      '  C'
    ], [
      ' C ',
      'C  ',
      ' C '
    ], [
      '   ',
      'CC ',
      '  C'
    ], [
      'CC ',
      '  C',
      '   '
    ]
  ] // 25 now
  const dyes = []
  const botaniaFlowers = []
  colors.forEach(color => {
    dyes.push(`minecraft:${color}_dye`)
    botaniaFlowers.push(`botania:${color}_mystical_flower`)
  })
  const crops = [
    `minecraft:wheat`,
    `minecraft:beetroot`,
    `minecraft:carrot`,
    `minecraft:potato`,
    `minecraft:melon_slice`,
    `minecraft:pumpkin`,
    `minecraft:bamboo`,
    `minecraft:sweet_berries`,
    `minecraft:brown_mushroom`,
    `minecraft:red_mushroom`
  ]
  const meat = [
    `minecraft:porkchop`,
    `minecraft:beef`,
    `minecraft:cod`,
    `minecraft:salmon`,
    `minecraft:chicken`,
    `minecraft:rabbit`,
    `minecraft:mutton`
  ]
  const stones = [
    `minecraft:andesite`,
    `minecraft:diorite`,
    `minecraft:granite`,
    `minecraft:basalt`,
    `create:gabbro`,
    `create:dolomite`,
    `create:weathered_limestone`,
    `create:limestone`,
    `create:scoria`,
    `create:dark_scoria`,
    `quark:brimstone`,
    `quark:slate`,
    `quark:jasper`,
    `quark:limestone`,
    `quark:basalt`,
    `astralsorcery:marble_raw`
  ]

  function shapedRecipe(results_, craftingItem_, itemCount_) {
    const maxLength = Math.min(craftingShapes.length, results_.length)
    for (let i = 0; i < maxLength; i++) {
      cuShaped({
        pattern: craftingShapes[i],
        key: {
          C: {
            item: craftingItem_
          }
        },
        result: {
          item: results_[i],
          count: itemCount_
        }
      })
    }
  }

  shapedRecipe(dyes, `resourcefulbees:rainbow_honey_block`, 32)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb`, 2)
  shapedRecipe(botaniaFlowers, `resourcefulbees:mystical_honeycomb_block`, 18)
  shapedRecipe(crops, `resourcefulbees:cropy_honeycomb`, 3)
  shapedRecipe(crops, `resourcefulbees:cropy_honeycomb_block`, 27)
  shapedRecipe(meat, `resourcefulbees:kobee_beef_honeycomb`, 3)
  shapedRecipe(meat, `resourcefulbees:kobee_beef_honeycomb_block`, 27)
  shapedRecipe(stones, `resourcefulbees:stan_honeycomb`, 2)
  shapedRecipe(stones, `resourcefulbees:stan_honeycomb_block`, 18)
})