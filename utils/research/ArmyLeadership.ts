import {
    WeightTraining2,
    ResourceHarvesting2,
    RationRun1,
    TrainingSpeed3,
    RangedPhalanx,
    CavalryPhalanx,
    BiggerInfirmary1,
    GoldStorage1,
    MaxDeposit1,
    GoldHarvesting1,
    BiggerBags1,
    TaxBreak,
    ForcedMarch1,
    MoreGatherers,
    InfantryWedge,
    RangedWedge,
    CavalryWedge,
    ArmyDefense2,
    ArmyOffense2,
    ArmyHealth2,
    BiggerArmy3,
    Sabotage,
    Plague,
    Demoralize
} from "../../public/assets/research/ArmyLeadership"

export const ArmyLeadership = [
    {
        name: "Weight Training 2",
        src: WeightTraining2,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [513164, 769746, 1026327, 1334225, 1744756, 2360552, 4105307, 6157961, 8210614, 12315921],
        rock: [205266, 307899, 410531, 533690, 697903, 944221, 1642123, 2463185, 3284246, 4926369],
        timber: [171055, 256582, 342109, 444742, 581586, 786851, 1368436, 2052654, 2736872, 4109307],
        ore: [136844, 205266, 273688, 355794, 465269, 629481, 1094749, 1642123, 2189498, 3284246],
        gold: [282330, 423495, 564660, 734058, 959922, 1298718, 2258640, 3387959, 4517279, 6775918],
        time: [234720, 312960, 391200, 547620, 782339, 1173480, 1955760, 4693800, 6258360, 11734380]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Resource Harvesting 2",
        src: ResourceHarvesting2,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 2, 3],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378995, 6568492],
        rock: [114037, 171055, 228073, 296495, 387724, 524567, 912291, 1368436, 1824581, 2736872],
        timber: [68422, 102633, 136844, 177897, 232635, 314741,
            547375, 821062, 1094749, 1642123
        ],
        ore: [182459, 273688, 364917, 474392, 620358, 839308, 1459665, 2189498, 2919330, 4378995],
        gold: [188220, 282330, 376440, 489372, 639948, 865812, 1505760, 2258640, 3011519, 4517279],
        time: [156479, 208620, 260819, 365100, 521580, 782339, 1303860, 3129180, 4172220, 7822920]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Ration Run 1",
        src: RationRun1,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [513164, 769746, 1026327, 1334225, 1744756, 2360552, 4105307, 6157961, 8210614, 12315921],
        rock: [205266, 307899, 410531, 533690, 697903, 944221, 1642123, 2463185, 3284246, 4926369],
        timber: [171055, 256582, 342109, 444742, 581586, 786851, 1368436, 2052654, 2736872, 4105307],
        ore: [136844,
            205266, 273688, 355794, 465269, 629481, 1094749, 1642123, 2189498, 3284246
        ],
        gold: [282330, 423495, 564660, 734058, 959922, 1298718, 2258640, 3387959, 4517279, 6775918],
        time: [234720, 312960, 391200, 547620, 782339, 1173480, 1955760, 4693800, 6258360, 11734380]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Training Speed 3",
        src: TrainingSpeed3,
        labs: [1,
            1, 1, 1, 1, 1, 2, 4, 5, 9
        ],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [1026327, 1539491, 2052654, 2668450, 3489511, 4721103, 8210614, 12315921, 16421228, 24631842],
        rock: [410531, 615797, 821062, 1067380, 1395805, 1888442, 3284246, 4926369, 6568492, 9852737],
        timber: [342109, 513164, 684218, 889484, 1163171, 1573701, 2736872, 4105307, 5473743, 8210614],
        ore: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378955, 6568492],
        gold: [564660, 846990, 1129320, 1468116, 1919844, 2597435, 4517279, 6775918, 9034557, 13551835],
        time: [469380, 625860, 782339, 1095240, 1564620, 2346900, 3911460, 9387540, 12516660, 23468760]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Ranged Phalanx",
        src: RangedPhalanx,
        labs: [1],
        level: [1],
        food: [1319445],
        rock: [351852],
        timber: [263889],
        ore: [703704],
        gold: [725926],
        time: [961560]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Cavalry Phalanx",
        src: CavalryPhalanx,
        labs: [1],
        level: [1],
        food: [1319445],
        rock: [527778],
        timber: [439815],
        ore: [351852],
        gold: [725926],
        time: [961560]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Bigger Infirmary 1",
        src: BiggerInfirmary1,
        labs: [1, 1, 1, 1, 1, 1, 1, 3, 3, 6],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [684218, 1026327, 1368436, 1778967, 2326341, 3147402, 5473743, 8210614, 10947486, 16421228],
        rock: [182459, 273688, 364917, 474392, 620358, 839308, 1459665, 2189498, 2919330, 4378995],
        timber: [228073, 342109, 456146, 592989, 775447, 1049134, 1824581, 2736872, 3649162, 5473743],
        ore: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378995, 6568492],
        gold: [376440, 564660, 752880, 978744, 1279896, 1731624, 3011519, 4517279, 6023038, 9034557],
        time: [312960, 417240, 521580, 730140, 1043100, 1564620, 2607660, 6258360, 8344440, 15645840]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Gold Storage 1",
        src: GoldStorage1,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [513164, 769746, 1026327, 1334225, 1744756, 2360552, 4105307, 6157961, 8210614, 12315921],
        rock: [205266, 307899, 410531, 533690, 697903,
            944221, 1642123, 2463185, 3284246, 4926369
        ],
        timber: [171055, 256582, 342109, 444742, 581586, 786851, 1368436, 2052654, 2736872, 4105307],
        ore: [136844, 205266, 273688, 355794, 465269, 629481, 1094749, 1642123, 2189498, 3284246],
        gold: [282330, 423495, 564660, 734058, 959922, 1298718, 2258640, 3387959, 4517279, 6775918],
        time: [234720, 312960, 391200, 547620, 782339, 1173480, 1955760, 4693800, 6258360, 11734380]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Max Deposit 1",
        src: MaxDeposit1,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [513164, 769746, 1026327, 1334225, 1744756, 2360552, 4105307, 6157961, 8210614, 12315921],
        rock: [68422, 102633, 136844, 177897, 232635, 314741, 547375, 821062, 1094749, 1642123],
        timber: [171055, 256582, 342109, 444742, 581586, 786851, 1368436, 2052654, 2736872, 4105307],
        ore: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378995, 6568492],
        gold: [282330, 423495, 564660, 734058, 959922, 1298718, 2258640, 3387959, 4517279, 6775918],
        time: [234720, 312960, 391200, 547620, 782339, 1173480, 1955760, 4693800, 6258360, 11734380]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Gold Harvesting1",
        src: GoldHarvesting1,
        labs: [1, 1, 1, 1, 1, 1, 1, 2, 3, 5],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [513164, 769746, 1026327, 1334225, 1744756, 2360552, 4105307, 6157961, 10947486, 12315921],
        rock: [136844, 205266, 273688, 355794, 465269, 629481, 1094749, 1642123, 2919330, 3284246],
        timber: [102633, 153950, 205266, 266845, 348952, 472111, 821062, 1231593, 3649162, 2463185],
        ore: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378995, 6568492],
        gold: [282330, 423495, 564660, 734058, 959922, 1298718, 2258640, 3387959, 6023038, 6775918],
        time: [234720, 312960, 391200, 547620, 782339, 1173480, 1955760, 4693800, 6258360, 11734380]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Bigger Bags 1",
        src: BiggerBags1,
        labs: [1, 1, 1, 1, 1, 1, 1, 3, 3, 6],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [547375, 821062, 1094749, 1423174, 1861073, 2517922, 4378995, 6568492, 8759989, 13136983],
        rock: [228073, 342109, 456146, 592989, 775447, 1049134, 1824581, 2736872, 3649162, 5473743],
        timber: [136844, 205266, 273688, 355794, 465269, 629481, 1094749, 1642123, 2189498, 3284246],
        ore: [364917, 547375, 729833, 948783, 1240715, 1678615, 2919330, 4378995, 5838659, 8757989],
        gold: [376440, 564660, 752880, 978744, 1279896, 1731624, 3011519, 4517279, 6023038, 9034557],
        time: [312960, 417240, 521580, 730140, 1043100, 1564620, 2607660, 6258360, 8344440, 15645840]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Tax Break",
        src: TaxBreak,
        labs: [1, 1, 1, 1, 1, 1, 1, 3, 3, 6],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [684218, 1026327, 1368436, 1778967, 2326341, 3147402, 5473743, 8210614, 10947486, 16421228],
        rock: [273688, 410531, 547375, 711587, 930537, 1258961, 2189498, 3284246, 4378995, 6568492],
        timber: [228073, 342109, 456146, 592989, 775447, 1049134, 1824581, 2736872, 3649162, 5473743],
        ore: [182459, 273688, 364917, 474392, 620358, 839308, 1459665, 2189498, 2919330, 4378995],
        gold: [376440, 564660, 752880, 978744, 1279896, 1731624, 3011519, 4517279, 6023038, 9034557],
        time: [312960, 417240, 521580, 730140, 1043100, 1564620, 2607660, 6258360, 8344440, 15645840]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Forced March 1",
        src: ForcedMarch1,
        labs: [1, 1, 1, 1, 1, 1, 1, 3, 3, 6],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [547375, 821062, 1094749, 1423174, 1861073, 2517922],
        rock: [228073, 342109, 456146, 592989, 775447, 1049134],
        timber: [136844, 205266, 273688, 355794, 465269, 629481],
        ore: [364917, 547375, 729833, 948783, 1240715, 1678615],
        gold: [376440, 564660, 752880, 978744, 1279896, 1731624],
        time: [312960, 417240, 521580, 730140, 1043100, 1564620, 2607660, 6258360, 8344440, 15645840]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "More Gatherers",
        src: MoreGatherers,
        labs: [1, 1, 1, 1, 1, 2, 3, 6, 8, 14],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [6568492, 8757989, 13136983],
        rock: [2736872, 3649162, 5473743],
        timber: [1642123, 2189498, 3284246],
        ore: [4378995, 5838659, 8757989],
        gold: [4517279, 6023038, 9034557],
        time: [782339, 1043100, 1303860, 1825380, 2607660, 3911460, 6519120, 15645840, 20861100, 39114600]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Infantry Wedge",
        src: InfantryWedge,
        labs: [2],
        level: [1],
        food: [1368436, 2052654, 2736872, 3557933, 4652682, 6294804, 10947486, 16421228, 21894971, 32842456],
        rock: [570182, 855273, 1140364, 1482472, 1938618, 2622835, 4561453, 6842179, 9122905, 13684357],
        timber: [342109, 513164, 684218, 889484, 1163171, 1573701, 2736872, 4105307, 5473743, 8210614],
        ore: [912291, 1368436, 1824581, 2371956, 3101788, 4196536, 7298324, 10947486, 14596647, 21894971],
        gold: [941100, 1411650, 1882200, 2446859, 3199739, 4329059, 7528797, 11293196, 15057594, 22586391],
        time: [2884560]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Ranged Wedge",
        src: RangedWedge,
        labs: [2],
        level: [1],
        food: [3958334],
        rock: [1055556],
        timber: [1319445],
        ore: [1583334],
        gold: [2177778],
        time: [2884560]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Cavalry Wedge",
        src: CavalryWedge,
        labs: [2],
        level: [1],
        food: [3958334],
        rock: [1055556],
        timber: [791667],
        ore: [2111112],
        gold: [2177778],
        time: [2884560]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Army Defense 2",
        src: ArmyDefense2,
        labs: [1, 1, 1, 2, 2, 3, 4, 9, 12, 22],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [3958334],
        rock: [1583334],
        timber: [1319445],
        ore: [1055556],
        gold: [2177778],
        time: [1251720, 1668900, 2086139, 2920560, 4172220, 6258360, 10430580, 25033320, 33377760, 62583300]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Army Offense 2",
        src: ArmyOffense2,
        labs: [1, 1, 1, 2, 2, 3, 5, 10, 14, 25],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [2736872, 4105307, 5473743, 7115866, 9305363, 12589608, 21894971, 32842456, 43789941, 65684911],
        rock: [1094749, 1642123, 2189498, 2846347, 3722145, 5035844, 8757989, 13136983, 17515977, 26273965],
        timber: [912291, 1368436, 1824581, 2371956, 3101788, 4196536, 7298324, 10947486, 14596647, 21894971],
        ore: [729833, 1094749, 1459665, 1897565, 2481430, 3357229, 5838659, 8757989, 11677318, 17515977],
        gold: [1505760, 2258640, 3011519, 3914975, 5119582, 6926494, 12046075, 18069113, 24092150, 36138225],
        time: [1408140, 1877520, 2346900, 3285660, 4693800, 7040640, 11734380, 28162499, 37549980, 70406220]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Army Health 2",
        src: ArmyHealth2,
        labs: [1, 1, 1, 2, 2, 3, 4, 9, 12, 22],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [2463182, 3694777, 4926369, 6404279, 8374827, 11330648, 19705474, 29558210, 39410947, 59116420],
        rock: [1026327, 1539491, 2052654, 2668450, 3489511, 4721103, 8210614, 12315921, 16421228, 24631842],
        timber: [615797,
            923695, 1231593, 1601070, 2093707, 2832662, 4926369, 7389553, 9852737, 14779105
        ],
        ore: [1642123, 2463185, 3284246, 4269520, 5583218, 7553765, 13136983, 19705474, 26273965, 39410947],
        gold: [1693980, 2540969, 3387959, 4404347, 5759530, 7792305, 13551835, 20327752, 27103669, 40655503],
        time: [1251720, 1668900, 2086139, 2920560, 4172220, 6258360, 10430580, 25033320, 33377760, 62583300]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Bigger Army 3",
        src: BiggerArmy3,
        labs: [24],
        level: [1],
        food: [2736872, 4105307, 5473743, 7115866, 9305363, 12589608, 21894971, 32842456, 43789941, 65684911],
        rock: [729833, 1094749, 1459665, 1897565, 2481430, 3357229, 5838659, 8757989, 11677318, 17515977],
        timber: [912291, 1368436, 1824581, 2371956, 3101788, 4196536, 7298324, 10947486, 14596647, 21894971],
        ore: [1094749, 1642123, 2189498, 2846347, 3722145, 5035844, 8757989, 13136983, 17515977, 26273965],
        gold: [1505760, 2258640, 3011519, 3914975, 5119582, 6926494, 12046075, 18069113, 24092150, 36138225],
        time: [67306440]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Sabotage",
        src: Sabotage,
        labs: [2, 2, 3, 4, 5, 7, 12, 28, 37, 68],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [73888889],
        rock: [30787038],
        timber: [18472223],
        ore: [49259260],
        gold: [50814815],
        time: [3911460, 5215320, 6519120, 9126780, 13038240, 19557300, 32595480, 78229140, 104305500, 195572760]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Plague",
        src: Plague,
        labs: [2, 2, 3, 4, 5, 7, 12, 28, 37, 68],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [13684357, 20526535, 27368713, 35579327, 46526812, 62948040, 109474852, 164212278, 218949703, 328424555],
        rock: [4561453, 6842179, 9122905, 11859776, 15508938, 20982680, 36491618, 54737426, 72983235, 109474852],
        timber: [1140364, 1710545, 2280727, 2964944, 3877235, 5245670, 9122905, 13684357, 18245809, 27368713],
        ore: [1140364, 1710545, 2280727, 2964.944, 3877235, 5245670, 9122905, 13684357, 18245809, 27368713],
        gold: [4705498, 7058247, 9410996, 12234295, 15998694, 21645291, 37643984, 56465976, 75287968, 112931952],
        time: [3911460, 5215320, 6519120, 9126780, 13038240, 19557300, 32595480, 78229140, 104305500, 195572760]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }, {
        name: "Demoralize",
        src: Demoralize,
        labs: [2, 3, 4, 5, 7, 10, 16, 39, 51, 95],
        level: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        food: [8552723, 12829085, 17105446, 22237080, 29079258, 39432525, 68421783, 102632674, 136843565, 205265347],
        rock: [2850908, 4276362, 5701816, 7412360, 9693086, 13114175, 22807261, 34210892, 45614522, 68421783],
        timber: [2280727, 3421090, 4561453, 5929888, 7754469, 10491340, 18245809, 27368713, 36491618, 54737426],
        ore: [3421090, 5131634, 6842179, 8894832, 11631703, 15737010, 27368713, 41053070, 54737426, 82106139],
        gold: [4705498, 7058247, 9410996, 12234295, 15998694, 21645291, 37643984, 56465976, 75287968, 112931952],
        time: [5476080, 7301400, 9126780, 12777479, 18253500, 27380220, 45633659, 109520759, 146027700, 273801900]
        ,
        start: 0,
        end: 0,
        totalFood: 0,
        totalRock: 0,
        totalTimber: 0,
        totalOre: 0,
        totalGold: 0,
        totalTime: 0
    }]