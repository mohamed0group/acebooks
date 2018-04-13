import Reactjs from 'assets/pdf/books/Reactjs.pdf';
import React from 'react';


class Reacts extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Reactjs} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Reacts;
