playsound random.levelup @s ~~~ 2
#title @s title §¶§6§l Lexus API Connected
tellraw @a {"rawtext":[{"text":"§¶§6Console §b► §d"},{"selector":"@s"},{"text":" §¶§eJoined has joined for the first time ever!"}]}
tellraw @s {"rawtext":[{"text":"§¶§6Console §b► §eAdmins: /function admin/help Players: !help!"}]}
function console/packages/api


#This hides this from the in-game function command directory
execute @f ~~~ hide
tag @f[tag=""] add hide