import React from 'react';
import lib from 'assets/img/login.jpg';
import ace from 'assets/img/ACE.png';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  return (
    <div className="wrapper">
    <div className="page-header clear-filter" filterColor="orange">
    <div className="page-header-image img-fluid"  dataParallax="true" style={{backgroundImage:'url('+lib+')'}}></div>
    <div className="container">
        <div className="col-md-8 content-center">
            <div className="card card-login card-plain">
            <div className="row">
            <h3 className="title logo-container"><img width="10%" height="50%" src={ace} alt=""/><br/>You have successfly logout.<br/>
                    Would you like to <Link to="/login">login</Link></h3>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )}
export default Logout;
