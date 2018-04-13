import Mobile from 'assets/pdf/books/Mobile_App_UX_Principles.pdf';
import React from 'react';


class Mobiles extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Mobile} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Mobiles;
