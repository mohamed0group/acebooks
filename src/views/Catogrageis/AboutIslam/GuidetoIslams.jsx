import GuidetoIslam from 'assets/pdf/books/English_A_Simple_Guide_to_Islam.pdf';
import React from 'react';


class GuidetoIslams extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={GuidetoIslam} width="100%" height="100%"/>
            </div>
        );
    }
}

export default GuidetoIslams;
