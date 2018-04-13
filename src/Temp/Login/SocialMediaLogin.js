import React, { Component } from 'react';
import './App.css';

class SocialMediaLogin extends Component {
render() {

  return (
      <div className="btn-group-vertical w-100" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-sm btn-outline-secondary btn-block mt-2 rounded btn-google">
          <span className="fa fa-google float-md-left mt-1"></span>
          <span>Log in with Google</span>
        </button>
        <button type="button" className="btn btn-sm btn-outline-secondary btn-block mt-2 rounded btn-linkedin">
          <span className="fa fa-linkedin float-md-left mt-1"></span>
          <span>Log in with Linkedin</span>
        </button>
        <button type="button" className="btn btn-outline-secondary btn-block mt-2 rounded btn-xing">
          <span className="fa fa-xing float-md-left mt-1"></span>
          <span>Log in with Xing</span>
        </button>
      </div>
  );
}
}

export default SocialMediaLogin;