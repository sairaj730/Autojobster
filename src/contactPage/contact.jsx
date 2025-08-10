import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    alert(`Username: ${username}\nQuery: ${query}\nDescription: ${description}`);
    setUsername("");
    setQuery("");
    setDescription("");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Raise a Query"
          required
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <textarea
          placeholder="Description / Summary"
          rows={5}
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
