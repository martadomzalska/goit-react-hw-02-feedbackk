import PropTypes, { number } from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="No feedback given"></Notification>
      ) : (
        <div className={css.statistics_table}>
          <p className={css.text}>
            Good: <span className={css.numbers}>{good}</span>
          </p>
          <p className={css.text}>
            Neutral: <span className={css.numbers}>{neutral}</span>
          </p>
          <p className={css.text}>
            Bad: <span className={css.numbers}>{bad}</span>
          </p>
          <p className={css.text}>
            Total: <span className={css.numbers}>{total}</span>
          </p>
          <p className={css.text}>
            Positive percentage:
            <span className={css.numbers}>{positivePercentage}%</span>
          </p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: number,
};
