import {
  getElementsByClassName,
  getElementByClassName,
} from "./dom-api/index.js";

const test = getElementsByClassName(document, "has-red-postbox");
console.log(test);
console.log(getElementByClassName(document, "village"));
