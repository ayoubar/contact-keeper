import React from "react";

export default function ContactForm() {
  return (
    <form class="text-center border border-light p-5" action="#!">
      <p class="h4 mb-4">Add Contact</p>

      <input
        type="text"
        id="defaultLoginFormEmail"
        class="form-control mb-4"
        placeholder="Name"
      />

      <input
        type="email"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Email"
      />
      <input
        type="tel"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Phone"
      />

      <button class="btn btn-info btn-block my-4" type="submit">
        Add contact
      </button>
    </form>
  );
}
