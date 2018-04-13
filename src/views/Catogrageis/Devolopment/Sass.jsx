import Sassey from 'assets/pdf/books/sass.pdf';
import React from 'react';


class Sass extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Sassey} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Sass;
