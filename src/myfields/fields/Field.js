import React from "react";
import "./Field.css";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Link } from "react-router-dom";

function Field({ name, image }) {
  return (
    <div className="myfields__field">
      <div className="myfields__fieldDetails">
        <div className="myfields__fieldDetailsName">
          <Link
            to={`/fielddesc/${name}`}
            className="myfields__fieldDetailsNameLink"
          >
            {name}
          </Link>
        </div>
        <div className="myfields__fieldDetailsStatusIcon">
          <HealthAndSafetyIcon />
        </div>
      </div>
      <div className="myfields__fieldImage">
        <img src={image} alt="image didn't load (yet?)"></img>
      </div>
    </div>
  );
}
export default Field;
