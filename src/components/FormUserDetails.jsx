import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return <div>FormUserDetails</div>;
  }
}

export default FormUserDetails;
