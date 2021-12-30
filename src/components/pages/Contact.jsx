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
      <div className="container">
        <div className="contact-parent">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="contact-me">Contact Me</h1>

            {/* <label>Name</label> */}
            <div className="row d-flex flex " style={{ width: "90%", margin: "1rem" }}>
              <input
                className=" myinput col-6 backgroud2 "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

              {/* <label>Email</label> */}
              <input
                className=" myinput col-6 backgroud2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* <label>Message</label> */}
            <textarea  style={{ width: "90%" }}
              className="backgroud2"
              placeholder="Message"
              rows={20}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              className=" btn btn-dark m-2 "
              type="submit"
              style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)", fontSize: '1.5rem' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
