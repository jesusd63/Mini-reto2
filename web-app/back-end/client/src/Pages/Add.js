import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(){

    const [product, setProduct] = useState({
        title: "",
        quantity: null,
        price: null,
        available: 0,
        category: "",
        img: "",
      });
      const [error,setError] = useState(false)
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/producto", product);
          console.log(res);
          // navigate("/");
        } catch (err) {
          console.log(err);
          setError(true)
        }
      };

    return(
        <div className="form">
            <h1>Add New Product</h1>
            <input
                type="text"
                placeholder="Product name"
                name="title"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Price"
                name="price"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Available (0|1)?"
                name="available"
                min="0"
                max="1"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Category"
                name="category"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Link"
                name="img"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link to="/">See all books</Link>
        </div>
    );
}

export default Add;