import { setRangeBcg } from '../utils/utils';

const rangeDiapason = { min: 6, max: 120 };

export function initTermField({ rangeElm, inputElm, initialMonthValue }) {
  rangeElm.value = initialMonthValue;
  inputElm.value = initialMonthValue;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onTermRangeInput(rangeElm, inputElm) {
  inputElm.value = rangeElm.value;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onTermTextInput(rangeElm, inputElm) {
  rangeElm.value = inputElm.value;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onTermTextBlur(rangeElm, inputElm) {
  const inputValue = +inputElm.value;

  if (inputValue < rangeDiapason.min) {
    inputElm.value = rangeDiapason.min;
    rangeElm.value = rangeDiapason.min;
    setRangeBcg(rangeElm, rangeDiapason);
  }

  if (+inputValue > rangeDiapason.max) {
    inputElm.value = rangeDiapason.max;
    rangeElm.value = rangeDiapason.max;
    setRangeBcg(rangeElm, rangeDiapason);
  }
}
