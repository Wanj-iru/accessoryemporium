// import React, { useState, useEffect } from 'react';
// import { Trash2, ShoppingBag } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();
//   const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

//   // Load items on mount
//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(savedCart);
//   }, []);

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(item => item.product_id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event("authChanged"));
//   };

//   // Ensure numeric math — handle string costs, missing qty, and invalid values
//   const parseNumber = (val) => {
//     if (typeof val === "number") return Number.isFinite(val) ? val : 0;
//     if (val == null) return 0;
//     const cleaned = String(val).replace(/[^0-9.\-]+/g, "");
//     const n = Number(cleaned);
//     return Number.isFinite(n) ? n : 0;
//   };

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const qty = parseNumber(item.qty ?? item.quantity ?? 1);
//     const cost = parseNumber(item.product_cost ?? item.price ?? 0);
//     return acc + cost * qty;
//   }, 0);

//   const formattedTotal = totalPrice.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 2 });

//   return (
//     <div className="container py-5" style={{ minHeight: "80vh" }}>
//       <h2 className="mb-4 fw-bold" style={{ color: "teal" }}>Your Shopping Bag</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center py-5 shadow-sm rounded" style={{ backgroundColor: "lemonchiffon" }}>
//           <ShoppingBag size={64} color="teal" className="mb-3" />
//           <h3>Your cart is empty</h3>
//           <button className="btn btn-info mt-3 fw-bold" onClick={() => navigate("/")}>Go Shopping</button>
//         </div>
//       ) : (
//         <div className="row">
//           {/* List of Items */}
//           <div className="col-md-8">
//             {cartItems.map((item) => (
//               <div key={item.id} className="card mb-3 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
//                 <div className="card-body d-flex align-items-center">
//                   <img src={imagepath + item.product_photo} alt={item.product_name} className="rounded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
//                   <div className="ms-4 flex-grow-1">
//                     <h5 className="fw-bold mb-1" style={{ color: "teal" }}>{item.product_name}</h5>
//                     <p className="mb-0 text-muted small">Qty: {item.qty}</p>
//                     <h5 className="fw-bold mt-2">Ksh {item.product_cost}</h5>
//                   </div>
//                   <button className="btn btn-outline-danger border-0" onClick={() => removeFromCart(item.product_id)}>
//                     <Trash2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Checkout Summary */}
//           <div className="col-md-4">
//             <div className="card p-4 border-0 shadow-sm text-white" style={{ backgroundColor: "teal", borderRadius: "15px" }}>
//               <h4 className="fw-bold mb-4">Summary</h4>
//               <div className="d-flex justify-content-between mb-2">
//                 <span>Subtotal</span>
//                 <span>Ksh {formattedTotal}</span>
//               </div>
//               <div className="d-flex justify-content-between mb-4">
//                 <span>Shipping</span>
//                 <span className="text-info">Calculated at next step</span>
//               </div>
//               <hr />
//               <div className="d-flex justify-content-between mb-4">
//                 <span className="fw-bold">Total</span>
//                 <span className="fw-bold h4">Ksh {formattedTotal}</span>
//               </div>
//               <button className="btn btn-info w-100 fw-bold py-2 shadow" onClick={() => ()}>
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { Trash2, ShoppingBag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

  // Replace with your API endpoint
  const paymentAPI = "http://joysylviambuni.alwaysdata.net/api/mpesa_payment";

  // Load cart items
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Remove item
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.product_id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("authChanged"));
  };

  // Safe number parser
  const parseNumber = (val) => {
    if (typeof val === "number") return Number.isFinite(val) ? val : 0;
    if (val == null) return 0;

    const cleaned = String(val).replace(/[^0-9.-]+/g, "");
    const n = Number(cleaned);

    return Number.isFinite(n) ? n : 0;
  };

  // Total calculation
  const totalPrice = cartItems.reduce((acc, item) => {
    const qty = parseNumber(item.qty ?? item.quantity ?? 1);
    const cost = parseNumber(item.product_cost ?? item.price ?? 0);

    return acc + cost * qty;
  }, 0);

  const formattedTotal = totalPrice.toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  // Phone validation
  const validatePhone = (number) => {
    const regex = /^254\d{9}$/;
    return regex.test(number);
  };

  // Submit payment
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      alert("Phone number must be in the format 254XXXXXXXXX");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", totalPrice);

      const response = await axios.post(paymentAPI, formData);

      console.log(response.data);

      alert("STK Push sent successfully!");

      setShowModal(false);

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Payment request failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container py-5" style={{ minHeight: "80vh" }}>
        <h2 className="mb-4 fw-bold" style={{ color: "teal" }}>
          Your Shopping Bag
        </h2>

        {cartItems.length === 0 ? (
          <div
            className="text-center py-5 shadow-sm rounded"
            style={{ backgroundColor: "lemonchiffon" }}
          >
            <ShoppingBag
              size={64}
              color="teal"
              className="mb-3"
            />

            <h3>Your cart is empty</h3>

            <button
              className="btn btn-info mt-3 fw-bold"
              onClick={() => navigate("/")}
            >
              Go Shopping
            </button>
          </div>
        ) : (
          <div className="row">

            {/* Cart Items */}
            <div className="col-md-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 border-0 shadow-sm"
                  style={{ backgroundColor: "lemonchiffon" }}
                >
                  <div className="card-body d-flex align-items-center">

                    <img
                      src={imagepath + item.product_photo}
                      alt={item.product_name}
                      className="rounded"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="ms-4 flex-grow-1">
                      <h5
                        className="fw-bold mb-1"
                        style={{ color: "teal" }}
                      >
                        {item.product_name}
                      </h5>

                      <p className="mb-0 text-muted small">
                        Qty: {item.qty}
                      </p>

                      <h5 className="fw-bold mt-2">
                        Ksh {item.product_cost}
                      </h5>
                    </div>

                    <button
                      className="btn btn-outline-danger border-0"
                      onClick={() => removeFromCart(item.product_id)}
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="col-md-4">
              <div
                className="card p-4 border-0 shadow-sm text-white"
                style={{
                  backgroundColor: "teal",
                  borderRadius: "15px"
                }}
              >
                <h4 className="fw-bold mb-4">Summary</h4>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>Ksh {formattedTotal}</span>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <span>Shipping</span>
                  <span className="text-info">
                    Calculated at next step
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold h4">
                    Ksh {formattedTotal}
                  </span>
                </div>

                <button
                  className="btn btn-info w-100 fw-bold py-2 shadow"
                  onClick={() => setShowModal(true)}
                >
                  Proceed to Checkout
                </button>

              </div>
            </div>
          </div>
        )}
      </div>

      {/* PAYMENT MODAL */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)"
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0"
              style={{ borderRadius: "20px" }}
            >

              {/* Modal Header */}
              <div
                className="modal-header border-0"
                style={{ backgroundColor: "#f5fff5" }}
              >
                <div className="w-100 text-center">

                  {/* MPESA LOGO */}
                  <img
                    src="mpesa.png"
                    alt="Mpesa"
                    style={{
                      width: "120px",
                      marginBottom: "10px"
                    }}
                  />

                  <h4
                    className="fw-bold"
                    style={{ color: "green" }}
                  >
                    Lipa Na M-Pesa
                  </h4>
                </div>

                <button
                  className="btn border-0 position-absolute end-0 top-0 m-3"
                  onClick={() => setShowModal(false)}
                >
                  <X />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4">

                <form onSubmit={handlePayment}>

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="254XXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div
                    className="alert alert-success text-center fw-bold"
                  >
                    Amount: Ksh {formattedTotal}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-3 fw-bold"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Pay Now"}
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;