import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:2019meb1256@iitrpr.ac.in">
        <Button>Contact: 2019meb1256@iitrpr.ac.in</Button>
      </a>
    </div>
  );
};

export default Contact;
