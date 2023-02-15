import {
  costRange,
  costInput,
  paymentInput,
  paymentRange,
  paymentPercent,
  costFieldInitialConfig,
  paymentFieldInitialConfig,
  termFieldInitialConfig,
  termRange,
  termInput,
  monthlyPayment,
  dealSum,
} from '../utils/constants';
import { initCostField, onCostRangeInput, onCostTextInput, onCostTextBlur } from '../components/calculator-cost-field';
import {
  initPaymentField,
  onPaymentRangeInput,
  onPaymentTextBlur,
  onPaymentTextInput,
} from '../components/calculator-payment-field';
import { initTermField, onTermRangeInput, onTermTextBlur, onTermTextInput } from '../components/calculator-term-field';
import { numberPrettifier, toNumber } from '../utils/utils';

export function initCalculator() {
  function calcMonthlyPayment(price, payment, term) {
    const sum = price - payment;
    const coe = 0.05 * Math.pow(1 + 0.05, term);
    const goe = Math.pow(1 + 0.05, term) - 1;
    return Math.round(sum * (coe / goe));
  }

  function calcSumOfDeal(payment, term, monthlyPayment) {
    return payment + term * monthlyPayment;
  }

  function setMonthlyPayment() {
    const price = toNumber(costInput.value);
    const payment = toNumber(paymentInput.value);
    const term = +termInput.value;
    const monthlyPaymentValue = calcMonthlyPayment(price, payment, term);

    monthlyPayment.textContent = numberPrettifier(monthlyPaymentValue);
  }

  function setSumOfDeal() {
    const payment = toNumber(paymentInput.value);
    const term = +termInput.value;
    const monthlyPaymentValue = toNumber(monthlyPayment.textContent);
    const sumOfDeal = calcSumOfDeal(payment, term, monthlyPaymentValue);

    dealSum.textContent = numberPrettifier(sumOfDeal);
  }

  initCostField(costFieldInitialConfig);
  initPaymentField(paymentFieldInitialConfig);
  initTermField(termFieldInitialConfig);

  costRange.addEventListener('input', () => {
    onCostRangeInput(costRange, costInput);
    onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });

  costInput.addEventListener('input', () => {
    onCostTextInput(costRange, costInput);
    onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });

  costInput.addEventListener('blur', () => {
    onCostTextBlur(costRange, costInput);
    onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });

  paymentRange.addEventListener('input', () => {
    onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });
  paymentInput.addEventListener('input', () => {
    onPaymentTextInput(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });

  paymentInput.addEventListener('blur', () => {
    onPaymentTextBlur(paymentRange, paymentInput, paymentPercent, costInput);
    setMonthlyPayment();
    setSumOfDeal();
  });

  termRange.addEventListener('input', () => {
    onTermRangeInput(termRange, termInput);
    setMonthlyPayment();
    setSumOfDeal();
  });
  termInput.addEventListener('input', () => {
    onTermTextInput(termRange, termInput);
    setMonthlyPayment();
    setSumOfDeal();
  });
  termInput.addEventListener('blur', () => {
    onTermTextBlur(termRange, termInput);
    setMonthlyPayment();
    setSumOfDeal();
  });
}
