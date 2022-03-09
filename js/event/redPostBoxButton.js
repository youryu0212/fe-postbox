import { getElementsByClassName, getElementByClassName } from ".././dom-api/index.js";

const searchRedPostbox = () => {
  const villagesHasRedPostbox = getElementsByClassName(document, "has-red-postbox");
  return villagesHasRedPostbox;
};
const getVillageName = (village) => {
  const villageName = getElementByClassName(village, "village-name").innerText;
  return villageName;
};
const getRedPostboxSize = (village) => {
  const redPostboxSize = Number(getElementByClassName(village, "red-postbox").dataset.size);
  return redPostboxSize;
};
const redPostboxButton = getElementByClassName(document, "red-postbox__button");

redPostboxButton.addEventListener("click", () => {
  const villages = searchRedPostbox();
  const postboxSize = villages.map((village) => [getVillageName(village), getRedPostboxSize(village)]);
  const redPostboxInfo = getElementByClassName(document, "red-postbox__info");
  redPostboxInfo.innerHTML = `
  <div>${postboxSize.map(([villageName, _]) => villageName)} 총 ${postboxSize.length} 개의 마을입니다.</div>
  <div>크기는 차례대로 ${postboxSize.map(([_, postboxSize]) => postboxSize)}입니다.</div>
  `;
});

export { redPostboxButton };
