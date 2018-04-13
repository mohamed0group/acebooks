import React, { Component } from 'react';
import {ValidationMsgContainer} from './ValidationMsgContainer';
import { Link } from 'react-router-dom';

class LoginByEmail extends Component {

constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }

    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        if(value){
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        }
        else {
          fieldValidationErrors.email = '';
        }                  
        break;
      case 'password':
        if(value){
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
        }
        else {
          fieldValidationErrors.password = '';
        } 
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

render() {

  return (
      <div >
      <div className="content">
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons users_circle-08"></i>
          </span>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email}
          onChange={this.handleUserInput} placeholder="john.d@domain.com" />
      </div>
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons text_caps-small"></i>
          </span>
          <input type="password" className="form-control" name="password" placeholder="********" value={this.state.password}
          onChange={this.handleUserInput}/>
      </div>
      </div>
      <div className="footer text-center">
          <Link to="/" className="btn btn-primary btn-round btn-lg btn-block">Log in</Link>
      </div>
      <div class="pull-left">
          <h6>
              <Link to="/signup" className="link" disabled={!this.state.formValid}>Create Account</Link>
          </h6>
      </div>
      <div className="pull-right">
          <h6>
              <a href="#pablo" className="link">Forgot your password?</a>
          </h6>
      </div>
    <ValidationMsgContainer formErrors={this.state.formErrors} />
    </div>     
  );
}
}

export default LoginByEmail;