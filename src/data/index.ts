// Data sourced on 2025-10-16 from:
// https://www.smogon.com/dex/sv/abilities/ for descriptions
// https://bulbapedia.bulbagarden.net/wiki/Ability for missing descriptions and generation data

export type ability = {
  name: string;
  generation: number;
  description?: string;
}

export const abilityList: ability[] = [
  {
    name: "Adaptability",
    generation: 4,
    description: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5."
  },
  {
    name: "Aerilate",
    generation: 6,
    description: "This Pokemon's Normal-type moves become Flying type and have 1.2x power."
  },
  {
    name: "Aftermath",
    generation: 4,
    description: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP."
  },
  {
    name: "Air Lock",
    generation: 3,
    description: "While this Pokemon is active, the effects of weather conditions are disabled."
  },
  {
    name: "Analytic",
    generation: 5,
    description: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn."
  },
  {
    name: "Anger Point",
    generation: 4,
    description: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages."
  },
  {
    name: "Anger Shell",
    generation: 9,
    description: "At 1/2 or less of this Pokemon's max HP: +1 Atk, Sp. Atk, Spe, and -1 Def, Sp. Def."
  },
  {
    name: "Anticipation",
    generation: 4,
    description: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move."
  },
  {
    name: "Arena Trap",
    generation: 3,
    description: "Prevents opposing Pokemon from choosing to switch out unless they are airborne."
  },
  {
    name: "Armor Tail",
    generation: 9,
    description: "This Pokemon and its allies are protected from opposing priority moves."
  },
  {
    name: "Aroma Veil",
    generation: 6,
    description: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment."
  },
  {
    name: "As One",
    generation: 8,
    description: "Combination of the Unnerve and Chilling/Grim Neigh Abilities."
  },
  {
    name: "Aura Break",
    generation: 6,
    description: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x."
  },
  {
    name: "Bad Dreams",
    generation: 4,
    description: "Causes sleeping foes to lose 1/8 of their max HP at the end of each turn."
  },
  {
    name: "Ball Fetch",
    generation: 8,
    description: "If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle."
  },
  {
    name: "Battery",
    generation: 7,
    description: "This Pokemon's allies have the power of their special attacks multiplied by 1.3."
  },
  {
    name: "Battle Armor",
    generation: 3,
    description: "This Pokemon cannot be struck by a critical hit."
  },
  {
    name: "Battle Bond",
    generation: 7,
    description: "After KOing a Pokemon: raises Attack, Sp. Atk, Speed by 1 stage. Once per battle."
  },
  {
    name: "Beads of Ruin",
    generation: 9,
    description: "Active Pokemon without this Ability have their Special Defense multiplied by 0.75."
  },
  {
    name: "Beast Boost",
    generation: 7,
    description: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon."
  },
  {
    name: "Berserk",
    generation: 7,
    description: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP."
  },
  {
    name: "Big Pecks",
    generation: 5,
    description: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage."
  },
  {
    name: "Blaze",
    generation: 3,
    description: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Fire attacks."
  },
  {
    name: "Bulletproof",
    generation: 6,
    description: "This Pokemon is immune to bullet moves."
  },
  {
    name: "Cheek Pouch",
    generation: 6,
    description: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect."
  },
  {
    name: "Chilling Neigh",
    generation: 8,
    description: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon."
  },
  {
    name: "Chlorophyll",
    generation: 3,
    description: "If Sunny Day is active, this Pokemon's Speed is doubled."
  },
  {
    name: "Clear Body",
    generation: 3,
    description: "Prevents other Pokemon from lowering this Pokemon's stat stages."
  },
  {
    name: "Cloud 9",
    generation: 3,
    description: "While this Pokemon is active, the effects of weather conditions are disabled."
  },
  {
    name: "Color Change",
    generation: 3,
    description: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type."
  },
  {
    name: "Comatose",
    generation: 7,
    description: "This Pokemon cannot be statused, and is considered to be asleep."
  },
  {
    name: "Commander",
    generation: 9,
    description: "If ally is Dondozo: this Pokemon cannot act or be hit, +2 to all Dondozo's stats."
  },
  {
    name: "Competitive",
    generation: 6,
    description: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe."
  },
  {
    name: "Compound Eyes",
    generation: 3,
    description: "This Pokemon's moves have their accuracy multiplied by 1.3."
  },
  {
    name: "Contrary",
    generation: 5,
    description: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa."
  },
  {
    name: "Corrosion",
    generation: 7,
    description: "This Pokemon can poison or badly poison a Pokemon regardless of its typing."
  },
  {
    name: "Costar",
    generation: 9,
    description: "On switch-in, this Pokemon copies all of its ally's stat stage changes."
  },
  {
    name: "Cotton Down",
    generation: 8,
    description: "If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage."
  },
  {
    name: "Cud Chew",
    generation: 9,
    description: "If this Pokemon eats a Berry, it will eat that Berry again at the end of the next turn."
  },
  {
    name: "Curious Medicine",
    generation: 8,
    description: "On switch-in, this Pokemon's allies have their stat stages reset to 0."
  },
  {
    name: "Cursed Body",
    generation: 5,
    description: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled."
  },
  {
    name: "Cute Charm",
    generation: 3,
    description: "30% chance of infatuating Pokemon of the opposite gender if they make contact."
  },
  {
    name: "Damp",
    generation: 3,
    description: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active."
  },
  {
    name: "Dancer",
    generation: 7,
    description: "After another Pokemon uses a dance move, this Pokemon uses the same move."
  },
  {
    name: "Dark Aura",
    generation: 6,
    description: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power."
  },
  {
    name: "Dauntless Shield",
    generation: 8,
    description: "On switch-in, this Pokemon's Defense is raised by 1 stage. Once per battle."
  },
  {
    name: "Dazzling",
    generation: 7,
    description: "This Pokemon and its allies are protected from opposing priority moves."
  },
  {
    name: "Defeatist",
    generation: 5,
    description: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved."
  },
  {
    name: "Defiant",
    generation: 5,
    description: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe."
  },
  {
    name: "Delta Stream",
    generation: 6,
    description: "On switch-in, strong winds begin until this Ability is not active in battle."
  },
  {
    name: "Desolate Land",
    generation: 6,
    description: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle."
  },
  {
    name: "Disguise",
    generation: 7,
    description: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead."
  },
  {
    name: "Download",
    generation: 4,
    description: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense."
  },
  {
    name: "Dragon's Maw",
    generation: 8,
    description: "This Pokemon's offensive stat is multiplied by 1.5 while using a Dragon-type attack."
  },
  {
    name: "Drizzle",
    generation: 3,
    description: "On switch-in, this Pokemon summons Rain Dance."
  },
  {
    name: "Drought",
    generation: 3,
    description: "On switch-in, this Pokemon summons Sunny Day."
  },
  {
    name: "Dry Skin",
    generation: 4,
    description: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun."
  },
  {
    name: "Early Bird",
    generation: 3,
    description: "This Pokemon's sleep counter drops by 2 instead of 1."
  },
  {
    name: "Earth Eater",
    generation: 9,
    description: "This Pokemon heals 1/4 of its max HP when hit by Ground moves; Ground immunity."
  },
  {
    name: "Effect Spore",
    generation: 3,
    description: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon."
  },
  {
    name: "Electric Surge",
    generation: 7,
    description: "On switch-in, this Pokemon summons Electric Terrain."
  },
  {
    name: "Electromorphosis",
    generation: 9,
    description: "This Pokemon gains the Charge effect when it takes a hit from an attack."
  },
  {
    name: "Embody Aspect",
    generation: 9,
    description: "On switch-in, this Pokemon's Defense (cornerstone), Attack (Hearthflame), Speed (Teal), or Special Defense (Wellspring) is raised by 1 stage."
  },
  {
    name: "Emergency Exit",
    generation: 7,
    description: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP."
  },
  {
    name: "Fairy Aura",
    generation: 6,
    description: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power."
  },
  {
    name: "Filter",
    generation: 4,
    description: "This Pokemon receives 3/4 damage from supereffective attacks."
  },
  {
    name: "Flame Body",
    generation: 3,
    description: "30% chance a Pokemon making contact with this Pokemon will be burned."
  },
  {
    name: "Flare Boost",
    generation: 5,
    description: "While this Pokemon is burned, its special attacks have 1.5x power."
  },
  {
    name: "Flash Fire",
    generation: 3,
    description: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity."
  },
  {
    name: "Flower Gift",
    generation: 4,
    description: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x."
  },
  {
    name: "Flower Veil",
    generation: 6,
    description: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon."
  },
  {
    name: "Fluffy",
    generation: 7,
    description: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves."
  },
  {
    name: "Forecast",
    generation: 3,
    description: "Castform's type changes to the current weather condition's type, except Sandstorm."
  },
  {
    name: "Forewarn",
    generation: 4,
    description: "On switch-in, this Pokemon is alerted to the foes' move with the highest power."
  },
  {
    name: "Friend Guard",
    generation: 5,
    description: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks."
  },
  {
    name: "Frisk",
    generation: 4,
    description: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon."
  },
  {
    name: "Full Metal Body",
    generation: 7,
    description: "Prevents other Pokemon from lowering this Pokemon's stat stages."
  },
  {
    name: "Fur Coat",
    generation: 6,
    description: "This Pokemon's Defense is doubled."
  },
  {
    name: "Gale Wings",
    generation: 6,
    description: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1."
  },
  {
    name: "Galvanize",
    generation: 7,
    description: "This Pokemon's Normal-type moves become Electric type and have 1.2x power."
  },
  {
    name: "Gluttony",
    generation: 4,
    description: "This Pokemon eats Berries at 1/2 max HP or less instead of their usual 1/4 max HP."
  },
  {
    name: "Good as Gold",
    generation: 9,
    description: "This Pokemon is immune to Status moves."
  },
  {
    name: "Gooey",
    generation: 6,
    description: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage."
  },
  {
    name: "Gorilla Tactics",
    generation: 8,
    description: "This Pokemon's Attack is 1.5x, but it can only select the first move it executes."
  },
  {
    name: "Grass Pelt",
    generation: 6,
    description: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5."
  },
  {
    name: "Grassy Surge",
    generation: 7,
    description: "On switch-in, this Pokemon summons Grassy Terrain."
  },
  {
    name: "Grim Neigh",
    generation: 8,
    description: "This Pokemon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pokemon."
  },
  {
    name: "Guard Dog",
    generation: 9,
    description: "Immune to Intimidate. Intimidated: +1 Attack. Cannot be forced to switch out."
  },
  {
    name: "Gulp Missile",
    generation: 8,
    description: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis."
  },
  {
    name: "Guts",
    generation: 3,
    description: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage."
  },
  {
    name: "Hadron Engine",
    generation: 9,
    description: "On switch-in, summons Electric Terrain. During Electric Terrain, Sp. Atk is 1.3333x."
  },
  {
    name: "Harvest",
    generation: 5,
    description: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun."
  },
  {
    name: "Healer",
    generation: 5,
    description: "30% chance this Pokemon's ally has its status cured at the end of each turn."
  },
  {
    name: "Heatproof",
    generation: 4,
    description: "Fire damage against this Pokemon is dealt with 1/2 offensive stat; 1/2 burn damage."
  },
  {
    name: "Heavy Metal",
    generation: 5,
    description: "This Pokemon's weight is doubled."
  },
  {
    name: "Honey Gather",
    generation: 4,
    description: "The Pokémon may gather Honey after a battle."
  },
  {
    name: "Hospitality",
    generation: 9,
    description: "On switch-in, this Pokemon restores 1/4 of its ally's maximum HP, rounded down."
  },
  {
    name: "Huge Power",
    generation: 3,
    description: "This Pokemon's Attack is doubled."
  },
  {
    name: "Hunger Switch",
    generation: 8,
    description: "If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn."
  },
  {
    name: "Hustle",
    generation: 3,
    description: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x."
  },
  {
    name: "Hydration",
    generation: 4,
    description: "This Pokemon has its status cured at the end of each turn if Rain Dance is active."
  },
  {
    name: "Hyper Cutter",
    generation: 3,
    description: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage."
  },
  {
    name: "Ice Body",
    generation: 4,
    description: "If Snow is active, this Pokemon heals 1/16 of its max HP each turn."
  },
  {
    name: "Ice Face",
    generation: 8,
    description: "If Eiscue, the first physical hit it takes deals 0 damage. Effect is restored in Snow."
  },
  {
    name: "Ice Scales",
    generation: 8,
    description: "This Pokemon receives 1/2 damage from special attacks."
  },
  {
    name: "Illuminate",
    generation: 3,
    description: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat."
  },
  {
    name: "Illusion",
    generation: 5,
    description: "This Pokemon appears as the last Pokemon in the party until it takes direct damage."
  },
  {
    name: "Immunity",
    generation: 3,
    description: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it."
  },
  {
    name: "Imposter",
    generation: 5,
    description: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it."
  },
  {
    name: "Infiltrator",
    generation: 5,
    description: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil."
  },
  {
    name: "Innards Out",
    generation: 7,
    description: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP."
  },
  {
    name: "Inner Focus",
    generation: 3,
    description: "This Pokemon cannot be made to flinch. Immune to Intimidate."
  },
  {
    name: "Insomnia",
    generation: 3,
    description: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
  },
  {
    name: "Intimidate",
    generation: 3,
    description: "On switch-in, this Pokemon lowers the Attack of opponents by 1 stage."
  },
  {
    name: "Intrepid Sword",
    generation: 8,
    description: "On switch-in, this Pokemon's Attack is raised by 1 stage. Once per battle."
  },
  {
    name: "Iron Barbs",
    generation: 5,
    description: "Pokemon making contact with this Pokemon lose 1/8 of their max HP."
  },
  {
    name: "Iron Fist",
    generation: 4,
    description: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted."
  },
  {
    name: "Justified",
    generation: 5,
    description: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move."
  },
  {
    name: "Keen Eye",
    generation: 3,
    description: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat."
  },
  {
    name: "Klutz",
    generation: 4,
    description: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used."
  },
  {
    name: "Leaf Guard",
    generation: 4,
    description: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it."
  },
  {
    name: "Levitate",
    generation: 3,
    description: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it."
  },
  {
    name: "Libero",
    generation: 8,
    description: "This Pokemon's type changes to the type of the move it is using. Once per switch-in."
  },
  {
    name: "Light Metal",
    generation: 5,
    description: "This Pokemon's weight is halved."
  },
  {
    name: "Lightning Rod",
    generation: 3,
    description: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity."
  },
  {
    name: "Limber",
    generation: 3,
    description: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it."
  },
  {
    name: "Lingering Aroma",
    generation: 9,
    description: "Making contact with this Pokemon has the attacker's Ability become Lingering Aroma."
  },
  {
    name: "Liquid Ooze",
    generation: 3,
    description: "This Pokemon damages those draining HP from it for as much as they would heal."
  },
  {
    name: "Liquid Voice",
    generation: 7,
    description: "This Pokemon's sound-based moves become Water type."
  },
  {
    name: "Long Reach",
    generation: 7,
    description: "This Pokemon's attacks do not make contact with the target."
  },
  {
    name: "Magic Bounce",
    generation: 5,
    description: "This Pokemon blocks certain Status moves and bounces them back to the user."
  },
  {
    name: "Magic Guard",
    generation: 4,
    description: "This Pokemon can only be damaged by direct attacks."
  },
  {
    name: "Magician",
    generation: 6,
    description: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack."
  },
  {
    name: "Magma Armor",
    generation: 3,
    description: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it."
  },
  {
    name: "Magnet Pull",
    generation: 3,
    description: "Prevents opposing Steel-type Pokemon from choosing to switch out."
  },
  {
    name: "Marvel Scale",
    generation: 3,
    description: "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5."
  },
  {
    name: "Mega Launcher",
    generation: 6,
    description: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP."
  },
  {
    name: "Merciless",
    generation: 7,
    description: "This Pokemon's attacks are critical hits if the target is poisoned."
  },
  {
    name: "Mimicry",
    generation: 8,
    description: "This Pokemon's types change to match the Terrain. Type reverts when Terrain ends."
  },
  {
    name: "Mind's Eye",
    generation: 9,
    description: "Fighting, Normal moves hit Ghost. Accuracy can't be lowered, ignores evasiveness."
  },
  {
    name: "Minus",
    generation: 3,
    description: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x."
  },
  {
    name: "Mirror Armor",
    generation: 8,
    description: "If this Pokemon's stat stages would be lowered, the attacker's are lowered instead."
  },
  {
    name: "Misty Surge",
    generation: 7,
    description: "On switch-in, this Pokemon summons Misty Terrain."
  },
  {
    name: "Mold Breaker",
    generation: 4,
    description: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
  },
  {
    name: "Moody",
    generation: 5,
    description: "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn."
  },
  {
    name: "Motor Drive",
    generation: 4,
    description: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity."
  },
  {
    name: "Moxie",
    generation: 5,
    description: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon."
  },
  {
    name: "Multiscale",
    generation: 5,
    description: "If this Pokemon is at full HP, damage taken from attacks is halved."
  },
  {
    name: "Multitype",
    generation: 4,
    description: "If this Pokemon is an Arceus, its type changes to match its held Plate."
  },
  {
    name: "Mummy",
    generation: 5,
    description: "Pokemon making contact with this Pokemon have their Ability changed to Mummy."
  },
  {
    name: "Mycelium Might",
    generation: 9,
    description: "This Pokemon's Status moves go last in their priority bracket and ignore Abilities."
  },
  {
    name: "Natural Cure",
    generation: 3,
    description: "This Pokemon has its non-volatile status condition cured when it switches out."
  },
  {
    name: "Neuroforce",
    generation: 7,
    description: "This Pokemon's attacks that are super effective against the target do 1.25x damage."
  },
  {
    name: "Neutralizing Gas",
    generation: 8,
    description: "While this Pokemon is active, Abilities have no effect."
  },
  {
    name: "No Guard",
    generation: 4,
    description: "Every move used by or against this Pokemon will always hit."
  },
  {
    name: "Normalize",
    generation: 4,
    description: "This Pokemon's moves are changed to be Normal type and have 1.2x power."
  },
  {
    name: "Oblivious",
    generation: 3,
    description: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate."
  },
  {
    name: "Opportunist",
    generation: 9,
    description: "When an opposing Pokemon has a stat stage raised, this Pokemon copies the effect."
  },
  {
    name: "Orichalcum Pulse",
    generation: 9,
    description: "On switch-in, summons Sunny Day. During Sunny Day, Attack is 1.3333x."
  },
  {
    name: "Overcoat",
    generation: 5,
    description: "This Pokemon is immune to powder moves, Sandstorm damage, and Effect Spore."
  },
  {
    name: "Overgrow",
    generation: 3,
    description: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Grass attacks."
  },
  {
    name: "Own Tempo",
    generation: 3,
    description: "This Pokemon cannot be confused. Immune to Intimidate."
  },
  {
    name: "Parental Bond",
    generation: 6,
    description: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered."
  },
  {
    name: "Pastel Veil",
    generation: 8,
    description: "This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies."
  },
  {
    name: "Perish Body",
    generation: 8,
    description: "Making contact with this Pokemon starts the Perish Song effect for it and the attacker."
  },
  {
    name: "Pickpocket",
    generation: 5,
    description: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item."
  },
  {
    name: "Pickup",
    generation: 3,
    description: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn."
  },
  {
    name: "Pixilate",
    generation: 6,
    description: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power."
  },
  {
    name: "Plus",
    generation: 3,
    description: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x."
  },
  {
    name: "Poison Heal",
    generation: 4,
    description: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss."
  },
  {
    name: "Poison Point",
    generation: 3,
    description: "30% chance a Pokemon making contact with this Pokemon will be poisoned."
  },
  {
    name: "Poison Puppeteer",
    generation: 9,
    description: "If this Pokemon is a Pecharunt and poisons or badly poisons a target, the target also becomes confused."
  },
  {
    name: "Poison Touch",
    generation: 5,
    description: "This Pokemon's contact moves have a 30% chance of poisoning."
  },
  {
    name: "Power Construct",
    generation: 7,
    description: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn."
  },
  {
    name: "Power of Alchemy",
    generation: 7,
    description: "This Pokemon copies the Ability of an ally that faints."
  },
  {
    name: "Power Spot",
    generation: 8,
    description: "This Pokemon's allies have the power of their moves multiplied by 1.3."
  },
  {
    name: "Prankster",
    generation: 5,
    description: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune."
  },
  {
    name: "Pressure",
    generation: 3,
    description: "If this Pokemon is the target of a foe's move, that move loses one additional PP."
  },
  {
    name: "Primordial Sea",
    generation: 6,
    description: "On switch-in, heavy rain begins until this Ability is not active in battle."
  },
  {
    name: "Prism Armor",
    generation: 7,
    description: "This Pokemon receives 3/4 damage from super effective attacks."
  },
  {
    name: "Propeller Tail",
    generation: 8,
    description: "This Pokemon's moves cannot be redirected to a different target by any effect."
  },
  {
    name: "Protean",
    generation: 6,
    description: "This Pokemon's type changes to the type of the move it is using. Once per switch-in."
  },
  {
    name: "Protosynthesis",
    generation: 9,
    description: "Sunny Day active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed."
  },
  {
    name: "Psychic Surge",
    generation: 7,
    description: "On switch-in, this Pokemon summons Psychic Terrain."
  },
  {
    name: "Punk Rock",
    generation: 8,
    description: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power."
  },
  {
    name: "Pure Power",
    generation: 3,
    description: "This Pokemon's Attack is doubled."
  },
  {
    name: "Purifying Salt",
    generation: 9,
    description: "Ghost damage to this Pokemon dealt with a halved offensive stat; can't be statused."
  },
  {
    name: "Quark Drive",
    generation: 9,
    description: "Electric Terrain active or Booster Energy used: highest stat is 1.3x, or 1.5x if Speed."
  },
  {
    name: "Queenly Majesty",
    generation: 7,
    description: "This Pokemon and its allies are protected from opposing priority moves."
  },
  {
    name: "Quick Draw",
    generation: 8,
    description: "This Pokemon has a 30% chance to move first in its priority bracket with attacking moves."
  },
  {
    name: "Quick Feet",
    generation: 4,
    description: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis."
  },
  {
    name: "Rain Dish",
    generation: 3,
    description: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn."
  },
  {
    name: "Rattled",
    generation: 5,
    description: "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated."
  },
  {
    name: "Receiver",
    generation: 7,
    description: "This Pokemon copies the Ability of an ally that faints."
  },
  {
    name: "Reckless",
    generation: 4,
    description: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle."
  },
  {
    name: "Refrigerate",
    generation: 6,
    description: "This Pokemon's Normal-type moves become Ice type and have 1.2x power."
  },
  {
    name: "Regenerator",
    generation: 5,
    description: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out."
  },
  {
    name: "Ripen",
    generation: 8,
    description: "When this Pokemon eats certain Berries, the effects are doubled."
  },
  {
    name: "Rivalry",
    generation: 4,
    description: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender."
  },
  {
    name: "RKS System",
    generation: 7,
    description: "If this Pokemon is a Silvally, its type changes to match its held Memory."
  },
  {
    name: "Rock Head",
    generation: 3,
    description: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage."
  },
  {
    name: "Rocky Payload",
    generation: 9,
    description: "This Pokemon's offensive stat is multiplied by 1.5 while using a Rock-type attack."
  },
  {
    name: "Rough Skin",
    generation: 3,
    description: "Pokemon making contact with this Pokemon lose 1/8 of their max HP."
  },
  {
    name: "Run Away",
    generation: 3,
    description: "Enables a sure getaway from wild Pokémon."
  },
  {
    name: "Sand Force",
    generation: 5,
    description: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it."
  },
  {
    name: "Sand Rush",
    generation: 5,
    description: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm."
  },
  {
    name: "Sand Spit",
    generation: 8,
    description: "When this Pokemon is hit by an attack, the effect of Sandstorm begins."
  },
  {
    name: "Sand Stream",
    generation: 3,
    description: "On switch-in, this Pokemon summons Sandstorm."
  },
  {
    name: "Sand Veil",
    generation: 3,
    description: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm."
  },
  {
    name: "Sap Sipper",
    generation: 5,
    description: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity."
  },
  {
    name: "Schooling",
    generation: 7,
    description: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form."
  },
  {
    name: "Scrappy",
    generation: 4,
    description: "Fighting, Normal moves hit Ghost. Immune to Intimidate."
  },
  {
    name: "Screen Cleaner",
    generation: 8,
    description: "On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides."
  },
  {
    name: "Seed Sower",
    generation: 9,
    description: "When this Pokemon is hit by an attack, the effect of Grassy Terrain begins."
  },
  {
    name: "Serene Grace",
    generation: 3,
    description: "This Pokemon's moves have their secondary effect chance doubled."
  },
  {
    name: "Shadow Shield",
    generation: 7,
    description: "If this Pokemon is at full HP, damage taken from attacks is halved."
  },
  {
    name: "Shadow Tag",
    generation: 3,
    description: "Prevents foes from choosing to switch unless they also have this Ability."
  },
  {
    name: "Sharpness",
    generation: 9,
    description: "This Pokemon's slicing moves have their power multiplied by 1.5."
  },
  {
    name: "Shed Skin",
    generation: 3,
    description: "This Pokemon has a 33% chance to have its status cured at the end of each turn."
  },
  {
    name: "Sheer Force",
    generation: 5,
    description: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects."
  },
  {
    name: "Shell Armor",
    generation: 3,
    description: "This Pokemon cannot be struck by a critical hit."
  },
  {
    name: "Shield Dust",
    generation: 3,
    description: "This Pokemon is not affected by the secondary effect of another Pokemon's attack."
  },
  {
    name: "Shields Down",
    generation: 7,
    description: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor."
  },
  {
    name: "Simple",
    generation: 4,
    description: "When one of this Pokemon's stat stages is raised or lowered, the amount is doubled."
  },
  {
    name: "Skill Link",
    generation: 4,
    description: "This Pokemon's multi-hit attacks always hit the maximum number of times."
  },
  {
    name: "Slow Start",
    generation: 4,
    description: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns."
  },
  {
    name: "Slush Rush",
    generation: 7,
    description: "If Snow is active, this Pokemon's Speed is doubled."
  },
  {
    name: "Sniper",
    generation: 4,
    description: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5."
  },
  {
    name: "Snow Cloak",
    generation: 4,
    description: "If Snow is active, this Pokemon's evasiveness is 1.25x."
  },
  {
    name: "Snow Warning",
    generation: 4,
    description: "On switch-in, this Pokemon summons Snow."
  },
  {
    name: "Solar Power",
    generation: 4,
    description: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn."
  },
  {
    name: "Solid Rock",
    generation: 4,
    description: "This Pokemon receives 3/4 damage from supereffective attacks."
  },
  {
    name: "Soul-Heart",
    generation: 7,
    description: "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints."
  },
  {
    name: "Soundproof",
    generation: 3,
    description: "This Pokemon is immune to sound-based moves, unless it used the move."
  },
  {
    name: "Stakeout",
    generation: 7,
    description: "This Pokemon's offensive stat is doubled against a target that switched in this turn."
  },
  {
    name: "Stall",
    generation: 4,
    description: "This Pokemon moves last among Pokemon using the same or greater priority moves."
  },
  {
    name: "Stalwart",
    generation: 8,
    description: "This Pokemon's moves cannot be redirected to a different target by any effect."
  },
  {
    name: "Stamina",
    generation: 7,
    description: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move."
  },
  {
    name: "Stance Change",
    generation: 6,
    description: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield."
  },
  {
    name: "Static",
    generation: 3,
    description: "30% chance a Pokemon making contact with this Pokemon will be paralyzed."
  },
  {
    name: "Steadfast",
    generation: 4,
    description: "If this Pokemon flinches, its Speed is raised by 1 stage."
  },
  {
    name: "Steam Engine",
    generation: 8,
    description: "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves."
  },
  {
    name: "Steelworker",
    generation: 7,
    description: "This Pokemon's offensive stat is multiplied by 1.5 while using a Steel-type attack."
  },
  {
    name: "Steely Spirit",
    generation: 8,
    description: "This Pokemon and its allies' Steel-type moves have their power multiplied by 1.5."
  },
  {
    name: "Stench",
    generation: 3,
    description: "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch."
  },
  {
    name: "Sticky Hold",
    generation: 3,
    description: "This Pokemon cannot lose its held item due to another Pokemon's Ability or attack."
  },
  {
    name: "Storm Drain",
    generation: 4,
    description: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity."
  },
  {
    name: "Strong Jaw",
    generation: 6,
    description: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted."
  },
  {
    name: "Sturdy",
    generation: 3,
    description: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO."
  },
  {
    name: "Suction Cups",
    generation: 3,
    description: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item."
  },
  {
    name: "Super Luck",
    generation: 4,
    description: "This Pokemon's critical hit ratio is raised by 1 stage."
  },
  {
    name: "Supersweet Syrup",
    generation: 9,
    description: "On switch-in, this Pokemon lowers the evasiveness of opponents 1 stage. Once per battle."
  },
  {
    name: "Supreme Overlord",
    generation: 9,
    description: "This Pokemon's moves have 10% more power for each fainted ally, up to 5 allies."
  },
  {
    name: "Surge Surfer",
    generation: 7,
    description: "If Electric Terrain is active, this Pokemon's Speed is doubled."
  },
  {
    name: "Swarm",
    generation: 3,
    description: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Bug attacks."
  },
  {
    name: "Sweet Veil",
    generation: 6,
    description: "This Pokemon and its allies cannot fall asleep; those already asleep do not wake up."
  },
  {
    name: "Swift Swim",
    generation: 3,
    description: "If Rain Dance is active, this Pokemon's Speed is doubled."
  },
  {
    name: "Sword of Ruin",
    generation: 9,
    description: "Active Pokemon without this Ability have their Defense multiplied by 0.75."
  },
  {
    name: "Symbiosis",
    generation: 6,
    description: "If an ally uses its item, this Pokemon gives its item to that ally immediately."
  },
  {
    name: "Synchronize",
    generation: 3,
    description: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status."
  },
  {
    name: "Tablets of Ruin",
    generation: 9,
    description: "Active Pokemon without this Ability have their Attack multiplied by 0.75."
  },
  {
    name: "Tangled Feet",
    generation: 4,
    description: "This Pokemon's evasiveness is doubled as long as it is confused."
  },
  {
    name: "Tangling Hair",
    generation: 7,
    description: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage."
  },
  {
    name: "Technician",
    generation: 4,
    description: "This Pokemon's moves of 60 power or less have 1.5x power, including Struggle."
  },
  {
    name: "Telepathy",
    generation: 5,
    description: "This Pokemon does not take damage from attacks made by its allies."
  },
  {
    name: "Tera Shell",
    generation: 9,
    description: "If this Pokemon is a Terapagos with full HP, attacks taken have 0.5x effectiveness unless naturally immune."
  },
  {
    name: "Tera Shift",
    generation: 9,
    description: "If this Pokemon is a Terapagos, it transforms into its Terastal Form on entry."
  },
  {
    name: "Teraform Zero",
    generation: 9,
    description: "If this Pokemon is a Terapagos, terastallizing ends the effects of weather and terrain. Once per battle."
  },
  {
    name: "Teravolt",
    generation: 5,
    description: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
  },
  {
    name: "Thermal Exchange",
    generation: 9,
    description: "This Pokemon's Attack is raised by 1 when damaged by Fire moves; can't be burned."
  },
  {
    name: "Thick Fat",
    generation: 3,
    description: "Fire-/Ice-type moves against this Pokemon deal damage with a halved offensive stat."
  },
  {
    name: "Tinted Lens",
    generation: 4,
    description: "This Pokemon's attacks that are not very effective on a target deal double damage."
  },
  {
    name: "Torrent",
    generation: 3,
    description: "At 1/3 or less of its max HP, this Pokemon's offensive stat is 1.5x with Water attacks."
  },
  {
    name: "Tough Claws",
    generation: 6,
    description: "This Pokemon's contact moves have their power multiplied by 1.3."
  },
  {
    name: "Toxic Boost",
    generation: 5,
    description: "While this Pokemon is poisoned, its physical attacks have 1.5x power."
  },
  {
    name: "Toxic Chain",
    generation: 9,
    description: "This Pokemon's attacks have a 30% chance of badly poisoning."
  },
  {
    name: "Toxic Debris",
    generation: 9,
    description: "If this Pokemon is hit by a physical attack, Toxic Spikes are set on the opposing side."
  },
  {
    name: "Trace",
    generation: 3,
    description: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability."
  },
  {
    name: "Transistor",
    generation: 8,
    description: "This Pokemon's offensive stat is multiplied by 1.3 while using an Electric-type attack."
  },
  {
    name: "Triage",
    generation: 7,
    description: "This Pokemon's healing moves have their priority increased by 3."
  },
  {
    name: "Truant",
    generation: 3,
    description: "This Pokemon skips every other turn instead of using a move."
  },
  {
    name: "Turboblaze",
    generation: 5,
    description: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon."
  },
  {
    name: "Unaware",
    generation: 4,
    description: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage."
  },
  {
    name: "Unburden",
    generation: 4,
    description: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability."
  },
  {
    name: "Unnerve",
    generation: 5,
    description: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries."
  },
  {
    name: "Unseen Fist",
    generation: 8,
    description: "This Pokemon's contact moves ignore the target's protection, except Max Guard."
  },
  {
    name: "Vessel of Ruin",
    generation: 9,
    description: "Active Pokemon without this Ability have their Special Attack multiplied by 0.75."
  },
  {
    name: "Victory Star",
    generation: 5,
    description: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1."
  },
  {
    name: "Vital Spirit",
    generation: 3,
    description: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it."
  },
  {
    name: "Volt Absorb",
    generation: 3,
    description: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity."
  },
  {
    name: "Wandering Spirit",
    generation: 8,
    description: "Pokemon making contact with this Pokemon have their Ability swapped with this one."
  },
  {
    name: "Water Absorb",
    generation: 3,
    description: "This Pokemon heals 1/4 of its max HP instead of taking damage when hit by Water moves."
  },
  {
    name: "Water Bubble",
    generation: 7,
    description: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved."
  },
  {
    name: "Water Compaction",
    generation: 7,
    description: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move."
  },
  {
    name: "Water Veil",
    generation: 3,
    description: "This Pokemon cannot be burned. Gaining this Ability while burned cures it."
  },
  {
    name: "Weak Armor",
    generation: 5,
    description: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2."
  },
  {
    name: "Well-Baked Body",
    generation: 9,
    description: "This Pokemon's Defense is raised 2 stages if hit by a Fire move; Fire immunity."
  },
  {
    name: "White Smoke",
    generation: 3,
    description: "Prevents other Pokemon from lowering this Pokemon's stat stages."
  },
  {
    name: "Wimp Out",
    generation: 7,
    description: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP."
  },
  {
    name: "Wind Power",
    generation: 9,
    description: "This Pokemon gains the Charge effect when hit by a wind move or Tailwind begins."
  },
  {
    name: "Wind Rider",
    generation: 9,
    description: "Attack raised by 1 if hit by a wind move or Tailwind begins. Wind move immunity."
  },
  {
    name: "Wonder Guard",
    generation: 3,
    description: "This Pokemon can only be damaged by super effective moves and indirect damage."
  },
  {
    name: "Wonder Skin",
    generation: 5,
    description: "Status moves with accuracy checks are 50% accurate when used on this Pokemon."
  },
  {
    name: "Zen Mode",
    generation: 5,
    description: "If this Pokemon is a Darmanitan or Galarian Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode."
  },
  {
    name: "Zero to Hero",
    generation: 9,
    description: "If this Pokemon is a Palafin in Zero Form, switching out has it change to Hero Form."
  },
]
