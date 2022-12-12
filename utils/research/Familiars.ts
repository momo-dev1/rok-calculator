import {
    AnimaHarvesting1,
    AnimaHarvesting2,
    AnimaStorage1,
    AnimaStorage2,
    DurableWards,
    FoodHarvesting2,
    GoldHarvesting2,
    GymMembership,
    GymTraining1,
    GymTraining2,
    MergingCostPact1,
    MergingCostPact2,
    MergingCostPact3,
    MergingCostPact4,
    MetalHarvesting2,
    Pact2,
    Pact3,
    Pact4,
    PactMergingSpeed1,
    PactMergingSpeed2,
    SkillExpBoost,
    SkillStoneMergingSpeed1,
    StoneHarvesting2,
    TimberHarvesting2,
} from "../../public/assets/research/Familiars"


export const Familiars = [
    {
        name: "Anima Harvesting 1",
        src: AnimaHarvesting1,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [11737, 41079, 49881, 58684, 70420, 93894, 123235, 176050, 246470, 322758],
        rock: [7336, 25674, 31176, 36677, 44013, 58684, 77022, 110031, 154044, 201724],
        timber: [4402, 15405, 18706, 22007, 26408, 35210, 46213, 66019, 92426, 121035],
        ore: [11737, 41079, 49881, 58684, 70420, 93894, 123235, 176050, 246470, 322758],
        gold: [12108, 42376, 51456, 60537, 72644, 96859, 127127, 181609, 254253, 332950],
        might: [1558, 5450, 6618, 7787, 9343, 12458, 16351, 23359, 32702, 42824],
        time: [19260, 67379, 81840, 96240, 115500,
            153960, 202080, 288660, 404160, 529260
        ],
        anima: [2422, 8476, 10292, 12108, 14529, 19372, 25426, 36322, 50851, 66590],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Merging CostPact 1",
        src: MergingCostPact1,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [20540, 71887, 87292, 102696, 123235, 164313, 215661, 308087, 431322, 564826],
        rock: [10270, 35944, 43646, 51348, 61618, 82157, 107831, 154044, 215661, 282413],
        timber: [8216, 28755, 34917, 41079, 49294, 65726, 86265, 123235, 172529, 225931],
        ore: [12324, 43133, 52375, 61618, 73941, 98588, 129397, 184852, 258793, 338896],
        gold: [16951, 59326, 72039, 84751, 101701, 135602, 177977, 254253, 355954, 466130],
        might: [2181, 7630, 9266, 10900, 13081, 17441, 22892, 32702, 45783, 59953],
        time: [27000, 94320, 114540, 134760, 161700, 215580, 282900, 404160, 565800, 740940],
        anima: [3391, 11866, 14408, 16951, 20341, 27121, 35596, 50851, 71191, 93226],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Food Harvesting 2",
        src: FoodHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1,
            1, 1, 1, 1, 1, 1, 1, 1, 1
        ],
        food: [29342, 102696, 124702, 146708, 176050, 234733, 308087, 440124, 616174, 806894],
        rock: [14671, 51348, 62351, 73354, 88025, 117367, 154044, 220062, 308087, 403447],
        timber: [14671, 51348, 62351, 73354, 88025, 117367, 154044, 220062, 308087, 403447],
        ore: [14671, 51348, 62351, 73354, 88025, 117367, 154044, 220062, 308087, 403447],
        gold: [24215, 84751, 102912, 121073, 145288, 193717, 254253, 363218, 508505, 665900],
        might: [3115, 10901, 13236, 15573, 18687, 24915, 32702, 46718, 65404, 85684],
        time: [38520, 134760, 163619, 192480, 230940, 307920, 404160, 577320, 808260, 1058460],
        anima: [4843, 16951, 20583, 24215, 29058, 38744, 50851, 72644, 101701, 133180],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Gym Training 1",
        src: GymTraining1,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1,
            1, 1, 1, 1, 1, 1, 1
        ],
        food: [11737, 41079, 49881, 58684, 70420, 93894, 123235, 176050, 246470, 322758],
        rock: [17605, 61618, 74822, 88025, 105630, 140840, 184852, 264075, 369704, 484137],
        timber: [17605, 61618, 74822, 88025, 105630, 140840, 184852, 264075, 369704, 484137],
        ore: [17605, 61618, 74822, 88025, 105630, 140840, 184852, 264075, 369704, 484137],
        gold: [24215, 84751, 102912, 121073, 145288, 193717, 254253, 363218, 508505, 665900],
        might: [3115, 10901, 13236, 15573, 18687, 24915, 32702, 46718, 65404, 85684],
        time: [38520, 134760, 163619, 192480, 230940, 307920, 404160, 577320, 808260, 1058460],
        anima: [4843, 16951, 20583, 24215, 29058, 38744, 50851, 72644, 101701, 133180],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Pact 2",
        src: Pact2,
        level: [1],
        labs: [1],
        food: [1900000],
        rock: [950000],
        timber: [950000],
        ore: [950000],
        gold: [1568000],
        might: [201677],
        time: [2492280],
        anima: [313600],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Stone Harvesting 2",
        src: StoneHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [41079, 143774, 174583, 205392, 246470, 328626, 431322, 616174, 862643, 1129651],
        rock: [16432, 57510, 69833, 82157, 98588, 131451, 172529, 246470, 345057, 451861],
        timber: [12324, 43133, 52375, 61618, 73941, 98588, 129397, 184852, 258793, 338896],
        ore: [32863, 155019, 139666, 164313, 197176, 262901, 345057, 492939, 690114, 903721],
        gold: [33901, 118652, 144077, 169502, 203402, 271203, 355954, 508505, 711907, 932260],
        might: [4361, 15261, 18531, 21801, 26162, 34882, 45783, 65404, 91566, 119907],
        time: [53940, 188640, 229020, 269460, 323340, 431100, 565800, 808260, 1131600, 1481820],
        anima: [6781, 23731, 28816, 33901, 40681, 54241, 71191, 101701, 142382, 186452],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Timber Harvesting 2",
        src: TimberHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [32863, 115019, 139666, 164313, 197176, 262901, 345057, 492939, 690114, 903721],
        rock: [20540, 71887, 87292, 102696, 123235, 164313, 215661, 308087, 431322, 564826],
        timber: [12324, 43133, 52375, 61618, 73941, 98588, 129397, 184852, 258793, 338896],
        ore: [32863, 115019, 139666, 164313, 197176, 262901, 345057, 492939, 690114, 903721],
        gold: [33901, 118652, 144077, 169502, 203402, 271203, 355954, 508505, 711907, 932260],
        might: [4361, 15261, 18531, 21801, 26162, 34882, 45783, 65404, 91566, 119907],
        time: [53940, 188640, 229020, 269460, 323340, 431100, 565800, 808260, 1131600, 1481820],
        anima: [6781, 23731, 28816, 33901, 40681, 54241, 71191, 101701, 142382, 186452],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Metal Harvesting 2",
        src: MetalHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [65726, 230038, 279332, 328626, 394351, 525802, 690114, 985877, 1380228, 1807442],
        rock: [32863, 115019, 139666, 164313, 197176, 262901, 345057, 492939, 690114, 903721],
        timber: [8216, 28755, 34917, 41079, 49294, 65726, 86265, 123235, 172529, 225931],
        ore: [8216, 28755, 34917, 41079, 49294, 65726, 86265, 123235, 172529, 225931],
        gold: [33901, 118652, 144077, 169502, 203402, 271203, 355954, 508505, 711907, 932260],
        might: [4361, 15261, 18531, 21801, 26162, 34882, 45783, 65404, 91566, 119907],
        time: [53940, 188640, 229020, 269460, 323340, 431100, 565800, 808260, 1131600, 1481820],
        anima: [6781, 23731, 28816, 33901, 40681, 54241, 71191, 101701, 142382, 186452],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Anima Storage 1",
        src: AnimaStorage1,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [84504, 295764, 359141, 422519, 507023, 676030, 887290, 1267557, 1774579, 2323853],
        rock: [42252, 147882, 179571, 211260, 253512, 338015, 443645, 633779, 887290, 1161927],
        timber: [10563, 36971, 44893, 52815, 63378, 84504, 110912, 158445, 221823, 290482],
        ore: [10563, 36971, 44893, 52815, 63378, 84504, 110912, 158445, 221823, 290482],
        gold: [43587, 152552, 185242, 217931, 261517, 348690, 457655, 653793, 915309, 1198619],
        might: [5607, 19621, 23826, 28030, 33636, 44849, 58864, 84091, 117727, 154167],
        time: [69300, 242520, 294480, 346440, 415680, 554280,
            727440, 1039200, 1454880, 1905180
        ],
        anima: [8718, 30511, 37049, 43587, 52304, 69738, 91531, 130759, 183062, 239724],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Pact Merging Speed 1",
        src: PactMergingSpeed1,
        level: [1, 2, 3, 4, 5, 6, 7, 8,
            9, 10
        ],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [70420, 246470, 299285, 352099, 422519, 563359, 739408, 1056297, 1478816, 1936545],
        rock: [28168, 98588, 119714, 140840, 169008, 225344, 295764, 422519, 591527, 774618],
        timber: [21126, 73941, 89786, 105630, 126756, 169008, 221823, 316890, 443645, 580964],
        ore: [56336, 197176, 239428, 281680, 338015, 450687, 591527, 845038, 1183053, 1549236],
        gold: [58115, 203402, 246989, 290575, 348690, 464919, 610206, 871723, 1220412, 1598159],
        might: [7475, 26162, 31768, 37373, 44849, 59798, 78485, 112121, 156970, 205556],
        time: [92400, 323340, 392583, 461880, 554280, 739020, 969900, 1385580, 1939800, 2540220],
        anima: [11623, 40681, 49398, 58115, 69738, 92984, 122042, 174345, 244083, 319632],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Merging CostPact 2",
        src: MergingCostPact2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        food: [64552, 225931, 274344, 322758, 387309, 516412, 677791, 968273, 1355581, 1775166],
        rock: [25821, 90373, 109738, 129103, 154924, 206565, 271117, 387309, 542233, 710067],
        timber: [19366, 67780, 82304, 96828, 116193, 154924, 203338, 290482, 406675, 532550],
        ore: [51642, 180745, 219475, 258206, 309848, 413130, 542233, 774618, 1084465, 1420133],
        gold: [53272, 186452, 226406, 266360, 319632, 426176, 559356, 799080, 1118711, 1464979],
        might: [6852, 23982, 29120, 34260, 41111, 54815, 71944, 102778, 143889, 188426],
        time: [84720, 296400, 359880, 423420, 508080, 677400, 889080, 1270140, 1778160, 2328540],
        anima: [10655, 37291, 45282, 53272, 63927, 85236, 111872, 159816, 223743, 292996],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Pact 3",
        src: Pact3,
        level: [1],
        labs: [3],
        food: [4750000],
        rock: [2375000],
        timber: [2375000],
        ore: [2375000],
        gold: [3920000],
        might: [504192],
        time: [6230700],
        anima: [784000],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Anima Harvesting 2",
        src: AnimaHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 2, 3],
        food: [205392, 718869, 872912, 1026956, 1232347, 1643129, 2156606, 3080866, 4313212, 5648254],
        rock: [82157, 287548, 349165, 410783, 492939, 657252, 862643, 1232347, 1725285, 2259302],
        timber: [61618, 215661, 261874, 308087, 369704, 492939, 646982, 924260, 1293964, 1694477],
        ore: [164313, 575095, 698330, 821565, 985877, 1314503, 1725285, 2464693, 3450570, 4518603],
        gold: [169502, 593256, 720383, 847509, 1017010, 1356014, 1779768, 2542525, 3559535, 4661296],
        might: [21802, 76305, 92656, 109006, 130809, 174411, 228914, 327021, 457828, 599538],
        time: [269460, 942960, 1145040, 1347120, 1616520, 2155320, 2828880, 4041240, 5657760, 7408919],
        anima: [33901, 118652, 144077, 169502, 203402, 271203, 355954, 508505, 711907, 932260],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Gold Harvesting 2",
        src: GoldHarvesting2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 1,
            1, 2, 2, 3
        ],
        food: [211260, 739408, 897853, 1056297, 1267557, 1690075, 2218224, 3168891, 4436447, 5809633],
        rock: [105630, 369704, 448927, 528149, 633779, 845038, 1109112, 1584446, 2218224, 2904817],
        timber: [105630, 369704, 448927, 528149, 633779, 845038, 1109112, 1584446, 2218224, 2904817],
        ore: [35210, 123235, 149643, 176050, 211260, 281680, 369704, 528149, 739408, 968273],
        gold: [145288, 508505, 617471, 726436, 871723, 1162298, 1525515, 2179307, 3051030, 3995397],
        might: [18687, 65405, 79419, 93434, 112122, 149495, 196212, 280303, 392425, 513890],
        time: [230940, 808260, 981480, 1154640, 1385580, 1847460, 2424780, 3463920, 4849500, 6350519],
        anima: [29058, 101701, 123495, 145288, 174345, 232460, 305103, 435862, 610206, 799080],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Gym Membership",
        src: GymMembership,
        level: [1, 2,
            3, 4, 5, 6, 7, 8, 9, 10
        ],
        labs: [1, 1, 1, 1, 1, 2, 2, 3, 4, 5],
        food: [387309, 1355581, 1646063, 1936545, 2323853, 3098471, 4066743, 5809633, 8133485,
            10650993
        ],
        rock: [64552, 225931, 274344, 322758, 387309, 516412, 677791, 968273, 1355581, 1775166],
        timber: [193655, 677791, 823032, 968273, 1161927, 1549236, 2033372, 2904817, 4066743, 5325497],
        ore: [193655, 677791, 823032, 968273, 1161927, 1549236, 2033372, 2904817, 4066743, 5325497],
        gold: [266360, 932260, 1132029, 1331799, 1598159, 2130878, 2796778, 3995397, 5593555, 7324893],
        might: [34260, 119907, 145602, 171297, 205556, 274074, 359723, 513889, 719445, 942131],
        time: [423420, 1481820, 1799340, 2116860, 2540220, 3386940, 4445400, 6350519, 8890740, 11642580],
        anima: [53272, 186452, 226406, 266360, 319632, 426176, 559356, 799080, 1118711, 1464979],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Gym Training 2",
        src: GymTraining2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 1, 1, 2, 2, 3, 4, 5],
        food: [387309, 1355581, 1646063, 1936545, 2323853, 3098471, 4066743, 5809633, 8133485, 10650993],
        rock: [193655, 677791, 823032, 968273, 1161927, 1549236, 2033372, 2904817, 4066743, 5325497],
        timber: [64552, 225931, 274344, 322758, 387309, 516412, 677791, 968273, 1355581, 1775166],
        ore: [193655, 677791, 823032, 968273, 1161927, 1549236, 2033372, 2904817, 4066743, 5353497],
        gold: [266360, 932260, 1132029, 1331799, 1598159, 2130878, 2796778, 3995397, 5593555, 7324893],
        might: [34260, 119907, 145602, 171297, 205556, 274074, 359723, 513889, 719445, 942131],
        time: [423420, 1481820, 1799340, 2116860, 2540220, 3386940, 4445400, 6350519, 8890740, 11642580],
        anima: [53272, 186452, 226406, 266360, 319632, 426176, 559356, 799080, 1118711, 1464979],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Anima Storage 2",
        src: AnimaStorage2,
        level: [1, 2, 3, 4, 5,
            6, 7, 8, 9, 10
        ],
        labs: [1, 1, 1, 2, 2, 2, 3, 4, 5, 6],
        food: [440124, 1540433, 1870526, 2200619, 2640742, 3520990, 4621299, 6601855, 9242597, 12103401],
        rock: [220062, 770217, 935263, 1100310, 1320371, 1760495, 2310650, 3300928, 4621299, 6051701],
        timber: [176050, 616174, 748211, 880248, 1056297, 1408396, 1848520, 2640742, 3697039, 4841361],
        ore: [264075, 924260, 1122316, 1320371, 1584446, 2112594, 2772779, 3961113, 5545558, 7262041],
        gold: [363218, 1271263, 1543676, 1816090, 2179307, 2905743, 3813788, 5448268, 7627575, 9988491],
        might: [46718, 163510, 198548, 233586, 280304, 373738, 490530, 700759, 981061, 1284724],
        time: [577320, 2020620, 2453640, 2886600, 3463920, 4618560, 6061860, 8659800, 12123660, 15876239],
        anima: [72644, 254253, 308736, 363218, 435862, 581149, 762758, 1089654, 1525515, 1997699],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Pact MergingSpeed 2",
        src: PactMergingSpeed2,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 2, 2, 2, 3, 4, 5, 7],
        food: [498807, 1745824, 2119929, 2494034, 2992841, 3990455, 5237472, 7482102, 10474943, 13717187],
        rock: [299285, 1047495, 1271958, 1496421, 1795705, 2394273, 3142483, 4489262, 6284966, 8230313],
        timber: [249404, 872912, 1059965, 1247017, 1496421, 1955228, 2618736, 3741051, 5237472, 6858594],
        ore: [199523, 698330, 847972, 997614, 1197137, 1596182, 2094989, 2992841, 4189978, 5486875],
        gold: [411647, 1440765, 1749500, 2058235, 2469882, 3293175, 4322293, 6174705, 8544585, 11320289],
        might: [52947, 185311, 225022, 264731, 317677, 423569, 555935, 794193, 1111870, 1456020],
        time: [654300, 2290080, 2780760, 3271500, 3925800, 5234400, 6870120, 9814440, 13740180, 17993100],
        anima: [82330, 288153, 349900, 411647, 493977, 658635, 864459, 1234941, 1728917, 2264085],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Merging CostPact 3",
        src: MergingCostPact3,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 1, 1, 2, 2, 2, 3, 4, 5, 7],
        food: [498807, 1745824, 2119929, 2494034, 2992841, 3990455, 5237472, 7482102, 10474943, 13717187],
        rock: [299285, 1074495, 1271958, 1496421, 1795705, 2394273, 3142483, 4489262, 6284966, 8230313],
        timber: [249404, 872912, 1059965, 1247017, 1496421, 1995228, 2618736, 3741051, 5237472, 6858594],
        ore: [199523, 698330, 847972, 997614, 1197137, 1596182, 2094989, 2992841, 4189978, 5486875],
        gold: [411647, 1440765, 1749500, 2058235, 2469882, 3293175, 4322293, 6174704, 8644585, 11320289],
        might: [52947, 185311, 225022, 264731, 317677, 423569, 555935, 794193, 1111870, 1456020],
        time: [654300, 2290080, 2780760, 3271500, 3925800, 5234400, 6870120, 9814440, 13740180, 17993100],
        anima: [82330, 288153, 349900, 411647, 493977, 658635, 864458, 1234941, 1728917, 2264058],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Pact4",
        src: Pact4,
        level: [1],
        labs: [8],
        food: [17100000],
        rock: [8550000],
        timber: [8550000],
        ore: [8550000],
        gold: [14112000],
        might: [1815092],
        time: [22430340],
        anima: [2822400],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "SkillStone Merging Speed 1",
        src: SkillStoneMergingSpeed1,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 3, 4, 5, 5, 7, 9, 13, 17, 23],
        food: [2112594, 7394078, 8978523, 10562968, 12675561, 16900748, 22182232, 31688903, 44364464, 58096322],
        rock: [352099, 1232347, 1489262, 1760495, 2112594, 2816792, 3697039, 5281484, 7394078, 9682721],
        timber: [1056297, 3697039, 1489262, 5281484, 6337781, 8450374, 11091116, 15844452, 22182232, 29048161],
        ore: [1056297, 3697039, 4489262, 5281484, 6337781, 8450374, 11091116, 15844452, 22182232, 29048161],
        gold: [1452872, 5085050, 6174704, 7264357, 8717228, 11622971, 15255149, 21793070, 30510298, 39953962],
        might: [186869, 654042, 794192, 934345, 1121213, 1494952, 1962123, 2803034, 3924246, 5138895],
        time: [2309280, 8082480, 9814440, 11546400, 13855620, 18474180, 24247320, 34639080, 48494640, 63504900],
        anima: [290575, 1017010, 1234941, 1452872, 1743446, 2324595, 3051030, 4358614, 6102060, 7990793],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Durable Wards",
        src: DurableWards,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [1, 4,
            5, 5, 6, 8, 11, 15, 21, 27
        ],
        food: [2535113, 8872893, 10774227, 12675561, 15210674, 20280898, 26618679, 38026683, 53237357, 69715586],
        rock: [1267557,
            4436447, 5387114, 6337781, 7605337, 10140449, 13309340, 19013342, 26618679, 34857793
        ],
        timber: [1267557, 4436447, 5387114, 6337781, 7605337, 10140449, 13309340, 19013342, 26618679, 34857793],
        ore: [422519, 1478816, 1795705, 2112594, 2535113, 3380150, 4436447, 6337781, 8872893, 11619265],
        gold: [1743446, 6102060, 7409644, 8717228, 10460674, 13947565, 18306179, 26151684, 36612358, 47944754],
        might: [224243, 784850, 953031, 1121213, 1345456, 1793942, 2354548, 3363640, 4709097, 6166673],
        time: [2771160, 9698940, 11777280, 13855620, 16626780, 22168980, 29096820, 41566860, 58193580, 76205880],
        anima: [348690, 1220412, 1481929, 1743446, 2092135, 2789513, 3661236, 5230337, 7322472, 9588951],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Merging Cost Pact 4",
        src: MergingCostPact4,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [4],
        food: [821565, 2875475, 3491648, 4107821, 4929385, 6572514, 8626424, 12323463, 17252847, 22593014],
        rock: [1232347, 4313212, 5237472, 6161732, 7349078, 9858770, 12939636, 18485194, 25879371, 33889521],
        timber: [1232347, 4313212, 5237472, 6161732, 7394078, 9858770, 12939636, 18485194, 25879371, 33889521],
        ore: [1232347, 4313212, 5237472, 6161732, 7394078, 9858770, 12939636, 18485194, 25879371, 33889521],
        gold: [1695017, 5932558, 7203821, 8475083, 10170100, 13560133, 17797674, 25425249, 35595348, 46612955],
        might: [218014, 763048, 926559, 1090068, 1308082, 1744110, 2289144, 3270206, 4578288, 5995377],
        time: [2694180, 9429540, 11450160, 13470780, 16164900, 21553200, 28288560, 40412220, 56577120, 74089080],
        anima: [339004, 1186512, 1440765, 1695017, 2034020, 2712027, 3559535, 5085050, 7119070, 9322591],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }, {
        name: "Skill Exp Boost",
        src: SkillExpBoost,
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labs: [5, 6, 8, 10, 15, 20, 26],
        food: [3168891, 11091116, 13467784, 15844452, 19013342, 25351122, 33273348, 47533354, 66546696, 87144482],
        rock: [1584446, 5545558, 6733892, 7922226, 9506671, 12675561, 16636674, 23766677, 33273348, 43572241],
        timber: [528149, 1848520, 2244631, 2640742, 3168891, 4225187, 5545558, 7922226, 11091116, 14524081],
        ore: [1584446, 5545558, 6733892, 7922226, 9506671, 12675561, 16636674, 23766677, 33273348, 43572241],
        gold: [2179307, 7627575, 9262055, 10896535, 13075842, 17434456, 22882724, 32689605, 45765447, 59930942],
        might: [280304, 981062, 1191289, 1401517, 1681820, 2242427, 2943185, 4204550, 5886370, 7708343],
        time: [3463920, 12123660, 14721600, 17319540, 20783460, 27711240, 36370980, 51958560, 72741960, 95257380],
        anima: [435862, 1525515, 1852411, 2179307, 2615169, 3486892, 4576545, 6537921, 9153090, 11968189],
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0,
        totalAnima: 0,
    }]