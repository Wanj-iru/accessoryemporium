// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Carousel from './Carousel'
// import Footer from './Footer'
// import Prefooter from './Prefooter'
// import Getproductnavbar from './Getproductnavbar'
// import { Heart, ShoppingCart, Tag } from 'lucide-react'


// const Getproduct = () => {

//   // initialize hooks 

//   const navigate = useNavigate()
//   // declare the states here 
  
//   const [loading, setLoading] = useState("");
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const[search,setSearch]=useState("");
//   const [sortOption,setSortOption]=useState("");
//   const[visibleCount, setVisibleCount]= useState(6);
//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const exists = cart.find(item => item.id === product.id);
    
//     if (exists) {
//       exists.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }
    
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.product_name} added to cart!`);
//   };

//   const addToWishlist = (product) => {
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     if (!wishlist.find(item => item.id === product.id)) {
//       wishlist.push(product);
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//       alert("Added to wishlist!");
//     } else {
//       alert("Already in wishlist!");
//     }
//   };

//   // filter products logic goes here 
// const filtered_products= products.filter((item) =>
//   item.product_name.toLowerCase().includes(search.toLowerCase()) ||
//   item.product_description.toLowerCase().includes(search.toLowerCase()) 
// );

// // sorting logic goes here 
// const sorted_products=[...filtered_products].sort((a,b) =>{
//   if (sortOption ==="price_low_high"){
//     return a.product_cost -b.product_cost;
//   }
//   if (sortOption ==="price_high_low"){
//     return b.product_cost -a.product_cost;
//   }
//   if(sortOption ==="name_asc"){
//     return a.product_name.localCompare(b.product_name);
//   }
//   if (sortOption ==="name_desc"){
//     return b.product_name.localCompare(a.product_name)
//   }
//   return 0;
// });


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
//       {/* <div className="row justify-content-center mt-3 mb-4">
//         <input 
//         className='form-control'
//         type='search'
//         placeholder='Search products...'
//         value={search}
//         onChange={(e)=> setSearch(e.target.value)}/>
//       </div>

//       {/* sort dropdown  */}
//       {/* <div>
//         <select 
//           className="form-control"
//           value={sortOption}
//           onChange={(e)=> setSortOption(e.target.value)}>

//             <option value="">Sort Products</option>
//             <option value="price_low_high">Price:Low to High</option>
//             <option value="price_high-low">Price:High to low</option>
//             <option value="name_asc">a-z</option>
//             <option value="name_desc">z-a</option>
            
//         </select>
//       </div> */} 



//       <Carousel />
//       <Getproductnavbar/>
//       <section>
//  <div className="row justify-content-center mt-3 col-md-4 mb-2">
//         <input 
//         className='form-control col-md-4'
//         type='search'
//         placeholder='Search products...'
//         value={search}
//         onChange={(e)=> setSearch(e.target.value)}/>
      

//       {/* sort dropdown  */}
//       <div>
//         <select 
//           className="form-control col-md-6"
//           value={sortOption}
//           onChange={(e)=> setSortOption(e.target.value)}>

//             <option value="">Sort Products</option>
//             <option value="price_low_high">Price:Low to High</option>
//             <option value="price_high-low">Price:High to low</option>
//             <option value="name_asc">a-z</option>
//             <option value="name_desc">z-a</option>
            
//         </select>
//       </div>
// </div>
// </section>

// {/* Advertisement bannetr  */}
// <div className="container mb-5">
//         <div className="row bg-dark text-white rounded p-4 align-items-center mx-1 shadow">
//           <div className="col-md-8">
//             <h2 className="text-info"><Tag className="me-2" /> Clearance Sale!</h2>
//             <p className="lead">Get up to 50% off on all Traditional pieces. Offer valid until Sunday.</p>
//             <button className="btn btn-outline-info" onClick={() => navigate("/traditional")}>Shop Sale</button>
//           </div>
//           <div className="col-md-4 text-center d-none d-md-block">
//             <h1 style={{fontSize: '4rem', opacity: 0.3}}>SALE</h1>
//           </div>
//         </div>
//       </div>


//       {/* navbar goes here  */}
      
//     {/* What is new section 
//     <h1 className='text-center 'style={{color:"lemonchiffon", textDecoration:"overline"}}>What's New</h1> */}
    
//     {/* <section className="row card-shadow  ">
//       <div className='col-md-6  p-4'>
//         <h2 className='text-center'>Customize  your own pieces and gift boxes</h2>
//         <p>You can now customize a piece to your own liking.Share ant engraving you may want on any of the pieces.This is perfect for gifts! </p>
//          <img src="images/Men's Genuine Leather Black Bracelet Set (P2) Set….jpg" alt=""  className='w-100 h-50'/> 
//          <button type='submit' className='btn  text-light text-center w-100'>Find out more</button> 
//         <p>Bulid your own gift box however you may prefer.</p>
//         </div>
        
//         <div className="col-md-6 p-4">
//            <h2 className='text-center'>Explore our vast categories</h2>
//         <img src="images/5_10PCS New Coffee Color Love Pendent Hair Tie… - Copy - Copy.jpg" alt=""  className='w-100 h-50'/> 
//          <button type='submit' className='btn  text-light text-center w-100'>Find out more</button> 
//       </div>
//     </section> */}

//       <h1 className='text-center 'style={{color:"lemonchiffon", textDecoration:"overline"}}>Available products!!</h1>
//       {/* bind the states  */}
//       <h2 className='text-warning'>{loading}</h2>
//       <h2 className="text-danger">{error}</h2>
//       {/* map the products  */}
//       {sorted_products.map(singleproduct => (
//         <div className="col-md-3 mb-4 p-4">
//           <div className="card shadow h-100 " style={{backgroundColor:"lemonchiffon"}}>
//             <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px"}} />
//             <div className="card-body text-center">
//               <h2 style={{color:"#316d6a"}}>{singleproduct.product_name}</h2>
//               <p>{singleproduct.product_description}</p>
//                <div class="card-footer ">
//               <b style={{color:"#349691ff"}}>Kshs {singleproduct.product_cost}</b><br />
//               <button className='btn btn-info w-100' onClick={() => navigate("/makepayment",{state:{singleproduct}})}>Purchase Now</button>

               
//               </div>
              
//             </div>
          

//           </div>
//         </div> 
//       ))}

//       {visibleCount < sorted_products.length && (
//        <div className='text-center mt-4'>
//         <button
//         className='btn btn-primary'
//         onClick={() => setVisibleCount(visibleCount + 8)}
//         >
//           Load More
//         </button>
//        </div>
//       )}
//       <Prefooter/>
//       <Footer/>
//     </div>
    
//   );
// }

// export default Getproduct
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'
import Prefooter from './Prefooter'

import { Heart, ShoppingCart, Tag } from 'lucide-react' // Install via: npm install lucide-react

const Getproduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/"

  useEffect(() => {
    const getproducts = async () => {
      setLoading("Fetching collection...")
      try {
        const response = await axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts")
        setProducts(response.data)
        setLoading("")
      } catch (err) {
        setError("Unable to load products")
        setLoading("")
      }
    }
    getproducts()
  }, [])

  // --- LOGIC: WISHLIST & CART ---
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === product.id);
    
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.product_name} added to cart!`);
  };

  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.find(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert("Added to wishlist!");
    } else {
      alert("Already in wishlist!");
    }
  };

  // Filter & Sort Logic
  const filtered = products.filter(item =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "price_low_high") return a.product_cost - b.product_cost;
    if (sortOption === "price_high_low") return b.product_cost - a.product_cost;
    if (sortOption === "name_asc") return a.product_name.localeCompare(b.product_name);
    if (sortOption === "name_desc") return b.product_name.localeCompare(a.product_name);
    return 0;
  });

  return (
    <div className="container-fluid p-0">
      <Carousel />
     

      {/* SEARCH & SORT BAR */}
      <section className="container my-4">
        <div className="row g-3 justify-content-center bg-light p-3 rounded shadow-sm mx-1">
          <div className="col-md-5">
            <input 
              className='form-control' 
              type='search' 
              placeholder='Search products...' 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="">Sort Products</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
              <option value="name_asc">A - Z</option>
              <option value="name_desc">Z - A</option>
            </select>
          </div>
        </div>
      </section>

      {/* --- ADVERTISEMENT BANNER --- */}
      <div className="container mb-5">
        <div className="row bg-dark text-white rounded p-4 align-items-center mx-1 shadow">
          <div className="col-md-8">
            <h2 className="text-info"><Tag className="me-2" /> Clearance Sale!</h2>
            <p className="lead">Get up to 50% off on all Traditional pieces. Offer valid until Sunday.</p>
            <button className="btn btn-outline-info" onClick={() => navigate("/traditional")}>Shop Sale</button>
          </div>
          <div className="col-md-4 text-center d-none d-md-block">
            <h1 style={{fontSize: '4rem', opacity: 0.3}}>SALE</h1>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="container mb-5">
        <h1 className='text-center mb-4' style={{color:"teal", textDecoration:"overline"}}>Our Collection</h1>
        {loading && <h3 className='text-center text-warning'>{loading}</h3>}
        {error && <h3 className='text-center text-danger'>{error}</h3>}

        <div className="row g-4">
          {sorted.slice(0, visibleCount).map(product => (
            <div className="col-md-3" key={product.id}>
              <div className="card shadow-sm h-100 border-0" style={{backgroundColor:"lemonchiffon", position: "relative"}}>
                
                {/* Wishlist Icon */}
                <button 
                  className="btn btn-light rounded-circle shadow-sm" 
                  style={{position: "absolute", top: "10px", right: "10px", zIndex: 5}}
                  onClick={() => addToWishlist(product)}
                >
                  <Heart size={18} color="red" />
                </button>

                <img src={imagepath + product.product_photo} className="card-img-top" style={{height:"200px", objectFit:"cover"}} alt="product" />
                
                <div className="card-body text-center d-flex flex-column">
                  <h5 style={{color:"#316d6a"}}>{product.product_name}</h5>
                  <p className="small text-muted flex-grow-1">{product.product_description}</p>
                  <h4 className="fw-bold mb-3" style={{color:"#349691"}}>Ksh {product.product_cost}</h4>
                  
                  <div className="d-flex gap-2">
                    <button className='btn btn-outline-info flex-grow-1' onClick={() => addToCart(product)}>
                      <ShoppingCart size={16} /> Cart
                    </button>
                    <button className='btn btn-info flex-grow-1 text-white' onClick={() => navigate("/makepayment",{state:{singleproduct: product}})}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < sorted.length && (
          <div className='text-center mt-5'>
            <button className='btn btn-teal text-white px-5' style={{backgroundColor: "teal"}} onClick={() => setVisibleCount(visibleCount + 8)}>
              Load More
            </button>
          </div>
        )}
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
}

export default Getproduct;