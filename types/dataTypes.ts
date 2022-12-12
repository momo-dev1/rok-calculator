export type TropTier = {
    name: string,
    food: number,
    stone: number,
    timber: number,
    ore: number,
    gold: number,
    time: number,
    might: number,
    qty: number,
}
export type Research = {
    name: string;
    labs: number[];
    food: number[];
    rock: number[];
    timber: number[];
    ore: number[];
    gold: number[];
    time: number[];
    level: number[];
    start: number;
    end: number;
    totalFood: number;
    totalRock: number;
    totalTimber: number;
    totalOre: number;
    totalGold: number;
    totalTime: number;
}

export type Speed = {
    name: string,
    time: number
    value: number
}

export type SpeedUp = {
    name: string
    icon: any
    times: Speed[]
}

export type Building = {
    name: string;
    food: number[];
    rock: number[];
    timber: number[];
    ore: number[];
    power: number[];
    time: number[];
    level: number[];
    qty: number,
    start: number;
    end: number;
    totalFood: number;
    totalRock: number;
    totalTimber: number;
    totalOre: number;
    totalPower: number;
    totalTime: number;
}

export interface buildingsInitialState {
    food: number,
    rock: number,
    timber: number,
    ore: number,
    time: number,
    power: number,
    speedBoost: number,
    buildings: Building[],
}

export interface TroopsInitialState {
    food: number,
    rock: number,
    timber: number,
    ore: number,
    time: number,
    might: number,
    gold: number,
    speedBoost: number,
    subsidy: number,
    tier1: TropTier[],
    tier2: TropTier[],
    tier3: TropTier[],
    tier4: TropTier[]
}

export interface ResearchInitialState {
    food: number,
    rock: number,
    timber: number,
    ore: number,
    time: number,
    gold: number,
    tome: number,
    anima: number,
    speedBoost: number,
    military: Research[],
    economy: Research[],
    defense: Research[],
    monsterHunt: Research[],
    upgradeDefense: Research[],
    upgradeMilitary: Research[],
    armyLeadership: Research[],
    militaryCommand: Research[],
    gear: Research[],
    wonderBattles: Research[],
    advancedWonderBattles: Research[],
    familiars: Research[]
}

export interface SpeedInitialState {
    time: number,
    speed: SpeedUp[],
}