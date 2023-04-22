import React from "react";

import { useNavigate  } from "react-router-dom";

function About() {
  const history = useNavigate ();

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor dolor non quam laoreet, ac malesuada justo blandit. Nulla convallis felis eget nulla dictum bibendum. Vestibulum lobortis scelerisque diam, vitae ultricies leo blandit eu. Maecenas gravida posuere sapien at egestas. Sed porta metus id ante bibendum, in ultrices nibh rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce fringilla urna id tellus convallis malesuada. Praesent malesuada turpis eget ante maximus, non dictum nibh consequat. Sed iaculis euismod quam, a lacinia justo elementum at. Duis semper, libero in hendrerit interdum, purus est sagittis magna, et maximus dolor sapien eget mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur euismod quam mi, in lacinia justo pretium vel.</p>
      <button onClick={() => history(-1)}>Go Back</button>
    </div>
  );
}

export default About;
