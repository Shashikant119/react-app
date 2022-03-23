import React from 'react';
class Student extends React.Component {
   
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
        fetch("http://dummy.restapiexample.com/api/v1/employees")
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
            <h3 className='container mt-4 mb-4' style={{color:"red"}}> Pleses wait some time.... </h3> </div> ;
   
        return (
        <div className = "container mt-2">
            <h3> # Fetch data from an api in react </h3> <hr />  
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Sr No.</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th>Employee Age</th>
                        </tr>
                    </thead>
                    <tbody id="demo">{
                    items.data.map((student) => ( 
                    <tr>
                        <td>{ student.id }</td> 
                        <td>{ student.employee_name }</td> 
                        <td>{ student.employee_salary }</td> 
                        <td>{ student.employee_age }</td> 
                    </tr>
                     ))
                    }
                    </tbody>
                </table> 
            
        </div>
    );
}
}

export default Student
