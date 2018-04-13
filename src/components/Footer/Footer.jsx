import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default":"")
            }>
                <Container fluid={this.props.fluid ? true:false}>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://github.com/mohamed0group">
                                <i className="fa-github fa-3x coverPageLink" />
                                Github
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/mohamed0group">
                                <i className="fa fa-facebook fa-3x coverPageLink" />
                                Facebook
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mohamed0group@gmail.com">
                                <i className="fa fa-envelope fa-3x coverPageLink" />
                                Mail
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright">
                        &copy; {1900 + (new Date()).getYear()}, Designed & Coded by <a href="https://www.acegroup.js.org" target="_blank" rel="noopener noreferrer">Mohamed Abdeen</a>. 
                    </div>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
}

export default Footer;
