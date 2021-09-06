import React, { useState } from "react";

const SearchData = ({ filterItem, menuList }) => {
  const [data, setData] = useState("");
  return (
    <>
      <br />
      <div className="container">
        <input
          type="text"
          className="btn-group__item input1"
          placeholder="Search Course"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
        <button
          className="btn-group__item btn1"
          onClick={() => filterItem(data, menuList)}
        >
          Search
        </button>
      </div>
      <br /> <br /> <br />
    </>
  );
};

export default SearchData;
