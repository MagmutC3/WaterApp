import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const history = useNavigate();

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to SatAgro, a cutting-edge technology company dedicated to
        providing farmers with the tools they need to monitor and optimize their
        crop yields. Our mission is to revolutionize the agricultural industry
        by leveraging the latest advances in satellite imagery and data
        analytics to help farmers increase their productivity, reduce their
        costs, and minimize their environmental impact. At SatAgro, we believe
        that farmers are the backbone of our society, and we are committed to
        supporting their efforts with innovative and reliable solutions. Our
        team of experienced engineers, data scientists, and agriculture experts
        work tirelessly to develop and refine our products, ensuring that they
        meet the highest standards of performance and quality. Whether you're a
        small-scale farmer or a large commercial operation, SatAgro has the
        tools you need to succeed. From real-time field monitoring to precision
        irrigation management, our products are designed to help you make
        data-driven decisions and optimize your crop yields. We are proud to be
        at the forefront of the agricultural technology revolution, and we look
        forward to partnering with you to help you achieve your goals.
      </p>
      <div className="about__button">
        <button onClick={() => history(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default About;
