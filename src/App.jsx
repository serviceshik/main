import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Categories from './components/Categories'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <h1 className='unselectable'>سرویس شیک</h1>
      <div>
        <p className='unselectable'>به سرویس شیک خوش آمدید</p>
        <button onClick={() => navigate('/categories')}>دیدن قیمت ها</button>
        <a target='_blank' href="https://www.instagram.com/service_shik/">
          <img src='/serviceshiklogo.webp' alt="logo" />
        </a>
      </div>
    </section>
  )
}
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />

    </Router>
  )
}

export default App
