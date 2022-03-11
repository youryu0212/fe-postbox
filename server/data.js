const express = require("express");
const data = express.Router();

const { createVillagePosition } = require("./createVillagePosition.js");
const { gacha } = require("./util.js");
const { Village } = require("./village.js");

const createRandomVillages = () => {
  const positionToVillage = (pos) => new Village(String.fromCharCode(nameCode++), pos, gacha(50));

  const villagePosition = createVillagePosition(1500, 700);
  let nameCode = 65;
  const villages = villagePosition.map(positionToVillage);
  villages.forEach((village) => {
    village.innerVillage = createVillagePosition(village.w, village.h).map(positionToVillage);
  });
  return villages;
};
const createVillageTemplate = (villages) => villages.map((village) => village.createTemplate()).join("");

data.get("/", (req, res) => {
  const villages = createRandomVillages();
  const villagesTemplate = createVillageTemplate(villages);
  res.json(JSON.stringify(villagesTemplate));
});

module.exports = data;
