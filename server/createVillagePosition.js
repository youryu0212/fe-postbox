const { getRandomNumber, toInt } = require("./util.js");

const OFFSET = 31;
const MAX_TRY_COUNT = 20;
const MIN_VILLAGE_COUNT = 1;
const MAX_VILLAGE_COUNT = 6;

const createVillagePosition = (width, height) => {
  const result = [];
  const visited = Array.from(Array(height + 1), () => new Array(width + 1).fill(false));
  const visitVillagePosition = ({ x, y, w, h }) => {
    for (let i = y; i < y + h; i++) {
      for (let j = x; j < x + w; j++) {
        visited[i][j] = true;
      }
    }
  };
  const getPosition = () => {
    const x = getRandomNumber(OFFSET, toInt(width / 1.2));
    const y = getRandomNumber(OFFSET, toInt(height / 1.2));
    const w = getRandomNumber(Math.max(10, toInt(width / 4)), toInt(width / 2));
    const h = getRandomNumber(Math.max(10, toInt(height / 4)), toInt(height / 2));
    if (x + w + OFFSET >= width || y + h + OFFSET >= height) return;
    for (let i = y; i < y + h; i++) {
      for (let j = x; j < x + w; j++) {
        if (visited[i][j]) return;
      }
    }
    visitVillagePosition({ x, y, w, h });
    return { x, y, w, h };
  };
  let villageCount = 0;
  let tryCount = 0;
  while (villageCount < MIN_VILLAGE_COUNT || (villageCount < MAX_VILLAGE_COUNT && tryCount < MAX_TRY_COUNT)) {
    const villagePosition = getPosition();
    if (villagePosition) {
      result.push(villagePosition);
      villageCount++;
    }
    tryCount++;
  }
  return result;
};

module.exports = { createVillagePosition };
