import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

export class FormPersonalDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <TextField
          placeholder="Unesite svoje ime"
          defaultValue={values.ime}
          onChange={handleChange("ime")}
        />
        <TextField
          placeholder="Unesite svoj prezime"
          defaultValue={values.prezime}
          onChange={handleChange("prezime")}
        />
        <TextField
          placeholder="Unesite svoj E-mail"
          defaultValue={values.email}
          onChange={handleChange("email")}
        />
        <br />
        <Button variant="contained" color="primary" onClick={this.back}>
          Nazad
        </Button>
        <Button variant="contained" color="primary" onClick={this.continue}>
          Idući korak
        </Button>
      </>
    );
  }
}

export default FormPersonalDetails;
