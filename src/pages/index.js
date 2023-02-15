import './index.scss';
import { costRange, costInput } from '../utils/constants';
import {
  initCostField,
  onCostRangeInput,
  onCostInputInput,
  onCostInputBlur,
} from '../components/calculator-cost-field';

initCostField(costRange, costInput);

costRange.addEventListener('input', () => onCostRangeInput(costRange, costInput));
costInput.addEventListener('input', () => onCostInputInput(costRange, costInput));
costInput.addEventListener('blur', () => onCostInputBlur(costRange, costInput));
