import { ContactItem } from 'components';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={styles.ul}>
      <ContactItem contacts={contacts} handleDelete={handleDelete} />
    </ul>
  );
};
