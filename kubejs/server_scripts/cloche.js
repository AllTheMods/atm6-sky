//priority: 10
onEvent('recipes', e => {

  const cloche = e.recipes.immersiveengineering.cloche;
  let tier = (types, time, soil, rCount) => {
    types.forEach(type => {
      const rItem = 'mysticalagriculture:' + type + '_essence';
      const inItem = 'mysticalagriculture:' + type + '_seeds';
      const renderBlock = 'mysticalagriculture:' + type + '_crop';
      cloche({
        results: [{
          item: rItem,
          count: rCount
        }],
        input: {
          item: inItem
        },
        soil: soil,
        time: time,
        render: {
          type: 'crop',
          block: renderBlock
        }
      });
    });
  };

  let t1 = type => tier(type, 1600, {
    tag: 'misctags:farmland/tier1'
  }, 2);
  let t2 = type => tier(type, 2800, {
    tag: 'misctags:farmland/tier2'
  }, 2);
  let t3 = type => tier(type, 4000, {
    tag: 'misctags:farmland/tier3'
  }, 2);
  let t4 = type => tier(type, 5200, {
    tag: 'misctags:farmland/tier4'
  }, 2);
  let t5 = type => tier(type, 6400, {
    tag: 'misctags:farmland/tier5'
  }, 2);
  let t6 = type => tier(type, 7600, {
    tag: 'misctags:farmland/tier6'
  }, 2);
  let t7 = type => tier(type, 8900, {
    item: 'mysticalagradditions:insanium_block'
  }, 2);
  let inf = (rCount, time, soil) => tier(['inferium'], time, soil, rCount);

  function regular(results, seed, crop) {
    cloche({
      results: results,
      input: {
        item: seed
      },
      soil: {
        item: 'minecraft:dirt'
      },
      time: 600,
      render: {
        type: 'crop',
        block: crop
      }
    });
  }

  //Regular crops
  /*   regular([{
      item: 'byg:blueberries',
      count: 2
    }], 'byg:blueberries', 'byg:blueberry_bush'); */
  regular([{
    item: 'forbidden_arcanus:arcane_gold_nugget'
  }, {
    item: 'forbidden_arcanus:golden_orchid_seeds'
  }], 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:golden_orchid');
  regular([{
    item: 'silentgear:flax_fiber',
    count: 2
  }, {
    item: 'silentgear:flax_seeds'
  }], 'silentgear:flax_seeds', 'silentgear:flax_plant');

  //Inferium
  inf(1, 1500, {
    item: 'minecraft:dirt'
  });
  inf(2, 2100, {
    item: 'mysticalagriculture:inferium_farmland'
  });
  inf(3, 2700, {
    item: 'mysticalagriculture:prudentium_farmland'
  });
  inf(4, 3300, {
    item: 'mysticalagriculture:tertium_farmland'
  });
  inf(5, 4900, {
    item: 'mysticalagriculture:imperium_farmland'
  });
  inf(6, 5500, {
    item: 'mysticalagriculture:supremium_farmland'
  });
  inf(7, 6100, {
    item: 'mysticalagradditions:insanium_farmland'
  });

  //Tier 1 Crops
  t1([
    'air',
    'earth',
    'fire',
    'water',
    'dirt',
    'wood',
    'ice',
    'stone'
  ]);

  //Tier 2 Crops
  t2([
    'aluminum',
    'chicken',
    'coal',
    'copper',
    'coral',
    'cow',
    'dye',
    'fish',
    'honey',
    'iridium',
    'mystical_flower',
    'nature',
    'nether',
    'pig',
    'rubber',
    'saltpeter',
    'sheep',
    'silicon',
    'slime',
    'squid',
    'sulfur',
    'turtle',
    'sky_stone'
  ]);


  //Tier 3 Crops
  t3([
    //'azure_silver',
    'brass',
    'bronze',
    'certus_quartz',
    'creeper',
    //'crimson_iron',
    'ender_biotite',
    'glowstone',
    'graphite',
    'iron',
    'lead',
    'nether_quartz',
    'obsidian',
    'prismarine',
    'quartz_enriched_iron',
    'rabbit',
    'redstone',
    'silver',
    'skeleton',
    'spider',
    'tin',
    'zinc',
    'zombie',
    'lumium',
    //'fluorite',
    'aquamarine'
  ]);

  //Tier 4 Crops
  t4([
    //'azure_electrum',
    'blaze',
    'chrome',
    'constantan',
    //'crimson_steel',
    'electrum',
    'end',
    'enderman',
    'experience',
    'fluix',
    'ghast',
    'gold',
    'invar',
    'lapis_lazuli',
    'mithril',
    'nickel',
    //'oratchalcum',
    'osmium',
    'refined_glowstone',
    'refined_obsidian',
    'steel',
    'titanium',
    'tungsten',
    'compressed_iron',
    'hop_graphite'
  ]);

  //Tier 5 Crops
  t5([
    'diamond',
    'emerald',
    'netherite',
    'uraninite',
    'wither_skeleton',
    'platinum',
    'uranium',
    'enderium',
    'spirited_crystal',
    'rock_crystal',
    'niotic_crystal'
  ]);

  //Tier 6 Crops
  t6([
    'dragon_egg',
    'nether_star',
    'nitro_crystal'
  ]);

  //Botanical Tier
  //t3('manasteel');
  //t4('elementium');
  //t5('terrasteel');

/*   //Magical Tier
  t7([
    'allthemodium',
    'vibranium',
    'unobtainium'
  ]); */
});