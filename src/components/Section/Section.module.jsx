import styles from './Section.module.scss';

export const Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};
