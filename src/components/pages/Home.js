import React from "react";
import ContacFilter from "../contact/ContactFilter";
import ContactForm from "./../contact/ContactForm";
import Contacts from "./../contact/Contacts";
export default function home() {
  return (
    <div class="container mt-5">
      <div class="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          <ContacFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
}
