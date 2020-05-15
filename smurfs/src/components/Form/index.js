import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { form, smurfs } from "../../store/actions";
const { updateInput, clearForm } = form;
const { addSmurfStart, addSmurfSuccess } = smurfs;

const Form = (props) => {
  const {
    name,
    age,
    height,
    updateInput,
    clearForm,
    addSmurfStart,
    addSmurfSuccess,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const myNewSmurf = { name, age, height };
    addSmurfStart();
    axios
      .post("http://localhost:3333/smurfs", myNewSmurf)
      .then((res) => {
        addSmurfSuccess(res.data);
        clearForm();
      })
      .catch((err) => {
        debugger;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={updateInput} />
      <input type="text" name="age" value={age} onChange={updateInput} />
      <input type="text" name="height" value={height} onChange={updateInput} />
      <input type="submit" value="Add Smurf" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const { name, age, height } = state.form;
  return { name, age, height };
};

export default connect(mapStateToProps, {
  updateInput,
  clearForm,
  addSmurfStart,
  addSmurfSuccess,
})(Form);
