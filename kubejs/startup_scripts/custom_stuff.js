const ores = [
	'Allthemodium',
	'Vibranium',
	'Unobtainium',
	'Azure Silver',
	'Crimson Iron',
]

events.listen('item.registry', e => {
	e.create('piece_mod').displayName('Allthemodium Ore Piece')
	e.create('piece_vib').displayName('Vibranium Ore Piece')
	e.create('piece_unob').displayName('Unobtainium Ore Piece')
	e.create('chunk_mod').displayName('Allthemodium Ore Chunk')
	e.create('chunk_vib').displayName('Vibranium Ore Chunk')
	e.create('chunk_unob').displayName('Unobtainium Ore Chunk')
	e.create('piece_osmium').displayName('Osmium Ore Piece')
	e.create('chunk_osmium').displayName('Osmium Ore Chunk')
	e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
	e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
	e.create('rotten_leather').displayName('Rotten Leather')
	e.create('uu_matter').displayName('§dUU-Matter')
	e.create('patrick_star').displayName('§dPatrick Star')
	e.create('saltpeter_ingot').displayName('Nitrate Ingot')
	e.create('potassium_nitrate_dust').displayName('Potassium Nitrate Dust')
	e.create('potassium_nitrate_ingot').displayName('Potassium Nitrate Ingot')
	e.create('potassium_dust').displayName('Potassium Dust')
	e.create('potassium_ingot').displayName('Potassium Ingot')
})

events.listen('block.registry', e => {
	e.create('magical_soil').displayName('§bMagical Soil').material('organic').hardness(0.6)
	e.create('nether_star_block').displayName('§eNether Star Block').material('iron').hardness(2).lightLevel(1)
	e.create('saltpeter_block').displayName('Nitrate Block').material('iron')
	e.create('potassium_block').displayName('Potassium Block').material('iron')
	e.create('potassium_nitrate_block').displayName('Potassium Nitrate Block').material('iron')
	e.create('aquamarine_block').displayName('Aquamarine Block').material('rock').hardness(2).lightLevel(1)
	e.create('fluorite_block').displayName('Fluorite Block').material('ice').hardness(1.2)
	e.create('lithium_block').displayName('Lithium Block').material('iron').hardness(1)
	e.create('yellow_cake_uranium_block').displayName('§eYellow Cake Uranium Block').material('sand')
})
