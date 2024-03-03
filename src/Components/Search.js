import axios from "axios";
import React from "react";

const Search = ({ value, setValue, err, setErr, setData, setLoading }) => {
  function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://api.postalpincode.in/pincode/${value}`)
      .then((res) => {
        setLoading(false);
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
        setErr("No data found");
      });
  }

  function showSetErr(e, message) {
    e.preventDefault();
    setErr(message);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          const regex = /([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/;
          value.length === 6 && regex.test(value)
            ? handleForm(e) && setErr("")
            : showSetErr(e, "Enter valid Pincode");
        }}
        className="form"
      >
        <h1>Enter Pincode</h1>
        <input
          id="pincode"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Pincode"
        />
        {err ? (
          <label htmlFor="pincode" className="error">
            {err}
          </label>
        ) : (
          setErr("")
        )}
        <button>Lookup</button>
      </form>
    </>
  );
};

export default Search;
