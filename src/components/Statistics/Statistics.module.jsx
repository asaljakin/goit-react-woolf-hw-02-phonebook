import styles from './Statistics.module.scss';

export const StatisticList = ({ children }) => {
  return <ul className={styles.statisticList}>{children}</ul>;
};

export const Good = ({ children }) => {
  return <span className={styles.good}>{children}</span>;
};

export const Neutral = ({ children }) => {
  return <span className={styles.neutral}>{children}</span>;
};

export const Bad = ({ children }) => {
  return <span className={styles.bad}>{children}</span>;
};

export const Total = ({ children }) => {
  return <span className={styles.total}>{children}</span>;
};

export const Positive = ({ children }) => {
  return <span className={styles.positive}>{children}</span>;
};
