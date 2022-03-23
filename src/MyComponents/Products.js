import React from 'react';
class Products extends React.Component {
   
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
        fetch("https://fakestoreapi.com/products")
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
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>category</th>
                        <th>image</th>
                        <th>rating.rate</th>
                        <th>rating.count</th>
                        </tr>
                    </thead>
                    <tbody id="demo">{
                    items.map((item) => ( 
                    <tr key = { item.id } >
                        <td>{ item.id }</td> 
                        <td>{ item.title }</td>
                        <td>{ item.description }</td> 
                        <td>{ item.price }</td>
                        <td>{ item.category }</td>
                        <td>{ item.image }</td>
                        <td>{ item.rating.rate }</td>
                        <td>{ item.rating.count }</td>
                    </tr>
                     ))
                    }
                    </tbody>
                </table> 
        </div>
    );
}
}

export default Products
