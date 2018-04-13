import Mobileapp from 'assets/pdf/books/beginning-mobile-app-development-with-react-native-sample (1).pdf';
import React from 'react';


class Mobileapps extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Mobileapp} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Mobileapps;
