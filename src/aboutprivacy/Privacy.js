import React from "react";
import "./Privacy.css";
import { useNavigate } from "react-router-dom";

function Privacy() {
  const history = useNavigate();

  return (
    <div className="privacy">
      <h1>Privacy Policy</h1>
      <p>
        At our company, we take your privacy seriously. We understand that the
        data you provide to us is sensitive and we want you to feel confident
        that it is safe in our hands. This Privacy Policy outlines how we
        collect, use, and protect your personal information. Information We
        Collect We collect personal information when you sign up for an account
        or use our services. This may include your name, address, email address,
        and phone number. We may also collect information about your farm, such
        as field locations and crop types, in order to provide you with
        customized recommendations and analysis. How We Use Your Information We
        use your information to provide and improve our services to you. This
        includes monitoring and analyzing crop and field data to provide you
        with recommendations for irrigation and other farming practices. We may
        also use your information to communicate with you about updates to our
        services, promotions, or other relevant information. Data Security We
        take the security of your data seriously and have implemented
        appropriate measures to protect it from unauthorized access or
        disclosure. We use industry-standard encryption methods and regularly
        monitor our systems for any vulnerabilities. Sharing Your Information We
        do not share your personal information with third parties except as
        required by law or to provide our services to you. We may share
        anonymized data with third-party researchers or partners in order to
        improve our services or conduct research. Your Rights You have the right
        to access, correct, and delete your personal information at any time.
        You may also choose to opt-out of receiving marketing communications
        from us. Contact Us If you have any questions or concerns about our
        privacy policy or the data we collect, please contact us at [insert
        contact information].
      </p>
      <div className="privacy__button">
        <button onClick={() => history(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default Privacy;
