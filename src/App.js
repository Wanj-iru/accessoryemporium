
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import Customize from './components/Customize'

import Reviews from './components/Reviews';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import CategoryPage from './components/Categories';


function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{alignContent:"center"}}>
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
     <h1 style={{color:"lemonchiffon"}}>Welcome to Accessory Emporium</h1>
      </header>
      
      {/* <nav style={{padding:"4", alignSelf:"center"}}>
        <Link to="/"  className='btn btn-info m-1'>Get products</Link>
        <Link to="/signup"  className='btn btn-info m-1 text-center'>Signup</Link>
        <Link to="/signin"  className='btn btn-info m-1'>Signin</Link>
        <Link to="/addproduct"  className='btn btn-info m-1'>Add product</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/customize' element={<Customize/>}/>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/category/:categoryName"element={<CategoryPage />} />
        

        
         {/* <Route path="/home" element={<Home onAddToCart={addToCart} onAddToWishlist={addToWishlist} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} />} /> */}
     
    
        
        
       
       
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
