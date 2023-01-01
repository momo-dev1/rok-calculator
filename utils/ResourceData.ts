import Food from "../public/assets/resources/food.webp";
import Gold from "../public/assets/resources/gold.webp";
import Rock from "../public/assets/resources/rock.webp";
import Timber from "../public/assets/resources/timber.webp";
import ResourcePack from "../public/assets/other/Item_Resource_Pack.webp";

export const ResourcesData = [
    { name: "food-1k", category: "food", color: "", src: Food, amount: 1000, value: 0 },
    { name: "food-10k", category: "food", color: "", src: Food, amount: 10000, value: 0 },
    { name: "food-50k", category: "food", color: "", src: Food, amount: 50000, value: 0 },
    { name: "food-150k", category: "food", color: "blue", src: Food, amount: 150000, value: 0 },
    { name: "food-500k", category: "food", color: "blue", src: Food, amount: 500000, value: 0 },
    { name: "food-1,5m", category: "food", color: "purple", src: Food, amount: 1500000, value: 0 },
    { name: "food-5m", category: "food", color: "purple", src: Food, amount: 5000000, value: 0 },

    { name: "wood-1k", category: "wood", color: "", src: Timber, amount: 1000, value: 0 },
    { name: "wood-10k", category: "wood", color: "", src: Timber, amount: 10000, value: 0 },
    { name: "wood-50k", category: "wood", color: "", src: Timber, amount: 50000, value: 0 },
    { name: "wood-150k", category: "wood", color: "blue", src: Timber, amount: 150000, value: 0 },
    { name: "wood-500k", category: "wood", color: "blue", src: Timber, amount: 500000, value: 0 },
    { name: "wood-1,5m", category: "wood", color: "purple", src: Timber, amount: 1500000, value: 0 },
    { name: "wood-5m", category: "wood", color: "purple", src: Timber, amount: 5000000, value: 0 },

    { name: "stone-1k", category: "stone", color: "", src: Rock, amount: 1000, value: 0 },
    { name: "stone-10k", category: "stone", color: "", src: Rock, amount: 10000, value: 0 },
    { name: "stone-50k", category: "stone", color: "", src: Rock, amount: 50000, value: 0 },
    { name: "stone-150k", category: "stone", color: "blue", src: Rock, amount: 150000, value: 0 },
    { name: "stone-500k", category: "stone", color: "blue", src: Rock, amount: 500000, value: 0 },
    { name: "stone-1,5m", category: "stone", color: "purple", src: Rock, amount: 1500000, value: 0 },
    { name: "stone-5m", category: "stone", color: "purple", src: Rock, amount: 5000000, value: 0 },

    { name: "gold-1k", category: "gold", color: "", src: Gold, amount: 1000, value: 0 },
    { name: "gold-10k", category: "gold", color: "", src: Gold, amount: 10000, value: 0 },
    { name: "gold-50k", category: "gold", color: "", src: Gold, amount: 50000, value: 0 },
    { name: "gold-150k", category: "gold", color: "blue", src: Gold, amount: 150000, value: 0 },
    { name: "gold-500k", category: "gold", color: "blue", src: Gold, amount: 500000, value: 0 },
    { name: "gold-1,5m", category: "gold", color: "purple", src: Gold, amount: 1500000, value: 0 },
    { name: "gold-5m", category: "gold", color: "purple", src: Gold, amount: 5000000, value: 0 },

]


export const ResourcesPackData = [
    {
        name: "Lv.1 Resource Pack A",
        color: "",
        src: ResourcePack,
        amount: {
            food: 1000,
            wood: 1000,
            stone: 0,
            gold: 0,
        },
        value: 0
    },
    {
        name: "Lv.1 Resource Pack B",
        color: "",
        src: ResourcePack,
        amount: {
            food: 1000,
            wood: 1000,
            stone: 750,
            gold: 0,
        },
        value: 0
    },
    {
        name: "Lv.1 Resource Pack C",
        color: "",
        src: ResourcePack,
        amount: {
            food: 1000,
            wood: 1000,
            stone: 750,
            gold: 500,
        },
        value: 0
    },
    {
        name: "Lv.2 Resource Pack",
        color: "blue",
        src: ResourcePack,
        amount: {
            food: 10000,
            wood: 10000,
            stone: 7500,
            gold: 5000,
        },
        value: 0
    },
    {
        name: "Lv.3 Resource Pack",
        color: "blue",
        src: ResourcePack,
        amount: {
            food: 100000,
            wood: 100000,
            stone: 100000,
            gold: 100000,
        },
        value: 0
    },
]