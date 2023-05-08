import React, { useState } from "react";
import "./Recovery.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./../config/firebase";

function Recovery() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.sendPasswordResetEmail(email); // send password reset email to the user's email address
      history(-1); // nav back to previous page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="recovery">
      <div className="recovery__form">
        <h1>Recover your password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
        <div className="recovery__returnButton">
          <button onClick={() => history(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default Recovery;

// import React from "react";
// import "./Recovery.css";
// import { useNavigate } from "react-router-dom";

// // return form with email input and submit button
// function Recovery() {
//   const history = useNavigate();
//   return (
//     <div className="recovery">
//       <div className="recovery__form">
//         <h1>Recover your password</h1>
//         <form>
//           <input type="email" placeholder="Email"></input>
//           <button type="submit">Submit</button>
//         </form>
//         <div className="recovery__returnButton">
//           <button onClick={() => history(-1)}>Go Back</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Recovery;
