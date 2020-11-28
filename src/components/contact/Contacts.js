import React, { useContext, useEffect } from 'react';
import ContactContext from './../../context/contact/contactContext';

import ContactItem from "./ContactItem";
//
export default function Contacts() {
  const contactContext = useContext(ContactContext);

  const { contacts, getAllContacts } = contactContext;

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      {contacts && contacts.map((contact) => <ContactItem contact={contact} />)}
    </div>
  );
}
