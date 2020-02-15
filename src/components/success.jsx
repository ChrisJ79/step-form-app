import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import '../App.css';

class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Confirms all imput entries
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                 <React.Fragment className="reactFragment">
                    <AppBar title="Success" align="center" />
                    <h1>Thank you for your submission!</h1>
                    <p>You will receive an email confirmation shortly.</p>
                 </React.Fragment>
            </MuiThemeProvider>
        );
    }
}



export default Success;
