// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react'; // npm install lucide-react

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const navigate = useNavigate();
//   const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

//   // 1. Load wishlist from localStorage on component mount
//   useEffect(() => {
//     const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     setWishlistItems(savedWishlist);
//   }, []);

//   // 2. Remove item from wishlist
//   const removeItem = (id) => {
//     const updatedWishlist = wishlistItems.filter(item => item.id !== id);
//     setWishlistItems(updatedWishlist);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   };

//   // 3. Move to Cart logic
//   const moveToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const exists = cart.find(item => item.id === product.id);
    
//     if (exists) {
//       exists.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }
    
//     localStorage.setItem('cart', JSON.stringify(cart));
    
//     // Optional: Remove from wishlist after moving to cart
//     removeItem(product.id);
//     alert("Moved to cart!");
//   };

//   return (
//     <div className="container py-5">
//       <div className="d-flex align-items-center mb-4">
//         <button onClick={() => navigate(-1)} className="btn btn-link text-dark p-0 me-3">
//           <ArrowLeft size={24} />
//         </button>
//         <h2 className="mb-0" style={{ color: "teal" }}>My Wishlist ({wishlistItems.length})</h2>
//       </div>

//       {wishlistItems.length === 0 ? (
//         <div className="text-center py-5 shadow-sm rounded" style={{ backgroundColor: "lemonchiffon" }}>
//           <Heart size={48} className="text-muted mb-3" />
//           <h3>Your wishlist is empty</h3>
//           <p>Browse our products and heart your favorites!</p>
//           <Link to="/products" className="btn btn-info mt-3">Start Shopping</Link>
//         </div>
//       ) : (
//         <div className="row g-4">
//           {wishlistItems.map((item) => (
//             <div className="col-md-4 col-lg-3" key={item.id}>
//               <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
//                 <img 
//                   src={imagepath + item.product_photo} 
//                   className="card-img-top" 
//                   alt={item.product_name}
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//                 <div className="card-body text-center d-flex flex-column">
//                   <h5 className="fw-bold" style={{ color: "teal" }}>{item.product_name}</h5>
//                   <p className="small text-muted flex-grow-1">Ksh {item.product_cost}</p>
                  
//                   <div className="d-grid gap-2">
//                     <button 
//                       className="btn btn-info text-white btn-sm" 
//                       onClick={() => moveToCart(item)}
//                     >
//                       <ShoppingCart size={16} className="me-2" /> Add to Cart
//                     </button>
//                     <button 
//                       className="btn btn-outline-danger btn-sm" 
//                       onClick={() => removeItem(item.id)}
//                     >
//                       <Trash2 size={16} className="me-2" /> Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;

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
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
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
                <img src={imagepath + item.product_photo} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h6 className="fw-bold" style={{ color: "teal" }}>{item.product_name}</h6>
                  <p className="fw-bold">Ksh {item.product_cost}</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}><Trash2 size={16}/></button>
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