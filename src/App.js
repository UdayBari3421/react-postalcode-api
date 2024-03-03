import React, { useState } from "react";
import Search from "./Components/Search";
import DisplayList from "./Components/DisplayList";
import { Button } from "antd";

const App = () => {
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState("");
  const [err, setErr] = useState("");

  return (
    <div className="app" style={{ padding: loading ? "0px" : "30px" }}>
      {!loading ? (
        (data && <DisplayList value={value} data={data} />) || (
          <Search
            value={value}
            setValue={setValue}
            err={err}
            setErr={setErr}
            setData={setData}
            setLoading={setLoading}
          />
        )
      ) : (
        <div className="loder">
          <Button disabled className="loading" loading={true}>
            Loading
          </Button>
        </div>
      )}
    </div>
  );
};

export default App;
