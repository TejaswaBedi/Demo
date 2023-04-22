import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform form submission logic here using name, email, and message state values
    console.log(
      `Submitting contact form with name: ${name}, email: ${email}, and message: ${message}`
    );
    // reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="Home">
      <Navbar />
      <div className="contact">
        <div className="details">
          <h1>Contact Us</h1>
          <p>
            <span>Address :</span>ABES Engineering College
            <br />
            19th KM Stone, NH-09, Ghaziabad,
            <br />
            Uttar Pradesh 201009
            <br />
          </p>
          <p>
            <br />
            <span>Phone Number :</span>XXXXXXXXXX
          </p>
          <br />
          <p>
            <span>Email-Adresses :</span>XXXXXXXXXX@gmail.com
          </p>
        </div>

        <div className="message">
          <h2>Reach Out to us !</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
