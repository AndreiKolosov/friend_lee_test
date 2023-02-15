import './index.scss';
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
} from '../utils/constants';
import { initCostField, onCostRangeInput, onCostTextInput, onCostTextBlur } from '../components/calculator-cost-field';
import {
  initPaymentField,
  onPaymentRangeInput,
  onPaymentTextBlur,
  onPaymentTextInput,
} from '../components/calculator-payment-field';
import { initTermField, onTermRangeInput, onTermTextBlur, onTermTextInput } from '../components/calculator-term-field';

initCostField(costFieldInitialConfig);
initPaymentField(paymentFieldInitialConfig);
initTermField(termFieldInitialConfig);

costRange.addEventListener('input', () => {
  onCostRangeInput(costRange, costInput);
  onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
});
costInput.addEventListener('input', () => {
  onCostTextInput(costRange, costInput);
  onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
});
costInput.addEventListener('blur', () => {
  onCostTextBlur(costRange, costInput);
  onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput);
});

paymentRange.addEventListener('input', () =>
  onPaymentRangeInput(paymentRange, paymentInput, paymentPercent, costInput),
);
paymentInput.addEventListener('input', () => onPaymentTextInput(paymentRange, paymentInput, paymentPercent, costInput));
paymentInput.addEventListener('blur', () => onPaymentTextBlur(paymentRange, paymentInput, paymentPercent, costInput));

termRange.addEventListener('input', () => onTermRangeInput(termRange, termInput));
termInput.addEventListener('input', () => onTermTextInput(termRange, termInput));
termInput.addEventListener('blur', () => onTermTextBlur(termRange, termInput));
