import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import React, { Component } from "react";

const koraci = ["Prvi Korak", "Drugi Korak", "Treći korak"];

export class DrugiKorak extends Component {
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
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {koraci.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Upiši zanimanje"
          defaultValue={values.zanimanje}
          onChange={handleChange("zanimanje")}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Upiši grad"
          defaultValue={values.grad}
          onChange={handleChange("grad")}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Upiši adresa"
          defaultValue={values.adresa}
          onChange={handleChange("adresa")}
        />
        <br />
        <Button variant="contained" onClick={this.back}>
          Nazad
        </Button>
        <Button variant="contained" onClick={this.continue}>
          Dalje
        </Button>
      </>
    );
  }
}

export default DrugiKorak;
