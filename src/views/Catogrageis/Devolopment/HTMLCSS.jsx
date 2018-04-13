import HTML from 'assets/pdf/books/HTML and CSS design and build websites.pdf';
import React from 'react';


class HTMLCSS extends React.Component{
    render(){
        return (
            <div  > 
               <object  className="page-header container-fluid content-center" data={HTML} width="100%" height="100%"/>
            </div>
        );
    }
}

export default HTMLCSS;
