import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import ProductInformationCard from './ProductInformationCard';
import products from '../data/products.json';

const ProductPage = () => {
    const { slug } = useParams();
    const filteredProducts = products.filter(
        p => p.category === slug || !slug
    );


    return (
        <div className='products-container'>
            {filteredProducts.map(product => (
                <ProductInformationCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    isPair={product.isPair}
                />
            ))}
        </div>
    )
}

export default ProductPage