import { setRangeBcg, numberPrettifier, toNumber } from '../utils/utils';

const minPercent = 10;
const maxPercent = 60;
const rangeDiapason = { min: minPercent, max: maxPercent };

export function initPaymentField({ rangeElm, inputElm, percentElm, priceValue }) {
  const initialPercent = 13;
  const calculatedInputValue = (priceValue / 100) * initialPercent;
  inputElm.value = numberPrettifier(calculatedInputValue);
  rangeElm.value = initialPercent;
  percentElm.textContent = `${rangeElm.value}%`;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onPaymentRangeInput(rangeElm, inputElm, percentElm, priceElm) {
  const price = toNumber(priceElm.value);

  if (rangeElm.value < minPercent) {
    rangeElm.value = minPercent;
    percentElm.textContent = `${minPercent}%`;
  }
  if (rangeElm.value > maxPercent) {
    rangeElm.value = maxPercent;
    percentElm.textContent = `${maxPercent}%`;
  }
  percentElm.textContent = `${rangeElm.value}%`;

  inputElm.value = numberPrettifier((price / 100) * percentElm.textContent.replace('%', ''));
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onPaymentTextInput(rangeElm, inputElm, percentElm, priceElm) {
  const price = toNumber(priceElm.value);
  const inputValue = toNumber(inputElm.value);
  const preparedInputValue = numberPrettifier(+inputValue);
  const percent = (inputValue / price) * 100;

  inputElm.value = preparedInputValue;
  percentElm.textContent = `${percent.toFixed(1)}%`;
  rangeElm.value = percent;
  setRangeBcg(rangeElm, rangeDiapason);
}

export function onPaymentTextBlur(rangeElm, inputElm, percentElm, priceElm) {
  const price = toNumber(priceElm.value);
  const inputValue = toNumber(inputElm.value);
  const maxInputValue = (price / 100) * maxPercent;
  const minInputValue = (price / 100) * minPercent;

  if (inputValue < minInputValue) {
    inputElm.value = numberPrettifier(minInputValue);
    percentElm.textContent = `${minPercent}%`;
    rangeElm.value = rangeDiapason.min;
    setRangeBcg(rangeElm, rangeDiapason);
  }

  if (inputValue > maxInputValue) {
    inputElm.value = numberPrettifier(maxInputValue);
    percentElm.textContent = `${maxPercent}%`;
    rangeElm.value = rangeDiapason.max;
    setRangeBcg(rangeElm, rangeDiapason);
  }
}
