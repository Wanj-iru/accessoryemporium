import React from 'react';
import { Link } from 'react-router-dom';
import {  Mail, MapPin, Phone, CreditCard } from 'lucide-react';

const Columnfooter = () => {
  return (
    <footer className="pt-5 pb-3" style={{ backgroundColor: "#134745", color: "lemonchiffon" }}>
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-3" style={{ letterSpacing: "2px" }}>ACCESSORY EMPORIUM</h4>
            <p className="small opacity-75">
              Premium jewelry and accessories curated for the modern individual. Based in Nairobi, serving the world.
            </p>
            
          </div>

          {/* Column 2: Shop Categories */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3">SHOP BY CATEGORY</h6>
            <ul className="list-unstyled small opacity-75">
              <li className="mb-2"><Link to="/category/Women" className="text-reset text-decoration-none">Women's Luxe</Link></li>
              <li className="mb-2"><Link to="/category/Men" className="text-reset text-decoration-none">Men's Essentials</Link></li>
              <li className="mb-2"><Link to="/category/Traditional" className="text-reset text-decoration-none">Heritage Pieces</Link></li>
              <li className="mb-2"><Link to="/category/Aesthetic" className="text-reset text-decoration-none">Aesthetic Vibes</Link></li>
              <li className="mb-2"><Link to="/shop-all" className="text-reset text-decoration-none">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-white mb-3">CUSTOMER CARE</h6>
            <ul className="list-unstyled small opacity-75">
              <li className="mb-2"><Link to="/customize" className="text-reset text-decoration-none">Custom Orders</Link></li>
              <li className="mb-2"><Link to="/shipping" className="text-reset text-decoration-none">Shipping Policy</Link></li>
              <li className="mb-2"><Link to="/returns" className="text-reset text-decoration-none">Returns & Exchanges</Link></li>
              <li className="mb-2"><Link to="/track-order" className="text-reset text-decoration-none">Track My Order</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-reset text-decoration-none">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3">CONTACT US</h6>
            <ul className="list-unstyled small opacity-75">
              <li className="mb-2 d-flex align-items-center gap-2">
                <MapPin size={16} /> Nairobi, Kenya
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Phone size={16} /> +254 700 000 000
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <Mail size={16} /> support@accessoryemporium.ke
              </li>
            </ul>
            <div className="mt-4">
               <h6 className="fw-bold text-white mb-2 small">SECURE PAYMENTS</h6>
               <div className="d-flex gap-2 opacity-75">
                 <CreditCard size={24} /> <span className="small">M-Pesa / Visa</span>
               </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-lg-2 col-md-12">
            <h6 className="fw-bold text-white mb-3">JOIN THE LIST</h6>
            <p className="small opacity-75">Subscribe for 10% off your first order.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control form-control-sm border-0" placeholder="Email" />
              <button className="btn btn-sm btn-light" type="button">Join</button>
            </div>
          </div>

        </div>

        <hr className="my-5 opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0 opacity-50">
              &copy; 2026 Accessory Emporium. All Rights Reserved. Developed by Joysylvia.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
             <Link to="/privacy" className="text-reset text-decoration-none small opacity-50 me-3">Privacy</Link>
             <Link to="/terms" className="text-reset text-decoration-none small opacity-50">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Columnfooter;