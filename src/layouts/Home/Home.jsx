import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Header, Footer } from 'components'
import FullStacks from 'views/Catogrageis/Devolopment/FullStacks.jsx';
import Hackes from 'views/Catogrageis/Devolopment/Hackes.jsx';
import HTMLCSS from 'views/Catogrageis/Devolopment/HTMLCSS.jsx';
import javascripts from 'views/Catogrageis/Devolopment/javascripts.jsx';
import Linuxs from 'views/Catogrageis/Devolopment/Linuxs.jsx';
import Mobileapps from 'views/Catogrageis/Devolopment/Mobileapps.jsx';
import Mobiles from 'views/Catogrageis/Devolopment/Mobiles.jsx';
import Nodes from 'views/Catogrageis/Devolopment/Nodes.jsx';
import Reacts from 'views/Catogrageis/Devolopment/Reacts.jsx';
import Sass from 'views/Catogrageis/Devolopment/Sass.jsx';
import Hvac from 'views/Catogrageis/Engineering/Hvac.jsx';
import Hydraulic from 'views/Catogrageis/Engineering/Hydraulic.jsx';
import Hypro from 'views/Catogrageis/Engineering/Hypro.jsx';
import guideforthenewMuslims from 'views/Catogrageis/AboutIslam/guideforthenewMuslims.jsx';
import GuidetoIslams from 'views/Catogrageis/AboutIslam/GuidetoIslams.jsx';
import HifzulQuran from 'views/Catogrageis/AboutIslam/HifzulQuran.jsx';
import Muslims from 'views/Catogrageis/AboutIslam/Muslims.jsx';
import Quran from 'views/Catogrageis/AboutIslam/Quran.jsx';
import QuranicExegesis from 'views/Catogrageis/AboutIslam/QuranicExegesis.jsx';
import Quranposila from 'views/Catogrageis/AboutIslam/Quranposila.jsx';
import Tafseers from 'views/Catogrageis/AboutIslam/Tafseers.jsx';

import Login from 'Temp/Login/Login.jsx'; 
import Logout from 'Temp/Logout/Logout.jsx'; 
import Signup from 'Temp/Signup/Signup.jsx'; 

import Home from 'views/Home/Home.jsx'; 
import Catogrageis from 'views/Catogrageis/Catogrageis.jsx'; 
import Blog from 'views/Blog/Blog.jsx'; 
import About from 'views/About/About.jsx'; 
import Maps from 'views/Maps/Maps.jsx'; 


var ps;
class App extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    // componentDidUpdate(e) {
    //   if(e.history.action === "PUSH"){
    //     this.refs.mainPanel.scrollTop = 0;
    //     document.scrollingElement.scrollTop = 0;
    //   }
    // }
    render(){
        return (
            <div className="wrapper" ref="mainPanel">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/catogrageis' component={Catogrageis}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/about' component={About}/>
                    <Route path='/maps' component={Maps}/>
                    <Route path='/fullstack' component={FullStacks}/>
                    <Route path='/hack' component={Hackes}/>
                    <Route path='/htmlcss' component={HTMLCSS}/>
                    <Route path='/javascript' component={javascripts}/>
                    <Route path='/mobileapp' component={Mobileapps}/>
                    <Route path='/linux' component={Linuxs}/>
                    <Route path='/sass' component={Sass}/>
                    <Route path='/mobile' component={Mobiles}/>
                    <Route path='/react' component={Reacts}/>
                    <Route path='/nodejs' component={Nodes}/>
                    <Route path='/hvac' component={Hvac}/>
                    <Route path='/hypro' component={Hypro}/>
                    <Route path='/hydraulic' component={Hydraulic}/>
                    <Route path='/tafaseer' component={Tafseers}/>
                    <Route path='/guideforthenewmuslims' component={guideforthenewMuslims}/>
                    <Route path='/guidetoIslams' component={GuidetoIslams}/>
                    <Route path='/hifzulquran' component={HifzulQuran}/>
                    <Route path='/muslims' component={Muslims}/>
                    <Route path='/quran' component={Quran}/>
                    <Route path='/quranicexegesis' component={QuranicExegesis}/>
                    <Route path='/quranposila' component={Quranposila}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/signup' component={Signup}/>
                    
                    <Redirect to='/'/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
