// export default function CartPage({ cart }) {
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Your Shopping Cart</h2>
//       {cart.map(item => (
//         <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
//           {item.title} - {item.quantity} x ${item.price}
//         </div>
//       ))}
//       <h3>Total: ${total.toFixed(2)}</h3>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();
//   const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

//   // 1. Load cart from localStorage
//   useEffect(() => {
//     // const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     // setCartItems(savedCart);
//     const items = JSON.parse(localStorage.getItem('cart')) || [];
//   setCartItems(items);
//   }, []);

//   // 2. Update Quantity (Plus/Minus)
//   const updateQuantity = (id, amount) => {
//     const updatedCart = cartItems.map(item => {
//       if (item.id === id) {
//         const newQty = item.quantity + amount;
//         return { ...item, quantity: newQty > 0 ? newQty : 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // 3. Remove Item
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // 4. Calculate Subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + (item.product_cost * item.quantity), 0);

//   return (
//     <div className="container py-5">
//       <div className="d-flex align-items-center mb-4">
//         <button onClick={() => navigate(-1)} className="btn btn-link text-dark p-0 me-3">
//           <ArrowLeft size={24} />
//         </button>
//         <h2 className="mb-0" style={{ color: "teal" }}>Shopping Cart</h2>
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="text-center py-5 rounded shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
//           <h3>Your cart is empty</h3>
//           <p className="text-muted">Looks like you haven't added anything yet.</p>
//           <Link to="/" className="btn btn-info mt-3 px-4">Go Shopping</Link>
//         </div>
//       ) : (
//         <div className="row g-4">
//           {/* Cart Items List */}
//           <div className="col-lg-8">
//             {cartItems.map((item) => (
//               <div key={item.id} className="card mb-3 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
//                 <div className="card-body">
//                   <div className="row align-items-center">
//                     <div className="col-4 col-md-2">
//                       <img 
//                         src={imagepath + item.product_photo} 
//                         alt={item.product_name} 
//                         className="img-fluid rounded"
//                         style={{ objectFit: "cover", height: "80px" }}
//                       />
//                     </div>
//                     <div className="col-8 col-md-4">
//                       <h5 className="mb-0 fw-bold" style={{ color: "teal" }}>{item.product_name}</h5>
//                       <p className="mb-0 text-muted small">Ksh {item.product_cost}</p>
//                     </div>
//                     <div className="col-6 col-md-3 mt-3 mt-md-0">
//                       <div className="d-flex align-items-center border rounded bg-white w-fit-content">
//                         <button className="btn btn-sm" onClick={() => updateQuantity(item.id, -1)}><Minus size={14}/></button>
//                         <span className="px-2 fw-bold">{item.quantity}</span>
//                         <button className="btn btn-sm" onClick={() => updateQuantity(item.id, 1)}><Plus size={14}/></button>
//                       </div>
//                     </div>
//                     <div className="col-6 col-md-3 text-end mt-3 mt-md-0">
//                       <p className="fw-bold mb-0">Ksh {item.product_cost * item.quantity}</p>
//                       <button className="btn btn-link text-danger p-0" onClick={() => removeItem(item.id)}>
//                         <Trash2 size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary Section */}
//           <div className="col-lg-4">
//             <div className="card border-0 shadow-sm p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
//               <h4 className="fw-bold mb-4" style={{ color: "teal" }}>Order Summary</h4>
//               <div className="d-flex justify-content-between mb-2">
//                 <span>Subtotal</span>
//                 <span>Ksh {subtotal}</span>
//               </div>
//               <div className="d-flex justify-content-between mb-4">
//                 <span>Shipping</span>
//                 <span className="text-success fw-bold">FREE</span>
//               </div>
//               <hr />
//               <div className="d-flex justify-content-between mb-4 h5 fw-bold">
//                 <span>Total</span>
//                 <span style={{ color: "teal" }}>Ksh {subtotal}</span>
//               </div>
//               <button 
//                 className="btn btn-info btn-lg w-100 text-white fw-bold shadow-sm"
//                 onClick={() => navigate("/makepayment", { state: { cartItems, total: subtotal } })}
//               >
//                 <CreditCard className="me-2" /> Checkout
//               </button>
//               <p className="text-center mt-3 small text-muted">
//                 Secure payment powered by your API
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

  // Load items on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage")); // Sync Navbar
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.product_cost * item.qty), 0);

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <h2 className="mb-4 fw-bold" style={{ color: "teal" }}>Your Shopping Bag</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5 shadow-sm rounded" style={{ backgroundColor: "lemonchiffon" }}>
          <ShoppingBag size={64} color="teal" className="mb-3" />
          <h3>Your cart is empty</h3>
          <button className="btn btn-info mt-3 fw-bold" onClick={() => navigate("/")}>Go Shopping</button>
        </div>
      ) : (
        <div className="row">
          {/* List of Items */}
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div key={item.id} className="card mb-3 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
                <div className="card-body d-flex align-items-center">
                  <img src={imagepath + item.product_photo} alt={item.product_name} className="rounded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                  <div className="ms-4 flex-grow-1">
                    <h5 className="fw-bold mb-1" style={{ color: "teal" }}>{item.product_name}</h5>
                    <p className="mb-0 text-muted small">Qty: {item.qty}</p>
                    <h5 className="fw-bold mt-2">Ksh {item.product_cost}</h5>
                  </div>
                  <button className="btn btn-outline-danger border-0" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm text-white" style={{ backgroundColor: "teal", borderRadius: "15px" }}>
              <h4 className="fw-bold mb-4">Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Ksh {totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span>Shipping</span>
                <span className="text-info">Calculated at next step</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold h4">Ksh {totalPrice}</span>
              </div>
              <button className="btn btn-info w-100 fw-bold py-2 shadow" onClick={() => navigate("/makepayment",  { state: { singleproduct: totalPrice } })}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
