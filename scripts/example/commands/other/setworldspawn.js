import { Server } from '../../../library/Minecraft.js';
import { tellrawStaff } from '../../../library/utils/prototype.js';
const registerInformation = {
    cancelMessage: true,
    name: 'worldspawn',
    description: 'Configure the World Spawn in console',
    usage: '[ set | remove ]',
    example: [
        'worldspawn remove',
        'worldspawn set 0 90 0'
    ]
};

Server.command.register(registerInformation, (chatmsg, args) => {
    const { sender } = chatmsg;
    const name = sender.getName();
    let worldset = ['set'];
    let worldremove = ['remove'];

    if (sender.hasTag('staffapi')) {
        if (worldset.includes(args[0])) {
            sender.runCommand(`scoreboard players operation worlddum Worldx = @s X_Coordinate`);
            sender.runCommand(`scoreboard players operation worlddum Worldy = @s Y_Coordinate`);
            sender.runCommand(`scoreboard players operation worlddum Worldz = @s Z_Coordinate`);
            sender.runCommand(`scoreboard players set @s Worldx ${sender.scoreTest('X_Coordinate')}`);
            sender.runCommand(`scoreboard players set @s Worldy ${sender.scoreTest('Y_Coordinate')}`);
            sender.runCommand(`scoreboard players set @s Worldz ${sender.scoreTest('Z_Coordinate')}`);
            sender.runCommand(`setworldspawn  ~~~`);
            sender.runCommand(`function particle/explode`);
            sender.runCommand(`scoreboard players set worlddum worldcustom 1`);
            sender.tellraw(`§¶§6Console ► §b§lWorld Spawn configured to §e${sender.scoreTest('Worldx')} ${sender.scoreTest('Worldy')} ${sender.scoreTest('Worldz')}§b! Players will be sent here after passing World Border`);
        }
        else if (worldremove.includes(args[0])) {
            sender.runCommand(`scoreboard players set worlddum worldcustom 0`);
            sender.runCommand(`scoreboard players set worlddum Worldx 0`);
            sender.runCommand(`scoreboard players set worlddum Worldz 0`);
            sender.runCommand(`scoreboard players set worlddum Worldy 0`);
            sender.runCommand(`scoreboard players operation @s Worldx = worlddum Worldx`);
            sender.runCommand(`scoreboard players operation @s Worldy = worlddum Worldy`);
            sender.runCommand(`scoreboard players operation @s Worldz = worlddum Worldz`);
            sender.tellraw(`§¶§6Console ► §b§lCustom World Spawn has been set back to default`);
        }
        else {
            sender.tellraw(`§¶§6Console ► §cERROR 2! §6Usage Example §7:§b§l !worldspawn [ set | remove ]\n§¶§cINFO ► §bThis tells console where worldspawn is. Where you're standing will also be where default spawn is now. People will teleport here when crossing world border, or when using the "spawn" chat command.`);
        }
    } else {
        sender.tellraw(`§¶§6Console ► §c§lError 4: Only Staff can configure world spawn`);
    }
});