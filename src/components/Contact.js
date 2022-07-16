import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
