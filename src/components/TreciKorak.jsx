import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { Component } from "react";

const koraci = ["Prvi Korak", "Drugi Korak", "Treći korak"];

export class TreciKorak extends Component {
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
          <Stepper activeStep={2} alternativeLabel>
            {koraci.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <List>
          <ListItem>
            <ListItemText primary="ime" secondary={values.ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="prezime" secondary={values.prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="email" secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="zanimanje" secondary={values.zanimanje} />
          </ListItem>
          <ListItem>
            <ListItemText primary="grad" secondary={values.grad} />
          </ListItem>
          <ListItem>
            <ListItemText primary="adresa" secondary={values.adresa} />
          </ListItem>
        </List>
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

export default TreciKorak;
