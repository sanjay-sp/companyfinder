import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <form className="home-form">
        <input className="home-search" placeholder="Enter Company Name.." />
        <button type="submit" className="home-submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
