import React from 'react';
const ConditionalMessage = ({isPremium})=>{
    return <h1>{isPremium ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</h1>;
};
export default ConditionalMessage;

