import { useParams } from "react-router-dom"
import products from "../products";
import React from 'react';


const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);
  console.log(product);
    return <h1> ProductScreen </h1>
    
};

export default ProductScreen
