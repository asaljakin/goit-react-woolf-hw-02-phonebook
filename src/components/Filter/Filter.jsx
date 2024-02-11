export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        placeholder="Search name"
        title="Enter a name to search"
        value={filter}
        onChange={handleChange}
      ></input>
    </>
  );
};
