import axios from "axios";

 const fetchProducts =  async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchProducts;