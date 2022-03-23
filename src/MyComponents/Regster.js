import React, {useState} from 'react';

function Regster(){
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [password_confirmation, setPassword_Confirmation]=useState("");
function saveUser()
{
  console.warn({name,email,password,password_confirmation});
  let data = {name,email,password,password_confirmation}
  fetch("http://127.0.0.1:8002/api/register",{
      method:"post",
      headers:{
        'Accept':'application/json',
        'Content-Type':'appliation/json'
      },
      body:JSON.stringify(data)
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn("resp",resp)
    })
  })
  
}
  return (
    <div className="container">  
    <div className="row">  
      <div className="col-sm-12 btn btn-primary" style={{margin:"6px"}}>  
        Add New Contact  
     </div>  
    </div>  
    <div className="card o-hidden border-0 shadow-lg my-3" style={{marginTop:"5rem!important"}}>  
      <div className="card-body p-0">  
        <div className="row">  
          <div className="col-lg-12">  
            <div className="p-5">  
              <div className="text-center">  
                <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
              </div>  
              <form className="user">  
                <div className="form-group row">  
                <div className="form-group" style={{paddingBottom:"10px"}}>  
                  <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Name" />  
                </div>  <br />
                  <div className="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" placeholder="Email" />  
                  </div>  
                  <div className="col-sm-6">  
                    <input type="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Password" />  
                  </div> 
                  <div className="col-sm-12" style={{paddingTop:"10px"}}>  
                    <input type="Password" name="password_confirmation" value={password_confirmation} onChange={(e)=>{setPassword_Confirmation(e.target.value)}} className="form-control" placeholder="Password Confirmation" />  
                  </div>  
                </div>  <br />
                <button type="submit" onClick={saveUser} className="btn btn-primary  btn-block">  Create User  </button>  
                <hr />  
              </form>  
              <hr />  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  </div>  
)  
}

export default Regster