import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.headline}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
