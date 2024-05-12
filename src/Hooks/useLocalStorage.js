import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItems);

  const updateItems = (updatedItems) => {
    localStorage.setItem(itemName, JSON.stringify(updatedItems));
    setItem(updatedItems);
  };

  return [item, updateItems];
}

export { useLocalStorage };
