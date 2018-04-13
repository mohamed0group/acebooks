import React from 'react';
import lib from 'assets/img/mac-glasses.jpg';
import ace from 'assets/img/ACE.png';
import { Link } from 'react-router-dom';

const Signup = (props) => {
  return (
    <div className="wrapper">
    <div className="page-header clear-filter" filterColor="orange">
    <div className="page-header-image img-fluid"  dataParallax="true" style={{backgroundImage:'url('+lib+')'}}></div>
    <div className="container">
        <div className="col-md-4  content-center">
            <div className="card card-login card-plain">
            <div className="row">
                <form className="col-5 form " method="" action="">
                    <div className="form-group">
                    <div className="text-left justify-content-end">
                      <h4 className="float-md-left logo-container">
                        Sign up<a/>
                            <img width="15%" height="10%" src={ace} alt=""/>
                      </h4>
                      
                    </div>
                  <div>
      <div className="content ">
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons users_circle-08"></i>
          </span>
          <input type="username" className="form-control" name="username" aria-describedby="usernameHelp"placeholder="your first name" />
      </div>
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons users_circle-08"></i>
          </span>
          <input type="username" className="form-control" name="username" aria-describedby="usernameHelp"placeholder="your last name" />
      </div>
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons users_circle-08"></i>
          </span>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp"placeholder="john.d@domain.com" />
      </div>
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons text_caps-small"></i>
          </span>
          <input type="password" className="form-control" name="password" placeholder="password"/>
      </div>
      <div className="input-group form-group-no-border input-lg">
          <span className="input-group-addon">
              <i className="now-ui-icons text_caps-small"></i>
          </span>
          <input type="password" className="form-control" name="repeat your password" placeholder="repeat your password"/>
      </div>
      </div>
      <div className="footer text-center">
          <Link to="/" className="btn btn-primary btn-round btn-lg btn-block">Sign up</Link>
      </div>
      <div >
          <h6>allreadey have account  
              <Link to="/login" className="link"> login</Link>
          </h6>
      </div>
    </div> 
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
export default Signup;
