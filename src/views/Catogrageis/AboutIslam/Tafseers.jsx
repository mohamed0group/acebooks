import Tafseer from 'assets/pdf/blog/en_Usool_at-Tafseer.pdf';
import React from 'react';


class Tafseers extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Tafseer} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Tafseers;
