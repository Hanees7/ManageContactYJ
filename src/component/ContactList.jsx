import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const ContactList = ({ listt, removeCart }) => {
  console.log("From contactList", listt);
  console.log("uudi4", removeCart);
  

  return (
    <>
      <div>
        <h2>Lists - </h2>
      </div>
      <div>
        {listt.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <span>{idx + 1}.</span>
              <span>{item?.data?.name}</span>

              <span>{item?.data?.email}</span>
              <span style={{ cursor: "pointer" }}
              onClick={()=>removeCart(item.id)}
              >
                <DeleteOutlineIcon />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
