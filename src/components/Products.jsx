import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "./Products.css"
import fetchProducts from "../store/fetchProducts";

const Products = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setData(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products">
      {data.map((product) => (
        <ProductList key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
