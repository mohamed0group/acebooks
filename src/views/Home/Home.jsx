import React from 'react';
import Devoloper from 'components/Soras/Devoloper.jsx'
import Engineering from 'components/Soras/Engineering.jsx'
import Islamic from 'components/Soras/Islamic.jsx'
import Portffolo from 'components/Soras/Portffolo.jsx'
import lib from 'assets/img/bg6.jpg';
import ace from 'assets/img/ACE.png';
import mabdeen from 'assets/img/avatar.jpg';
const Home = (props) => {
  return (
    <div className="wrapper">
    <div className="page-header clear-filter" filterColor="orange">
    <div className="page-header-image img-fluid"  dataParallax="true" style={{backgroundImage:'url('+lib+')'}}></div>
    <div className="container">
        <div className="content-center brand">
        <img width='5%' height='5%' className="img-fluid rounded" src={ace} alt=""/>
                    <h1 class="h1-seo">Ace Books</h1>
                    <h3>A beautiful library for reader & leaders.</h3>
                    <h1 className="title"> </h1>
                    <h6 class="category category-absolute">Designed by & Coded by
                    <a href="https://www.acegroup.js.org" target="_blank">
                    <img width='5%' height='5%' src={mabdeen} alt="" className="creative-tim-logo img-fluid rounded-circle"/> 
                    </a>.</h6>
                </div>
            </div>
        </div>
        <div className="jumbotron container lead" >
        <div className="row content-center" dataParallax="true" > 
        <h2 className="title text-danger">Who we are?</h2>
        <h5 >we are dedicated to meeting the information needs of
        IT & ME & DEN, professionals, developers, and tech enthusiasts worldwide.</h5>
        </div><hr className="my-2" />
        <div className="row content-center">
        <h2 className="title text-center text-danger">Checkout are new Books</h2>
        </div>
        <div className="row content-center" dataParallax="true" >
        <div ><div className="col-md-2  col-xs-2 float-left">
        <Islamic />                
        </div>
          <h2 className="display-3">Islamic</h2>
          <h3 className="display-4">A Peer-to-Peer Electronic Cash System</h3>
          <p className="lead">A purely peer-to-peer version of electronic cash would allow online
				payments to be sent directly from one party to another without going through a
				financial institution. Digital signatures provide part of the solution, but the main
				benefits are lost if a trusted third party is still required to prevent double-spending.
				We propose a solution to the double-spending problem using a peer-to-peer network.
				The network timestamps transactions by hashing them into an ongoing chain of
				hash-based proof-of-work, forming a record that cannot be changed without redoing
				the proof-of-work. The longest chain not only serves as proof of the sequence of
				events witnessed, but proof that it came from the largest pool of CPU power. As
				long as a majority of CPU power is controlled by nodes that are not cooperating to
				attack the network, they'll generate the longest chain and outpace attackers. The
				network itself requires minimal structure. Messages are broadcast on a best effort
				basis, and nodes can leave and rejoin the network at will, accepting the longest
				proof-of-work chain as proof of what happened while they were gone.</p>
        </div>
        <hr className="my-2" />
        </div>
        <div className="row content-center" dataParallax="true">
        <div ><div className="col-md-2  col-xs-2 float-left">
        <Devoloper />
        </div>
                
          <h2 className="display-3">Devoloper</h2>
          <h3 className="display-4">A Peer-to-Peer Electronic Cash System</h3>
          <p className="lead">A purely peer-to-peer version of electronic cash would allow online
				payments to be sent directly from one party to another without going through a
				financial institution. Digital signatures provide part of the solution, but the main
				benefits are lost if a trusted third party is still required to prevent double-spending.
				We propose a solution to the double-spending problem using a peer-to-peer network.
				The network timestamps transactions by hashing them into an ongoing chain of
				hash-based proof-of-work, forming a record that cannot be changed without redoing
				the proof-of-work. The longest chain not only serves as proof of the sequence of
				events witnessed, but proof that it came from the largest pool of CPU power. As
				long as a majority of CPU power is controlled by nodes that are not cooperating to
				attack the network, they'll generate the longest chain and outpace attackers. The
				network itself requires minimal structure. Messages are broadcast on a best effort
				basis, and nodes can leave and rejoin the network at will, accepting the longest
				proof-of-work chain as proof of what happened while they were gone.</p>
        </div>
        <hr className="my-2" />
        </div>
        <div className="row content-center " dataParallax="true" >
        <div ><div className="col-md-2 col-xs-2 float-left">
        <Engineering />
        </div>
                
          <h2 className="display-3">Engineering</h2>
          <h3 className="display-4">A Peer-to-Peer Electronic Cash System</h3>
          <p className="lead">A purely peer-to-peer version of electronic cash would allow online
				payments to be sent directly from one party to another without going through a
				financial institution. Digital signatures provide part of the solution, but the main
				benefits are lost if a trusted third party is still required to prevent double-spending.
				We propose a solution to the double-spending problem using a peer-to-peer network.
				The network timestamps transactions by hashing them into an ongoing chain of
				hash-based proof-of-work, forming a record that cannot be changed without redoing
				the proof-of-work. The longest chain not only serves as proof of the sequence of
				events witnessed, but proof that it came from the largest pool of CPU power. As
				long as a majority of CPU power is controlled by nodes that are not cooperating to
				attack the network, they'll generate the longest chain and outpace attackers. The
				network itself requires minimal structure. Messages are broadcast on a best effort
				basis, and nodes can leave and rejoin the network at will, accepting the longest
				proof-of-work chain as proof of what happened while they were gone.</p>
        </div>
        <hr className="my-2" />
        </div>
        <div className="row content-center"><h2 className="title text-center text-danger">What our reader say</h2>
        <div className="col col-md-12 col-xs-12 col-lg-12">
        <Portffolo/>
        </div>
        </div >
        </div>
    </div>
  
  );
};
export default Home;
