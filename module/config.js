// Namespace COC7 Configuration Values
export const COC7 = {};

// Custom chatMessage
// CONFIG.ChatMessage.template = 'systems/CoC7/templates/chat/chat-message.html';

/**
 * The set of Eras used within the system
 * @type {Object}
 */
COC7.eras = {
	'nvct': 'CoC7.EraNvct',
	'drka': 'CoC7.EraDrka',
	'ddts': 'CoC7.EraDdts',
	'glit': 'CoC7.EraGlit',
	'1920': 'CoC7.Era1920',
	'pulp': 'CoC7.EraPulp',
	'mdrn': 'CoC7.EraMdrn'
};


COC7.characteristics = {
	'str' : 'CoC7.CharacStr',
	'con' : 'CoC7.CharacCon',
	'siz' : 'CoC7.CharacSiz',
	'dex' : 'CoC7.CharacDex',
	'app' : 'CoC7.CharacApp',
	'int' : 'CoC7.CharacInt',
	'pow' : 'CoC7.CharacPow',
	'edu' : 'CoC7.CharacEdu'
};

/**
 * The set of Skills attributes used within the system
 * @type {Object}
 */
COC7.skillProperties = {
	noxpgain: 'CoC7.SkillNoXpGain',
	special: 'CoC7.SkillSpecial',
	rarity: 'CoC7.SkillRarity',
	push: 'CoC7.SkillPush',
	combat:	'CoC7.SkillCombat',
	fighting: 'CoC7.SkillFighting',
	firearm: 'CoC7.SkillFirearm'
};

COC7.weaponProperties = {
	melee: 'CoC7.Weapon.Property.Melee',
	rngd: 'CoC7.WeaponRngd',
	thrown: 'CoC7.Weapon.Property.Thrown',
	shotgun: 'CoC7.Weapon.Property.Shotgun',
	dbrl: 'CoC7.WeaponDbrl',
	impl: 'CoC7.WeaponImpl',
	brst: 'CoC7.WeaponBrst',
	auto: 'CoC7.WeaponAuto',
	ahdb: 'CoC7.WeaponAhdb',
	addb: 'CoC7.WeaponAddb',
	slnt: 'CoC7.WeaponSlnt',
	spcl: 'CoC7.WeaponSpcl',
	mont: 'CoC7.WeaponMont',
	blst: 'CoC7.WeaponBlst',
	stun: 'CoC7.WeaponStun',
	rare: 'CoC7.WeaponRare',
	burn: 'CoC7.Weapon.Property.Burn'
};

COC7.formula = {};

COC7.formula.actor = {
	'@STR': 'this.data.data.characteristics.str.value',
	'@CON': 'this.data.data.characteristics.con.value',
	'@SIZ': 'this.data.data.characteristics.siz.value',
	'@DEX': 'this.data.data.characteristics.dex.value',
	'@APP': 'this.data.data.characteristics.app.value',
	'@INT': 'this.data.data.characteristics.int.value',
	'@POW': 'this.data.data.characteristics.pow.value',
	'@EDU': 'this.data.data.characteristics.edu.value'
};

COC7.formula.actorsheet = {
	'@STR': 'this.actor.data.data.characteristics.str.value',
	'@CON': 'this.actor.data.data.characteristics.con.value',
	'@SIZ': 'this.actor.data.data.characteristics.siz.value',
	'@DEX': 'this.actor.data.data.characteristics.dex.value',
	'@APP': 'this.actor.data.data.characteristics.app.value',
	'@INT': 'this.actor.data.data.characteristics.int.value',
	'@POW': 'this.actor.data.data.characteristics.pow.value',
	'@EDU': 'this.actor.data.data.characteristics.edu.value'
};

COC7.status = {
	tempoInsane: 'tempoInsane',
	indefInsane: 'indefInsane',
	unconscious: 'unconscious',
	criticalWounds: 'criticalWounds',
	dying: 'dying'
};


COC7.newSkillName = 'CoC7.newSkillName';
COC7.newItemName = 'CoC7.newItemName';
COC7.newWeaponName = 'CoC7.newWeaponName';

COC7.creatureFightingSkill = 'CoC7.creatureFightingSkill';

COC7.dodgeSkillName = 'CoC7.dodgeSkillName';
COC7.creditRatingSkillName = 'CoC7.creditRatingSkillName';
COC7.fightingSpecializationName = 'CoC7.fightingSpecializationName';
COC7.firearmSpecializationName = 'CoC7.firearmSpecializationName';

COC7.combatCards = {
	fightBack:	'CoC7.FightBack',
	dodge:		'CoC7.Dodge',
	maneuver:	'CoC7.Maneuver',
};

// COC7.dodge = {
// 	'name': COC7.dodgeSkillName,
// 	'type': 'skill',
// 	'base': '1/2*@DEX',
// 	'value': -1,
// 	'data': {
// 		'specialization': COC7.fightingSpecializationName },
// 	'properties': {
// 		'special': true,
// 		'rarity': false,
// 		'push': false,
// 		'combat': true,
// 		'fighting': true,
// 		'firearm': false
// 	},
// 	'flags': { 'wpnexcl': true}
// };

// COC7.PcSkills = {
// 	'dodge' : COC7.dodge,
// 	'throw' : {}
// };