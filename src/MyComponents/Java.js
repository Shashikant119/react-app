import React from 'react'


export const Java = () => {
  const Student = [
                   {firstName:"John"}, 
                   {lastName:"Doe"}, 
                   {age:46},
                  ];             
  return (
    <>  
    <div className="container">
        <div className='mt-3 mb-5'>
            <h3 className='text-center'>Java</h3> <hr />
            <p>Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:</p>  
            <div>FirstName: {Student[0].firstName}</div>
            <div>lastName: {Student[1].lastName}</div>
            <div>Age: {Student[2].age}</div>
        </div>
    </div>
    </>
  )
}
