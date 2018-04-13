import React from 'react';

import Hifz from 'assets/img/A practical guide for Hifz ul Quran.jpg';
import BeingMuslim from 'assets/img/Being_Muslim_Cover_v0.11_2015-07-02_Outlined_Text.jpg';
import Hvac from 'assets/img/building-services-calculations-set.jpg';
import HACKING from 'assets/img/HowToHack.jpg';
import HTMLCSS from 'assets/img/HTML&CSS.jpg';
import JavaScript from 'assets/img/JavaScript.jpg';
import Hydraulic from 'assets/img/Hydraulic Machines Textbook.jpg';
import Hypro from 'assets/img/hypro.jpg';
import islam from 'assets/img/islam.jpg';
import muslim from 'assets/img/muslim.jpg';
import node from 'assets/img/node.jpg';
import posila from 'assets/img/posila.jpg';
import quran from 'assets/img/quran.jpg';
import reactjs from 'assets/img/reactjs.jpg';
import sass from 'assets/img/sass.jpg';
import MobileApp from 'assets/img/Mobile_App_UX_Principles.jpg';
import lib from 'assets/img/mac-glasses.jpg';
import {Container, Col,Row, Card, Button, CardImg, CardDeck,ButtonGroup ,CardBody,
     Modal, ModalHeader, ModalBody, ModalFooter, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
    
class Catogrageis extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        backdrop: false,
    };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  render(){
  return (
    <div style={{backgroundImage:'url('+lib+')'}}>
         <Container>
      <Row className="warppar container text­center align­items­center justify­content­end">
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%"src={quran} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay>
            <CardBody>
                  
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay>
            
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="quran"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={islam} alt="Card image cap" className="rounded img-raised" />
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="guidetoIslams"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={Hifz} alt="Card image cap" className="rounded img-raised" />
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
          </Card>

           <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="hifzulquran"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={BeingMuslim} alt="Card image cap" className="rounded img-raised" />
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="guideforthenewmuslims"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={muslim} alt="Card image cap" className="rounded img-raised" />
            <CardBody>
                
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="muslims"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={posila} alt="Card image cap" className="rounded img-raised" />
            <CardBody>
                  
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="quranposila"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
                   </Col>
          </Row>
    <Row className="warppar container text­center align­items­center justify­content­end">
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={Hvac} alt="Card image cap" className="rounded img-raised" />
               <CardImgOverlay> 
            <CardBody>
                
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="hvac"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={Hydraulic} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="hydraulic"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={Hypro} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                  
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="Hypro"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
          </Row>
    <Row className="warppar container text­center align­items­center justify­content­end">
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={HTMLCSS} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="htmlcss"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup> 
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={JavaScript} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="javascript"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={node} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="nodejs"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={sass} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="sass"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={reactjs} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="reactjs"><Button className="btn btn-danger btn-icon btn-round">Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      <Col md={2}  xs={12}>
            <Card>
                <CardImg top width="100%" height="100%" src={HACKING} alt="Card image cap" className="rounded img-raised" />
                <CardImgOverlay> 
            <CardBody>
                 
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Exit</Button>
          </ModalFooter>
        </Modal>
            </CardBody>
            </CardImgOverlay> 
          </Card>
          <ButtonGroup size="sm">
                    <Button className="btn btn-info btn-icon btn-round" onClick={this.toggle}>Details{this.props.buttonLabel}</Button>
                    <Link to="hack"><Button className="btn btn-danger btn-icon btn-round">>Buy</Button></Link>
                  </ButtonGroup>
          </Col>
      </Row>
    </Container>
    </div>

  );
};
}
export default Catogrageis;


