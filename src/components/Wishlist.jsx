import React, { useState, useEffect } from 'react';
import { Heart,  Trash2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter(item => item.product_id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    window.dispatchEvent(new Event("authChanged"));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold" style={{ color: "teal" }}>Saved for Later <Heart className="ms-2" fill="teal" /></h2>
      <div className="row g-4">
        {wishlist.length === 0 ? (
           <p className="text-center py-5">You haven't saved any items yet.</p>
        ) : (
          wishlist.map(item => (
            <div className="col-md-3" key={item.id}>
              <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
                <img src={imagepath + item.product_photo} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt=''/>
                <div className="card-body text-center">
                  <h6 className="fw-bold" style={{ color: "teal" }}>{item.product_name}</h6>
                  <p className="fw-bold">Ksh {item.product_cost}</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.product_id)}><Trash2 size={16}/></button>
                    {/* Add to Cart button logic could go here too */}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;