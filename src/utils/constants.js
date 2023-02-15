export const calculatorForm = document.querySelector('.calculator__form');

export const submitBtn = document.querySelector('.calculator__submit-btn');

export const costInput = calculatorForm.querySelector('.form__input_cost');
export const costRange = calculatorForm.querySelector('.form__range_cost');

export const paymentInput = calculatorForm.querySelector('.form__input_payment');
export const paymentRange = calculatorForm.querySelector('.form__range_payment');
export const paymentPercent = calculatorForm.querySelector('.form__payment-percent');

export const termInput = calculatorForm.querySelector('.form__input_term');
export const termRange = calculatorForm.querySelector('.form__range_term');

//  Initial fields configs
export const costFieldInitialConfig = {
  inputElm: costInput,
  rangeElm: costRange,
};

export const paymentFieldInitialConfig = {
  rangeElm: paymentRange,
  inputElm: paymentInput,
  percentElm: paymentPercent,
  priceValue: 3330000,
};

export const termFieldInitialConfig = {
  inputElm: termInput,
  rangeElm: termRange,
  initialMonthValue: 60,
};
