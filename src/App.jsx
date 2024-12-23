import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";
import uuid4 from "uuid4";

const App = () => {
  const [list, setList] = useState(() => (
    JSON.parse(localStorage.getItem("list")) || []
  ));
  const addcontact = (data) => {
    console.log("FROM APP.JSX", data);
    setList([...list, { id: uuid4(), data }]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const removeCart = (id) => {
    const filterList = list.filter((val) => val.id !== id);
    setList(filterList);
  };
  return (
    <>
      <div>
        <Header />
        <AddContact contactData={addcontact} />
        <ContactList listt={list} removeCart={removeCart} />
      </div>
    </>
  );
};

export default App;
