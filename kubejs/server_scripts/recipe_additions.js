events.listen('recipes', e => {
  //Ice and Fire Lillies
  function dragonFlowers(dragons) {
    dragons.forEach(dragon => {
      e.shaped(Item.of(`iceandfire:${dragon.equals('ice') ? 'frost' : dragon}_lily`, 4), [
        'ACA',
        'BDB',
        'ACA'
      ], {
        A: 'minecraft:lily_of_the_valley',
        B: `iceandfire:${dragon}_dragon_heart`,
        C: `iceandfire:${dragon}_dragon_flesh`,
        D: 'mysticalagriculture:master_infusion_crystal'
      })
    })
  }
  dragonFlowers([`fire`, `lightning`, `ice`])
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