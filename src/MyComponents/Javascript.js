import React from 'react'

export const Javascript = () => {
  return (
    <div className='container mt-3'>
      <h3 className='text-center'>Users Data List</h3>  <hr />
    <div>
      <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Employee Salary</th>
              <th scope="col">Employee Age</th>
              <th scope="col">Employee Profile Pic</th>
            </tr>
          </thead>
          <tbody id="demo">
            
          </tbody>
        </table> 
      </div>
    </div>
  )
}