import javascript from 'assets/pdf/books/javascript.pdf';
import React from 'react';


class javascripts extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={javascript} width="100%" height="100%"/>
            </div>
        );
    }
}

export default javascripts;
