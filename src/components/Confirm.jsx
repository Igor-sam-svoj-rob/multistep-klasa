import { List, ListItem, ListItemText, Button } from "@mui/material";
import React, { Component } from "react";

export class Confirm extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { ime, prezime, email, zanimanje, grad, bio },
    } = this.props;
    return (
      <>
        <List>
          <ListItem>
            <ListItemText primary="Ime" secondary={ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Prezime" secondary={prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="E-mail" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zanimanje" secondary={zanimanje} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Grad" secondary={grad} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
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

export default Confirm;
