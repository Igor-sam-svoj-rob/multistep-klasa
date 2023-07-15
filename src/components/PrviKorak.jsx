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

export class PrviKorak extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={0} alternativeLabel>
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
          placeholder="Upiši ime"
          defaultValue={values.ime}
          onChange={handleChange("ime")}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Upiši prezime"
          defaultValue={values.prezime}
          onChange={handleChange("prezime")}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Upiši email"
          defaultValue={values.email}
          onChange={handleChange("email")}
        />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Dalje
        </Button>
      </>
    );
  }
}

export default PrviKorak;
