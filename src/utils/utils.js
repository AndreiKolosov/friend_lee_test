export function numberPrettifier(num) {
  return num.toLocaleString('ru');
}

export function setRangeBcg(rangeElm) {
  const value = rangeElm.value;
  rangeElm.style.background = `linear-gradient(to right, #FF9514 0%, #FF9514 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
}
