import React from 'react'
import { FaCopyright, FaPhone, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">
          <FaCopyright /> تمام حقوق این اثر متعلق به سرویس شیک است
        </p>
        <div className="contactus">
          <FaPhone />
          <span>تماس با ما:</span>
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/service_shik/"
          >اینستاگرام
            <span><FaInstagram /></span>
          </a>

          <a target='_blank' rel="noreferrer" href="https://wa.me/09033540609"
          >واتساپ
            <span><FaWhatsapp /></span>
          </a>

          <a target='_blank' rel="noreferrer" href="https://t.me/ShikService"
          >تلگرام
            <span><FaTelegram /></span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
