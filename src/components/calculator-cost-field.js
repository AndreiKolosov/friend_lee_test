import { setRangeBcg, numberPrettifier, toNumber } from '../utils/utils';

const rangeDiapason = { min: 15, max: 100 };

export function initCostField({ rangeElm, inputElm }) {
  inputElm.value = numberPrettifier(33.3 * 1e5);
  rangeElm.value = 33.3;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onCostRangeInput(rangeElm, inputElm) {
  if (rangeElm.value < 15) {
    rangeElm.value = 15;
  }
  inputElm.value = numberPrettifier(rangeElm.value * 1e5);
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onCostTextInput(rangeElm, inputElm) {
  const inputValue = toNumber(inputElm.value);
  const preparedInputValue = numberPrettifier(+inputValue);

  inputElm.value = preparedInputValue;
  rangeElm.value = inputValue / 1e5;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onCostTextBlur(rangeElm, inputElm) {
  const inputValue = toNumber(inputElm.value);

  if (inputValue < rangeDiapason.min * 1e5) {
    inputElm.value = numberPrettifier(rangeDiapason.min * 1e5);
    rangeElm.value = rangeDiapason.min;
    setRangeBcg(rangeElm, rangeDiapason);
  }

  if (inputValue > rangeDiapason.max * 1e5) {
    inputElm.value = numberPrettifier(rangeDiapason.max * 1e5);
    rangeElm.value = rangeDiapason.max;
    setRangeBcg(rangeElm, rangeDiapason);
  }
}
