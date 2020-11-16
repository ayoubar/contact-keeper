import React, { useState } from 'react';
import axios from 'axios';
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || password1 === '') {
      alert('Fill all fields');
    } else {
      if (password !== password1) {
        alert('les mots de pass sont pas identiques');
      } else {
        let config = {
          headers: {
            'Content-Type': 'application/json',
            // 'x-auth-token':localStorage.getItem('token')
          },
        };
        const data = {
          name: name,
          email: email,
          password: password,
        };
        console.log(data);
        const res = await axios.post(`/api/users`, data, config);
        const d = await res.data;
        console.log(d);
      }
    }
  };
  return (
    <div className="container">
      <form
        class="text-center border border-light p-5"
        action="#!"
        onSubmit={handleSubmit}
      >
        <p class="h4 mb-4">Account Register</p>

        <input
          type="text"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="email"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
        />

        <input
          type="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <input
          type="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
          placeholder="Confirm password"
          value={password1}
          onChange={onChangePassword1}
        />

        <button class="btn btn-info btn-block my-4" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
