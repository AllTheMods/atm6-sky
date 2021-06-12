//priority: 10
onEvent(`recipes`, e => {
  let tier = (types, time, soil, rCount) => {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`
      e.recipes.immersiveengineering.cloche(Item.of(rItem, rCount), inItem, soil, renBlock).time(time)
    })
  }

  let t1 = type => tier(type, 1600, `#misctags:farmland/tier1`, 2)
  let t2 = type => tier(type, 2800, `#misctags:farmland/tier2`, 2)
  let t3 = type => tier(type, 4000, `#misctags:farmland/tier3`, 2)
  let t4 = type => tier(type, 5200, `#misctags:farmland/tier4`, 2)
  let t5 = type => tier(type, 6400, `#misctags:farmland/tier5`, 2)
  let t6 = type => tier(type, 7600, `#misctags:farmland/tier6`, 2)
  let t7 = type => tier(type, 8900, `kubejs:magical_soil`, 2)

  function inf(rCount, time, soil) {
    tier([`inferium`], time, soil, rCount)
  }

  function regular(results, seed, crop) {
    e.recipes.immersiveengineering.cloche(results, Item.of(seed), `minecraft:dirt`, crop).time(600)
  }

  //Regular crops
  regular([`forbidden_arcanus:arcane_gold_nugget`, `forbidden_arcanus:golden_orchid_seeds`], `forbidden_arcanus:golden_orchid_seeds`, `forbidden_arcanus:golden_orchid`)
  regular([Item.of(`silentgear:flax_fiber`, 2), `silentgear:flax_seeds`], `silentgear:flax_seeds`, `silentgear:flax_plant`)

  //Inferium
  inf(1, 1500, `minecraft:dirt`)
  inf(2, 2100, `mysticalagriculture:inferium_farmland`)
  inf(3, 2700, `mysticalagriculture:prudentium_farmland`)
  inf(4, 3300, `mysticalagriculture:tertium_farmland`)
  inf(5, 4900, `mysticalagriculture:imperium_farmland`)
  inf(6, 5500, `mysticalagriculture:supremium_farmland`)
  inf(7, 6100, `mysticalagradditions:insanium_farmland`)

  //Tier 1 Crops
  t1([
    `air`,
    `earth`,
    `fire`,
    `water`,
    `dirt`,
    `wood`,
    `ice`,
    `stone`
  ])

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
    `blitz`,
    `apatite`
  ])

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
    `fluorite`,
    `aquamarine`,
    `signalum`,
    `starmetal`,
    `manasteel`,
    `pig_iron`,
    `slimesteel`,
    `tinkers_bronze`
  ])

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
    `blazing_crystal`,
    `rose_gold`,
    `cobalt`
  ])

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
    `terrasteel`,
    `manyullyn`,
    `queens_slime`,
    `hepatizon`
  ])

  //Tier 6 Crops
  t6([
    `dragon_egg`,
    `nether_star`,
    `nitro_crystal`
  ])

  //Magical Tier
  t7([
    /*
    `allthemodium`,
    `vibranium`,
    `unobtainium`
    */
  ])
})
