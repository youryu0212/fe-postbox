export const getElementByClassName = (node, target) => {
  let result = null;
  if (!node) return null;
  for (let i = 0; i < node.children.length; i++) {
    if ([...node.children[i].classList].includes(target)) {
      return node.children[i];
    }
    result = getElementByClassName(node.children[i], target);
    if (result) return result;
  }
};
