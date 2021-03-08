onEvent(`recipes`, e => {
	//Soils
	const makeSoil = (input, name, categories, growthModifier) => {
		e.custom({
			type: `botanypots:soil`,
			input: Ingredient.of(input).toJson(),
			display: {
				block: input
			},
			categories: categories,
			growthModifier: growthModifier
		}).id(`kubejs:botany_pots/soil/${name}`);
	};

	makeSoil(`mysticalagradditions:insanium_farmland`, `insanium_farmland`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`], 0.50);
	makeSoil(`kubejs:magical_soil`, `magical_soil`, [`magic`, `coarse_dirt`, `crimson_nylium`, `nylium`, `mushroom`, `end_stone`, `podzol`,
		`dirt`, `grass`, `nether`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`, `magical`, `botania`
	], 0.75);

	//Crops
	let tier = (types, time, soil) => {
		types.forEach(type => {
			let rItem = `mysticalagriculture:${type}_essence`;
			let inItem = `mysticalagriculture:${type}_seeds`;
			let renBlock = `mysticalagriculture:${type}_crop`;
			e.remove({
				id: `mysticalagriculture:crops/${type}`
			});
			e.recipes.botanypots.crop({
				seed: Ingredient.of(inItem).toJson(),
				categories: [soil],
				growthTicks: time,
				display: {
					block: renBlock,
					properties: {
						age: 7
					}
				},
				results: [{
						chance: 0.75,
						output: Item.of(rItem).toResultJson(),
						minRolls: 1,
						maxRolls: 3
					},
					{
						chance: 0.05,
						output: Item.of(inItem).toResultJson(),
						minRolls: 1,
						maxRolls: 1
					},
					{
						chance: 0.01,
						output: Item.of(`mysticalagriculture:fertilized_essence`).toResultJson(),
						minRolls: 1,
						maxRolls: 1
					}
				]
			}).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`);
		});
	};

	let t1 = types => tier(types, 1200, [`inferium`]);
	let t2 = types => tier(types, 1900, [`prudentium`]);
	let t3 = types => tier(types, 2400, [`tertium`]);
	let t4 = types => tier(types, 3200, [`imperium`]);
	let t5 = types => tier(types, 4000, [`supremium`]);
	let t6 = types => tier(types, 5000, [`insanium`]);
	let t7 = types => tier(types, 6000, [`magical`]);


	//Tier 1 Crops
	t1([
		`inferium`,
		`air`,
		`earth`,
		`fire`,
		`water`,
		`dirt`,
		`wood`,
		`ice`,
		`stone`
	]);

	//Tier 2 Crops
	t2([
		`aluminum`,
		`chicken`,
		`coal`,
		`copper`,
		`coral`,
		`cow`,
		`dye`,
		`fish`,
		`honey`,
		`iridium`,
		`mystical_flower`,
		`nature`,
		`nether`,
		`pig`,
		`rubber`,
		`saltpeter`,
		`sheep`,
		`silicon`,
		`slime`,
		`squid`,
		`sulfur`,
		`turtle`,
		`sky_stone`,
		`basalz`,
		`blizz`,
		`blitz`
	]);


	//Tier 3 Crops
	t3([
		//`azure_silver`,
		`brass`,
		`bronze`,
		`certus_quartz`,
		`creeper`,
		//`crimson_iron`,
		`ender_biotite`,
		`glowstone`,
		`graphite`,
		`iron`,
		`lead`,
		`nether_quartz`,
		`obsidian`,
		`prismarine`,
		`quartz_enriched_iron`,
		`rabbit`,
		`redstone`,
		`silver`,
		`skeleton`,
		`spider`,
		`tin`,
		`zinc`,
		`zombie`,
		`lumium`,
		//`fluorite`,
		`aquamarine`,
		`signalum`,
		`starmetal`,
		`manasteel`
	]);

	//Tier 4 Crops
	t4([
		//`azure_electrum`,
		`blaze`,
		`chrome`,
		`constantan`,
		//`crimson_steel`,
		`electrum`,
		`end`,
		`enderman`,
		`experience`,
		`fluix`,
		`ghast`,
		`gold`,
		`invar`,
		`lapis_lazuli`,
		`mithril`,
		`nickel`,
		//`oratchalcum`,
		`osmium`,
		`refined_glowstone`,
		`refined_obsidian`,
		`steel`,
		`titanium`,
		`tungsten`,
		`compressed_iron`,
		`hop_graphite`,
		`elementium`,
		`energized_steel`,
		`blazing_crystal`
	]);

	//Tier 5 Crops
	t5([
		`diamond`,
		`emerald`,
		`netherite`,
		`uraninite`,
		`wither_skeleton`,
		`platinum`,
		`uranium`,
		`enderium`,
		`spirited_crystal`,
		`rock_crystal`,
		`niotic_crystal`,
		`terrasteel`
	]);

	//Tier 6 Crops
	t6([
		`dragon_egg`,
		`nether_star`,
		`nitro_crystal`
	]);

	//Magical Tier
	t7([
		/*
		`allthemodium`,
		`vibranium`,
		`unobtainium`
		*/
	]);
	/*
	//Botany Trees
	//KubeJS code relevant to botany pots: https://github.com/KubeJS-Mods/KubeJS/blob/2dd08e1f24b9619e613f5998f46eed69a4cf964f/common/src/main/java/dev/latvian/kubejs/recipe/mod/BotanyPotsCropRecipeJS.java#L44
	const growTreeUniversal = (mod, name, raredrops, soil, log) => {
	    const dropchance_log = 0.5;
	    const dropchance_stick = 0.1;
	    const dropchance_sapling = 0.05;
	    const dropchance_raredrops = 0.01;
	    if (!soil) {
	        soil = `dirt`;
	        //console.log(`console.log: soil is null, set to ${soil}`);
	    }
	    if (!log) {
	        log = `${mod}:${name}_log`;
	        //console.log(`console.log: log is null, set to ${log}`);
	    } else {
	        //console.log(`console.log: log is not null`);
	    }

	    const results = [
	        Item.of(log).chance(dropchance_log),
	        {
	            item: Item.of(`minecraft:stick`).chance(dropchance_stick),
	            maxRolls: 2
	        },
	        {
	            item: Item.of(`${mod}:${name}_sapling`).chance(dropchance_sapling),
	            maxRolls: 2
	        }
	    ];

	    if (raredrops) {
	        results.push({
	            item: Item.of(raredrops).chance(dropchance_raredrops),
	            maxRolls: 2
	        });
	    }

	    e.recipes.botanypots.crop(results, `${mod}:${name}_sapling`).categories([soil]);
	};


	//  Use the function to add custom trees to the pots.
	//      Parameter 1 is mod as the advanced tooltip sees it.
	//      Parameter 2 is the tree name as the advanced tooltip sees it.
	//      Parameter 3 is for the unique drops like apple/cherry etc. If none, use `null` without the quotes.
	//      Parameter 4 is for the soil to grow on, using `modname:blockname`. If dirt, `null` without the quotes will default to dirt.
	//      Parameter 5 is for specifying a different log than what would normally be modname:treename_log. `null` defaults to modname:treename_log.

	growTreeUniversal(`minecraft`, `oak`, `minecraft:apple`, null, null);
	growTreeUniversal(`minecraft`, `dark_oak`, `minecraft:apple`, null, null);
	growTreeUniversal(`minecraft`, `jungle`, `minecraft:cocoa_beans`, null, null);
	growTreeUniversal(`minecraft`, `acacia`, ``, null, null);
	growTreeUniversal(`minecraft`, `birch`, ``, null, null);
	growTreeUniversal(`minecraft`, `spruce`, ``, null, null);
	growTreeUniversal(`silentgear`, `netherwood`, `silentgear:nether_banana`, null, null);
	growTreeUniversal(`forbidden_arcanus`, `cherrywood`, `forbidden_arcanus:cherry_peach`, null, null);
	growTreeUniversal(`forbidden_arcanus`, `mysterywood`, `minecraft:golden_apple`, null, null);
	//Quark Trees
	growTreeUniversal(`quark`, `blue_blossom`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`quark`, `lavender_blossom`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`quark`, `orange_blossom`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`quark`, `pink_blossom`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`quark`, `yellow_blossom`, null, null, `minecraft:spruce_log`);
	//BoP Trees
	growTreeUniversal(`biomesoplenty`, `dead`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `fir`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `hellbark`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `jacaranda`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `magic`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `mahogany`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `palm`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `redwood`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `umbran`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `willow`, ``, null, null);
	growTreeUniversal(`biomesoplenty`, `flowering_oak`, null, null, `minecraft:oak_log`);
	growTreeUniversal(`biomesoplenty`, `maple`, null, null, `minecraft:oak_log`);
	growTreeUniversal(`biomesoplenty`, `orange_autumn`, null, null, `minecraft:dark_oak_log`);
	growTreeUniversal(`biomesoplenty`, `origin`, null, null, `minecraft:oak_log`);
	growTreeUniversal(`biomesoplenty`, `pink_cherry`, null, null, `biomesoplenty:cherry_log`);
	growTreeUniversal(`biomesoplenty`, `rainbow_birch`, null, null, `minecraft:birch_log`);
	growTreeUniversal(`biomesoplenty`, `white_cherry`, null, null, `biomesoplenty:cherry_log`);
	growTreeUniversal(`biomesoplenty`, `yellow_autumn`, null, null, `minecraft:birch_log`);
	//BYG Trees
	growTreeUniversal(`byg`, `aspen`, null, null, null);
	growTreeUniversal(`byg`, `baobab`, null, null, null);
	growTreeUniversal(`byg`, `blue_enchanted`, null, null, null);
	growTreeUniversal(`byg`, `cika`, null, null, null);
	growTreeUniversal(`byg`, `cypress`, null, null, null);
	growTreeUniversal(`byg`, `ebony`, null, null, null);
	growTreeUniversal(`byg`, `fir`, null, null, null);
	growTreeUniversal(`byg`, `green_enchanted`, null, null, null);
	growTreeUniversal(`byg`, `jacaranda`, null, null, null);
	growTreeUniversal(`byg`, `mahogany`, null, null, null);
	growTreeUniversal(`byg`, `mangrove`, null, null, null);
	growTreeUniversal(`byg`, `maple`, null, null, null);
	growTreeUniversal(`byg`, `palo_verde`, null, null, null);
	growTreeUniversal(`byg`, `pine`, null, null, null);
	growTreeUniversal(`byg`, `rainbow_eucalyptus`, null, null, null);
	growTreeUniversal(`byg`, `redwood`, null, null, null);
	growTreeUniversal(`byg`, `willow`, null, null, null);
	growTreeUniversal(`byg`, `witch_hazel`, null, null, null);
	growTreeUniversal(`byg`, `zelkova`, null, null, null);
	growTreeUniversal(`byg`, `pink_cherry`, null, null, `byg:cherry_log`);
	growTreeUniversal(`byg`, `white_cherry`, null, null, `byg:cherry_log`);
	growTreeUniversal(`byg`, `holly`, null, null, `byg:holly_berries`);
	growTreeUniversal(`byg`, `indigo_jacaranda`, null, null, `byg:jacaranda_log`);
	growTreeUniversal(`byg`, `red_maple`, null, null, `byg:maple_log`);
	growTreeUniversal(`byg`, `silver_maple`, null, null, `byg:maple_log`);
	growTreeUniversal(`byg`, `skyris`, `byg:green_apple`, null, null);
	growTreeUniversal(`byg`, `blue_spruce`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`byg`, `brown_oak`, null, null, `minecraft:dark_oak_log`);
	growTreeUniversal(`byg`, `joshua`, `byg:joshua_fruit`, null, `minecraft:oak_log`);
	growTreeUniversal(`byg`, `orange_birch`, null, null, `minecraft:birch_log`);
	growTreeUniversal(`byg`, `orange_oak`, `minecraft:apple`, null, `minecraft:oak_log`);
	growTreeUniversal(`byg`, `orange_spruce`, null, null, `minecraft:birch_log`);
	growTreeUniversal(`byg`, `orchard`, `minecraft:apple`, null, `minecraft:oak_log`);
	growTreeUniversal(`byg`, `red_birch`, null, null, `minecraft:birch_log`);
	growTreeUniversal(`byg`, `red_oak`, null, null, `minecraft:dark_oak_log`);
	growTreeUniversal(`byg`, `red_spruce`, null, null, `minecraft:spruce_log`);
	growTreeUniversal(`byg`, `yellow_birch`, null, null, `minecraft:birch_log`);
	growTreeUniversal(`byg`, `yellow_spruce`, null, null, `minecraft:spruce_log`);
	*/

	//Ars Nouveau Mana Bloom
	const results = [
		Item.of(`ars_nouveau:mana_bloom`).chance(0.75),
		{
			item: Item.of(`ars_nouveau:mana_bloom_crop`).chance(0.05),
			maxRolls: 2
		}
	];
	e.recipes.botanypots.crop(results, `ars_nouveau:mana_bloom_crop`).categories([`dirt`]).id(`kubejs:botany_pot/crop/ars_nouveau/mana_bloom`);
});
