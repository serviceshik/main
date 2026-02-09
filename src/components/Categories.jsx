import React, { useState } from 'react'
import './Categories.css'
import ProductCard from './ProductCard'

const Categories = () => {
    const [categories, setCategorites] = useState([
        {
            id: 1,
            name: "پیشبند",
            image: "./categoryImages/pishband.webp",
            slug: "pishband"
        },
        {
            id: 2,
            name: "کیسه ها / سفره ها",
            image: "./categoryImages/kise.webp",
            slug: "kise"
        },
        {
            id: 3,
            name: "دستگیره ها",
            image: "./categoryImages/dastgire.webp",
            slug: "dastgire"
        }
        ,
        {
            id: 4,
            name: "دمکنی ها",
            image: "./categoryImages/damkoni.webp",
            slug: "damkoni"
        }
        ,
        {
            id: 5,
            name: "حوله ها",
            image: "./categoryImages/hole.webp",
            slug: "hole"
        },
        {
            id: 6,
            name: "کاور ها",
            image: "./categoryImages/cover.webp",
            slug: "cover"
        }
        ,
        {
            id: 7,
            name: "جاسوزنی",
            image: "./categoryImages/jasozani.webp",
            slug: "jasozani"
        },
        {
            id: 8,
            name: "باکس ها",
            image: "./categoryImages/box.webp",
            slug: "box"
        },
        {
            id: 9,
            name: "نمگیر ها",
            image: "./categoryImages/namgir.webp",
            slug: "namgir"
        },
        {
            id: 10,
            name: "زیر قابلمه ای",
            image: "./categoryImages/zirqablemei.webp",
            slug: "zirqablemei"
        },
        {
            id: 11,
            name: "اکسسوری",
            image: "./categoryImages/accessory.webp",
            slug: "accessory"
        },
        {
            id: 12,
            name: "سرپوش ها",
            image: "./categoryImages/sarposh.webp",
            slug: "sarposh"
        },
        {
            id: 13,
            name: "مدل تزیین سرویس",
            image: "./categoryImages/taziin.webp",
            slug: "taziin"
        }
    ])

    return (
        <div>
            <div className='cards'>
                {categories.map((c) => {
                    return (
                        <ProductCard key={c.id} categoryName={c.name} categoryImage={c.image} categorySlug={c.slug} />
                    )
                })}
            </div>
        </div>
    )
}

export default Categories