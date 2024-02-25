import React, { useState } from "react";
import { validateForm } from "../shared/formValidator";

const Register = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  function handleChangePhoneNumber(value) {
    //console.log(value);
    setPhoneNumber(value);
  }

  function handleChangeUsername(value) {
    //console.log(value);
    setUsername(value);
  }
  // triggers when onChange event fires
  function handleChangePassword(value) {
    //console.log(value);
    setPassword(value); //update state
  }

  function handleChangeEmail(value) {
    //console.log(value);
    setEmail(value); //update state
  }
  function handleSubmit(event) {
    event.preventDefault();

    const myUser = {
      username: username,
      password: password,
      email: email,
      phonenumber: phonenumber,
    };
    //console.log(myUser);
    const currentErrors = validateForm(myUser);
    console.log(currentErrors);
    setErrors(currentErrors);
  }
  function checkErrors(name) {
    if (errors.length > 0) {
      for (let index = 0; index < errors.length; index++) {
        if (errors[index][name] !== undefined) {
          return index;
        }
      }
    }
    return -1;
  }

  return (
    <div id="main-content">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Email</label>
          <input
            required
            type="text"
            value={email}
            onChange={(event) => handleChangeEmail(event.target.value)}
          />
          {checkErrors("email") >= 0 && (
            <span className="error-message">
              {" "}
              {errors[checkErrors("email")].email}
            </span>
          )}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            value={phonenumber}
            onChange={(event) => handleChangePhoneNumber(event.target.value)}
          />
          {checkErrors("phonenumber") >= 0 && (
            <span className="error-message">
              {" "}
              {errors[checkErrors("phonenumber")].phonenumber}
            </span>
          )}
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => handleChangeUsername(event.target.value)}
          />
          {checkErrors("username") >= 0 && (
            <span className="error-message">
              {" "}
              {errors[checkErrors("username")].username}
            </span>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => handleChangePassword(event.target.value)}
          />
          {checkErrors("password") >= 0 && (
            <span className="error-message">
              {" "}
              {errors[checkErrors("password")].password}
            </span>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
