import React from 'react';
import { Outlet } from "react-router-dom";

const About = () => {
  const Services = ['html', 'css', 'javascript', 'reactjs', 'java'];
  const serv = Services.map((webservices) =>
    <li>{webservices}</li>
  );
  return (
    <>  
    <div className="container">
        <div className='mt-3 mb-5'>
            <h3 className='text-center'>About Us</h3> <hr />
            <p>Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:</p>  
            <div>{serv}</div>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default About