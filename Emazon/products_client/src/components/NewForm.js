import React, { Component } from "react";

const baseURL = "http://localhost:3003";

export default class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      image: "",
      category: "",
      subcategory: "",
      brand: "",
      description: "",
      inStock: true,
      quantity: "",
      tags: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/products", {
      method: "POST",
      body: JSON.stringify({ 
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
        category: this.state.category,
        subcategory: this.state.subcategory,
        brand: this.state.brand,
        description: this.state.description,
        inStock: this.state.inStock,
        quantity: this.state.quantity,
        tags: this.state.tags
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.handleAddProduct(data);
        this.setState({
          name: "",
          price: "",
          image: "",
          category: "",
          subcategory: "",
          brand: "",
          description: "",
          inStock: true,
          quantity: "",
          tags: ""
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="add Product name"
        />{" "}
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          placeholder="add a Price"
        />{" "}
        <br />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeholder="add an Image Link"
        />{" "}
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={this.handleChange}
          value={this.state.category}
          placeholder="add Product's category"
        />{" "}
        <br />
        <label htmlFor="subcategory">Subcategory</label>
        <input
          type="text"
          id="subcategory"
          name="subcategory"
          onChange={this.handleChange}
          value={this.state.subcategory}
          placeholder="add Product's subcategory"
        />{" "}
        <br />
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={this.handleChange}
          value={this.state.brand}
          placeholder="add Product's brand"
        />{" "}
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
          placeholder="add a Description"
        />{" "}
        <br />
        {/* Will need to change into a checkbox */}
        <label htmlFor="inStock">Is this Product in Stock?</label>
        <input
          type="text"
          id="inStock"
          name="inStock"
          onChange={this.handleChange}
          value={this.state.inStock}
          placeholder="True/False"
        />{" "}
        <br />
        {/* Will need to set minimum to go no lower than 0 */}
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
          placeholder="---"
        />{" "}
        <br />
        {/* Should consider changing tags in schema type: Array; This may then cause this to need a different input type */}
        <label htmlFor="tags">Add tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          onChange={this.handleChange}
          value={this.state.tags}
          placeholder="Add tags when searching"
        />{" "}
        <br />
        
        <input type="submit" value="Add Product" />
      </form>
    );
  }
}