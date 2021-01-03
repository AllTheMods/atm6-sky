// priority: 5

// Enable recipe logging, off by default
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
// Enable skipped recipe logging, off by default
settings.logSkippedRecipes = true
// Enable erroring recipe logging, on by default, recommended to be kept to true
settings.logErroringRecipes = true

events.listen('recipes', function (e) {
   var sieve = e.recipes.exnihilosequentia.sieve;  
  
  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
  };
   function kjsShapeless(result, ingredients, count) {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients)
  };
	
  //netherrack sieve 
  sieve(
    {
      rolls: [
        {
          chance: 0.2,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "appliedenergistics2:fluix_crystal_seed"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.3,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "mysticalagriculture:inferium_essence"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.2,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "minecraft:netherite_scrap"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.15,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "create:rose_quartz"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.2,
          mesh: "iron"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "minecraft:quartz"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.25,
          mesh: "iron"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "forbidden_arcanus:arcane_crystal_dust"
      }
    });


  //overworld sieve
  
  sieve(
    {
      rolls: [
        {
          chance: 0.3,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "minecraft:gravel"
      },
      result: {
        item: "mysticalagriculture:inferium_essence"
      }
    }); 

  sieve(
    {
      rolls: [
        {
          chance: 0.2,
          mesh: "diamond"
        }
      ],
      input: {
        "item": "minecraft:gravel"
      },
      result: {
        item: "mysticalagriculture:prosperity_shard"
      }
    });  	
  
  //modium integration
  sieve(
    {
      rolls: [
        {
          chance: 0.12,
          mesh: "netherite"
        }
      ],
      input: {
        "item": "minecraft:gravel"
      },
      result: {
        item: "kubejs:piece_mod"
      }
    });
		
  sieve(
    {
      rolls: [
        {
          chance: 0.12,
          mesh: "netherite"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      result: {
        item: "kubejs:piece_vib"
      }
    });
	
  sieve(
    {
      rolls: [
        {
          chance: 0.12,
          mesh: "netherite"
        }
      ],
      input: {
        "item": "exnihilosequentia:crushed_end_stone"
      },
      result: {
        item: "kubejs:piece_unob"
      }
    });
	
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