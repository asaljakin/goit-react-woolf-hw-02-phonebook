import styles from './ContactItem.module.css';

export const ContactItem = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <p>{name + ' ' + number}</p>
            <button
              className={styles.btnItem}
              type="button"
              name={id}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};
