import Hifz from 'assets/pdf/blog/A practical guide for Hifz ul Quran.pdf';
import React from 'react';


class HifzulQuran extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Hifz} width="100%" height="100%"/>
            </div>
        );
    }
}

export default HifzulQuran;
