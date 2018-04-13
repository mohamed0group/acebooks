import Hydraulics from 'assets/pdf/books/Hydraulic Machines Textbook.pdf';
import React from 'react';


class Hydraulic extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Hydraulics} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Hydraulic;
