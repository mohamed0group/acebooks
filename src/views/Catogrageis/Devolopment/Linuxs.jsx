import Linux from 'assets/pdf/blog/Prentice_Hall_A_Practical_Guide_to_Linux_Commands_Editors_and_Shell_Programming_2nd.pdf';
import React from 'react';


class Linuxs extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={Linux} width="100%" height="100%"/>
            </div>
        );
    }
}

export default Linuxs;
