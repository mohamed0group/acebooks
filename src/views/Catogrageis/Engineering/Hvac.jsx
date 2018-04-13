import sample from 'assets/pdf/books/building-services-calculations-set (sample).pdf';
import React from 'react';


class Hvac extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={sample} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Hvac;
