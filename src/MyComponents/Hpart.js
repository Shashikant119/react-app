import React from 'react';
import dateFormat from 'dateformat';
class Hpart extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/users-list")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    user: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, user } = this.state;
        if (!DataisLoaded) return <div>
            <h3 className='container mt-4 mb-4' style={{color:"red"}}> Pleses wait some time.... </h3> </div> ;
   
        return (
        <div className = "container mt-2">
            <h3> # Fetch data from an api in react </h3> <hr />  
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Sr No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserType</th>
                        <th>Created Date</th>
                        </tr>
                    </thead>
                    <tbody id="demo">{
                    user.map((users) => ( 
                    <tr>
                        <td>{ users.id }</td> 
                        <td>{ users.name }</td> 
                        <td>{ users.email }</td>
                        <td>{ users.usertype === 2 ? 'Customer' : "null" }</td>  
                        <td>{dateFormat(users.created_at, "mmmm dS, yyyy")}</td> 
                    </tr>
                     ))
                    }
                    </tbody>
                </table> 
        </div>
    );
}
}

export default Hpart
