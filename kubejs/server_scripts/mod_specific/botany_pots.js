onEvent(`recipes`, e => {
  //Soils
  function makeSoil(input, name, categories, growthModifier) {
    e.custom({
      type: `botanypots:soil`,
      input: Ingredient.of(input).toJson(),
      display: {
        block: input
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }

  makeSoil(`mysticalagradditions:insanium_farmland`, `insanium_farmland`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`], 0.50)
  makeSoil(`kubejs:magical_soil`, `magical_soil`, [`magic`, `coarse_dirt`, `crimson_nylium`, `nylium`, `mushroom`, `end_stone`, `podzol`,
    `dirt`, `grass`, `nether`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`, `magical`, `botania`
  ], 0.75)

  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      e.remove({
        id: `mysticalagriculture:crops/${type}`
      })

      e.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: {
            age: "7"
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
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }

  //Tier 1 Crops
  tier([
    `inferium`,
    `air`,
    `earth`,
    `fire`,
    `water`,
    `dirt`,
    `wood`,
    `ice`,
    `stone`
  ], 900, `inferium`)

  //Tier 2 Crops
  tier([
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
  ], 1600, `prudentium`)

  //Tier 3 Crops
  tier([
    `azure_silver`,
    `brass`,
    `bronze`,
    `certus_quartz`,
    `creeper`,
    `crimson_iron`,
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
  ], 1600, `prudentium`)

  //Tier 4 Crops
  tier([
    `azure_electrum`,
    `blaze`,
    `chrome`,
    `constantan`,
    `crimson_steel`,
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
  ], 2700, `imperium`)

  //Tier 5 Crops
  tier([
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
  ], 3500, `supremium`)

  //Tier 6 Crops
  tier([
    `dragon_egg`,
    `nether_star`,
    `nitro_crystal`
  ], 4100, `insanium`)

  //Magical Tier
  tier([
    `allthemodium`,
    `vibranium`,
    `unobtainium`
  ], 5200, `magical`)

  //Ars Nouveau Mana Bloom
  const results = [
    Item.of(`ars_nouveau:mana_bloom`).chance(0.75),
    {
      item: Item.of(`ars_nouveau:mana_bloom_crop`).chance(0.05),
      maxRolls: 2
    }
  ]
  e.recipes.botanypots.crop(results, `ars_nouveau:mana_bloom_crop`).categories([`dirt`]).id(`kubejs:botany_pot/crop/ars_nouveau/mana_bloom`)
})
