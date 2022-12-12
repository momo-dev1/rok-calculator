import {
    Farm, LumberMill, Quarry, GoldMine, Academy, StoreHouse, AllianceCenter, BuilderHut, Shop,
    TradingPost, LyceumOfWisdom, CourierStation
} from "../public/assets/buildings"

export const BuildingsData = [
    {
        name: "Farm",
        category: "Economic",
        src: Farm,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        food: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rock: [0, 0, 0, 0, 0, 1000, 1600, 2600, 4200, 6600, 10000, 15000, 22500, 35000, 52500, 80000, 120000, 200000, 300000, 450000, 675000, 100000, 160000, 250000, 380000],
        timber: [100, 200, 300, 500, 1000, 1800, 2700, 4000, 6000, 9000, 15000, 22500, 35000, 52500, 80000, 120000, 180000, 275000, 425000, 650000, 975000, 150000, 220000, 350000, 520000],
        ore: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        power: [5, 11, 18, 28, 38, 68, 150, 309, 549, 874, 1366, 2032, 3049, 4419, 6176, 8576, 11896, 16246, 21966, 29846, 40211, 54646, 74946, 103446, 143196],
        time: [2, 15, 60, 90, 120, 600, 1800, 5400, 7200, 10800, 14400, 22020, 28980, 36000, 48000, 64980, 79980, 100800, 129600, 158400, 208800, 280800, 349200, 439200],
        qty: 1,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalPower: 0,
        totalTime: 0
    },

]


