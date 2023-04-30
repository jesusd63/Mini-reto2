import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";


function Add(){

    
      const navigate = useNavigate();
    

      const { register, formState: {errors}, handleSubmit } = useForm();
      const onSubmit = async data => {
        const producto = {
          title: data.title,
          quantity: data.quantity,
          price: data.price,
          available: data.available,
          category: data.category,
          img: data.img,
        }
        try {
          await axios.post("/producto", producto);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      };

    return(
        <div className="form">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                  type="text"
                  placeholder="Product name"
                  name="title"
                  {...register("title", {required: "Name is required"})}
              />
              <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => <p>{message}</p>}
            />
              <input
                  type="text"
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
                  type="text"
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
                  type="text"
                  placeholder="Available (0|1)?"
                  name="available"
                  {...register("available", {required: "Input can only be 1 or 0", min:0, max:1})}
              />
              <ErrorMessage
              errors={errors}
              name="available"
              render={({ message }) => <p>{message}</p>}
            />
              <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  {...register("category", {required: "Category is required"})}
              />
              <ErrorMessage
              errors={errors}
              name="category"
              render={({ message }) => <p>{message}</p>}
            />
              <input
                  type="text"
                  placeholder="Image Link"
                  name="img"
                  {...register("img", {required: "Img link is required"})}
              />
              <ErrorMessage
              errors={errors}
              name="img"
              render={({ message }) => <p>{message}</p>}
            />
              <input type="submit" />
            </form>
            <div className="return">
              <Link to="/">See all products</Link>
            </div>
        </div>
    );
}

export default Add;