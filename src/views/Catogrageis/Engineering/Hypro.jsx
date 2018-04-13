import hypros from 'assets/pdf/books/hypro.pdf';
import React from 'react';


class Hypro extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={hypros} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Hypro;
