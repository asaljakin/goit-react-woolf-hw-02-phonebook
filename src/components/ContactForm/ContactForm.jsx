import styles from './ContactForm.module.css';

export const ContactForm = ({ name, number, handleChange }) => {
  return (
    <>
      <label className={styles.label}>Name</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name Surname"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      ></input>

      <label className={styles.label}>Number</label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      ></input>
      <button className={styles.btnAdd} type="submit">
        Add contact
      </button>
    </>
  );
};
