import { getElementsByClassName, getElementByClassName } from ".././dom-api/index.js";
import { mergeSort, delay } from "../util.js";

const searchVillagesRedPostbox = () => getElementsByClassName(document, "has-red-postbox");
const getVillageName = (village) => getElementByClassName(village, "village-name").innerText;
const getRedPostboxSize = (village) => Number(getElementByClassName(village, "red-postbox").dataset.size);

const redPostboxButton = getElementByClassName(document, "red-postbox__button");

const renderRedPostboxInfo = (villagesHasRedPostbox) => {
  const redPostboxInfo = getElementByClassName(document, "red-postbox__info");
  redPostboxInfo.innerHTML = `
  <div>
    ${villagesHasRedPostbox.map((village) => village.name)} 총 ${
    villagesHasRedPostbox.length
  } 개의 마을입니다.
  </div>
  <div>
  우체통의 크기는${mergeSort(villagesHasRedPostbox, (a, b) => a.postboxSize >= b.postboxSize).map(
    (village) => village.name
  )}입니다.
  </div>
  `;
};
redPostboxButton.addEventListener("click", () => {
  new Promise((resolve, reject) => {
    const villageHasRedPostboxElements = searchVillagesRedPostbox();
    const villagesHasRedPostbox = villageHasRedPostboxElements.map((villageElement) => {
      return { name: getVillageName(villageElement), postboxSize: getRedPostboxSize(villageElement) };
    });
    renderRedPostboxInfo(villagesHasRedPostbox);
    resolve(villageHasRedPostboxElements);
  })
    .then((villageHasRedPostboxElements) => delay(villageHasRedPostboxElements, 2000))
    .then((villageHasRedPostboxElements) => {
      villageHasRedPostboxElements.forEach((village) => {
        const villageArea = getElementByClassName(village, "village-area");
        villageArea.style.borderColor = "red";
      });
    });
});

export { redPostboxButton };
