import React, { Component } from 'react';
import SocialMediaLogin from './SocialMediaLogin';
import LoginByEmail from './LoginByEmail';

class LoginForm extends Component {
render() {

  return (
      <form>
        <div className="form-group">
          <div className="text-left justify-content-end">
            <h4 className="float-md-left">
              Log in
            </h4>
            <div className="small text-primary float-md-right">
              <span className="text-nt-reg">Not registered yet?</span>
              <a href="#"> Register</a>
            </div>
          </div>
        </div>
        <SocialMediaLogin />
        <div className="container mt-3">
          <div className="row">
            <div className="col-5"><hr></hr></div>
            <div className="col col-lg-2">
              <button className="btn btn-outline-secondary rounded-circle" disabled>or</button>
            </div>
            <div className="col-5"><hr></hr></div>
          </div>
        </div>
        <LoginByEmail />
    </form>     
  );
}
}

export default LoginForm;