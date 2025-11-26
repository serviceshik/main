import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaHome, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const navItems = [
    {
      name: <><FaHome /> خانه</>,
      isRoute: true,
      route: "/"
    },
    {
      name: <><FaShoppingCart /> ثبت سفارش</>,
      link: "https://ig.me/m/service_shik",
      external: true
    },
    {
      name: <><FaDollarSign /> قیمت محصولات</>,
      isRoute: true,
      route: "/categories"
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <div className="logo highlight-transparent" onClick={handleLogoClick}>
          <img src="/serviceshiklogo.webp" alt="Logo" />
          <h1>سرویس شیک</h1>
        </div>

        <ul className="nav-links ">
          {navItems.map((item, index) => (
            <li className="highlight-transparent" key={index}>

              {item.external && (
                <a className="highlight-transparent" href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              )}

              {!item.external && item.link && (
                <a className="highlight-transparent" href={item.link}>{item.name}</a>
              )}

              {item.isRoute && (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.route);
                  }}
                  href={item.route}
                  className="highlight-transparent"
                >
                  {item.name}
                </a>
              )}

            </li>
          ))}
        </ul>

        <div className="menu-icon highlight-transparent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>

              {item.external && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}

              {!item.external && item.link && (
                <a
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}

              {item.isRoute && (
                <a
                  href={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.route);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              )}

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
