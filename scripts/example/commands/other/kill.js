import { Server } from '../../../library/Minecraft.js';
import { tellrawStaff } from '../../../library/utils/prototype.js';
const registerInformation = {
    cancelMessage: true,
    name: 'kill',
    description: 'Configure the World Spawn in console',
    usage: '[ cancel ]',
    example: [
        'kill',
        'kill cancel'
    ]
};

Server.command.register(registerInformation, (chatmsg, args) => {
    const { sender } = chatmsg;
    const name = sender.getName();
    if (sender.scoreTest('icmtoggle') === 0) {
        return sender.tellraw(`§¶§6Console ► §c§lThe Realm Owner currently has Player Commands Disabled`);
    } else if (sender.scoreTest('in_combat') === 1) {
        return sender.tellraw(`§¶§6Console ► §6kill §cunavailable §bwhile in combat`);
    } else if (sender.scoreTest('icmtoggle') === 1) {
        const cancel = `cancel`;
        if (cancel.includes(args[0])) {
            sender.addTag('kill1');
            sender.tellraw(`§¶§6Console ► §b§lkill was canceled`);
        }
        else {
            if (!sender.hasTag('kill1')) {
                sender.addTag('kill1');
                return sender.tellraw(`§¶§6Console ► §c§lAre you sure? Execute again for kill. Or use §7[ §b!kill cancel §7] §cto cancel.`);
            }
            if (sender.hasTag('kill1')) {
                sender.removeTag('kill1');
                sender.runCommand(`scoreboard players set @s kill 1`);
                tellrawStaff(`§¶§6Console ► §d${name} §bused kill command`);
                return sender.tellraw(`§¶§6Console ► §b§lTo prevent combat logging, kill will happen in 10 seconds`);
            }
        }
    }
});