import {
    Grunt,
    Archer,
    Ballista,
    Catapult,
    Gladiator,
    Destroyer,
    RoyalGuard,
    Cataphract,
    TealthSniper,
    RoyalCavalry,
    Sharpshooter,
    AncientDrake,
    FireTrebuchet,
    HeroicFighter,
    ReptilianRider,
    HeroicCannoner,
} from "../public/assets/trops"

const tropsTier1 = [
    {
        name: "grunt",
        src: Grunt
    },
    {
        name: "archer",
        src: Archer
    },
    {
        name: "cataphract",
        src: Cataphract
    },
    {
        name: "ballista",
        src: Ballista
    }
]

const tropsTier2 = [
    {
        name: "gladiator",
        src: Gladiator
    },
    {
        name: "sharpshooter",
        src: Sharpshooter
    },
    {
        name: "reptilianRider",
        src: ReptilianRider
    },
    {
        name: "catapult",
        src: Catapult
    }
]

const tropsTier3 = [
    {
        name: "royalGuard",
        src: RoyalGuard
    },
    {
        name: "tealthSniper",
        src: TealthSniper
    },
    {
        name: "royalCavalry",
        src: RoyalCavalry
    },
    {
        name: "fireTrebuchet",
        src: FireTrebuchet
    }
]

const tropsTier4 = [
    {
        name: "heroicFighter",
        src: HeroicFighter
    },
    {
        name: "heroicCannoner",
        src: HeroicCannoner
    },
    {
        name: "ancientDrake",
        src: AncientDrake
    },
    {
        name: "destroyer",
        src: Destroyer
    }
]
export { tropsTier1, tropsTier2, tropsTier3, tropsTier4 }