import React from "react";
import { useState } from "react";

const Form = () => {
  const [yes, setYes] = useState(false);

  function noFunction() {
    setYes(false);
  }
  function yesFunction() {
    setYes(true);
  }
  function onSubmit(event) {
    event.preventDefault();

    console.log(yes);
  }

  return (
    <div id="main-content">
      <h2>This is the Poll</h2>
      <form onSubmit={onSubmit} className="form-container">
        <label>Did you like this website?</label>
        <label>Yes</label>
        <input onClick={yesFunction} type="radio" name="Poll" />
        <label>No</label>
        <input onClick={noFunction} type="radio" name="Poll" />

        <button> Submit </button>
      </form>
    </div>
  );
};

export default Form;
