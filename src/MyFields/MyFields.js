import React, { useState } from "react";
import "./MyFields.css";
import Field from "./fields/Field";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function MyFields() {

  const [fields, setFields] = useState([
    {
      name: "field1",
      image: "https://uek.krakow.pl/static/images/authorities-bg.png",
    },
    {
      name: "Rakowicka16",
      image:
        "https://i1.rgstatic.net/ii/profile.image/711433167839232-1546630293092_Q512/Janusz-Stal.jpg",
    },
    {
      name: "Kocham Antychrysta",
      image: "https://assets.vg247.com/current/2017/07/Destiny-2-Farm.jpg",
    },
  ]);

  return (
    <div className="myfields">
      <div className="myfields__top">
        <div className="myfields__topUserName">
          This is supposed to be the user name
        </div>
        <div className="myfields__topUserIcon">
          <AccountCircleIcon />
        </div>
      </div>
      <div className="myfields__fieldList">
        {fields.map((field) => (
          <Field
            name={field.name}
            image={field.image}
          />
        ))}
      </div>
      <div className="myfields__bottom">
        <div className="myfields__bottomToolsButton">
          This is supposed to be a button
        </div>
      </div>
    </div>
  );
}

export default MyFields;
