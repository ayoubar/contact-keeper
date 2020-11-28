import React, { useContext, useState } from 'react';
import ContactContext from './../../context/contact/contactContext';



export default function ContactForm() {

  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;

  const [contact, setContacts] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { name, email, phone } = contact;

  const handleChange = (e) => {
    setContacts({ ...contact, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === "" || email === "" || phone === "") {
      alert('please fill all fields')
    } else {
      addContact(contact)
  }

  }
  return (
    <form class="text-center border border-light p-5" 
      onSubmit={handleSubmit}
    >
      <p class="h4 mb-4">Add Contact</p>

      <input
        type="text"
        name="name"
        id="defaultLoginFormEmail"
        class="form-control mb-4"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
      />

      <button class="btn btn-info btn-block my-4" type="submit">
        Add contact
      </button>
    </form>
  );
}
