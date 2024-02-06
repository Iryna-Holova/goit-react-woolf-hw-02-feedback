import {
  PiSmileyLight,
  PiSmileyMehLight,
  PiSmileySadLight,
} from 'react-icons/pi';
import css from './FeedbackOptions.module.css';

const emoji = {
  good: <PiSmileyLight />,
  neutral: <PiSmileyMehLight />,
  bad: <PiSmileySadLight />,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.options_list}>
    {options.map((option, i) => (
      <li key={i}>
        <button
          className={css.option}
          type="button"
          data-option={option}
          onClick={onLeaveFeedback}
        >
          {option}
          {emoji[option]}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
