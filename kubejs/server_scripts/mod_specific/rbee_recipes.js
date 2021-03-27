onEvent(`recipes`, e => {
  var cuShaped = e.recipes.cucumber.shaped_no_mirror;

  //Comb to Bucket
  e.shaped(`minecraft:water_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:water_honeycomb`,
    B: `minecraft:bucket`
  }).id(`kubejs:water_comb_bucket`);
  e.shaped(`minecraft:lava_bucket`, [
    ` C `,
    `CBC`,
    ` C `
  ], {
    C: `resourcefulbees:lava_honeycomb`,
    B: `minecraft:bucket`
  }).id(`kubejs:lava_comb_bucket`);

  //Combs to dye
  const dyeShaped = (result, pattern) => {
    cuShaped(Item.of(`minecraft:${result}_dye`, 6), pattern,
      {
        C: `resourcefulbees:rgbee_honeycomb`
      }
    );
    cuShaped(Item.of(`minecraft:${result}_dye`, 54),pattern,
      {
        C: `resourcefulbees:rgbee_honeycomb_block`
      }
    );
  };
  dyeShaped(`red`, [
    `  C`,
    ` C `,
    ` C `
  ]);
  dyeShaped(`green`, [
    `  C`,
    `CC `,
    `   `
  ]);
  dyeShaped(`purple`, [
    `  C`,
    `  C`,
    ` C `
  ]);
  dyeShaped(`cyan`, [
    `C C`,
    ` C `,
    `   `
  ]);
  dyeShaped(`light_gray`, [
    ` C `,
    ` C `,
    `  C`
  ]);
  dyeShaped(`gray`, [
    `  C`,
    ` C `,
    `C  `
  ]);
  dyeShaped(`pink`, [
    `C  `,
    ` C `,
    `  C`
  ]);
  dyeShaped(`lime`, [
    `  C`,
    `  C`,
    `  C`
  ]);
  dyeShaped(`yellow`, [
    ` C `,
    ` C `,
    ` C `
  ]);
  dyeShaped(`light_blue`, [
    `C  `,
    `C  `,
    `C  `
  ]);
  dyeShaped(`magenta`, [
    `   `,
    `   `,
    `CCC`
  ]);
  dyeShaped(`orange`, [
    `   `,
    `CCC`,
    `   `
  ]);
  dyeShaped(`blue`, [
    `   `,
    ` C `,
    `C C`
  ]);
  dyeShaped(`brown`, [
    `  C`,
    ` C `,
    `  C`
  ]);
  dyeShaped(`black`, [
    `   `,
    `CC `,
    `  C`
  ]);
  dyeShaped(`white`, [
    `CCC`,
    `   `,
    `   `
  ]);

  //Combs to Mystical
  const mysticalShaped = (result, pattern) => {
    cuShaped(Item.of(`botania:${result}_mystical_flower`, 2), pattern, {
      C: `resourcefulbees:mystical_honeycomb`
    });
    cuShaped(Item.of(`botania:${result}_mystical_flower`, 18), pattern, {
      C: `resourcefulbees:mystical_honeycomb_block`
    });
  };

  mysticalShaped(`white`, [
    `  C`,
    ` C `,
    ` C `
  ]);
  mysticalShaped(`green`, [
    `  C`,
    `CC `,
    `   `
  ]);
  mysticalShaped(`purple`, [
    `  C`,
    `  C`,
    ` C `
  ]);
  mysticalShaped(`cyan`, [
    `C C`,
    ` C `,
    `   `
  ]);
  mysticalShaped(`light_gray`, [
    ` C `,
    ` C `,
    `  C`
  ]);
  mysticalShaped(`gray`, [
    `  C`,
    ` C `,
    `C  `
  ]);
  mysticalShaped(`pink`, [
    `C  `,
    ` C `,
    `  C`
  ]);
  mysticalShaped(`lime`, [
    `  C`,
    `  C`,
    `  C`
  ]);
  mysticalShaped(`yellow`, [
    ` C `,
    ` C `,
    ` C `
  ]);
  mysticalShaped(`light_blue`, [
    `C  `,
    `C  `,
    `C  `
  ]);
  mysticalShaped(`magenta`, [
    `   `,
    `   `,
    `CCC`
  ]);
  mysticalShaped(`orange`, [
    `   `,
    `CCC`,
    `   `
  ]);
  mysticalShaped(`blue`, [
    `   `,
    ` C `,
    `C C`
  ]);
  mysticalShaped(`brown`, [
    `  C`,
    ` C `,
    `  C`
  ]);
  mysticalShaped(`black`, [
    `   `,
    `CC `,
    `  C`
  ]);
  mysticalShaped(`red`, [
    `CCC`,
    `   `,
    `   `
  ]);

  //Combs to crop
  const cropComb = (result, pattern) => {
    cuShaped(Item.of(result, 3), pattern, {
      C: `resourcefulbees:cropy_honeycomb`
    });
    cuShaped(Item.of(result, 27), pattern, {
      C: `resourcefulbees:cropy_honeycomb_block`
    });
  };

  cropComb(`minecraft:wheat`, [
    `  C`,
    ` C `,
    ` C `
  ]);
  cropComb(`minecraft:beetroot`, [
    `  C`,
    `CC `,
    `   `
  ]);
  cropComb(`minecraft:carrot`, [
    `  C`,
    `  C`,
    ` C `
  ]);
  cropComb(`minecraft:potato`, [
    `C C`,
    ` C `,
    `   `
  ]);
  cropComb(`minecraft:melon_slice`, [
    ` C `,
    ` C `,
    `  C`
  ]);
  cropComb(`minecraft:pumpkin`, [
    `  C`,
    ` C `,
    `C  `
  ]);
  cropComb(`minecraft:bamboo`, [
    `C  `,
    ` C `,
    `  C`
  ]);
  cropComb(`minecraft:sweet_berries`, [
    `  C`,
    `  C`,
    `  C`
  ]);
  cropComb(`minecraft:brown_mushroom`, [
    ` C `,
    ` C `,
    ` C `
  ]);
  cropComb(`minecraft:red_mushroom`, [
    `C  `,
    `C  `,
    `C  `
  ]);
});
