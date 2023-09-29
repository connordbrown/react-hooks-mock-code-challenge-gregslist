import React from "react";
import Search from "./Search";

function Header({listItems, setSearchedList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listItems={listItems} setSearchedList={setSearchedList} />
    </header>
  );
}

export default Header;
