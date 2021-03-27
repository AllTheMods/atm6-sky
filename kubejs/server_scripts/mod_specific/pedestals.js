onEvent(`recipes`, e => {
  var coinRF = [
    `import`,
    `export`,
    `crusher`,
    `smelter`,
    `sawmill`,
    `quarry`,
    `quarryb`
  ];
  var coinXP = [
    `dropper`,
    `magnet`
  ];

  coinRF.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`#forge:storage_blocks/redstone`).toJson()
      ],
      result: Item.of(`pedestals:coin/rf${name}`).toResultJson()
    });
  });
  coinXP.forEach(name => {
    e.custom({
      type: `allthemodium:atmshapeless_crafting`,
      ingredients: [
        Ingredient.of(`pedestals:coin/${name}`).toJson(),
        Ingredient.of(`minecraft:experience_bottle`).toJson()
      ],
      result: Item.of(`pedestals:coin/xp${name}`).toResultJson()
    });
  });

  const pedestalCrush = (result, count, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };

  const pedestalSaw = (result, count, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_sawing`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result, count).toResultJson(),
    });
  };
  const cobbleGen = (result, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_cobblegen`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    });
  };
  const cobbleGenSilk = (result, ingredient) => {
    e.custom({
      type: `pedestals:pedestal_cobblegensilk`,
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    });
  };
  cobbleGen(`mysticalagriculture:soulstone_cobble`, `mysticalagriculture:soulium_block`);
  cobbleGenSilk(`mysticalagriculture:soulstone`, `mysticalagriculture:soulium_block`);
  cobbleGen(`astralsorcery:marble_raw`, `astralsorcery:marble_bricks`);
  cobbleGen(`enviromats:marble`, `enviromats:marble_brick`);
  e.remove({
    id: `appliedenergistics2:grinder/flour`
  });
  var pedSawRemove = [
    `#minecraft:signs`,
    `#minecraft:wooden_stairs`,
    `#minecraft:wooden_slabs`,
    `#minecraft:wooden_trapdoors`,
    `#minecraft:wooden_pressure_plates`,
    `minecraft:stick`,
  ];
  pedSawRemove.forEach(pedsr => {
    e.remove({
      output: pedsr,
      type: `pedestals:pedestal_sawing`
    });
  });
  pedestalCrush(`pamhc2foodcore:flouritem`, 1, `#forge:flour_plants`);
  pedestalCrush(`appliedenergistics2:fluix_dust`, 1, `appliedenergistics2:fluix_crystal`);
  pedestalCrush(`appliedenergistics2:certus_quartz_dust`, 1, `#forge:gems/certus_quartz`);
  pedestalCrush(`thermal:quartz_dust`, 1, `#forge:gems/quartz`);
  pedestalCrush(`mekanism:dust_fluorite`, 1, `#forge:gems/fluorite`);
  pedestalSaw(`thermal:sawdust`, 1, `#forge:rods/wooden`);
  pedestalSaw(`minecraft:stick`, 4, `#minecraft:planks`);
  pedestalSaw(`minecraft:stick`, 2, `#minecraft:wooden_slabs`);
});
