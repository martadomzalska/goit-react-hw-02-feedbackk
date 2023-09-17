import PropTypes from 'prop-types';
import css from './Feedbackoptions.module.css';

export const FeedbackOptions = ({ options, onLeaveMessage }) => (
  <div className={css.button_nav}>
    {options.map(option => {
      return (
        <button
          className={css.button}
          key={option}
          onClick={onLeaveMessage}
          name={option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1, option.length)}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveMessage: PropTypes.func,
};
