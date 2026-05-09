import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Heart, ChevronRight, Info } from 'lucide-react';
import Prefooter from './Prefooter';
import Footer from './Footer';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Retrieves category from URL (e.g., /category/Men)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

  useEffect(() => {
    setLoading(true);
    axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts")
      .then(res => {
        // Filters products where the database category matches the URL
        const filtered = res.data.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  // Luxury Branding details for each section
  const categoryDetails = {
    women: { title: "Women's Luxe", tag: "Elegance defined.", color: "#134745" },
    men: { title: "Men's Essential", tag: "Bold & Sophisticated.", color: "#0a2e2c" },
    aesthetic: { title: "Aesthetic Studio", tag: "Modern minimalism.", color: "#215a57" },
    traditional: { title: "Heritage Collection", tag: "Authentic Kenyan Craft.", color: "#4a3b22" }
  };

  const currentTheme = categoryDetails[categoryName.toLowerCase()] || { title: "Collection", tag: "Curated for you.", color: "teal" };

  // Add to Cart Logic
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${product.product_name} added to bag!`);
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "teal" }}>
      {/* Dynamic Hero Banner */}
      <section className="py-5 text-center shadow-sm" style={{ backgroundColor: currentTheme.color, color: "lemonchiffon" }}>
        <nav className="small mb-2 opacity-75">
          <Link to="/" className="text-reset text-decoration-none">Home</Link> <ChevronRight size={12} /> {currentTheme.title}
        </nav>
        <h1 className="display-4 fw-bold text-uppercase mb-0" style={{ letterSpacing: "4px" }}>{currentTheme.title}</h1>
        <p className="fst-italic">{currentTheme.tag}</p>
      </section>

      <div className="container py-5" style={{ minHeight: "60vh" }}>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-success" role="status"></div>
            <p className="mt-2 text-muted">Curating your selection...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="row g-4">
            {products.map(product => (
              <div className="col-md-3 col-6" key={product.id}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: "15px", backgroundColor: "white" }}>
                  <div className="position-relative">
                    <img 
                      src={imagepath + product.product_photo} 
                      className="card-img-top" 
                      alt={product.product_name} 
                      style={{ height: "280px", objectFit: "cover" }} 
                    />
                    <button 
                      className="btn btn-light btn-sm position-absolute rounded-circle shadow-sm" 
                      style={{ top: "10px", right: "10px", width: "35px", height: "35px" }}
                    >
                      <Heart size={18} color="teal" />
                    </button>
                  </div>
                  <div className="card-body text-center p-3" style={{ backgroundColor: "lemonchiffon" }}>
                    <h6 className="fw-bold mb-1" style={{ color: "teal", fontSize: "0.9rem" }}>{product.product_name}</h6>
                    <p className="fw-bold mb-3">Ksh {product.product_cost}</p>
                    <div className="d-grid gap-2">
                      <button 
                        className="btn btn-dark btn-sm d-flex align-items-center justify-content-center gap-2 py-2" 
                        style={{ backgroundColor: "teal", border: "none", borderRadius: "8px" }}
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart size={16} /> Add to Bag
                      </button>
                    
                   </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5 mt-5 rounded shadow-sm" style={{ backgroundColor: "lemonchiffon", border: "1px dashed teal" }}>
            <Info size={48} color="teal" className="mb-3" />
            <h3 className="fw-bold">Coming Soon to {currentTheme.title}</h3>
            <p className="text-muted">We are currently curating new premium pieces for this section.</p>
            <Link to="/" className="btn btn-outline-dark mt-3">Continue Shopping</Link>
          </div>
        )}
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
