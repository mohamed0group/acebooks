import React from 'react';
import lib from 'assets/img/mac-glasses.jpg';
import LoginByEmail from './LoginByEmail';
import ace from 'assets/img/ACE.png';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
   < div className="wrapper">
    <div className="page-header clear-filter" filterColor="orange">
    <div className="page-header-image img-fluid"  dataParallax="true" style={{backgroundImage:'url('+lib+')'}}></div>
    <div className="container">
        <div className="col-md-8 content-center">
            <div className="card card-login card-plain">
            <div className="row">
                <form className="col-5 form" method="" action="">
                    <div className="row text-left justify-content-end">
                      <h4 className="float-md-left logo-container"> 
                      Login<img width="10%" height="100%" src={ace} alt=""/>
                      </h4>
                    </div>
                  <div>
                    <div className="row">
                    <div className="col">
                    <button type="button"className="btn btn-info btn-icon btn-round btn-google fa fa-google">
                    </button>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-info btn-icon btn-round btn-linkedin">
                    </button>
                    </div>
                    <div className="col">
                    <button type="button" className="btn btn-info btn-icon btn-round btn-githup fa fa-githup">
                    </button>
                    </div>
                  </div>
                  <div className="container mt-3">
                        <button className="btn btn-secondary btn-icon btn-round">or</button>
                  </div>
                  <LoginByEmail/>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};
export default Login;
