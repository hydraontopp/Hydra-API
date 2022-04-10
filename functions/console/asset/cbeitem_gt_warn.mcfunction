#tellraw @a {"rawtext":[{"text":"§¶§6Console ► §¶§cFlagged §d"},{"selector":"@s"},{"text":"§¶§e for attempting CBE"}]}


scoreboard players add @s warncbe 1
playsound random.break @s ~ ~ ~
execute @s[scores={warncbe=3}] ~~~ scoreboard players add @s warn 1
execute @s[scores={warncbe=6}] ~~~ scoreboard players add @s warn 1
execute @a[scores={warncbe=9..}] ~~~ tag @s add BanCBE
clear
function UAC/echestwipe
tellraw @a[tag=staffapi] {"rawtext":[{"text":"§¶§6Console §b► §d"},{"selector":"@s"},{"text":"'s §eCBE item warns§7: §7["},{"score":{"name":"@s","objective":"warncbe"}},{"text":"§b/9§7]"}]}
playsound note.bass @a ~ ~ ~
event entity @s api:ban_soft

#This hides this from the in-game function command directory
execute @f ~~~ hide
tag @f[tag=""] add hide
