import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listItems, setListItems] = useState([]);
  const [searchedList, setSearchedList] = useState(listItems);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListItems(data))
  }, [])

  useEffect(() => {
    setSearchedList(listItems);
  }, [listItems])

  return (
    <div className="app">
      <Header listItems={listItems} setSearchedList={setSearchedList} />
      <ListingsContainer setListItems={setListItems} searchedList={searchedList}/>
    </div>
  );
}

export default App;
