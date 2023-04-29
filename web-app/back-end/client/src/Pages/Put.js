import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";

import "./Put.css"

function Put(){


      const [error,setError] = useState(false)
    
      const location = useLocation();
      const navigate = useNavigate();
    
      const productID = location.pathname.split("/")[2];


      const { register, formState: {errors} ,handleSubmit } = useForm();
      const onSubmit = async data => {
        const producto = {
          quantity: data.quantity,
          price: data.price,
          available: data.available,
        }
        try {
          await axios.put(`/producto/${productID}`, producto);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };

      return (
        <div>
            <div className="form">
            <h1>Update the Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="number"
                placeholder="Quantity"
                name="quantity"
                {...register("quantity", {required: "Quantity is required"})}
            />
            <ErrorMessage
              errors={errors}
              name="quantity"
              render={({ message }) => <p>{message}</p>}
            />
            <input
                type="number"
                placeholder="Price"
                name="price"
                {...register("price", {required: "A price is required"})}
            />
            <ErrorMessage
              errors={errors}
              name="price"
              render={({ message }) => <p>{message}</p>}
            />
            <input
                type="number"
                placeholder="Available (0|1)?"
                name="available"

                {...register("available", {required: "Input can only be 1 or 0", min:0, max:1})}
            />
            <ErrorMessage
              errors={errors}
              name="available"
              render={({ message }) => <p>{message}</p>}
            />
            <input type="submit" />
            </form>
            </div>
            {error && "Something went wrong!"}
            <Link to="/">See all products</Link>
        </div>
      );
}

export default Put;