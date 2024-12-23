import React, { useState } from "react";

const AddContact = ({ contactData }) => {
  const [contact, setContact] = useState({
    name: "",
    email: ""
  });
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContact({ ...contact, name: e.target.value });
    } else {
      setContact({ ...contact, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (contact.name === "" || contact.email === "") {
      alert("Please fill all fields");
      return;
    }
    console.log("Saving", contact);
    contactData(contact)
    setContact({name:"", email:"",})
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "salmon",
          width: "100px",
          color: "whitesmoke",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        Contacts
      </div>
      <br />
      <div>
        <form>
          <div>
            <label>Name : </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter ur Name"
              name="name"
              value={contact.name}
            />
          </div>
          <br />
          <div>
            <label>Email : </label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Enter ur Email"
              name="email"
              value={contact.email}
            />
          </div>
        </form>
        <br />
        <div>
          <button
            style={{
              backgroundColor: "green",
              width: "94px",
              color: "whitesmoke",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              borderStyle: "none"
            }}
            onClick={handleAdd}
          >
            Add Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default AddContact;
