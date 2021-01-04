// priority: 5
settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent('recipes', e => {
  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients);
  }

  function kjsShapeless(result, ingredients, count) {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients);
  }

  function sieve(mesh, chance, input, result, wlog) {
    e.recipes.exnihilosequentia.sieve({
      rolls: [{
        chance: chance,
        mesh: mesh
      }],
      input: {
        item: input
      },
      result: {
        item: result
      },
      waterlogged: wlog
    });
  }

  function hammer(input, result) {
    e.recipes.exnihilosequentia.hammer({
      input: {
        item: input
      },
      result: {
        item: result
      }
    });
  }

  function heat(block, heat) {
    e.recipes.exnihilosequentia.heat({
      block: block,
      amount: heat
    });
  }
  //Crucible heating 'blocks'
  heat('botania:blaze_mesh', 8);

  //Params go like this: Mesh, Drop chanche, Input item, Output item, Waterlogged.
  //End sieve
  sieve('diamond', 0.1, 'exnihilosequentia:crushed_end_stone', 'minecraft:chorus_flower', null);

  //Nether sieve
  sieve('diamond', 0.2, 'exnihilosequentia:crushed_netherrack', 'appliedenergistics2:fluix_crystal_seed', null);
  sieve('diamond', 0.3, 'exnihilosequentia:crushed_netherrack', 'mysticalagriculture:inferium_essence', null);
  sieve('diamond', 0.2, 'exnihilosequentia:crushed_netherrack', 'minecraft:netherite_scrap', null);
  sieve('diamond', 0.15, 'exnihilosequentia:crushed_netherrack', 'create:rose_quartz', null);
  sieve('iron', 0.2, 'exnihilosequentia:crushed_netherrack', 'minecraft:quartz', null);
  sieve('iron', 0.25, 'exnihilosequentia:crushed_netherrack', 'forbidden_arcanus:arcane_crystal_dust', null);
  sieve('iron', 0.15, 'minecraft:soul_sand', 'mysticalagriculture:soulium_dust', null);

  //Overworld sieve
  sieve('diamond', 0.3, 'minecraft:gravel', 'mysticalagriculture:inferium_essence', null);
  sieve('diamond', 0.2, 'minecraft:gravel', 'mysticalagriculture:prosperity_shard', null);
  //sieve('emerald', 0.02, 'minecraft:gravel', 'astralsorcery:rock_crystal', null);
  sieve('iron', 0.15, 'minecraft:sand', 'astralsorcery:aquamarine', true);
  sieve('iron', 0.25, 'minecraft:sand', 'minecraft:ink_sac', true);

  //modium integration
  sieve('netherite', 0.02, 'minecraft:gravel', 'kubejs:piece_mod', null);
  sieve('netherite', 0.02, 'exnihilosequentia:crushed_netherrack', 'kubejs:piece_vib', null);
  sieve('netherite', 0.02, 'exnihilosequentia:crushed_end_stone', 'kubejs:piece_unob', null);

  //Hammer recipes
  hammer('compressium:cobblestone_1', 'compressium:gravel_1');
  hammer('compressium:gravel_1', 'compressium:sand_1');

  kjsShaped('kubejs:chunk_mod', [
    'PP',
    'PP'
  ], {
    P: 'kubejs:piece_mod'
  });

  kjsShaped('kubejs:chunk_vib', [
    'PP',
    'PP'
  ], {
    P: 'kubejs:piece_vib'
  });

  kjsShaped('kubejs:chunk_unob', [
    'PP',
    'PP'
  ], {
    P: 'kubejs:piece_unob'
  });
});