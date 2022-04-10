#Test for needed experimental features
scoreboard objectives add has_xx dummy
scoreboard objectives add in_nether dummy
scoreboard objectives add in_end dummy
scoreboard players set @s has_xx 0
scoreboard players set @s in_nether 0
scoreboard players set @s in_end 0

#enabled scoreboards

#modules

#commands

#start
gamerule showcoordinates true
gamerule sendcommandfeedback false
scoreboard objectives add 2KK001 dummy 2KK001
scoreboard players set @s 2KK001 0
gamerule functioncommandlimit 10000
scoreboard players set @s hometp 3
scoreboard players set @s opabusemodule 2
scoreboard players set @s welcomed 1
#scoreboard objectives add gmc_flag dummy
#scoreboard objectives add totemaut dummy
#scoreboard objectives add totemtog dummy
#scoreboard objectives add armtoggle dummy
#scoreboard objectives add in_combat dummy
#scoreboard objectives add combat_timer dummy
#scoreboard objectives add online dummy
#scoreboard objectives add is_sleeping dummy
#scoreboard objectives add invcheck dummy
#scoreboard objectives add tp_cooldown dummy
#scoreboard players set @s is_sleeping 0
#scoreboard players set @s kill 0
#scoreboard players set @s kills 0

#If experimental features are on, set to true
event entity @a api:test_experimental
tellraw @s[scores={has_xx=0}] {"rawtext":[{"text":"§¶§6Console ► §6Experimental Features §7: §4NOT Enabled §7|| §4Experimental Features will fail."}]}
tellraw @s[scores={has_xx=1}] {"rawtext":[{"text":"§¶§6Console ► §6Experimental Features §7: §2ENABLED"}]}
tellraw @s[scores={has_gt=1}] {"rawtext":[{"text":"§¶§6Console ► §6Gametest Features §7: §2ENABLED"}]}
tellraw @s[scores={has_gt=0}] {"rawtext":[{"text":"§¶§6Console ► §6Gametest Features §7: §4NOT Enabled §7|| §4Gametest Features will fail."}]}
#This hides this from the in-game function command directory
execute @f ~~~ hide
tag @f[tag=""] add hide