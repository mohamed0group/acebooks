import Muslim from 'assets/pdf/books/muslim.pdf';
import React from 'react';


class Muslims extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Muslim} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Muslims;
