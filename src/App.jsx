import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Spinner from "./components/Spinner";
// import Customization from "./pages/Customization";
// import Game from "./pages/Game";
// import Homepage from "./pages/Homepage";
// import PageNotFouınd from "./pages/PageNotFouınd";
// import EnemyDirewolf from "./components/gamecomponents/EnemyDirewolf";
// import EnemyYoungApe from "./components/gamecomponents/EnemyYoungApe";
// import EnemyWhiteLion from "./components/gamecomponents/EnemyWhiteLion";
// import EnemyBarbarian from "./components/gamecomponents/EnemyBarbarian";
// import EnemyIroncladMarauder from "./components/gamecomponents/EnemyIroncladMarauder";
// import EnemyCorruptedOrc from "./components/gamecomponents/EnemyCorruptedOrc";
// import EnemyRoguePaladin from "./components/gamecomponents/EnemyRoguePaladin";
// import EnemyDesertMonster from "./components/gamecomponents/EnemyDesertMonster";
// import EnemyKingsHand from "./components/gamecomponents/EnemyKingsHand";
// import EnemyPyromancer from "./components/gamecomponents/EnemyPyromancer";
// import EnemyBanditWarrior from "./components/gamecomponents/EnemyBanditWarrior";
// import EnemyBanditMage from "./components/gamecomponents/EnemyBanditMage";
// import EnemyBanditLeader from "./components/gamecomponents/EnemyBanditLeader";
// import EnemyOrcBanditWarrior from "./components/gamecomponents/EnemyOrcBanditWarrior";
// import EnemyOrcBanditMage from "./components/gamecomponents/EnemyOrcBanditMage";
// import EnemyOrcBanditLeader from "./components/gamecomponents/EnemyOrcBanditLeader";
// import EnemySpectralGuardian from "./components/gamecomponents/EnemySpectralGuardian";
// import EnemyFrostBornWarrior from "./components/gamecomponents/EnemyFrostBornWarrior";
// import EnemyDarkMage from "./components/gamecomponents/EnemyDarkMage";
// import EnemyDarkKnight from "./components/gamecomponents/EnemyDarkKnight";

const Homepage = lazy(() => import("./pages/Homepage"));
const Customization = lazy(() => import("./pages/Customization"));
const Game = lazy(() => import("./pages/Game"));
const PageNotFouınd = lazy(() => import("./pages/PageNotFouınd"));
const EnemyDirewolf = lazy(() =>
  import("./components/gamecomponents/EnemyDirewolf")
);
const EnemyYoungApe = lazy(() =>
  import("./components/gamecomponents/EnemyYoungApe")
);
const EnemyWhiteLion = lazy(() =>
  import("./components/gamecomponents/EnemyWhiteLion")
);
const EnemyBarbarian = lazy(() =>
  import("./components/gamecomponents/EnemyBarbarian")
);
const EnemyIroncladMarauder = lazy(() =>
  import("./components/gamecomponents/EnemyIroncladMarauder")
);
const EnemyCorruptedOrc = lazy(() =>
  import("./components/gamecomponents/EnemyCorruptedOrc")
);
const EnemyRoguePaladin = lazy(() =>
  import("./components/gamecomponents/EnemyRoguePaladin")
);
const EnemyDesertMonster = lazy(() =>
  import("./components/gamecomponents/EnemyDesertMonster")
);
const EnemyKingsHand = lazy(() =>
  import("./components/gamecomponents/EnemyKingsHand")
);
const EnemyPyromancer = lazy(() =>
  import("./components/gamecomponents/EnemyPyromancer")
);
const EnemyBanditWarrior = lazy(() =>
  import("./components/gamecomponents/EnemyBanditWarrior")
);
const EnemyBanditMage = lazy(() =>
  import("./components/gamecomponents/EnemyBanditMage")
);
const EnemyBanditLeader = lazy(() =>
  import("./components/gamecomponents/EnemyBanditLeader")
);
const EnemyOrcBanditWarrior = lazy(() =>
  import("./components/gamecomponents/EnemyOrcBanditWarrior")
);
const EnemyOrcBanditMage = lazy(() =>
  import("./components/gamecomponents/EnemyOrcBanditMage")
);
const EnemyOrcBanditLeader = lazy(() =>
  import("./components/gamecomponents/EnemyOrcBanditLeader")
);
const EnemySpectralGuardian = lazy(() =>
  import("./components/gamecomponents/EnemySpectralGuardian")
);
const EnemyFrostBornWarrior = lazy(() =>
  import("./components/gamecomponents/EnemyFrostBornWarrior")
);
const EnemyDarkMage = lazy(() =>
  import("./components/gamecomponents/EnemyDarkMage")
);
const EnemyDarkKnight = lazy(() =>
  import("./components/gamecomponents/EnemyDarkKnight")
);

/* Homepage
Customization
Game
EnemyDirewolf
EnemyYoungApe
EnemyWhiteLion
EnemyBarbarian
EnemyIroncladMarauder
EnemyCorruptedOrc
EnemyRoguePaladin
EnemyDesertMonster
EnemyKingsHand
EnemyPyromancer
EnemyBanditWarrior
EnemyBanditMage
EnemyBanditLeader
EnemyOrcBanditWarrior
EnemyOrcBanditMage
EnemyOrcBanditLeader
EnemySpectralGuardian
EnemyFrostBornWarrior
EnemyDarkMage
EnemyDarkKnight*/

const itemList = {
  stick: {
    id: 1,
    itemType: "weapon",
    name: "Wood Staff",
    ap: 4,
    mp: 12,
    requiredLvl: 1,
    criticalRate: 2,
    img: "/woodstaff.png",
    grade: "Common",
    sellPrice: 1,
  },
  longsword: {
    id: 2,
    itemType: "weapon",
    name: "Longsword",
    ap: 10,
    mp: 2,
    requiredLvl: 1,
    criticalRate: 7,
    img: "/longsword.png",
    grade: "Common",
    sellPrice: 1,
  },
  knife: {
    id: 3,
    itemType: "weapon",
    name: "Knife",
    ap: 7,
    mp: 6,
    criticalRate: 30,
    requiredLvl: 1,
    img: "/knife.png",
    grade: "Common",
    sellPrice: 1,
  },
  tatteredClothGarb: {
    id: 4,
    itemType: "armor",
    name: "Tattered Garb",
    physDef: 8,
    magDef: 8,
    healthBonus: 100,
    img: "/tatteredclothgarb.png",
    requiredLvl: 1,
    grade: "Common",
    sellPrice: 1,
  },

  igniteSpell: {
    id: 401,
    itemType: "spell",
    element: "flame",
    name: "Ignite",
    img: "/ignite.png",
    description: "Cast a weak spell that ignites the opponent",
    price: 100,
    staminaCost: 175,
    sellPrice: 30,
    damage: 1.2,
  },
  iceSpell: {
    id: 405,
    itemType: "spell",
    element: "ice",
    name: "Frost Nip",
    description:
      "Cast a chilling touch that can freeze the opponent’s movements, has a slight chance to stun the opponent",
    img: "/frostnip.png",
    price: 150,
    staminaCost: 250,
    sellPrice: 40,
    damage: 1.3,
  },
};
const armorList = {
  tatteredClothGarb: {
    name: "Tattered Cloth Garb",
    physDef: 8,
    magDef: 8,
    healthBonus: 100,
  },
};
const blacksmithVillageItemList = [
  {
    id: 1,
    itemType: "weapon",
    name: "Wood Staff",
    ap: 4,
    mp: 12,
    requiredLvl: 1,
    criticalRate: 2,
    img: "/woodstaff.png",
    grade: "Common",
    price: 100,
    sellPrice: 1,
  },
  {
    id: 2,
    itemType: "weapon",
    name: "Longsword",
    ap: 10,
    mp: 2,
    requiredLvl: 1,
    criticalRate: 7,
    img: "/longsword.png",
    grade: "Common",
    price: 100,
    sellPrice: 1,
  },
  {
    id: 3,
    itemType: "weapon",
    name: "Knife",
    ap: 7,
    mp: 6,
    criticalRate: 30,
    requiredLvl: 1,
    img: "/knife.png",
    grade: "Common",
    price: 100,
    sellPrice: 1,
  },
  {
    id: 103,
    itemType: "weapon",
    name: "Wizard Staff",
    ap: 5,
    mp: 15,
    requiredLvl: 2,
    criticalRate: 2,
    img: "/wizardstaff.png",
    grade: "Common",
    price: 150,
    sellPrice: 30,
  },
  {
    id: 102,
    itemType: "weapon",
    name: "Military Axe",
    ap: 13,
    mp: 2,
    criticalRate: 4,
    requiredLvl: 2,
    img: "/militaryaxe.png",
    grade: "Common",
    price: 150,
    sellPrice: 30,
  },
  {
    id: 101,
    itemType: "weapon",
    name: "Military Dagger",
    ap: 9,
    mp: 7,
    criticalRate: 32,
    requiredLvl: 2,
    img: "/militarydagger.png",
    grade: "Common",
    price: 150,
    sellPrice: 30,
  },

  {
    id: 104,
    itemType: "weapon",
    name: "Verdant Whisper",
    ap: 5,
    mp: 20,
    requiredLvl: 4,
    criticalRate: 3,
    img: "/verdantwhisper.png",
    grade: "Rare",
    price: 250,
    sellPrice: 45,
  },
  {
    id: 105,
    itemType: "weapon",
    name: "Two-Handed Sword",
    ap: 20,
    mp: 5,
    requiredLvl: 4,
    criticalRate: 5,
    img: "/twohandedsword.png",
    grade: "Rare",
    price: 250,
    sellPrice: 45,
  },
  {
    id: 106,
    itemType: "weapon",
    name: "Plain Edge",
    ap: 16,
    mp: 10,
    requiredLvl: 4,
    criticalRate: 34,
    img: "/plainedge.png",
    grade: "Rare",
    price: 250,
    sellPrice: 45,
  },
  {
    id: 107,
    itemType: "weapon",
    name: "Crystal Core",
    ap: 7,
    mp: 25,
    requiredLvl: 5,
    criticalRate: 4,
    img: "/crystalcore.png",
    grade: "Rare",
    price: 400,
    sellPrice: 60,
  },
  {
    id: 108,
    itemType: "weapon",
    name: "Stalwart Blade",
    ap: 24,
    mp: 7,
    requiredLvl: 5,
    criticalRate: 6,
    img: "/stalwartblade.png",
    grade: "Rare",
    price: 400,
    sellPrice: 60,
  },
  {
    id: 109,
    itemType: "weapon",
    name: "Nightfall Dirk",
    ap: 19,
    mp: 12,
    requiredLvl: 5,
    criticalRate: 36,
    img: "/nightfalldirk.png",
    grade: "Rare",
    price: 400,
    sellPrice: 60,
  },
  {
    id: 110,
    itemType: "weapon",
    name: "Shadowgem Staff",
    ap: 9,
    mp: 29,
    requiredLvl: 6,
    criticalRate: 5,
    img: "/shadowgemstaff.png",
    grade: "Rare",
    price: 500,
    sellPrice: 90,
  },
  {
    id: 111,
    itemType: "weapon",
    name: "Dark Axe",
    ap: 28,
    mp: 8,
    requiredLvl: 6,
    criticalRate: 6,
    img: "/darkaxe.png",
    grade: "Rare",
    price: 500,
    sellPrice: 90,
  },
  {
    id: 112,
    itemType: "weapon",
    name: "Steadfast Dirk",
    ap: 23,
    mp: 13,
    requiredLvl: 6,
    criticalRate: 38,
    img: "/steadfastdirk.png",
    grade: "Rare",
    price: 500,
    sellPrice: 90,
  },
  {
    id: 113,
    itemType: "weapon",
    name: "Eclipse Rod",
    ap: 11,
    mp: 35,
    requiredLvl: 8,
    criticalRate: 6,
    img: "/eclipserod.png",
    grade: "Epic",
    price: 750,
    sellPrice: 250,
  },
  {
    id: 114,
    itemType: "weapon",
    name: "Dark Blade",
    ap: 34,
    mp: 10,
    requiredLvl: 8,
    criticalRate: 7,
    img: "/darkblade.png",
    grade: "Epic",
    price: 750,
    sellPrice: 250,
  },
  {
    id: 115,
    itemType: "weapon",
    name: "Glided Serpent",
    ap: 28,
    mp: 15,
    requiredLvl: 8,
    criticalRate: 41,
    img: "/glidedserpent.png",
    grade: "Epic",
    price: 750,
    sellPrice: 250,
  },
];
const blacksmithCityItemList = [
  {
    id: 116,
    itemType: "weapon",
    name: "Mysticore",
    ap: 13,
    mp: 39,
    requiredLvl: 9,
    criticalRate: 6,
    img: "/mysticore.png",
    grade: "Epic",
    price: 900,
    sellPrice: 280,
  },
  {
    id: 117,
    itemType: "weapon",
    name: "Mystic Axe",
    ap: 38,
    mp: 12,
    requiredLvl: 9,
    criticalRate: 6,
    img: "/mysticaxe.png",
    grade: "Epic",
    price: 900,
    sellPrice: 280,
  },
  {
    id: 118,
    itemType: "weapon",
    name: "Spirit of Nature",
    ap: 15,
    mp: 43,
    requiredLvl: 10,
    criticalRate: 8,
    img: "/spiritofnaturestaff.png",
    grade: "Epic",
    price: 1050,
    sellPrice: 350,
  },
  {
    id: 119,
    itemType: "weapon",
    name: "Destroyer",
    ap: 41,
    mp: 13,
    requiredLvl: 10,
    criticalRate: 8,
    img: "/destroyer.png",
    grade: "Epic",
    price: 1050,
    sellPrice: 350,
  },
  {
    id: 120,
    itemType: "weapon",
    name: "Venomous Knife",
    ap: 35,
    mp: 18,
    requiredLvl: 10,
    criticalRate: 45,
    img: "/venomousknife.png",
    grade: "Epic",
    price: 1050,
    sellPrice: 350,
  },
  {
    id: 121,
    itemType: "weapon",
    name: "Wizard's Force",
    ap: 20,
    mp: 49,
    requiredLvl: 12,
    criticalRate: 8,
    img: "/wizardsforce.png",
    grade: "Unique",
    price: 1400,
    sellPrice: 500,
  },
  {
    id: 122,
    itemType: "weapon",
    name: "Arcane Longsword",
    ap: 45,
    mp: 18,
    requiredLvl: 12,
    criticalRate: 10,
    img: "/arcanelongsword.png",
    grade: "Unique",
    price: 1400,
    sellPrice: 500,
  },
  {
    id: 123,
    itemType: "weapon",
    name: "Soulreaper",
    ap: 40,
    mp: 24,
    requiredLvl: 12,
    criticalRate: 50,
    img: "/soulreaper.png",
    grade: "Unique",
    price: 1400,
    sellPrice: 500,
  },
  {
    id: 124,
    itemType: "weapon",
    name: "Inferno Rod",
    ap: 23,
    mp: 53,
    requiredLvl: 13,
    criticalRate: 10,
    img: "/infernorod.png",
    grade: "Unique",
    price: 1550,
    sellPrice: 600,
  },
  {
    id: 125,
    itemType: "weapon",
    name: "Frostbite Falchion",
    ap: 49,
    mp: 20,
    requiredLvl: 13,
    criticalRate: 12,
    img: "/frostbitefalchion.png",
    grade: "Unique",
    price: 1550,
    sellPrice: 600,
  },
  {
    id: 145,
    itemType: "weapon",
    name: "Icicle Shiv",
    ap: 45,
    mp: 25,
    requiredLvl: 13,
    criticalRate: 53,
    img: "/icicleshiv.png",
    grade: "Unique",
    price: 1550,
    sellPrice: 600,
  },
  {
    id: 126,
    itemType: "weapon",
    name: "Dark Sovereign",
    ap: 30,
    mp: 62,
    requiredLvl: 15,
    criticalRate: 12,
    img: "/darksovereign.png",
    grade: "Unique",
    price: 2000,
    sellPrice: 850,
  },
  {
    id: 127,
    itemType: "weapon",
    name: "Blaze Cleaver",
    ap: 60,
    mp: 25,
    requiredLvl: 15,
    criticalRate: 15,
    img: "/blazecleaver.png",
    grade: "Unique",
    price: 2000,
    sellPrice: 850,
  },
  {
    id: 128,
    itemType: "weapon",
    name: "Flame Dagger",
    ap: 52,
    mp: 31,
    requiredLvl: 15,
    criticalRate: 60,
    img: "/flamedagger.png",
    grade: "Unique",
    price: 2000,
    sellPrice: 850,
  },
];
const armorshopVillageItemList = [
  {
    id: 201,
    type: "armor",
    name: "Tattered Garb",
    physDef: 8,
    magDef: 8,
    healthBonus: 100,
    img: "/tatteredclothgarb.png",
    grade: "Common",
    price: 100,
    requiredLvl: 1,
    sellPrice: 1,
  },
  {
    id: 202,
    type: "armor",

    name: "Traveler's Tunic",
    physDef: 9,
    magDef: 10,
    healthBonus: 150,
    img: "travelerstunic.png",
    price: 100,
    grade: "Common",
    requiredLvl: 1,
    sellPrice: 1,
  },
  {
    id: 203,
    type: "armor",

    name: "Leather Linen",
    physDef: 11,
    magDef: 12,
    healthBonus: 150,
    img: "leathercladlinen.png",
    price: 200,
    grade: "Common",
    requiredLvl: 2,
    sellPrice: 30,
  },
  {
    id: 204,
    type: "armor",

    name: "Ranger's Vest",
    physDef: 15,
    magDef: 11,
    healthBonus: 200,
    img: "rangersvest.png",
    price: 300,
    grade: "Common",
    requiredLvl: 3,
    sellPrice: 45,
  },
  {
    id: 205,
    type: "armor",

    name: "Leather Armor",
    physDef: 18,
    magDef: 13,
    healthBonus: 250,
    img: "leatherarmor.png",
    price: 350,
    grade: "Rare",
    requiredLvl: 5,
    sellPrice: 55,
  },
  {
    id: 206,
    type: "armor",

    name: "Scout's Mail",
    physDef: 14,
    magDef: 17,
    healthBonus: 250,
    img: "scoutsmail.png",
    price: 350,
    grade: "Rare",
    requiredLvl: 5,
    sellPrice: 55,
  },
  {
    id: 235,
    type: "armor",

    name: "Chain Mail",
    physDef: 19,
    magDef: 15,
    healthBonus: 300,
    img: "chainmail.png",
    price: 450,
    grade: "Rare",
    requiredLvl: 7,
    sellPrice: 80,
  },
  {
    id: 207,
    type: "armor",

    name: "Swiftguard Breast Plate",
    physDef: 17,
    magDef: 17,
    healthBonus: 300,
    img: "swiftguardbreastplate.png",
    price: 450,
    grade: "Rare",
    requiredLvl: 6,
    sellPrice: 80,
  },
  {
    id: 208,
    type: "armor",

    name: "Heavy Plate",
    physDef: 23,
    magDef: 14,
    healthBonus: 400,
    img: "heavyarmor.png",
    price: 550,
    grade: "Rare",
    requiredLvl: 7,
    sellPrice: 125,
  },
  {
    id: 209,
    type: "armor",

    name: "Phantom Vest",
    physDef: 20,
    magDef: 20,
    healthBonus: 400,
    img: "phantomvest.png",
    price: 600,
    grade: "Rare",
    requiredLvl: 7,
    sellPrice: 140,
  },
  {
    id: 210,
    type: "armor",

    name: "Cogwork Cuirass",
    physDef: 18,
    magDef: 25,
    healthBonus: 400,
    img: "cogworkcuirass.png",
    price: 650,
    grade: "Rare",
    requiredLvl: 7,
    sellPrice: 175,
  },
  {
    id: 211,
    type: "armor",

    name: "Golden Armor",
    physDef: 28,
    magDef: 23,
    healthBonus: 500,
    img: "goldenarmor.png",
    price: 800,
    grade: "Epic",
    requiredLvl: 9,
    sellPrice: 220,
  },
  {
    id: 212,
    type: "armor",

    name: "Mystic Mantle",
    physDef: 22,
    magDef: 29,
    healthBonus: 600,
    img: "mysticmantle.png",
    price: 850,
    grade: "Epic",
    requiredLvl: 9,
    sellPrice: 250,
  },
  {
    id: 213,
    type: "armor",

    name: "Grove Guardian",
    physDef: 25,
    magDef: 26,
    healthBonus: 550,
    img: "groveguardian.png",
    price: 850,
    grade: "Epic",
    requiredLvl: 10,
    sellPrice: 250,
  },
];
const armorshopCityItemList = [
  {
    id: 210,
    type: "armor",

    name: "Cogwork Cuirass",
    physDef: 18,
    magDef: 25,
    healthBonus: 400,
    img: "cogworkcuirass.png",
    price: 650,
    grade: "Rare",
    requiredLvl: 7,
    sellPrice: 175,
  },
  {
    id: 211,
    type: "armor",

    name: "Golden Armor",
    physDef: 28,
    magDef: 23,
    healthBonus: 500,
    img: "goldenarmor.png",
    price: 800,
    grade: "Epic",
    requiredLvl: 9,
    sellPrice: 220,
  },
  {
    id: 212,
    type: "armor",

    name: "Mystic Mantle",
    physDef: 22,
    magDef: 29,
    healthBonus: 600,
    img: "mysticmantle.png",
    price: 850,
    grade: "Epic",
    requiredLvl: 9,
    sellPrice: 250,
  },
  {
    id: 213,
    type: "armor",

    name: "Grove Guardian",
    physDef: 25,
    magDef: 26,
    healthBonus: 550,
    img: "groveguardian.png",
    price: 850,
    grade: "Epic",
    requiredLvl: 10,
    sellPrice: 250,
  },
  {
    id: 214,
    type: "armor",

    name: "Arcanist's Aegis",
    physDef: 25,
    magDef: 30,
    healthBonus: 750,
    img: "arcanistsaegis.png",
    price: 950,
    grade: "Epic",
    requiredLvl: 11,
    sellPrice: 275,
  },
  {
    id: 215,
    type: "armor",

    name: "Darksteel Armor",
    physDef: 32,
    magDef: 27,
    healthBonus: 650,
    img: "darksteelarmor.png",
    price: 1050,
    grade: "Epic",
    requiredLvl: 12,
    sellPrice: 325,
  },
  {
    id: 216,
    type: "armor",

    name: "Aegis of Eternity",
    physDef: 33,
    magDef: 40,
    healthBonus: 1000,
    img: "theaegisofeternity.png",
    price: 1400,
    grade: "Unique",
    requiredLvl: 14,
    sellPrice: 400,
  },
  {
    id: 217,
    type: "armor",

    name: "Aegis of Eternity",
    physDef: 43,
    magDef: 34,
    healthBonus: 800,
    img: "eclipsearmor.png",
    price: 1400,
    grade: "Unique",
    requiredLvl: 14,
    sellPrice: 400,
  },
  {
    id: 218,
    type: "armor",

    name: "Celestial Guard",
    physDef: 45,
    magDef: 45,
    healthBonus: 1200,
    img: "celestialguard.png",
    price: 2100,
    grade: "Unique",
    requiredLvl: 16,
    sellPrice: 850,
  },
];
const merchantVillageItemList = [
  {
    id: 5,
    itemType: "merchandise",
    name: "Health Potion",
    description:
      "Restores 500 health points. However, the turn passes to the opponent on usage",
    img: "/healthpotion.png",
  },
  {
    id: 6,
    itemType: "merchandise",
    name: "Mana Potion",
    description:
      "Restores 750 stamina. However, the turn passes to the opponent on usage",
    img: "/manapotion.png",
  },
];
const magicVillageItemList = [
  {
    id: 401,
    itemType: "spell",
    element: "flame",
    name: "Ignite",
    img: "/ignite.png",
    description: "Cast a weak spell that ignites the opponent",
    price: 100,
    staminaConsume: 175,
    sellPrice: 30,
    damage: 1.2,
  },
  {
    id: 402,
    itemType: "spell",
    element: "flame",

    name: "Blaze",
    img: "/blaze.png",
    description: "Cast a medium-level spell that damages to the opponent",
    price: 250,

    staminaConsume: 350,
    sellPrice: 60,
    damage: 1.8,
  },
  {
    id: 403,
    itemType: "spell",
    element: "flame",

    name: "Inferno Wrath",
    img: "/inferno.png",
    description:
      "Summon a powerful inferno that scorches the opponent, dealing significant damage.",
    price: 500,

    staminaConsume: 500,
    sellPrice: 150,
    damage: 2.3,
  },

  {
    id: 405,
    itemType: "spell",
    element: "ice",
    name: "Frost Nip",
    description:
      "Cast a chilling touch that can freeze the opponent’s movements, has a slight chance to stun the opponent",
    img: "/frostnip.png",
    price: 150,
    staminaConsume: 250,
    sellPrice: 40,
    damage: 1.3,
  },
  {
    id: 406,
    itemType: "spell",
    element: "ice",
    name: "Icicle Lance",
    description:
      "Hurl a sharp icicle at high speed, piercing through enemies and causing moderate cold damage.",
    img: "/iciclelance.png",
    price: 300,
    staminaConsume: 300,
    sellPrice: 75,
    damage: 1.6,
  },

  {
    id: 408,
    itemType: "spell",
    element: "lightning",
    name: "Bolt Strike",
    description:
      "Cast a targeted lightning bolt, striking the opponent with moderate lightning damage.",
    img: "/boltstrike.png",
    price: 350,
    staminaConsume: 350,
    sellPrice: 85,
    damage: 1.8,
  },

  {
    id: 411,
    itemType: "spell",
    element: "nonElemental",
    name: "Concussive Slam",
    description:
      "Deliver a forceful blow to the ground, sending out a shockwave that stuns the opponent",
    img: "/concussiveslam.png",
    price: 600,
    staminaConsume: 650,
    sellPrice: 180,
    damage: 2,
  },
  {
    id: 412,
    itemType: "spell",
    element: "nonElemental",
    name: "Toxic Ambush",
    description:
      "Coat your weapon with a deadly toxin that weakens the enemy, reducing the opponent's defense and slowly sapping its health.",
    img: "/toxicambush.png",
    price: 600,
    staminaConsume: 650,
    sellPrice: 180,
    damage: 2,
  },
];
const magicCityItemList = [
  {
    id: 411,
    itemType: "spell",
    element: "nonElemental",
    name: "Concussive Slam",
    description:
      "Deliver a forceful blow to the ground, sending out a shockwave that stuns the opponent",
    img: "/concussiveslam.png",
    price: 600,
    staminaConsume: 850,
    sellPrice: 180,
    damage: 2,
  },
  {
    id: 412,
    itemType: "spell",
    element: "nonElemental",
    name: "Toxic Ambush",
    description:
      "Coat your weapon with a deadly toxin that weakens the enemy, reducing the opponent's defense and slowly sapping its health.",
    img: "/toxicambush.png",
    price: 600,
    staminaConsume: 650,
    sellPrice: 180,
    damage: 2,
  },
  {
    id: 410,
    itemType: "spell",
    element: "lightning",
    name: "Thundergod's Wrath",
    description:
      "Invoke the wrath of the thundergod, unleashing a cataclysmic storm that deals immense electrical damage to the opponent.",
    img: "/thundergodswrath.png",
    price: 850,
    staminaConsume: 550,
    sellPrice: 250,
    damage: 2.5,
  },
  {
    id: 407,
    itemType: "spell",
    element: "ice",
    name: "Arctic Tempest",
    description:
      "Unleash a devastating blizzard that envelops the battlefield, dealing severe frost damage. Has a good chance to stun the opponent. ",
    img: "/arctictempest.png",
    price: 750,
    staminaConsume: 500,
    sellPrice: 200,
    damage: 2,
  },
  {
    id: 404,
    itemType: "spell",
    name: "Phoenix's Fury",
    element: "flame",

    img: "/phoenix.png",
    description:
      "Call forth the mythical fire of a phoenix to incinerate the opponent, causing massive damage.",
    price: 1000,
    staminaConsume: 800,
    sellPrice: 350,
    damage: 3,
  },
];

function App() {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  const [inGameRemainStats, setInGameRemainStats] = useState(0);
  const [isLevelUp, setIsLevelUp] = useState(false);
  const [user, setUser] = useState([
    {
      username: "admin",
      psw: "8720194",
      hp: 5,
      end: 5,
      str: 5,
      int: 5,
      agi: 5,
      name: "",
      img: "",
      equippedItem: "",
      equippedArmor: "",
      ap: 0,
      magP: 0,
      physDef: 0,
      magDef: 0,
      health: 0,
      stamina: 0,
      inventory: Object.entries(itemList).map(([key, value]) => ({
        type: key,
        ...value,
      })),
      criticalChance: 0,
      criticalDamage: 0,
      coin: 1900,
      exp: exp,
      level: level,
      remainHealth: 0,
      remainStamina: 0,
      race: "",
    },
    {
      username: "ardsen",
      psw: "8723330194",
      hp: 5,
      end: 5,
      str: 5,
      int: 5,
      agi: 5,
      name: "",
      img: "",
      equippedItem: "",
      equippedArmor: "",
      ap: 0,
      magP: 0,
      inventory: Object.entries(itemList).map(([key, value]) => ({
        type: key,
        ...value,
      })),
      physDef: 0,
      magDef: 0,
      health: 0,
      stamina: 0,
      criticalChance: 0,
      criticalDamage: 0,
      coin: 100,
      exp: exp,
      level: level,
      remainHealth: 0,
      remainStamina: 0,
      race: "",
    },
    {
      username: "test",
      psw: "1q2w3e4r",
      hp: 5,
      end: 5,
      str: 5,
      int: 5,
      agi: 5,
      name: "",
      img: "",
      equippedItem: "",
      equippedArmor: "",
      ap: 0,
      magP: 0,
      inventory: Object.entries(itemList).map(([key, value]) => ({
        type: key,
        ...value,
      })),
      physDef: 0,
      magDef: 0,
      health: 0,
      stamina: 0,
      criticalChance: 0,
      criticalDamage: 0,
      coin: 100,
      exp: exp,
      level: level,
      remainHealth: 0,
      remainStamina: 0,
      race: "",
    },
  ]);
  const [currentAccount, setCurrentAccount] = useState();
  const levelsArray = [
    100, 300, 600, 1500, 3500, 6500, 10000, 14500, 20000, 27500, 36000, 46000,
    57500, 70000, 85000, 99000, 15000,
  ];

  useEffect(() => {
    setLevel((lvl) => {
      return (
        (exp < 100 && 1) ||
        (exp < 300 && 2) ||
        (exp < 600 && 3) ||
        (exp < 1500 && 4) ||
        (exp < 3500 && 5) ||
        (exp < 6500 && 6) ||
        (exp < 10000 && 7) ||
        (exp < 14500 && 8) ||
        (exp < 20000 && 9) ||
        (exp < 27500 && 10) ||
        (exp < 36000 && 11) ||
        (exp < 46000 && 12) ||
        (exp < 57500 && 13) ||
        (exp < 70000 && 14) ||
        (exp < 85000 && 15) ||
        (exp < 99000 && 16) ||
        (exp < 115000 && 17) ||
        lvl
      );
    });
    setCurrentAccount((prevAccount) => ({
      ...prevAccount,
      level: level,
      exp: exp,
    }));
  }, [exp, level]);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                user={user}
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                setUser={setUser}
                itemList={itemList}
                exp={exp}
                level={level}
              />
            }
          />
          <Route
            path="customization"
            element={
              <Customization
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                itemList={itemList}
                armorList={armorList}
              />
            }
          />
          <Route
            path="game"
            element={
              <Game
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                itemList={itemList}
                armorList={armorList}
                blacksmithVillageItemList={blacksmithVillageItemList}
                merchantVillageItemList={merchantVillageItemList}
                armorshopVillageItemList={armorshopVillageItemList}
                magicVillageItemList={magicVillageItemList}
                blacksmithCityItemList={blacksmithCityItemList}
                armorshopCityItemList={armorshopCityItemList}
                magicCityItemList={magicCityItemList}
                setLevel={setLevel}
                setExp={setExp}
                levelsArray={levelsArray}
                inGameRemainStats={inGameRemainStats}
                setInGameRemainStats={setInGameRemainStats}
                isLevelUp={isLevelUp}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="direwolf"
            element={
              <EnemyDirewolf
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="youngape"
            element={
              <EnemyYoungApe
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="whitelion"
            element={
              <EnemyWhiteLion
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="barbarian"
            element={
              <EnemyBarbarian
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="ironcladmarauder"
            element={
              <EnemyIroncladMarauder
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="corruptedorc"
            element={
              <EnemyCorruptedOrc
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="roguepaladin"
            element={
              <EnemyRoguePaladin
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="desertmonster"
            element={
              <EnemyDesertMonster
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="kingshand"
            element={
              <EnemyKingsHand
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="pyromancer"
            element={
              <EnemyPyromancer
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="banditwarrior"
            element={
              <EnemyBanditWarrior
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="banditmage"
            element={
              <EnemyBanditMage
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="banditleader"
            element={
              <EnemyBanditLeader
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="orcbanditwarrior"
            element={
              <EnemyOrcBanditWarrior
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="orcbanditmage"
            element={
              <EnemyOrcBanditMage
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="orcbanditleader"
            element={
              <EnemyOrcBanditLeader
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="spectralguardian"
            element={
              <EnemySpectralGuardian
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="frostbornwarrior"
            element={
              <EnemyFrostBornWarrior
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="darkmage"
            element={
              <EnemyDarkMage
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />
          <Route
            path="darkknight"
            element={
              <EnemyDarkKnight
                currentAccount={currentAccount}
                setCurrentAccount={setCurrentAccount}
                exp={exp}
                setExp={setExp}
                levelsArray={levelsArray}
                setInGameRemainStats={setInGameRemainStats}
                inGameRemainStats={inGameRemainStats}
                setIsLevelUp={setIsLevelUp}
              />
            }
          />

          <Route path="*" element={<PageNotFouınd />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
