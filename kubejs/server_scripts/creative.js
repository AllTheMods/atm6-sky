events.listen('recipes', function(e) {

    const atm_star = 'atmadditions:atm_star'

    function energize(ingredient, result, power) {
        e.recipes.powah.energizing({
            ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
            energy: power,
            result: Item.of(result).toResultJson()
        })
    }

    function pressure(inputs, result, rCount, pressure) {
        e.recipes.pneumaticcraft.pressure_chamber({
            inputs: inputs,
            pressure: pressure,
            results: [{
                item: result,
                count: rCount
            }]
        })
    }
    //Exchangers
    e.shaped('exchangers:creative_exchanger', [
        ' E ',
        'RSH',
        ' U '
    ], {
        S: atm_star,
        E: 'exchangers:end_exchanger',
        H: 'exchangers:hv_exchanger',
        U: 'exchangers:ultimate_exchanger',
        R: 'exchangers:resonant_exchanger'
    })
    //Strainer
    e.shaped('waterstrainer:super_worm', [
        'WWW',
        'WSW',
        'WWW'
    ], {
        S: atm_star,
        W: 'waterstrainer:worm'
    })
    //Woot
    e.shaped('woot:creative_conatus', [
        'UCU',
        'CSC',
        'UCU'
    ], {
        S: atm_star,
        U: 'allthemodium:unobtainium_ingot',
        C: 'woot:cell_4'
    })
    //Botania
    e.shaped('botania:creative_pool', [
        'RMR',
        'MSM',
        'RMR'
    ], {
        S: atm_star,
        M: 'botania:mana_pool',
        R: '#botania:runes'
    })

    e.shapeless(item.of('botania:mana_tablet', {
        mana: 500000,
        creative: 1
    }), ['botania:creative_pool'])

    //Ars Nouveau
    e.shaped(Item.of('ars_nouveau:creative_spell_book', {
        mode: 0,
        spells: ",intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust"
    }), [
        'ABC',
        'CCD',
        'DDE'
    ], {
        A: 'ars_nouveau:archmage_spell_book',
        B: atm_star,
        C: 'astralsorcery:resonating_gem',
        D: 'minecraft:ender_eye',
        E: 'tombstone:soul_receptacle'
    })

    e.shaped('ars_nouveau:creative_mana_jar', [
        'ACA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:glass',
        B: atm_star,
        C: 'ars_nouveau:mana_gem_block'
    })
    //Immersive Engineering
    energize(['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv', atm_star], 'immersiveengineering:capacitor_creative', 2147483647)
    //Integrated Dynamics
    energize(['integrateddynamics:coal_generator', 'integrateddynamics:coal_generator', atm_star, 'integrateddynamics:coal_generator', 'integrateddynamics:coal_generator'], 'integrateddynamics:energy_battery_creative', 2147483647)
    //Applied Energistics 2
    energize(['appliedenergistics2:dense_energy_cell', atm_star], 'appliedenergistics2:creative_energy_cell', 2147483647)
    //Mekanism
    e.shaped('mekanism:creative_energy_cube', [
        'ATA',
        'VCV',
        'ATA'
    ], {
        A: 'mekanism:alloy_atomic',
        T: 'mekanism:energy_tablet',
        V: 'allthemodium:vibranium_block',
        C: 'mekanism:ultimate_energy_cube'
    })

    energize(['mekanism:creative_energy_cube', atm_star], Item.of('mekanism:creative_energy_cube', {
        mekData: {
            EnergyContainers: [{
                Container: 0,
                stored: "18446744073709551615.9999"
            }]
        }
    }), 2147483647)
    //Create
    e.recipes.create.mechanical_crafting('create:creative_motor', [
        'ABA',
        'CDC',
        'BEB'
    ], {
        A: 'create:cogwheel',
        B: 'create:large_cogwheel',
        C: 'create:shaft',
        D: atm_star,
        E: 'create:gearbox'
    })
    //Refined Storage
    energize(['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', 2147483647)
    energize(['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', 2147483647)
    energize(['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', 2147483647)
    energize(['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', 2147483647)
    energize(['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', 2147483647)
    energize(['refinedstorage:controller', atm_star], 'refinedstorage:creative_controller', 2147483647)
    //Pneumatic Craft
    pressure([{
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:electrostatic_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:flux_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': atm_star,
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_air_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_liquid_compressor',
            'count': 1
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        }
    ], 'pneumaticcraft:creative_compressor', 1, 4.9)
    //Storage Drawers
    e.shaped('16x storagedrawers:creative_storage_upgrade', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'storagedrawers:emerald_storage_upgrade',
        B: atm_star,
        C: 'allthemodium:allthemodium_block'
    })
    //Ice And Fire
    e.shaped('2x iceandfire:creative_dragon_meal', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'iceandfire:dragon_meal',
        B: atm_star
    })

    const colors = ['red', 'green', 'bronze', 'gray', 'blue', 'white', 'sapphire', 'silver', 'electric', 'amythest', 'copper', 'black']

    colors.forEach(color => {
        e.shaped('iceandfire:dragonegg_' + color, [
            'DED',
            'ESE',
            'DED'
        ], {
            S: atm_star,
            E: 'minecraft:dragon_egg',
            D: 'iceandfire:dragonscales_' + color
        })
    })
})