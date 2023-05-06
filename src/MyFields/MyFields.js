import React, { useState } from "react";
import "./MyFields.css";
import Field from "./fields/Field";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logOutUser } from "../features/userSlice";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import AddField from "./fields/AddField";

function MyFields() {
  const navigate = useNavigate();

  const handleToolsButtonClick = () => {
    navigate("/tools");
  };

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logOutUser());
    signOut(auth);
  };

  const [fields, setFields] = useState([
    {
      name: "Warszawa",
      image: "https://uek.krakow.pl/static/images/authorities-bg.png",
    },
    {
      name: "Ohio",
      image:
        "https://www.powerblogs.com/wp-content/uploads/2020/01/images2561-5e290e46c0c93-1024x683.jpg",
    },
    {
      name: "Zakopane",
      image: "https://assets.vg247.com/current/2017/07/Destiny-2-Farm.jpg",
    },
  ]);

  return (
    <div className="myfields">
      <div className="myfields__top">
        <div className="myfields__topUserName">Logged in as: {user.email}</div>
        <div className="myfields__topUserIcon">
          <AccountCircleIcon />
        </div>
        <div className="myfields__topLogoutButton">
          <button onClick={handelLogout}>Log out</button>
        </div>
      </div>
      <div className="myfields__fieldList">
        {fields.map((field) => (
          <Field name={field.name} image={field.image} />
        ))}
        <AddField />
      </div>
      <div className="myfields__bottom">
        <div className="myfields__bottomToolsButton">
          <button onClick={handleToolsButtonClick}>Go to My Tools</button>
        </div>
      </div>
    </div>
  );
}

export default MyFields;
