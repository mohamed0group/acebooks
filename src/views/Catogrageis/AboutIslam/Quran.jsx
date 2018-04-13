import holeyquran from 'assets/pdf/books/holeyquran.pdf';
import React from 'react';


class Quran extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={holeyquran} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Quran;
