import './index.scss';
import { calculatorForm } from '../utils/constants';
import { initCalculator } from '../components/calculator';
import { toNumber } from '../utils/utils';
import { costInput, paymentInput, termInput, dealSum, monthlyPayment as payment } from '../utils/constants';

initCalculator();

calculatorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    carPrice: toNumber(costInput.value),
    firstPay: toNumber(paymentInput.value),
    term: termInput.value,
    sumOfDeal: toNumber(dealSum.textContent),
    monthlyPayment: toNumber(payment.textContent),
  };

  alert(JSON.stringify(formObj));
});
