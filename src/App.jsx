import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import React, { Component } from "react";
import PrviKorak from "./components/PrviKorak";
import DrugiKorak from "./components/DrugiKorak";
import TreciKorak from "./components/TreciKorak";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      ime: "",
      prezime: "",
      email: "",
      zanimanje: "",
      grad: "",
      adresa: "",
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step, ime, prezime, email, zanimanje, grad, adresa } = this.state;
    const values = { ime, prezime, email, zanimanje, grad, adresa };
    switch (step) {
      case 1:
        return (
          <PrviKorak
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <DrugiKorak
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <TreciKorak
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <>
            <h1>Čestitamo</h1>
            <p>došli ste do kraja.</p>
          </>
        );
    }
    return <div>App</div>;
  }
}

export default App;
