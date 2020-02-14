
import React, { Component } from 'react';
import FormUserDetails from './form-user-details';
import FormPersonalDetails from './form-personal-details';
import '../App.css';

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

// Proceed to the next step
nextStep = () => {
  const {step} = this.state;
  this.setState({
    step: step + 1
  });
}

// Back to the previous step
prevStep = () => {
  const {step} = this.state;
  this.setState({
    step: step - 1
  });
}


// Handle input fields change
handleChange = input => e => {
  this.setState({[input]: e.target.value});
}

  render() {
    const {step } = this.state;
    const {firstName, lastName, email, occupation, city, bio} = this.state;
    const values = {firstName, lastName, email, occupation, city, bio};
    switch (step) {
      case 1:
        return (
          <div>
            <FormUserDetails
              nextStep = {this.nextStep}
              handleChange = {this.handleChange}
              values = {values}
            />
          </div>
        )
      case 2:
        return (
          <div>
            <FormPersonalDetails
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              handleChange = {this.handleChange}
              values = {values}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h1>Confirm</h1>
          </div>
        )
      case 4:
        return (
          <div>
            <h1>Success</h1>
          </div>
        )
      }
    }
  }

export default UserForm;
