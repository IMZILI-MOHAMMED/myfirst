import React from 'react';

const LeaguesDetails = ({match}) =>{
  
const par = match.params.id;


   
   return (
    <div>
      <h1>Details {par} </h1>
      
    </div>
  );
 
  
}

export default LeaguesDetails;
