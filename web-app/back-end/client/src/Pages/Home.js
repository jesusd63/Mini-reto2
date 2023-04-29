import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
        try {
            const res = await axios.get("/productos");
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchAllProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/producto/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
      };

    return(
        <div>
            <h1 className="store_name">Wardrobe Wonderland</h1>
            <div className="products">
                {products.map((item) => (
                <div key={item.id} className="product">
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
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
                ))}
            </div>
            <button className="addHome">
                <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                Add new book
                </Link>
            </button>
        </div>
    );
}

export default Home;