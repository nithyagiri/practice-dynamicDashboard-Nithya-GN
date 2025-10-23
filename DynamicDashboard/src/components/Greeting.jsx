import React from 'react';
const currentDate = new Date().toLocaleDateString();
const Greeting =({name}) =>{
    return (
     <div>
        <h1 className="greeting">Good Morning, {name}!</h1>
        <h2>Dashboard</h2>
        <p>Today's date: {currentDate}</p>
    </div>);
  

};
export default Greeting;

