import {
    building_speedup_icon,
    training_speedup_icon,
    healing_speedup_icon,
    research_speedup_icon,
    universal_speedup_icon,
    ActionPoint,
    TomeExp,
    Gems,
} from "../public/assets/speed"

export const SpeedData = [
    {
        name: "Building Speedups",
        icon: building_speedup_icon,
        times: [
            { name: "b-1min", time: 60, value: 0 },
            { name: "b-3min", time: 180, value: 0 },
            { name: "b-5min", time: 300, value: 0 },
            { name: "b-10min", time: 600, value: 0 },
            { name: "b-15min", time: 900, value: 0 },
            { name: "b-30min", time: 1800, value: 0 },
            { name: "b-60min", time: 3600, value: 0 },
            { name: "b-3h", time: 10800, value: 0 },
            { name: "b-8h", time: 28800, value: 0 },
            { name: "b-15h", time: 54000, value: 0 },
        ]
    },
    {
        name: "Research Speedups",
        icon: research_speedup_icon,
        times: [
            { name: "r-1min", time: 60, value: 0 },
            { name: "r-3min", time: 180, value: 0 },
            { name: "r-5min", time: 300, value: 0 },
            { name: "r-10min", time: 600, value: 0 },
            { name: "r-15min", time: 900, value: 0 },
            { name: "r-30min", time: 1800, value: 0 },
            { name: "r-60min", time: 3600, value: 0 },
            { name: "r-3h", time: 10800, value: 0 },
            { name: "r-8h", time: 28800, value: 0 },
            { name: "r-15h", time: 54000, value: 0 },
        ]
    },
    {
        name: "Training Speedups",
        icon: training_speedup_icon,
        times: [
            { name: "t-1min", time: 60, value: 0 },
            { name: "t-3min", time: 180, value: 0 },
            { name: "t-5min", time: 300, value: 0 },
            { name: "t-10min", time: 600, value: 0 },
            { name: "t-15min", time: 900, value: 0 },
            { name: "t-30min", time: 1800, value: 0 },
            { name: "t-60min", time: 3600, value: 0 },
            { name: "t-3h", time: 10800, value: 0 },
            { name: "t-8h", time: 28800, value: 0 },
            { name: "t-15h", time: 54000, value: 0 },
        ]
    },
    {
        name: "Healing Speedups",
        icon: healing_speedup_icon,
        times: [
            { name: "h-1min", time: 60, value: 0 },
            { name: "h-3min", time: 180, value: 0 },
            { name: "h-5min", time: 300, value: 0 },
            { name: "h-10min", time: 600, value: 0 },
            { name: "h-15min", time: 900, value: 0 },
            { name: "h-30min", time: 1800, value: 0 },
            { name: "h-60min", time: 3600, value: 0 },
            { name: "h-3h", time: 10800, value: 0 },
            { name: "h-8h", time: 28800, value: 0 },
            { name: "h-15h", time: 54000, value: 0 },
        ]
    },
    {
        name: "Universal Speedups",
        icon: universal_speedup_icon,
        times: [
            { name: "u-1min", time: 60, value: 0 },
            { name: "u-3min", time: 180, value: 0 },
            { name: "u-5min", time: 300, value: 0 },
            { name: "u-10min", time: 600, value: 0 },
            { name: "u-15min", time: 900, value: 0 },
            { name: "u-30min", time: 1800, value: 0 },
            { name: "u-60min", time: 3600, value: 0 },
            { name: "u-3h", time: 10800, value: 0 },
            { name: "u-8h", time: 28800, value: 0 },
            { name: "u-15h", time: 54000, value: 0 },
            { name: "u-24h", time: 86400, value: 0 },
            { name: "u-3d", time: 259200, value: 0 },
            { name: "u-7d", time: 604800, value: 0 },
            { name: "u-30d", time: 2592000, value: 0 },
        ]
    },

]

export const SpeedOther = [
    { name: "exp-100", category: "exp", color: "", src: TomeExp, amount: 100, value: 0 },
    { name: "exp-500", category: "exp", color: "blue", src: TomeExp, amount: 500, value: 0 },
    { name: "exp-1,000", category: "exp", color: "purple", src: TomeExp, amount: 1000, value: 0 },
    { name: "exp-5,000", category: "exp", color: "purple", src: TomeExp, amount: 5000, value: 0 },
    { name: "exp-10,000", category: "exp", color: "purple", src: TomeExp, amount: 10000, value: 0 },
    { name: "exp-20,000", category: "exp", color: "orange", src: TomeExp, amount: 20000, value: 0 },
    { name: "exp-50,000", category: "exp", color: "orange", src: TomeExp, amount: 50000, value: 0 },

    { name: "gem-5", category: "gem", color: "", src: Gems, amount: 5, value: 0 },
    { name: "gem-10", category: "gem", color: "", src: Gems, amount: 10, value: 0 },
    { name: "gem-50", category: "gem", color: "", src: Gems, amount: 50, value: 0 },
    { name: "gem-100", category: "gem", color: "blue", src: Gems, amount: 100, value: 0 },
    { name: "gem-200", category: "gem", color: "blue", src: Gems, amount: 200, value: 0 },
    { name: "gem-500", category: "gem", color: "blue", src: Gems, amount: 500, value: 0 },
    { name: "gem-650", category: "gem", color: "purple", src: Gems, amount: 650, value: 0 },
    { name: "gem-1,000", category: "gem", color: "purple", src: Gems, amount: 1000, value: 0 },
    { name: "gem-2,000", category: "gem", color: "purple", src: Gems, amount: 2000, value: 0 },

    { name: "action-50", category: "action", color: "", src: ActionPoint, amount: 50, value: 0 },
    { name: "action-100", category: "action", color: "", src: ActionPoint, amount: 100, value: 0 },
    { name: "action-500", category: "action", color: "blue", src: ActionPoint, amount: 500, value: 0 },
    { name: "action-1,000", category: "action", color: "purple", src: ActionPoint, amount: 1000, value: 0 },
]