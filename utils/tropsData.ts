import {
    Warrior,
    Slinger,
    Horseman,
    BatteringRam,
    Swordsman,
    Bowman,
    LightCavalry,
    Arcuballista,
    Spearman,
    CompositeBowman,
    HeavyCavalry,
    Mangonel,
    Ballista,
    Cataphract,
    ChuKoNu,
    Conquistador,
    CrossBowman,
    Hwarang,
    Janissary,
    Knight,
    Legionary,
    LongBowman,
    LongSwordsman,
    Mamluk,
    Samurai,
    TeutonicKnight,
    ThrowingAxeman,
    EliteCataphract,
    EliteChuKoNu,
    EliteConquistador,
    EliteHwarang,
    EliteJanissary,
    EliteLegionary,
    EliteLongbowman,
    EliteMamluk,
    EliteSamurai,
    EliteTeutonicKnight,
    EliteThrowingAxeman,
    RoyalCrossbowman,
    RoyalGuard,
    RoyalKnight,
    Trebuchet
} from "../public/assets/trops"

const tropsTier1 = [
    {
        name: "Warrior",
        category: "Infantry",
        src: Warrior
    },
    {
        name: "Slinger",
        category: "Archer",
        src: Slinger
    },
    {
        name: "Horseman",
        category: "Cavalry",
        src: Horseman
    },
    {
        name: "BatteringRam",
        category: "Siege",
        src: BatteringRam
    }
]

const tropsTier2 = [
    {
        name: "Swordsman",
        category: "Infantry",
        src: Swordsman
    },
    {
        name: "Bowman",
        category: "Archer",
        src: Bowman
    },
    {
        name: "Light Cavalry",
        category: "Cavalry",
        src: LightCavalry
    },
    {
        name: "Arcuballista",
        category: "Siege",
        src: Arcuballista
    }
]

const tropsTier3 = [
    {
        name: "Spearman",
        category: "Infantry",
        src: Spearman
    },
    {
        name: "Composite Bowman",
        category: "Archer",
        src: CompositeBowman
    },
    {
        name: "Heavy Cavalry",
        category: "Cavalry",
        src: HeavyCavalry
    },
    {
        name: "Mangonel",
        category: "Siege",
        src: Mangonel
    }
]

const tropsTier4 = [
    {
        name: "Long Swordsman",
        category: "Infantry",
        src: LongSwordsman
    },
    {
        name: "CrossBowman",
        category: "Archer",
        src: CrossBowman
    },
    {
        name: "Knight",
        category: "Cavalry",
        src: Knight
    },
    {
        name: "Ballista",
        category: "Siege",
        src: Ballista
    },
    {
        name: "Legionary",
        only: "(Rome only)",
        category: "Infantry",
        src: Legionary
    },
    {
        name: "Teutonic Knight",
        only: "(Germany only)",
        category: "Cavalry",
        src: TeutonicKnight
    },
    {
        name: "LongBowman",
        only: "(Britain only)",
        category: "Archer",
        src: LongBowman
    }, {
        name: "Throwing Axeman",
        only: "(France only)",
        category: "Infantry",
        src: ThrowingAxeman
    },
    {
        name: "Conquistador",
        only: "(Spain only)",
        category: "Cavalry",
        src: Conquistador
    },
    {
        name: "Chu-Ko-Nu",
        only: "(China only)",
        category: "Archer",
        src: ChuKoNu
    },
    {
        name: "Samurai",
        only: "(Japan only)",
        category: "Infantry",
        src: Samurai
    },
    {
        name: "Hwarang",
        only: "(Korea only)",
        category: "Archer",
        src: Hwarang
    },
    {
        name: "Mamluk",
        only: "(Arabia only)",
        category: "Cavalry",
        src: Mamluk
    },
    {
        name: "Janissary",
        only: "(Ottoman only)",
        category: "Archer",
        src: Janissary
    },
    {
        name: "Cataphract",
        only: "(Byzantium only)",
        category: "Cavalry",
        src: Cataphract
    },
]

const tropsTier5 = [
    {
        name: 'Royal Guard', category: 'Infantry', src: RoyalGuard
    },
    {
        name: 'Royal Crossbowman', category: 'Archer', src: RoyalCrossbowman
    },
    {
        name: 'Royal Knight', category: 'Cavalry', src: RoyalKnight
    },
    {
        name: 'Trebuchet', category: 'siege', src: Trebuchet
    },
    {
        name: 'Elite Legionary', only: '(Rome only)', category: 'Infantry', src: EliteLegionary
    },
    {
        name: 'Elite Teutonic Knight', only: '(Germany only)', category: 'Cavalry', src: EliteTeutonicKnight
    },
    {
        name: 'Elite Longbowman', only: '(Britain only)', category: 'Archer', src: EliteLongbowman
    },
    {
        name: 'Elite Throwing Axeman', only: '(France only)', category: 'Infantry', src: EliteThrowingAxeman
    },
    {
        name: 'Elite Conquistador', only: '(Spain only)', category: 'Cavalry', src: EliteConquistador
    },
    {
        name: 'Elite Chu-Ko-Nu', only: '(China only)', category: 'Archer', src: EliteChuKoNu
    },
    {
        name: 'Elite Samurai', only: '(Japan only)', category: 'Infantry', src: EliteSamurai
    },
    {
        name: 'Elite Hwarang', only: '(Korea only)', category: 'Archer', src: EliteHwarang
    },
    {
        name: 'Elite Mamluk', only: '(Arabia only)', category: 'Cavalry', src: EliteMamluk
    },
    {
        name: 'Elite Janissary', only: '(Ottoman only)', category: 'Archer', src: EliteJanissary
    },
    {
        name: 'Elite Cataphract', only: '(Byzantium only)', category: 'Cavalry', src: EliteCataphract
    },
]

export { tropsTier1, tropsTier2, tropsTier3, tropsTier4, tropsTier5 }