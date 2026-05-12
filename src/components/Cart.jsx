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

  // Ensure numeric math — handle string costs, missing qty, and invalid values
  const parseNumber = (val) => {
    if (typeof val === "number") return Number.isFinite(val) ? val : 0;
    if (val == null) return 0;
    const cleaned = String(val).replace(/[^0-9.\-]+/g, "");
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : 0;
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const qty = parseNumber(item.qty ?? item.quantity ?? 1);
    const cost = parseNumber(item.product_cost ?? item.price ?? 0);
    return acc + cost * qty;
  }, 0);

  const formattedTotal = totalPrice.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 2 });

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
                <span>Ksh {formattedTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span>Shipping</span>
                <span className="text-info">Calculated at next step</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold h4">Ksh {formattedTotal}</span>
              </div>
              <button className="btn btn-info w-100 fw-bold py-2 shadow" onClick={() => navigate("/makepayment", { state: { singleproduct: totalPrice } })}>
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
