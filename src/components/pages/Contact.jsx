import Navbar from "../Navbar";
import React, { useState, useEffect } from "react";
import "./Contact.css";
import { setData } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill all the fields.");
      setLoader(false);
      return;
    }
    if (ValidateEmail(email)) {
      setData({
        name: name,
        email: email,
        message: message,
      })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      setLoader(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-parent">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="contact-me">Contact Me</h1>

          {/* <label>Name</label> */}
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <label>Email</label> */}
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* <label>Message</label> */}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
