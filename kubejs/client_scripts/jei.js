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

onEvent('jei.information', e => {
    function info(item, text) {
        e.add(item, text);
    }
    info('allthemodium:molten_bluelava_bucket', ['Soul Lava appears occasionally in the nether.', '(Small source blocks only - no pools.)']);
    info('allthemodium:allthemodium_ore', ['Check all the oceans for Allthemodium.', '(Y 5-45)']);
    info('allthemodium:vibranium_ore', ['Vibranium can be found in warped forests in the Nether.', '(Y 80-127)']);
    info('allthemodium:unobtainium_ore', ['Unobtainium can be obtained from the Highland biomes in the End.']);
});

onEvent('jei.add.items', e => {
    e.add([
        'minecraft:dragon_egg'
    ]);
});


onEvent('jei.hide.items', e => {
    e.hide([
        'forbidden_arcanus:rotten_leather',
        'appliedenergistics2:silicon',
        'appliedenergistics2:iron_dust',
        'appliedenergistics2:gold_dust',
        'appliedenergistics2:flour',
        '@curios',
        '/pedestals:dust.+/',
        'cyclic:tile_transporter_empty',
        'naturesaura:chunk_loader',
        '/extrastorage:disk_.+/',
        '/extrastorage:storagepart_.+/',
        '/titanium:.+/'
    ]);

    colors.forEach(color => {
        e.hide([
            'refinedstorage:' + color + '_controller',
            'refinedstorage:' + color + '_creative_controller',
            'refinedstorage:' + color + '_grid',
            'refinedstorage:' + color + '_crafting_grid',
            'refinedstorage:' + color + '_pattern_grid',
            'refinedstorage:' + color + '_fluid_grid',
            'refinedstorage:' + color + '_network_receiver',
            'refinedstorage:' + color + '_network_transmitter',
            'refinedstorage:' + color + '_relay',
            'refinedstorage:' + color + '_detector',
            'refinedstorage:' + color + '_security_manager',
            'refinedstorage:' + color + '_wireless_transmitter',
            'refinedstorage:' + color + '_disk_manipulator',
            'refinedstorage:' + color + '_crafter',
            'refinedstorage:' + color + '_crafter_manager',
            'refinedstorage:' + color + '_crafting_monitor'
        ]);
    });
    
    function hideMetal(mod, name, types){
        types.forEach(type => {
            const id = mod === 'immersiveengineering' && 'mekanism' ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`;
            if(!ingredient.of(id).empty){
                e.hide(id);
            }
        });
    }

    //Hide metals, format: 'mod','metal',['type1','type2','etc']
    hideMetal('immersiveengineering','copper',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','silver',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','aluminum',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','uranium',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','lead',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','nickel',['ingot','ore','dust','nugget','storage']);
    hideMetal('immersiveengineering','steel',['ingot','dust','nugget','storage']);
    hideMetal('mekanism','copper',['ingot','ore','dust','nugget','block']);
    hideMetal('mekanism','tin',['ingot','ore','dust','nugget','block']);
    hideMetal('mekanism','uranium',['ingot','ore','dust','nugget','block']);
    hideMetal('mekanism','lead',['ingot','ore','dust','nugget','block']);
    hideMetal('mekanism','osmium',['ingot','ore','dust','nugget','block']);
    hideMetal('create','copper',['ingot','ore','dust','nugget','block']);
    hideMetal('create','zinc',['ingot','ore','dust','nugget','block']);
    hideMetal('thermal','copper',['ingot','ore','dust','nugget','block']);
    hideMetal('thermal','tin',['ingot','ore','dust','nugget','block']);
    hideMetal('thermal','lead',['ingot','ore','dust','nugget','block']);
    hideMetal('thermal','silver',['ingot','ore','dust','nugget','block']);
    hideMetal('thermal','nickel',['ingot','ore','dust','nugget','block']);
});