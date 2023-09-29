import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({setListItems, searchedList}) {

  function handleDelete(deletedItemID) {
    fetch(`http://localhost:6001/listings/${deletedItemID}`, {
      method: "DELETE"
    })
    .then(() => {
      const listingsAfterDelete = searchedList.filter(item => {
        return item.id !== deletedItemID;
      })
      setListItems(listingsAfterDelete);
    })
  }

  const listingsToDisplay = searchedList.map(item => {
    return <ListingCard key={item.id}
                        id={item.id}
                        description={item.description}
                        image={item.image}
                        location={item.location}
                        onDeleteClick={handleDelete}
           />
  })

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
