import guideforthenewMuslim from 'assets/pdf/blog/guideforthenewMuslim.pdf';
import React from 'react';


class guideforthenewMuslims extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={guideforthenewMuslim} width="100%" height="100%"/>
            </div>
        );
    }
}

export default guideforthenewMuslims;
