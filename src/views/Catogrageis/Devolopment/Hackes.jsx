import Hacking from 'assets/pdf/books/Hacking.pdf';
import React from 'react';


class Hackes extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Hacking} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Hackes;
