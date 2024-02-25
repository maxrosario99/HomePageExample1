import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");

  // function addToCount () {
  //     setCount(count + 1)
  // }

  function handleChangeUsername(value) {
    setUsername(value);
  }

  function handleChangePassword(value) {
    setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");
    console.log(username);
    console.log(password);
    const myUser = {
      username: username,
      password: password,
    };
    console.log(myUser);
  }

  return (
    <div id="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          required
          onChange={(event) => handleChangeUsername(event.target.value)}
          type="text"
        />

        <label>Password</label>
        <input
          required
          onChange={(event) => handleChangePassword(event.target.value)}
          value={password}
          type="password"
        />
        <button>Submit</button>
      </form>

      {/* <h1>Current count: {count}</h1>
    <button onClick={addToCount}>Counter</button> */}
    </div>
  );
};

export default Login;
