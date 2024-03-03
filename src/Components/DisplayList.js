import React, { useEffect, useState } from "react";

const DisplayList = ({ value, data }) => {
  let [query, setQuery] = useState("");

  useEffect(() => {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      let branchName = card
        .querySelector("span:first-child p:nth-child(2)")
        .textContent.toLowerCase()
        .includes(query.toLowerCase());
      let branchType = card
        .querySelector("span:nth-child(2) p:nth-child(2)")
        .textContent.toLowerCase()
        .includes(query.toLowerCase());
      let deliveryStatus = card
        .querySelector("span:nth-child(3) p:nth-child(2)")
        .textContent.toLowerCase()
        .includes(query.toLowerCase());
      let district = card
        .querySelector("span:nth-child(4) p:nth-child(2)")
        .textContent.toLowerCase()
        .includes(query.toLowerCase());
      let state = card
        .querySelector("span:last-child p:nth-child(2)")
        .textContent.toLowerCase()
        .includes(query.toLowerCase());

      if (branchName || branchType || deliveryStatus || district || state) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }, [query]);

  return (
    <div className="display-container">
      <div className="box">
        <h3>Pincode : {value}</h3>
        <h3>Message : {data.Message}</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="form-row">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search Here..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-container">
        {data.PostOffice &&
          data.PostOffice.map((branch, ind) => (
            <div key={ind} className="card">
              <span>
                <p>Branch Name: </p>
                <p>{branch.Name}</p>
              </span>
              <span>
                <p>Branch Type: </p>
                <p>{branch.BranchType}</p>
              </span>
              <span>
                <p>Delivery Status: </p>
                <p>{branch.DeliveryStatus}</p>
              </span>
              <span>
                <p>District: </p>
                <p>{branch.District}</p>
              </span>
              <span>
                <p>State: </p>
                <p>{branch.State}</p>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayList;
