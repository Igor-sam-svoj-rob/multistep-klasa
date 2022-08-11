import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <TextField
          placeholder="Unesite svoje zanimanje"
          defaultValue={values.zanimanje}
          onChange={handleChange("zanimanje")}
        />
        <TextField
          placeholder="Unesite svoj grad"
          defaultValue={values.grad}
          onChange={handleChange("grad")}
        />
        <TextField
          placeholder="Unesite svoj bio"
          defaultValue={values.bio}
          onChange={handleChange("bio")}
        />
        <br />
        <Button variant="contained" color="primary" onClick={this.continue}>
          Idući korak
        </Button>
      </>
    );
  }
}

export default FormUserDetails;
