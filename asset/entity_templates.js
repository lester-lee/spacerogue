Game.EntityGenerator = new Game.Generator('entities', Game.Entity);

Game.EntityGenerator.learn({
    name: '',
    type: 'initial_drone',
    long_desc: "A rustic drone from aeons past. Surprised it's still functional.",
    chr: 'D',
    fg: '#fff',
    maxHP: 10,
    dodge: .1,
    friendly: true,
    defaultEquipment: ["Basic Camera", "Wheeled Chasis", "Hydraulic Punch", "Grapple Arm"],
    traits: [
        "PlayerMessager", "Chronicle", "MapMemory", "Sight", "WalkerCorporeal",
        "PlayerActor", "StatHitPoints", "MeleeAttacker", "Tower", "DoorOpener",
        "InventoryHolder", "EquipmentHolder", "SpeciesDrone"
    ]
}, "initial_drone");

Game.EntityGenerator.learn({
    name: 'janitor drone',
    chr: 'j',
    fg: '#0bf',
    maxHP: 5,
    dodge: .1,
    defaultEquipment: ["Wide Angle Camera", "Wheeled Chasis", "Hydraulic Punch"],
    traits: [
        "Sight", "WanderChaserActor", "WalkerCorporeal", "StatHitPoints",
        "MeleeAttacker", "InventoryHolder", "EquipmentHolder"
    ]
});

Game.EntityGenerator.learn({
    name: 'Ancient Security Drone',
    chr: 'a',
    fg: '#850',
    maxHP: 3,
    dodge: 0,
    defaultEquipment: ["Wide Angle Camera", "Wheeled Chasis", "Pneumatic Punch"],
    traits: [
        "Sight", "WanderChaserActor", "WalkerCorporeal", "StatHitPoints",
        "MeleeAttacker", "InventoryHolder", "EquipmentHolder"
    ]
});
