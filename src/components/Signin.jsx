// import axios from 'axios'
// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import Footer from './Footer'
// import Prefooter from './Prefooter'

// const Signin = () => {
//   // define the 2 states to sign in 
//   const[email,setEmail]=useState("")
//   const[password,setPassword]=useState("")
//   // define 3 states for posting data 
//   const[loading,setLoading]=useState("")
//   const[success,setSuccess]=useState("")
//   const[error,setError]=useState("")
//   // function to sign in user
//   const handlesubmit=async(e)=>{
//    e.preventDefault()
//    setLoading("Please wait...")
//   //  create a digital envelope 
//   const formdata = new FormData()
//   formdata.append("email",email)
//   formdata.append("password",password)

//   try{
//     const response=await axios.post("http://joysylviambuni.alwaysdata.net/api/signin",formdata)
//     // update setSuccess
//     setSuccess(response.data.message)
//     // update setLoading
//     setLoading("")
//   }
//   catch(error){
//      setError(error.message)
//       setLoading("")
//   }
//   }
//   return (
//     <div className='row mt-1 justify-content-center p-4 pb-4 '>
//       <div className=" card card-shadow col-md-6 p-4"style={{backgroundColor:"lemonchiffon"}}>
//         <h2 className='text-center'>Sign in</h2>
//         {/* bind the states  */}
//         <h2 className="text-warning">{loading}</h2>
//         <h2 className="text-success">{success}</h2>
//         <h2 className="text-danger">{error}</h2> 
//         <form action="" onSubmit={handlesubmit}>
//           <input type="email" className="form-control" placeholder='✉️Enter Email' onChange={(e)=>setEmail(e.target.value)}/> <br />
//           <input type="password" className='form-control' placeholder='🔒Enter password' onChange={(e)=>setPassword(e.target.value)} /><br />
//           <button type='submit' className='btn btn-primary text-light text-center w-100'>Sign in</button><br />
//         </form>
//         <p className='text-center'>Don't have an account?<Link to="/Signup"> Sign up</Link></p>
//       </div>
//       <Prefooter/>
//       <Footer/>
//     </div>

//   )
// }

// export default Signin
// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom' // Added useNavigate
// import Footer from './Footer'
// import Prefooter from './Prefooter'

// const Signin = () => {
//   const navigate = useNavigate(); // Initialize navigation
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
  
//   const [loading, setLoading] = useState("")
//   const [success, setSuccess] = useState("")
//   const [error, setError] = useState("")

//   const handlesubmit = async (e) => {
//     e.preventDefault()
//     setLoading("Please wait...")
//     setError("") // Clear previous errors
    
//     const formdata = new FormData()
//     formdata.append("email", email)
//     formdata.append("password", password)

//     try {
//       const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/signin", formdata)
      
//       // 1. Check if the response contains user data or a success flag
//       if (response.data) {
//         setSuccess("Login Successful!");
//         setLoading("");

//         // 2. SAVE USER TO STORAGE 
//         // This is the "Key" that allows the Add to Cart button to work!
//         localStorage.setItem('user', JSON.stringify(response.data)); 
        
//         // 3. Trigger Navbar update
//         window.dispatchEvent(new Event("storage"));

//         // 4. Redirect to Home after a short delay
//         setTimeout(() => {
//           navigate("/");
//         }, 1500);
//       }
//     }
//     catch (error) {
//       setError("Invalid credentials. Please try again.");
//       setLoading("")
//     }
//   }

//   return (
//     <div className='row mt-1 justify-content-center p-4 pb-4 '>
//       <div className="card shadow col-md-4 p-4" style={{ backgroundColor: "lemonchiffon", border: "none", borderRadius: "15px" }}>
//         <h2 className='text-center mb-4' style={{ color: "teal" }}>Sign In</h2>
        
//         {loading && <p className="text-warning text-center fw-bold">{loading}</p>}
//         {success && <p className="text-success text-center fw-bold">{success}</p>}
//         {error && <p className="text-danger text-center fw-bold">{error}</p>} 

//         <form onSubmit={handlesubmit}>
//           <div className="mb-3">
//             <input 
//               type="email" 
//               className="form-control p-2" 
//               placeholder='✉️ Enter Email' 
//               required
//               onChange={(e) => setEmail(e.target.value)} 
//             />
//           </div>
//           <div className="mb-4">
//             <input 
//               type="password" 
//               className='form-control p-2' 
//               placeholder='🔒 Enter password' 
//               required
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//           </div>
//           <button type='submit' className='btn btn-info text-light text-center w-100 fw-bold shadow-sm'>
//             Sign In
//           </button>
//         </form>
//         <p className='text-center mt-3'>
//           Don't have an account? <Link to="/Signup" style={{ color: "teal", fontWeight: "bold" }}>Sign up</Link>
//         </p>
//       </div>
//       {/* We usually don't put footers inside the centered row, but keeping your structure: */}
//       <div className="mt-5 w-100">
//         <Prefooter />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default Signin
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Prefooter from './Prefooter'

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Verifying credentials...")
    setError("")
    
    const formdata = new FormData()
    formdata.append("email", email)
    formdata.append("password", password)

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/signin", formdata)
      
      if (response.data) {
        // --- DATA CHECK ---
        // Log the response to see if 'username' or 'message' contains the name
        console.log("Backend Response:", response.data);

        // Save the user data. 
        // Ensure response.data contains the username key for the Navbar to read.
        localStorage.setItem('user', JSON.stringify(response.data)); 
        
        setSuccess(`Welcome back! Logging you in...`);
        setLoading("");

        // Trigger the custom event so the Navbar updates the "Signed in as" text immediately
        window.dispatchEvent(new Event("storage"));

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
    catch (error) {
      setError("Invalid credentials. Please check your email/password.");
      setLoading("")
    }
  }

  return (
    <div className='row mt-1 justify-content-center p-4 pb-4 '>
      <div className="card shadow col-md-4 p-4 border-0" style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
        <h2 className='text-center mb-4' style={{ color: "teal", fontWeight: "bold" }}>Sign In</h2>
        
        {/* Feedback Messages */}
        <div className="text-center mb-3">
            {loading && <div className="spinner-border text-info spinner-border-sm me-2"></div>}
            {loading && <span className="text-warning fw-bold">{loading}</span>}
            {success && <span className="text-success fw-bold">✓ {success}</span>}
            {error && <span className="text-danger fw-bold">⚠ {error}</span>} 
        </div>

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control p-2 border-0 shadow-sm" 
              placeholder='✉️ Enter Email' 
              required
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              className='form-control p-2 border-0 shadow-sm' 
              placeholder='🔒 Enter password' 
              required
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type='submit' className='btn btn-info text-light text-center w-100 fw-bold shadow-sm' style={{backgroundColor: "teal", border: "none"}}>
            Sign In
          </button>
        </form>
        <p className='text-center mt-3 small'>
          Don't have an account? <Link to="/Signup" style={{ color: "teal", fontWeight: "bold", textDecoration: "none" }}>Sign up</Link>
        </p>
      </div>

      <div className="mt-5 w-100">
        <Prefooter />
        
      </div>
      <Footer />
    </div>
  )
}

export default Signin