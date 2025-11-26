import React, { useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ categoryName, categoryImage, categorySlug }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${categorySlug}`);
    }
    return (
        <div>
            <div className='card-container' onClick={handleClick}>
                <h2 className='card-title'>{categoryName}</h2>
                <img className='card-img' src={categoryImage}></img>
            </div>
        </div>
    )
}

export default ProductCard