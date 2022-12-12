import {
    TroopsHome,
    SpeedUpsHome,
    ResearchHome,
    BuildingsHome
} from "public/assets/home"

export const HomeList = [
    {
        name: "Troops Calculator",
        text: "Calculating the time and resources you need to train troops.",
        src: TroopsHome,
        url: "/tools/troop-training"
    },
    {
        name: "Speedup Calculator",
        text: "Calculating the SpeedUps that are in your bag.",
        src: SpeedUpsHome,
        url: "/tools/speed-up",
    },
    {
        name: "Research Calculator",
        text: "Calculating the time and resources you need to upgrade your research.",
        src: ResearchHome,
        url: "/tools/research"
    },
    {
        name: "Building Calculator",
        text: "Calculating the time and resources you need to upgrade your Building.",
        src: BuildingsHome,
        url: "/tools/building"
    }
]