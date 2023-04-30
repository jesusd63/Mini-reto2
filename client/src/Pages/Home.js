import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
        try {
            const res = await axios.get("https://wonderland-api-jesusd63.vercel.app/productos");
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchAllProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://wonderland-api-jesusd63.vercel.app/producto/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };

      const fetchTops = async () => {
        try {
            const cat = "tops" 
          const response = await axios.get(`https://wonderland-api-jesusd63.vercel.app/productos/category/${cat}`);
          setProducts(response.data);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
    };
        const fetchBottoms = async () => {
            const cat = "bottoms" 
            try {
            const response = await axios.get(`https://wonderland-api-jesusd63.vercel.app/productos/category/${cat}`);
            setProducts(response.data);
            console.log(response);
            } catch (error) {
            console.log(error);
            }
        };
        const fetchShoes = async () => {
            const cat = "shoes" 
            try {
            const response = await axios.get(`https://wonderland-api-jesusd63.vercel.app/productos/category/${cat}`);
            setProducts(response.data);
            console.log(response);
            } catch (error) {
            console.log(error);
            }
        };

        const fetchAll = async () => {
            try {
            const response = await axios.get(`https://wonderland-api-jesusd63.vercel.app/productos`);
            setProducts(response.data);
            console.log(response);
            } catch (error) {
            console.log(error);
            }
        };


    return(
        <div>
            <h1 className="store_name">Wardrobe Wonderland</h1>
            <div className="Add-btn">
                <button>
                    <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add new product
                    </Link>
                </button>
            </div>
            <div className="categories">
                <button onClick={() => fetchTops()}>TOPS</button>
                <button onClick={() => fetchBottoms()}>BOTTOMS </button>
                <button onClick={() => fetchShoes()}>SHOES</button>
                <button onClick={() => fetchAll()}>All</button>
            </div>
            <div className="products">
                {products.map((item) => (
                <div key={item.id} className="product">
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <h4>Price: ${item.price}</h4>
                    <h4>Quantity: {item.quantity} </h4>
                    <div className="Product-buttons"> 
                        <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                        <button className="update">
                        <Link
                            to={`/put/${item.id}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            Update
                        </Link>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Home;