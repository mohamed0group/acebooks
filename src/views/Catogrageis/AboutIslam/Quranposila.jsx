import posila from 'assets/pdf/books/Quran posila.pdf';
import React from 'react';


class Quranposila extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={posila} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Quranposila;
