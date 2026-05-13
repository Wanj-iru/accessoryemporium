
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Tag, Sparkles } from 'lucide-react';
import Carousel from './Carousel';
import Footer from './Footer';
import Prefooter from './Prefooter';
import CarouselCard from './Cardcarousel';
import Columnfooter from './Columnfooter';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

  const getproducts = async () => {
    setLoading("Loading our collection...");
    try {
      const response = await axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts");
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setError("Something went wrong");
      setLoading("");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // --- REFINED HANDLERS ---

  const addToCart = (product) => {
    // 1. Login Check
    const user = localStorage.getItem('user');
    if (!user) {
      alert("Please login to add items to your cart!");
      navigate("/login");
      return;
    }

    // 2. Logic to push to Cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already in cart to avoid duplicates (optional)
    const existingItem = cart.find(item => item.product_id === product.product_id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    // 3. Update Navbar count immediately
    window.dispatchEvent(new Event("authChanged"));

    alert(`${product.product_name} added to cart!`);
    // Optional: navigate("/cart"); // Uncomment if you want to force them to the cart page immediately
  };

  const addToWishlist = (product) => {
    // 1. Login Check
    const user = localStorage.getItem('user');
    if (!user) {
      alert("Please login to save items to your wishlist!");
      navigate("/login");
      return;
    }

    // 2. Logic to push to Wishlist
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.find(item => item.product_id === product.product_id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      // Update Navbar count
      window.dispatchEvent(new Event("authChanged"));
      alert("Added to wishlist!");
    } else {
      alert("Item is already in your wishlist!");
    }
  };

  return (
    <div className="container-fluid p-0">
      <Carousel />

      {/* --- SECTION: WHAT'S NEW --- */}
      <section className="row mx-0 py-5" style={{ backgroundColor: "teal" }}>
        <div className="col-12 text-center mb-4">
          <h1 style={{ textDecoration: "overline", color: "lemonchiffon" }}>What's New</h1>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card-body text-center p-4 h-100 shadow-sm" style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
            <h2 style={{ color: "teal" }}>Customize Your Own Pieces</h2>
            <p className="px-3">Upload a photo of a metallic piece, describe your engraving, and we'll handle the rest. Perfect for unique gifts!</p>
            <h3 className='text-center ' style={{ color: "teal" }}>Customize your own piece with the following simple steps</h3> <br /> <p className='text-start  p-3 '>
              1.Upload a photo of the piece you would like(must be metallic) <br />
              2.Give a description of what you would like to be engraved <br />
              3.Add you phone number so that we are able to reach you once it is done<br />
              4.Send the information to us and we shall start working on it</p>
            <button className="btn btn-info px-4 py-2 mt-2 shadow-sm" onClick={() => navigate("/customize")}>
              Find out More
            </button>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card-body text-center p-4 h-100 shadow-sm" style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
            <h2 style={{ color: "teal" }}>Explore Categories</h2>
            <CarouselCard />
            <button className="btn btn-info px-4 py-2 mt-2 m-2 shadow-sm" onClick={() => navigate("/category/men")}>
              men
            </button><button className="btn btn-info px-4 py-2 mt-2 m-2 shadow-sm" onClick={() => navigate("/category/women")}>
              Women
            </button><button className="btn btn-info px-4 py-2 mt-2 m-2 shadow-sm" onClick={() => navigate("/category/traditional")}>
              Traditional
            </button><button className="btn btn-info px-4 py-2 mt-2 m-2 shadow-sm" onClick={() => navigate("/category/aesthetic")}>
              Aesthetic
            </button>
          </div>
        </div>
      </section>

      {/* --- ADVERTISEMENT: FLASH SALE --- */}
      <div className="container my-5">
        <div className="row bg-dark text-white rounded overflow-hidden shadow mx-1" style={{ borderLeft: "10px solid #17a2b8" }}>
          <div className="col-md-8 p-5">
            <h5 className="text-info fw-bold"><Tag size={20} className="me-2" /> LIMITED TIME OFFER</h5>
            <h2 className="display-5 fw-bold">Flash Sale: 30% OFF!</h2>
            <p className="lead">Get the best deals on all Traditional and Aesthetic collections this weekend only.</p>
            <button className="btn btn-info btn-lg mt-3 fw-bold" onClick={() => navigate("/category/traditional")}>Shop The Sale</button>
          </div>
          <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center bg-secondary bg-opacity-25">
            <Sparkles size={120} className="text-info opacity-50" />
          </div>
        </div>
      </div>

      {/* --- SECTION: PRODUCTS --- */}
      <div className="container mb-5">
        <h1 className="text-center mb-5" style={{ color: "teal", textDecoration: "overline" }}>Our Collection</h1>

        {loading && <div className="text-center w-100"><h3>{loading}</h3></div>}
        {error && <div className="text-center text-danger w-100"><h3>{error}</h3></div>}

        <div className="row g-4">
          {products.slice(0, 8).map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card shadow-sm h-100 border-0" style={{ backgroundColor: "lemonchiffon", position: "relative" }}>

                {/* Wishlist Button */}
                <button
                  className="btn btn-light rounded-circle shadow-sm"
                  style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10 }}
                  onClick={() => addToWishlist(product)}
                >
                  <Heart size={18} color="red" />
                </button>

                <img
                  src={imagepath + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <h5 className="fw-bold" style={{ color: "#316d6a" }}>{product.product_name}</h5>
                  <p className="small text-muted flex-grow-1">{product.product_description}</p>
                  <h4 className="fw-bold mb-3" style={{ color: "#349691" }}>Ksh {product.product_cost}</h4>

                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-info flex-grow-1" onClick={() => addToCart(product)}>
                      <ShoppingCart size={16} className="me-1" /> Cart
                    </button>
                    <button
                      className="btn btn-info flex-grow-1 text-white fw-bold"
                      onClick={() => navigate("/makepayment", { state: { singleproduct: product } })}
                    > Buy Now
                    </button>


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-info px-5 py-2 btn-lg" onClick={() => navigate("/")}>
            Explore All Products
          </button>
        </div>
      </div>

      <Prefooter />
      <Footer />
      <Columnfooter />
    </div>
  );
};

export default Home;