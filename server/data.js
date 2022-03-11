const express = require("express");
const data = express.Router();

const { createVillagePosition } = require("./createVillagePosition.js");
const { gacha } = require("./util.js");
const { Village } = require("./village.js");

data.get("/", (req, res) => {
  const positionToVillage = (pos) => new Village(String.fromCharCode(nameCode++), pos, gacha(50));

  const p = createVillagePosition(1500, 700);
  let nameCode = 65;
  const villages = p.map(positionToVillage);
  villages.forEach((village) => {
    village.innerVillage = createVillagePosition(village.w, village.h).map(positionToVillage);
  });
  const villagesTemplate = villages.map((village) => village.createTemplate()).join("");
  res.json(JSON.stringify(villagesTemplate));
});

module.exports = data;
