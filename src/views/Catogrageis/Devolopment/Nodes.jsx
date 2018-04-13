import Nodejs from 'assets/pdf/books/Nodejs.pdf';
import React from 'react';


class Nodes extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Nodejs} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Nodes;
