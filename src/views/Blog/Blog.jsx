import React from 'react';
import { Link } from 'react-router-dom';
import lib from 'assets/img/young.jpg';
import Bitcoin from 'assets/img/bitcoin.jpeg';
import Hacker from 'assets/img/hacker.jpeg';


const Blog = (props) => {
  return (
    <div className="wrapper lead" >
        <div className=" page-header page-header-small clear-filter" filter-color="orange">
        <div className="page-header-image" data-parallax="true"style={{backgroundImage:'url('+lib+')'}}>
        </div>
        <div className="container">
            <div className="content-center">
                <h1 className="title text-center">Components Documentation</h1>
                <h3 className="description text-center">Elements description - v1.0.0</h3>
            </div>
        </div>
    </div>
                    <div className="container">
                <div className="row">
                    <div className="jumbotron col">
                                <h5 className="lead display-5">FullStack deveoloper</h5>
                            <h6 className="lead display-6">Practical Technology Guide</h6>
                            <Link to="/fullstack">
                            <button  className=" btn-dark  btn-round btn-sm">
                                    <p>Read More!</p>
                                    </button>
                                    </Link>
                            <hr className="my-2" />
                            <p className="lead">
                            this is practical technology guide ment to help redear to become web deveoloper leader
                            </p>
                    </div>
                    <div className="jumbotron col">
                                <h5 className="lead display-5">Mobile Apps</h5>
                            <h6 className="lead display-6">Practical Technology Guide</h6>
                            <Link to="/mobileapp">
                            <button  className=" btn-dark  btn-round btn-sm">
                                    <p>Read More!</p>
                                    </button>
                                    </Link>
                            <hr className="my-2" />
                            <p className="lead">
                            this is practical technology guide ment to help redear to become web deveoloper leader
                            </p>
                    </div>
                    <div className="jumbotron col">
                                <h5 className="lead display-5">Mobile Devolopment</h5>
                            <h6 className="lead display-6">Practical Technology Guide</h6>
                            <Link to="/mobile">
                            <button  className=" btn-dark  btn-round btn-sm">
                                    <p>Read More!</p>
                                    </button>
                                    </Link>
                            <hr className="my-2" />
                            <p className="lead">
                            this is practical technology guide ment to help redear to become web deveoloper leader
                            </p>
                        </div>
                    </div>
                <div className="row">
                    <div className="jumbotron col">
                                <h5 className="lead display-5">Quranic Exegesis</h5>
                            <h6 className="lead display-6">Practical Technology Guide</h6>
                            <Link to="/quranicexegesis" >
                            <button  className=" btn-dark  btn-round btn-sm">
                                    <p>Read More!</p>
                                    </button>
                                    </Link>
                            <hr className="my-2" />
                            <p className="lead">
                            this is practical technology guide ment to help redear to become web deveoloper leader
                            </p>
                        </div>
                    <div className="jumbotron col">
                                <h5 className="lead display-5">Tafaseer</h5>
                            <h6 className="lead display-6">Practical Technology Guide</h6>
                            <Link to="/tafaseer">
                            <button className=" btn-dark  btn-round btn-sm">
                                    <p>Read More!</p>
                                    </button>
                                    </Link>
                            <hr className="my-2" />
                            <p className="lead">
                            this is practical technology guide ment to help redear to become web deveoloper leader
                            </p>
                    </div>
                    </div>
                    <div className="row content-center">
        <h2 className=" title text-center text-danger">Fautred Blog</h2>
        <div className="jumbotron">
        <img src={Bitcoin} alt="hacker.jpeg" className="img-fluid rounded float-left" />        
          <h2 className="display-3">Bitcoin</h2>
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
        <div className="jumbotron">
        <img src={Hacker} alt="hacker.jpeg" className="img-fluid rounded float-left" />
				<h2 className="display-3">Hacking</h2>
				<h3 className="display-4">HACKER CLASSIFICATION</h3>
			<p className="lead"> Based on the attitude and skill level they possess, hackers are classified into the following types:</p><br/>
			<ul className="lead">
				<li><strong><em>White Hat Hacker:</em></strong> A white hat hacker (also known as ethical hacker) is someone
					who uses his skills only for defensive purposes such as penetration testing. These
				type of hackers are often hired by many organizations in order to ensure the security
				of their information systems.</li><br/>
				<li><strong>Black Hat Hacker:<em></em></strong>  A black hat hacker (also known as cracker) is someone who
				always uses his skills for offensive purposes. The intention of black hat hackers is to
				gain money or take personal revenge by causing damage to information systems.</li>
				<li><strong>Grey Hat Hacker:<em></em></strong>  A grey hat hacker is someone who falls in between the white hat
				and black hat category. This type of hacker may use his skills both for defensive and
				offensive purposes.</li>
				<li><strong>Script Kiddie:</strong>  A script kiddie is a wannabe hacker. These are the ones who lack the
				knowledge of how a computer system really works but use ready-made programs,
				tools and scripts to break into computers.</li>
			</ul>
        </div>
        </div>                
                    </div> 
                            
                    </div>

                            
                        
  );
};
export default Blog;
