events.listen('recipes', function(e) {
//Pipez
	e.shaped('pipez:infinity_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'compressium:redstone_4',
        C: 'pipez:ultimate_upgrade'
    })
//Minecraft
	e.shaped('minecraft:dragon_egg', [
		'SSS',
		'SDS',
		'SSS'
	], {
		S: 'mysticalagradditions:dragon_egg_chunk',
		D: 'atmadditions:dragon_soul'
	})
//Tombstone 
	e.shaped('tombstone:soul_receptacle', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'tombstone:dust_of_vanishing',
		B: 'tombstone:ankh_of_pray',
		C: 'minecraft:totem_of_undying',
		D: 'tombstone:familiar_receptacle',
		E: 'tombstone:voodoo_poppet'
	})
})