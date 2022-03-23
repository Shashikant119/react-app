import React from 'react';
class Blog extends React.Component {
   
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
        fetch("https://jsonplaceholder.typicode.com/todos")
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
            <pre>
                &lt;p&gt;This paragraph.&lt;/p&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="description" content="Free Web tutorials"&gt;
                    &lt;meta name="keywords" content="HTML, CSS, JavaScript"&gt;
                    &lt;meta name="author" content="John Doe"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;/head&gt;
                </pre>
                &lt;label for=&quot;disk_c&quot;&gt;Disk usage C:&lt;/label&gt;
&lt;meter id=&quot;disk_c&quot; value=&quot;2&quot; min=&quot;0&quot; max=&quot;10&quot;&gt;2 out of 10&lt;/meter&gt;&lt;br&gt;

&lt;label for=&quot;disk_d&quot;&gt;Disk usage D:&lt;/label&gt;
&lt;meter id=&quot;disk_d&quot; value=&quot;0.6&quot;&gt;60%&lt;/meter&gt;
                <hr/>
            
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Sr No.</th>
                        <th>userId</th>
                        <th scope="col">Title</th>
                        <th>completed</th>
                        </tr>
                    </thead>
                    <tbody id="demo">{
                    items.map((item) => ( 
                    <tr key = { item.id } >
                        <td>{ item.id }</td> 
                        <td>{ item.userId }</td>
                        <td>{ item.title }</td> 
                        <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                    </tr>
                     ))
                    }
                    </tbody>
                </table> 
        </div>
    );
}
}

export default Blog
