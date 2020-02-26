import React, { Component } from 'react';


 const PetDetails = (props) => {
   console.log(props);
   return (
     <React.Fragment>
          <h1>THIS IS A TEST for ID : {props.match.params.id}</h1>
     </React.Fragment>
   );
 };

 export default PetDetails;
