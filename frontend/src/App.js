import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);
  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contacts", { name, phone });
      setContacts([...contacts, { name, phone }]); // Update local state
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  return (
    <div className="app">
      <div className="head">
        <strong>
          <p>Personal Phone Directory</p>
        </strong>
      </div>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <hr />
      <div className="contact-list">
        <div className="head2">
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        {contacts.map((contact, index) => (
          <div key={index} className="contact">
            <p>
              Name: {contact.name}
              <br />
              Contact: {contact.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
