import './index.scss';
import {
  costRange,
  costInput,
  paymentInput,
  paymentRange,
  paymentPercent,
  costFieldInitialConfig,
  paymentFieldInitialConfig,
} from '../utils/constants';
import { initCostField, onCostRangeInput, onCostTextInput, onCostTextBlur } from '../components/calculator-cost-field';
import {
  initPaymentField,
  onPaymentRangeInput,
  onPaymentTextBlur,
  onPaymentTextInput,
} from '../components/calculator-payment-field';

initCostField(costFieldInitialConfig);
initPaymentField(paymentFieldInitialConfig);

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
