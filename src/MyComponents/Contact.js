import React from 'react'

class Contact extends React.Component {
   
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
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "container mt-2">
            <h3> # Fetch data from an api in react </h3> <hr />  
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">User_Name</th>
                        <th scope="col">Full_Name</th>
                        <th scope="col">User_Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">langitude</th>
                        </tr>
                    </thead>
                    <tbody id="demo">{
                    items.map((item) => ( 
                    <tr key = { item.id } >
                        <td>{ item.username }</td> 
                        <td>{ item.name }</td>
                        <td>{ item.email }</td>
                        <td>{ item.address.street }</td>
                        <td>{ item.address.geo.lat }</td>
                        <td>{ item.address.geo.lng }</td>
                    </tr>
                     ))
                    }
                    </tbody>
                </table> 
            
        </div>
    );
}
}

export default Contact