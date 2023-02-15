import { setRangeBcg, numberPrettifier } from '../utils/utils';

export function initCostField(rangeElm, inputElm) {
  inputElm.value = numberPrettifier(33.3 * 1e5);
  rangeElm.value = 33.3;
  setRangeBcg(rangeElm);
}

export function onCostRangeInput(rangeElm, inputElm) {
  if (rangeElm.value < 15) {
    rangeElm.value = 15;
  }
  inputElm.value = numberPrettifier(rangeElm.value * 1e5);
  setRangeBcg(rangeElm);
}

export function onCostInputInput(rangeElm, inputElm) {
  const inputValue = +inputElm.value.replace(/\D/g, '');
  const preparedInputValue = numberPrettifier(+inputValue);

  inputElm.value = preparedInputValue;
  rangeElm.value = inputValue / 1e5;
  setRangeBcg(rangeElm);
}

export function onCostInputBlur(rangeElm, inputElm) {
  const inputValue = +inputElm.value.replace(/\s/g, '');

  if (inputValue < 15 * 1e5) {
    inputElm.value = numberPrettifier(15 * 1e5);
    rangeElm.value = 15;
    setRangeBcg(rangeElm);
  }

  if (inputValue > 100 * 1e5) {
    inputElm.value = numberPrettifier(100 * 1e5);
    rangeElm.value = 100;
    setRangeBcg(rangeElm);
  }
}
