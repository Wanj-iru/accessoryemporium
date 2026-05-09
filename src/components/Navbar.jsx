// // import React from 'react'

// // const Navbar = () => {
// //     return (
// //         <section class="row">
// //             <div class="col-md-12">
// //                 {/* <!-- a nav with the navbar content  --> */}
// //                 <nav class="navbar  navbar-expand-md " style={{ backgroundColor: "#186161" }}>
// //                     <a href="navbar" class="navbar-brand   " style={{ color: "lemonchiffon" }}>Accessory Emporium
// //                         <p class="mb-0" style={{fontSize:"x-small"}}>Shine with unforgettable  brightness!</p>
// //                     </a>
// //                     <button class=" navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
// //                         <span class="navbar-toggler-icon"></span>
// //                     </button>
// //                     {/* <!-- a division containing the links  --> */}
// //                     <div class="collapse navbar-collapse" id="navbarcollapse">
// //                         <div class="navbar-nav">
// //                            <a href="/home" class="nav-link" style={{ color: "lemonchiffon" }}>Home</a>
// //                             <a href="/" class="nav-link" style={{ color: "lemonchiffon" }}>Available Products</a>
// //                             <a href="/addproduct" class="nav-link" style={{ color: "lemonchiffon" }}>Add product</a>
// //                             <a href="/signup" class="nav-link" style={{ color: "lemonchiffon" }}>Sign Up</a>
// //                             <a href="/signin" class="nav-link" style={{ color: "lemonchiffon" }}>Sign In</a>
// //                             {/* Search form  */}
// //                             {/* <div class="col-md-12 w-100 "> */}
// //                             {/* <form class="d-flex navbar-form mt-3 mt-lg-0 w-100" role="search" style={{backgroundColor:"bisque"}} >
// //                                 <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
// //                                 <button class="btn btn-outline-info" type="submit">Search</button>
// //                             </form>
// //                             </div> */}
// //                         </div>
// //                     </div>

// //                 </nav>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Navbar
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ShoppingCart, Heart, Menu,  } from 'lucide-react';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [cartCount, setCartCount] = useState(0);
//   const [wishlistCount, setWishlistCount] = useState(0);

//   // Sync counts from localStorage to show real-time numbers on the icons
//   const updateCounts = () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     setCartCount(cart.length);
//     setWishlistCount(wishlist.length);
//   };

//   useEffect(() => {
//     updateCounts();
//     // Listen for storage events so the navbar updates if items are added elsewhere
//     window.addEventListener('storage', updateCounts);
//     return () => window.removeEventListener('storage', updateCounts);
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: "lemonchiffon", borderBottom: "2px solid teal" }}>
//       <div className="container">
//         {/* Logo */}
        
// <a href="navbar" class="navbar-brand   " style={{ color: "teal" }}>Accessory Emporium
//                         <p class="mb-0" style={{fontSize:"14px"}}>Shine with unforgettable  brightness!</p>
//                     </a>
//         {/* Mobile Toggle Button */}
//         <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <Menu size={28} color="teal" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link fw-bold text-dark" to="/home">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link fw-bold text-dark" to="/">Available Products</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link fw-bold text-dark" to="/addproduct">Add Product</Link>
//             </li>
//              <li className="nav-item">
//               <Link className="nav-link fw-bold text-dark" to="/signup">SignUp</Link>
//             </li>
//              {/* <li className="nav-item">
//               <Link className="nav-link fw-bold text-dark" to="/signin">Signin</Link>
//             </li> */}
            

//             {/* Categories Dropdown */}
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle fw-bold text-dark" href="" role="button" data-bs-toggle="dropdown">
//                 Categories
//               </a>
//               <ul className="dropdown-menu border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
//                 <li><Link className="dropdown-item" to="/men">Men's Collection</Link></li>
//                 <li><Link className="dropdown-item" to="/women">Women's Collection</Link></li>
//                 <li><Link className="dropdown-item" to="/aesthetic">Aesthetic</Link></li>
//                 <li><Link className="dropdown-item" to="/traditional">Traditional</Link></li>
//               </ul>
//             </li>
//           </ul>

//           {/* Icon Section: Wishlist and Cart */}
//           <div className="d-flex align-items-center gap-4">
            
//             {/* Wishlist Link */}
//             <Link to="/wishlist" className="position-relative text-decoration-none" title="Wishlist">
//               <Heart size={26} color="teal" />
//               {wishlistCount > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             {/* Cart Link */}
//             <Link to="/cart" className="position-relative text-decoration-none" title="Shopping Cart">
//               <ShoppingCart size={26} color="teal" />
//               {cartCount > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-dark" style={{ fontSize: "10px" }}>
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* Optional: Login/Profile Button */}
//             <button className="btn btn-info btn-sm rounded-pill px-4 fw-bold" onClick={() => navigate('/signin')}>
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Menu } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [user, setUser] = useState(null); // Track the logged-in user

  // Sync counts and user status from localStorage
  const updateNavbar = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
    setUser(loggedInUser);
  };

  useEffect(() => {
    updateNavbar();
    // Listen for storage events (triggered by our custom event in Signin.js)
    window.addEventListener('storage', updateNavbar);
    return () => window.removeEventListener('storage', updateNavbar);
  }, []);

  // Logout Function
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('user');
      // Optional: localStorage.removeItem('cart'); // Clear cart on logout if preferred
      updateNavbar(); // Refresh navbar state
      navigate('/signin');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: "lemonchiffon", borderBottom: "2px solid teal" }}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand" style={{ color: "teal", textDecoration: "none" }}>
          <span className="fw-bold">Accessory Emporium</span>
          <p className="mb-0" style={{ fontSize: "14px" }}>Shine with unforgettable brightness!</p>
        </Link>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu size={28} color="teal" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/">Available Products</Link>
            </li>
            
            {/* Only show Add Product if user is logged in */}
            {user && (
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" to="/addproduct">Add Product</Link>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" to="/signup">SignUp</Link>
              </li>
            )}

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-bold text-dark" href='' role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul className="dropdown-menu border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon" }}>
                <li><Link className="dropdown-item" to="/category/men">Men's Collection</Link></li>
                <li><Link className="dropdown-item" to="/category/women">Women's Collection</Link></li>
                <li><Link className="dropdown-item" to="/category/aesthetic">Aesthetic</Link></li>
                <li><Link className="dropdown-item" to="/category/traditional">Traditional</Link></li>
              </ul>
            </li>
          </ul>

          {/* Icon Section */}
          <div className="d-flex align-items-center gap-4">
            <Link to="/wishlist" className="position-relative text-decoration-none" title="Wishlist">
              <Heart size={26} color="teal" />
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "10px" }}>
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="position-relative text-decoration-none" title="Shopping Cart">
              <ShoppingCart size={26} color="teal" />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-dark" style={{ fontSize: "10px" }}>
                  {cartCount}
                </span>
              )}
            </Link>

            <li><Link  to="/reviews"className="position-relative text-decoration-none" > <span className="  badge rounded-pill  text-dark" style={{ fontSize: "20px", backgroundColor:"teal" }}>
                  Reviews
                </span></Link></li>

            {/* Dynamic Button: Show Logout if logged in, else show Login */}
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <span className="small fw-bold d-none d-md-inline" style={{ color: "teal" }}>Hi {user.username }</span>
                <button className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <button className="btn btn-info btn-sm rounded-pill px-4 fw-bold text-white" onClick={() => navigate('/signin')}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;