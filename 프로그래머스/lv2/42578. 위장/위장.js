function solution(clothes) {


let clotheMap = new Map();

clothes.forEach(([item, category]) => {
  const items = clotheMap.get(category) || [];
  clotheMap.set(category, [...items, item]);
});

return(
  [...clotheMap.entries()]
    .map((categorizedItems, idx) => {
      return categorizedItems[1].length + 1;
    })
    .reduce((a, b) => a * b) - 1
);

}