var colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'light_blue',
    'cyan',
    'blue',
    'purple',
    'magenta',
    'pink',
    'brown'
];

var refined = [
    'controller',
    'creative_controller',
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'disk_manipulator',
    'crafter',
    'crafter_manager',
    'crafting_monitor'
];

onEvent('jei.information', e => {
    e.add('allthemodium:molten_bluelava_bucket', ['Soul Lava appears occasionally in the nether.', '(Small source blocks only - no pools.)']);
    e.add('allthemodium:allthemodium_ore', ['Check all the oceans for Allthemodium.', '(Y 5-45)']);
    e.add('allthemodium:vibranium_ore', ['Vibranium can be found in warped forests in the Nether.', '(Y 80-127)']);
    e.add('allthemodium:unobtainium_ore', ['Unobtainium can be obtained from the Highland biomes in the End.']);
});

onEvent('jei.add.items', e => {
    e.add([
        'minecraft:dragon_egg'
    ]);
});

onEvent('jei.hide.items', e => {
    e.hide([
        '@quark',
        '@curios',
        'forbidden_arcanus:rotten_leather',
        'appliedenergistics2:silicon',
        'appliedenergistics2:flour',
        '/pedestals:dust.+/',
        'cyclic:tile_transporter_empty',
        //'naturesaura:chunk_loader',
        '/extrastorage:disk_.+/',
        '/extrastorage:storagepart_.+/',
        '/titanium:.+/',
        'bloodmagic:saltpeter',
        'bloodmagic:sulfur',
        'bloodmagic:coalsand',
        'bloodmagic:ironsand',
        'bloodmagic:goldsand'
    ]);

    colors.forEach(color => {
        if (color !== 'red') {
            refined.forEach(refin => {
                e.hide([
                    `refinedstorage:${color}_${refin}`
                ]);
            });
        }
    });

    const hideMetal = (mod, name, types) => {
        types.forEach(type => {
            const id = mod === 'immersiveengineering' || 'mekanism' || 'exnihilosequentia' ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`;
            if (!ingredient.of(id).empty) {
                e.hide(id);
                //console.log(`Hid ${id}`);
            }
        });
    };

    const hideStuff = (mod, type, names) => {
        names.forEach(name => {
            const id = mod === 'immersiveengineering' || 'mekanism' || 'exnihilosequentia' ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`;
            if (!ingredient.of(id).empty) {
                e.hide(id);
                //console.log(`Hid ${id}`);
            }
        });
    };

    //Hides items based name, format: 'mod', 'metal', ['type1', 'type2', 'etc']
    hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage']);
    hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage']);
    hideMetal('mekanism', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('mekanism', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('mekanism', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('mekanism', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('mekanism', 'osmium', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block']);
    hideMetal('create', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('create', 'zinc', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block']);
    hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block']);

    //Hides items based on type, format: 'mod', 'type', ['name1', 'name2', 'etc']
    hideStuff('exnihilosequentia', 'ingot', ['copper', 'lead', 'nickel', 'silver', 'tin', 'aluminum', 'uranium', 'osmium', 'zinc']);
    hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'sawdust']);
    hideStuff('mekanism', 'dust', ['sawdust', 'sulfur', 'lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold']);
    hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold']);
});
/*
onEvent('item.tooltip', e => {
    refined.forEach(refin => {
        e.add(`refinedstorage:${refin}`, 'Right click or craft with a dye to color');
    });
});
*/