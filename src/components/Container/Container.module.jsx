import styles from './Container.module.scss';

export const Container = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
