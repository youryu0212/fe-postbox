import { redPostboxButton } from "./event/redPostBoxButton.js";
import { createVillagePosition } from "./createVillagePosition.js";
import { getRandomNumber, gacha } from "./util.js";
import { Village } from "./village.js";
import { getElementByClassName } from "./dom-api/index.js";

const positionToVillage = (pos) => new Village(String.fromCharCode(nameCode++), pos, gacha(50));

const p = createVillagePosition(1500, 700);
let nameCode = 65;
const villages = p.map(positionToVillage);
villages.forEach((village) => {
  village.innerVillage = createVillagePosition(village.w, village.h).map(positionToVillage);
});

getElementByClassName(document, "map").innerHTML = villages
  .map((village) => village.createTemplate())
  .join("");

fetch("/data").then((res) => {
  console.log(res.json);
});
