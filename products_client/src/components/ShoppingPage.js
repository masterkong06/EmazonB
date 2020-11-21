import React, { Component } from 'react'


//This is commented out on app.js. Undo to render view on main page


export default class ShoppingPage extends Component {
    render() {
        return (
            <div className="shoppingPage">
                <h1>--Shopping Page--</h1>
                {/* Box for product details text */}
                <div className="">
                    {/*Should we use category = brand? */}
                    <div>
                        <h5>Product Brand</h5>
                        <h3>Product Name</h3>
                        <p>Product Description</p>
                        {/* add quantity to Product Schema */}
                        <p>Product Price</p>
                    </div>
                    <div>
                    <p>Product Review Stars</p>
                    </div>                 
                    <p>Image goes here</p>
                    {/* Vendor Buttons */}
                    <form>
                        <button>Edit</button>
                        <button>Delete</button>
                    </form>
                    {/* Customer Buttons */}
                    <form>
                        <button>Purchase</button>
                    </form>
                </div>
            </div>
        )
    }
}
