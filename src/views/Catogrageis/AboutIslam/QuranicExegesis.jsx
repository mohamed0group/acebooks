import Exegesis from 'assets/pdf/blog/The Quranic Exegesis.pdf';
import React from 'react';


class QuranicExegesis extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Exegesis} width="100%" height="100%"/>
            </div>
        );
    }
}

export default QuranicExegesis;
