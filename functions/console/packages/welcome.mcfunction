scoreboard players add @a welcome 1
scoreboard objectives add welcome dummy welcome
execute @a[scores={welcome=110..111}] ~~~ scoreboard objectives add has_gt dummy
execute @a[scores={welcome=110..111}] ~~~ scoreboard players set @s has_gt 0
execute @a[scores={welcome=120}] ~~~ function console/asset/welcome_start
execute @a[scores={welcomed=1}] ~~~ scoreboard players set @s welcome 0
#hide
execute @f ~~~ hide
tag @f[tag=""] add hide