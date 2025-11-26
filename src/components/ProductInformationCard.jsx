import React, { useState } from 'react';
import "./ProductInformationCard.css";

const ProductInformationCard = ({ title, image, description, price, isPair }) => {
    const [showFullImage, setShowFullImage] = useState(false);


    return (
        <>
            <div className='product-information-container'>
                <h2>{title}</h2>
                <div className="product-image-box">
                    <img
                        src={image}
                        className='product-image'
                        onClick={() => setShowFullImage(true)}
                        alt={title}
                    />
                </div>

                <p className={title === 'مدل تزیین سرویس' ? 'sorted' : ''}>{description}</p>

                {price
                    ? <span>{Number(price).toLocaleString('fa-IR')} تومان</span>
                    : <span>قیمت در توضیحات</span>}

                {isPair && <div className='is-pair'>قیمت برای یک جفت</div>}
            </div>

            {showFullImage && (
                <div className="fullscreen-overlay" onClick={() => setShowFullImage(false)}>
                    <img
                        src={image}
                        className="fullscreen-image"
                        alt={title}
                    />
                </div>
            )}
        </>
    );
};

export default ProductInformationCard;
