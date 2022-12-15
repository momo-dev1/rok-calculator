import Sculpture from "../public/assets/other/Legendary_Sculpture.webp"
import ResourceChest from "../public/assets/other/Resource_Chest.webp"
import Troop from "../public/assets/trops/tier5/Elite_Janissary.webp"
import Building from "../public/assets/buildings/others/Building_City_Hall_1_5.webp"
import { Gems, ActionPoint, TomeExp, universal_speedup_icon } from "../public/assets/speed/index"

export const HomeList = [
    {
        name: "Troops Calculator",
        text: "Calculating the time and resources you need to train troops.",
        src: Troop,
        url: "/mge-training"
    },
    {
        name: "Speedup Calculator",
        text: "Calculating the SpeedUps that are in your inventory.",
        src: universal_speedup_icon,
        url: "/speedups-calculator",
    },
    // {
    //     name: "Research Calculator",
    //     text: "Calculating the time and resources you need to upgrade your research.",
    //     url: "/tools/research"
    // },
    {
        name: "Building Calculator",
        text: "Calculating the time and resources you need to upgrade your Building.",
        src: Building,
        url: "/building-calculator"
    },
    {
        name: "Resource Calculator",
        text: "Find out how many of resources contained in each pack.",
        src: ResourceChest,
        url: "/resource-calculator"
    },

    {
        name: "Gem Packs Calculator",
        text: "Calculate the amount of gems in your inventory.",
        src: Gems,
        url: "/gems-calculator"
    },
    {
        name: "Action Points Calculator",
        text: "Calculate the amount of action points in your inventory.",
        src: ActionPoint,
        url: "/action-points-calculator"
    },
    {
        name: "Sculptures Calculator",
        text: "Calculate sculptures you need to upgrade your commanders.",
        src: Sculpture,
        url: "/commander-calculator"
    },
    {
        name: "Tome (Exp) Calculator",
        text: "Calculate the amount of experience stored in you inventory.",
        src: TomeExp,
        url: "/exp-calculator"
    },
]