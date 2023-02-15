export function numberPrettifier(num) {
  return num.toLocaleString('ru');
}

export function toNumber(str) {
  return +str.replace(/[\s\D]/g, '');
}

export function setRangeBcg(rangeElm, diapason) {
  const { min, max } = diapason;
  const divider = max - min;
  const minValue = (min * 100) / divider;
  const value = (rangeElm.value * 100) / divider - minValue;

  rangeElm.style.background = `linear-gradient(to right, #FF9514 0%, #FF9514 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
}
