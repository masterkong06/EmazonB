import React, { Component } from 'react'

export default class Inventory extends Component {
    render() {
        return (
            <div className="productBox">
                <h1>Inventory Component</h1>
                {this.props.products.map((product) => {
                    return (
                        <div >
                            <ul key={product._id}>
                            <li>
                                <h3>Product: {product.name}</h3>
                            </li>
                            <li>Price: ${product.price} </li>
                            <br />
                            <li>Image Link: {product.image}</li>
                            <br />
                            <li>Category: {product.category}</li>
                            <br />
                            <li>Subcategory: {product.subcategory}</li>
                            <br />
                            <li>Brand: {product.brand} </li>
                            <br />
                            <li> Description: {product.description}</li>
                            <br />
                            <li>Quantity: {product.quantity} </li>
                            <br />
                            <li>Tags: {product.tags}</li>
                            <br />
                            <button onClick={() => this.editProduct(product._id)}>EDIT</button>
                            <button onClick={() => this.deleteProduct(product._id)}>
                                DELETE
                            </button>
                            </ul>
                            <div>
                            <img src={product.image} width="300" alt="" onClick={() => this.showProduct(product._id)}></img>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}
