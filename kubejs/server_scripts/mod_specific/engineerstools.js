events.listen('recipes', e => {
  const tags = [
    "tin",
    "platinum",
    "zinc",
    "osmium"
  ]

  const special_tags = [
    "allthemodium",
    "vibranium",
    "unobtainium"
  ]

  tags.forEach(tag => {
    e.custom({
      type: "engineerstools:crafting_extended_shapeless",
      ingredients: [
        {
          tag: `forge:ores/${tag}`
        },
        {
          item: "engineerstools:crushing_hammer"
        }
      ],
      result: {
        item: `alltheores:${tag}_dust`,
        count: 2
      },
      aspects: {
        tool: "engineerstools:crushing_hammer",
        tool_damage: 10
      }
    })
  })

  special_tags.forEach(tag => {
    e.custom({
      type: "engineerstools:crafting_extended_shapeless",
      ingredients: [
        {
          tag: `forge:ores/${tag}`
        },
        {
          item: "engineerstools:crushing_hammer"
        }
      ],
      result: {
        item: `allthemodium:${tag}_dust`,
        count: 2
      },
      aspects: {
        tool: "engineerstools:crushing_hammer",
        tool_damage: 15
      }
    })
  })
})
