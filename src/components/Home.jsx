// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Carousel from './Carousel'
// import Footer from './Footer'
// import Prefooter from './Prefooter'
// import CarouselCard from './Cardcarousel'




// const Home = () => {
//   const navigate = useNavigate()
//   // declare the states here 
//   const [loading, setLoading] = useState("")
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState("")
//   // function to get products 
//   const getproducts = async () => {
//     setLoading("Please wait...")
//     try {
//       const response = await axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts")
//       setProducts(response.data)
//       setLoading("")
//     } catch (error) {
//       setError("Something went wrong")
//       setLoading("")
//     }
//   }
//   // call the function 
//   useEffect(() => {
//     getproducts()
//   }, [])
//   const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/"
//   return (
//     <div className="row">
//       {/* carousel goes here  */}
//       <Carousel />
//       {/* navbar goes here  */}

//     {/* What is new section  */} 
//      <section className='col-md-12 row card-shadow  'style={{backgroundColor:"teal"}} >
//     <h1 className='text-center 'style={{ textDecoration:"overline", color:"lemonchiffon"}}>What's New</h1>
     
  
//       <div className=' col-md-6 mb-2 '>
//         <div className="card-body text-center m-3" style={{backgroundColor:"lemonchiffon" ,borderRadius:"10px"}}>
//         <h2 className='text-center ' style={{color:"teal"}}>Customize  your own pieces and gift boxes</h2>
//         <p>You can now customize a piece to your own liking.Share ant engraving you may want on any of the pieces.This is perfect for gifts! </p>
//         <h3  className='text-center ' style={{color:"teal"}}>Customize your own piece with the following simple steps</h3> <br /> <p className='text-start  p-3 '>
//         1.Upload a photo of the piece you would like(must be metallic) <br />
//         2.Give a description of what you would like to be engraved <br />
//         3.Add you phone number so that we are able to reach you once it is done<br />
//         4.Send the information to us and we shall start working on it</p>
//               <button className='btn btn-info w-50 p-2 m-3' onClick={() => navigate("/customize",)}>Find out More</button>
               
//         </div>
//          </div>
//         <div className="row card-shadow  col-md-6 mb-4 mt-3 " style={{backgroundColor:"lemonchiffon", borderRadius:"10px" }}>
//           <div className="card-body text-center">
//            <h2 className='text-center'style={{color:"teal"}} >Explore our vast categories</h2>
//            {/* <p>You can now customize a piece to your own liking.Share ant engraving you may want on any of the pieces.This is perfect for gifts! </p> */}
//  <CarouselCard/>
//            <p><h3>Click the category buttons to find out more, Now!</h3></p>
//          {/* <img src="images/5_10PCS New Coffee Color Love Pendent Hair Tie… - Copy - Copy.jpg" alt=""  className='w-100 h-50'/>  */}
//          <button className='btn btn-info w-20 p-2 m-3' onClick={() => navigate("/men",)}>Men's</button>
//         <button className='btn btn-info w-20 p-2 m-2' onClick={() => navigate("/women",)}>Women's</button>
//         <button className='btn btn-info w-20 p-2 m-2' onClick={() => navigate("/aesthetic",)}>Aesthetic</button>
//         <button className='btn btn-info w-20 p-2 m-2' onClick={() => navigate("/traditional",)}>Traditional</button>

        
//        </div>
//       </div>
//     </section>  <br />

// {/* <section class="container py-5">
// <h1 className='text-center 'style={{color:"lemonchiffon", textDecoration:"overline"}}>What's New</h1>
//             <div class="row g-4">
//                 <div class="col-md-6 col-lg-3">
//                     <div class="card shadow h-50">
//                         {/* <div class="card-header">
//                             <h5 class="text-center text-dark">Clips</h5>
//                         </div> */}
//                         {/* <div class="card-body">
//                             <img src="images/Add A Touch Of Elegance To Your Hairstyle With… - Copy - Copy.jpg"className='w-100 h-50'
//                                 alt="Hair clips" class="product-img"/>
//                             <p class="mt-3">We have for both locs and braids.</p>
//                         </div>
//                         <div class="card-footer text-center">
//                             <span class="btn bg-danger text-white">Kshs 500</span>
//                         </div>
//                     </div>
//                 </div>
//                 </div> */}
//                 {/* <div class="col-md-6 col-lg-3">
//                     <div class="card shadow h-100">
//                         <div class="card-header">
//                             <h5 class="text-center text-dark">Fascinators</h5>
//                         </div>
//                         <div class="card-body"> */}
//                             {/* <img src="images/attractive-4701078_1920.jpg" alt="Fascinators" class="product-img" className='w-100 h-50'/>
//                             <p class="mt-3">They come in different colours and are of high quality.</p>
//                         </div>
//                         <div class="card-footer">
//                             <span class="btn bg-danger text-white">Kshs 100</span>
//                         </div>
//                     </div>
//                 </div>
// </section> */} 


 

//       <h1 className='text-center 'style={{color:"lemonchiffon", textDecoration:"overline"}}>Our products!!</h1>
//       <div class="row g-4 mb-5">
//                 <div class="col-md-4">
//                     <div class=" text-center p-3 h-100" style={{backgroundColor:"lemonchiffon"}}>
//                         <h5 class="text-dark">Arm cuffs</h5>
//                         <img src="images/Summer Flower Metal Geometric Irregular Gold….jpg" alt="Arm cuffs"className='w-100 h-50'style={{height:"250px",width:"100%",borderRadius:"10px"}}
//                             class="product-img"/>
//                         <p class="mt-3">There are a stylish and unique collection for your everyday styling</p>
//                         <button class="btn bg-info text-dark">Kshs 1200</button>
//                     </div>
//                 </div>
                
//                 <div class="col-md-4">
//                     <div class=" text-center p-3 h-100"style={{backgroundColor:"lemonchiffon"}}>
//                         <h5 class="text-dark">Bangles</h5>
//                         <img src="images/Gold Plated Boho Multi Layer Beaded Bracelet Set… - Copy.jpg" alt="Bangles"style={{height:"250px",width:"100%",borderRadius:"10px"}}
//                             class="product-img"/>
//                         <p class="mt-3">There are a great way to showcase your taste and to add a little flavor to your
//                             everyday outfits.</p>
//                         <button class="btn bg-info text-dark">Kshs 1250</button>
//                     </div>
//                 </div>
                
//                 <div class="col-md-4">
//                     <div class=" text-center p-3 h-100"style={{backgroundColor:"lemonchiffon"}}>
//                         <h5 class="text-dark">Rings</h5>
//                         <img src="images/New Adjustable In Sizeexquisite Butterfly Flower… (1).jpg" alt="Rings"style={{height:"250px",width:"100%",borderRadius:"10px"}}
//                             class="product-img"/>
//                         <p class="mt-3">There are a stylish and unique collection for your everyday styling</p>
//                         <button class="btn bg-info text-dark">Kshs 900</button>
//                     </div>
//                 </div>
//                 </div>
//                  <button className='btn btn-info w-50 p-2 m-4'onClick={() => navigate("/")}>Click the button to explore all of products</button> 
            

//      {/* {} /* bind the states  */ }
//       {/* <h2 className='text-warning'>{loading}</h2>
//       <h2 className="text-danger">{error}</h2> */}
//       {/* map the products  */}
//       {/* {products.map(singleproduct => (
//         <div className="col-md-3 mb-4 p-4">
//           <div className="card shadow h-100 " style={{backgroundColor:"lemonchiffon"}}>
//             <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px"}} />
//             <div className="card-body text-center">
//               <h2 style={{color:"#316d6a"}}>{singleproduct.product_name}</h2>
//               <p>{singleproduct.product_description}</p>
//                <div class="card-footer ">
//               <b style={{color:"#349691ff"}}>Kshs {singleproduct.product_cost}</b><br />
//               <button className='btn btn-info w-100' onClick={() => navigate("/makepayment",{state:{singleproduct}})}>Purchase Now</button> */}

               
//               {/* </div>
              
//             </div> */}
          

//           {/* </div>
//         </div>  */}





        
      
//       <Prefooter/>
      
//       <Footer/>
//     </div>
    
//   )
// }

// export default Home
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Heart, ShoppingCart, Tag, Sparkles } from 'lucide-react'; // Suggested icon library
// import Carousel from './Carousel';
// import Footer from './Footer';
// import Prefooter from './Prefooter';
// import CarouselCard from './Cardcarousel';

// const Home = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState("");
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");

//   const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/";

//   const getproducts = async () => {
//     setLoading("Loading our collection...");
//     try {
//       const response = await axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts");
//       setProducts(response.data);
//       setLoading("");
//     } catch (error) {
//       setError("Something went wrong");
//       setLoading("");
//     }
//   };

//   useEffect(() => {
//     getproducts();
//   }, []);

//   // Handlers for Cart and Wishlist (to be connected to your Context/State)
//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push({ ...product, qty: 1 });
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert("Added to cart!");
//   };

//   return (
//     <div className="container-fluid p-0">
//       <Carousel />

//       {/* --- SECTION: WHAT'S NEW --- */}
//       <section className="row mx-0 py-5" style={{ backgroundColor: "teal" }}>
//         <div className="col-12 text-center mb-4">
//           <h1 style={{ textDecoration: "overline", color: "lemonchiffon" }}>What's New</h1>
//         </div>

//         <div className="col-md-6 mb-3">
//           <div className="card-body text-center p-4 h-100 shadow-sm" style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
//             <h2 style={{ color: "teal" }}>Customize Your Own Pieces</h2>
//             <p className="px-3">Upload a photo of a metallic piece, describe your engraving, and we'll handle the rest. Perfect for unique gifts!</p>
//             <button className="btn btn-info px-4 py-2 mt-2 shadow-sm" onClick={() => navigate("/customize")}>
//               Find out More
//             </button>
//           </div>
//         </div>

//         <div className="col-md-6 mb-3">
//           <div className="card-body text-center p-4 h-100 shadow-sm" style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
//             <h2 style={{ color: "teal" }}>Explore Categories</h2>
//             <CarouselCard />
//             <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
//               {["Men", "Women", "Aesthetic", "Traditional"].map((cat) => (
//                 <button key={cat} className="btn btn-info btn-sm px-3" onClick={() => navigate(`/${cat.toLowerCase()}`)}>
//                   {cat}'s
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- ADVERTISEMENT: FLASH SALE --- */}
//       <div className="container my-5">
//         <div className="row bg-dark text-white rounded overflow-hidden shadow mx-1" style={{ borderLeft: "10px solid #17a2b8" }}>
//           <div className="col-md-8 p-5">
//             <h5 className="text-info fw-bold"><Tag size={20} className="me-2"/> LIMITED TIME OFFER</h5>
//             <h2 className="display-5 fw-bold">Flash Sale: 30% OFF!</h2>
//             <p className="lead">Get the best deals on all Traditional and Aesthetic collections this weekend only.</p>
//             <button className="btn btn-info btn-lg mt-3 fw-bold" onClick={() => navigate("/traditional")}>Shop The Sale</button>
//           </div>
//           <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center bg-secondary bg-opacity-25">
//              <Sparkles size={120} className="text-info opacity-50" />
//           </div>
//         </div>
//       </div>

//       {/* --- SECTION: PRODUCTS --- */}
//       <div className="container mb-5">
//         <h1 className="text-center mb-5" style={{ color: "teal", textDecoration: "overline" }}>Our Collection</h1>
        
//         {loading && <div className="text-center w-100"><h3>{loading}</h3></div>}
//         {error && <div className="text-center text-danger w-100"><h3>{error}</h3></div>}

//         <div className="row g-4">
//           {products.slice(0, 8).map((product) => (
//             <div className="col-md-3" key={product.id}>
//               <div className="card shadow-sm h-100 border-0" style={{ backgroundColor: "lemonchiffon", position: "relative" }}>
                
//                 {/* Wishlist Button */}
//                 <button className="btn btn-light rounded-circle shadow-sm" style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10 }}>
//                   <Heart size={18} color="red" />
//                 </button>

//                 <img 
//                   src={imagepath + product.product_photo} 
//                   alt={product.product_name} 
//                   className="card-img-top" 
//                   style={{ height: "200px", objectFit: "cover" }} 
//                 />
                
//                 <div className="card-body text-center d-flex flex-column">
//                   <h5 className="fw-bold" style={{ color: "#316d6a" }}>{product.product_name}</h5>
//                   <p className="small text-muted flex-grow-1">{product.product_description}</p>
//                   <h4 className="fw-bold mb-3" style={{ color: "#349691" }}>Ksh {product.product_cost}</h4>
                  
//                   <div className="d-flex gap-2">
//                     <button className="btn btn-outline-info flex-grow-1" onClick={() => addToCart(product)}>
//                       <ShoppingCart size={16} className="me-1" /> Cart
//                     </button>
//                     <button 
//                       className="btn btn-info flex-grow-1 text-white fw-bold" 
//                       onClick={() => navigate("/makepayment", { state: { product } })}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-5">
//           <button className="btn btn-info px-5 py-2 btn-lg" onClick={() => navigate("/")}>
//             Explore All Products
//           </button>
//         </div>
//       </div>

//       <Prefooter />
//       <Footer />
//     </div>
//   );
// };

// export default Home;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Tag, Sparkles } from 'lucide-react';
import Carousel from './Carousel';
import Footer from './Footer';
import Prefooter from './Prefooter';
import CarouselCard from './Cardcarousel';

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
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 3. Update Navbar count immediately
    window.dispatchEvent(new Event("storage")); 
    
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
    
    if (!wishlist.find(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      
      // Update Navbar count
      window.dispatchEvent(new Event("storage"));
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
            <h3  className='text-center ' style={{color:"teal"}}>Customize your own piece with the following simple steps</h3> <br /> <p className='text-start  p-3 '>
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
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              {["Men", "Women", "Aesthetic", "Traditional"].map((cat) => (
                <button key={cat} className="btn btn-info btn-sm px-3" onClick={() => navigate(`/${cat.toLowerCase()}`)}>
                  {cat}'s
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVERTISEMENT: FLASH SALE --- */}
      <div className="container my-5">
        <div className="row bg-dark text-white rounded overflow-hidden shadow mx-1" style={{ borderLeft: "10px solid #17a2b8" }}>
          <div className="col-md-8 p-5">
            <h5 className="text-info fw-bold"><Tag size={20} className="me-2"/> LIMITED TIME OFFER</h5>
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
    </div>
  );
};

export default Home;