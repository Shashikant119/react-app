import React from 'react'

const Tictactoe = () => {
  return (
    <>  
    <div className="container">
        <div className='mt-3 mb-5'>
            <h3 className='text-center'>Tic Tac Toe</h3> <hr />
            <p>Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:</p>  
            <div className='game'>
                <input value="1" />
                <input value="2" />
                <input value="3" />
                <input value="4" />
                <input value="5" />
                <input value="6" />
                <input value="7" />
                <input value="8" />
                <input value="9" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Tictactoe