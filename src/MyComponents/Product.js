import React from 'react';
class Product extends React.Component {
   
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
            <h3> #My All Products </h3> <hr />  
           {
            items.map((item) => ( 
            <div className="height d-flex justify-content align-items-center mt-2">
                <div className="card p-3 mt-2">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="mt-2">
                            <h4 className="text-uppercase">{`${item.title.substring(30, item.title)}`}</h4>
                            <div className="mt-5">
                                <h5 className="text-uppercase mb-0">Blanda Matt</h5>
                                <h1 className="main-heading mt-0">VASE</h1>
                                <div className="d-flex flex-row user-ratings">
                                    <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                    <h6 className="text-muted ml-1">4/5</h6>
                                </div>
                            </div>
                        </div>
                        <div className="image"> <img src={ item.image } alt="img" width=" 120"/>  </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2 mb-2"> <span>Available colors</span>
                        <div className="colors"> <span></span> <span></span> <span></span> <span></span> </div>
                    </div>
                    <p>{`${item.title.substring(30, item.title)}`}</p> <button class="btn btn-danger">Add to cart</button>
                </div>
                </div> 
                ))
                
            }
        </div>
    );
}
}

export default Product
