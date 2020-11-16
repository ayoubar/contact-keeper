import React from 'react';

export default function Login() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <form class="text-center border border-light p-5 w-50" action="#!">
        <p class="h4 mb-4">Account Login</p>
        <label> Email </label>
        <input
          type="email"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
        />

        <label> Password </label>
        <input
          type="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
          placeholder="Password"
        />
      </form>
    </div>
  );
}
