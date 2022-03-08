export const getElementsByClassName = (node, target) => {
  const result = [];
  if (!node) return result;
  [...node.children].forEach((cur) => {
    if (cur.className === target) {
      result.push(cur);
    }
    result.push(...getElementsByClassName(cur, target));
  });
  return result;
};
