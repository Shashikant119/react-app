import React from 'react'

export const Body = () => {
    const MyRightside = {
        borderRight: "1px solid",
        backgroundColor: "#000",
        color: "#fff"
      };
    const CenterPost = {
        borderRight: "1px solid"
    };  
  return (
    <>  
    <div class="container mt-2">
        <h3 className='text-center'>My React App</h3>
        <hr className='mb-3'/>    
    <div class="row mb-5">
        <div class="col-sm-2" style={MyRightside}>
        <h3>React App</h3>
        <ul>
            <li><a href='#!'>Home</a></li>
            <li>About Us</li>
            <li>Services</li>
        </ul>
        </div>
        <div className="col-sm-7" style={CenterPost}> 
        <h3>Post</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-3">
        <h3>Recent Post</h3>        
        <p style={{color:"blue"}}>1. Lorem ipsum dolor, elit...</p>
        <p style={{color:"blue"}}>2. Ut enim ad veniam, laboris...</p>
        </div>
    </div>
    </div> 
    </>
  )
}
