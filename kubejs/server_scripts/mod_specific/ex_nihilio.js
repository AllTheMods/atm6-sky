// priority: 5
settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent(`recipes`, e => {
  const sieve = (mesh, chance, input, result, wlog) => {
    e.custom({
      type: `exnihilosequentia:sieve`,
      rolls: [{
        chance: chance,
        mesh: mesh
      }],
      input: Ingredient.of(input).toJson(),
      result: Item.of(result).toResultJson(),
      waterlogged: wlog
    });
  };

  const hammer = (input, result) => {
    e.custom({
      type: `exnihilosequentia:hammer`,
      input: Ingredient.of(input).toJson(),
      results: [Item.of(result).toResultJson()]
    });
  };

  const heat = (block, heat) => {
    e.custom({
      type: `exnihilosequentia:heat`,
      block: block,
      amount: heat
    });
  };

  var exDust = `exnihilosequentia:dust`;
  var exRack = `exnihilosequentia:crushed_netherrack`;
  var exEnd = `exnihilosequentia:crushed_end_stone`;

  //Crucible heating `blocks`
  heat(`botania:blaze_block`, 8);
  heat(`allthemodium:molten_bluelava`, 50);
  heat(`alltheores:uranium_block`, 20);
  heat(`minecraft:magma_block`, 3);
  heat(`minecraft:fire`, 4);
  heat(`minecraft:lava`, 5);

  //Params go like this: Mesh, Drop chanche, Input item, Output item, Waterlogged.
  //Overworld sieve
  sieve(`diamond`, 0.3, `minecraft:gravel`, `mysticalagriculture:inferium_essence`, null);
  sieve(`diamond`, 0.2, `minecraft:gravel`, `mysticalagriculture:prosperity_shard`, null);
  sieve(`diamond`, 0.1, `minecraft:gravel`, `ars_nouveau:mana_gem`, null);

  //Nether sieve
  sieve(`diamond`, 0.2, exRack, `appliedenergistics2:fluix_crystal_seed`, null);
  sieve(`diamond`, 0.3, exRack, `mysticalagriculture:inferium_essence`, null);
  sieve(`diamond`, 0.2, exRack, `minecraft:netherite_scrap`, null);
  sieve(`diamond`, 0.15, exRack, `create:rose_quartz`, null);
  sieve(`iron`, 0.2, exRack, `minecraft:quartz`, null);
  sieve(`iron`, 0.25, exRack, `forbidden_arcanus:arcane_crystal_dust`, null);
  sieve(`iron`, 0.15, `#forge:soul_sand`, `mysticalagriculture:soulium_dust`, null);

  //End sieve
  sieve(`diamond`, 0.1, exEnd, `minecraft:chorus_flower`, null);

  //sieve(`emerald`, 0.02, `minecraft:gravel`, `astralsorcery:rock_crystal`, null);
  sieve(`iron`, 0.15, `#minecraft:sand`, `astralsorcery:aquamarine`, true);
  sieve(`iron`, 0.25, `#minecraft:sand`, `minecraft:ink_sac`, true);

  //modium integration
  sieve(`netherite`, 0.02, `minecraft:gravel`, `kubejs:piece_mod`, null);
  sieve(`netherite`, 0.02, exRack, `kubejs:piece_vib`, null);
  sieve(`netherite`, 0.02, exEnd, `kubejs:piece_unob`, null);

  //Hammer recipes
  hammer(`compressium:cobblestone_1`, `compressium:gravel_1`);
  hammer(`compressium:gravel_1`, `compressium:sand_1`);
  hammer(`#minecraft:logs`, `thermal:sawdust`);

  var chunks = [
    `mod`,
    `vib`,
    `unob`
  ];
  chunks.forEach(name => {
    e.shaped(`kubejs:chunk_${name}`, [
      `aa`,
      `aa`
    ], {
      a: `kubejs:piece_${name}`
    });
  });

  const crushEm = (result, crush) => {
    e.recipes.mekanism.crushing(Item.of(result), crush);
    e.recipes.thermal.pulverizer(Item.of(result), crush);
    e.recipes.immersiveengineering.crusher(Item.of(result), crush);
    e.recipes.create.milling(Item.of(result), Item.of(crush));
    e.custom({
      type: `pedestals:pedestal_crushing`,
      ingredient: Ingredient.of(crush).toJson(),
      result: Item.of(result).toResultJson(),
    });
    e.custom({
      type: `appliedenergistics2:grinder`,
      input: Ingredient.of(crush).toJson(),
      result: {
        primary: Item.of(result).toResultJson()
      },
      turns: 8
    });
    e.custom({
      type: `integrateddynamics:squeezer`,
      item: Ingredient.of(crush).toJson(),
      result: {
        items: [Item.of(result).toResultJson()]
      }
    });
    e.custom({
      type: `integrateddynamics:mechanical_squeezer`,
      item: Ingredient.of(crush).toJson(),
      result: {
        items: [Item.of(result).toResultJson()]
      },
      duration: 40
    });
  };

  crushEm(exDust, `#minecraft:sand`);
  crushEm(exRack, `#forge:netherrack`);
  crushEm(exEnd, `#forge:end_stones`);
});