import FullStack from 'assets/pdf/blog/A Guide to Becoming a Full-Stack Developer in 2017 – Coderbyte – Medium.pdf';
import React from 'react';


class FullStacks extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={FullStack} width="100%" height="100%"/>
            </div>
        );
    }
}

export default FullStacks;
