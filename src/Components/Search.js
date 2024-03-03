import React from "react";

const Search = ({ value, setValue }) => {
  return (
    <form className="form">
      <h1>Enter Pincode</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
