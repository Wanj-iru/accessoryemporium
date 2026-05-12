import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Added useNavigate
import Footer from './Footer'
import Prefooter from './Prefooter'
import Columnfooter from './Columnfooter'

const Signup = () => {
  const navigate = useNavigate(); // For redirecting after success
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [strength, setStrength] = useState("");

  const checkPasswordStrength = (password) => {
    if (password.length < 4) {
      setStrength("Weak");
    } else if (password.length < 8) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Creating your account...")
    setError("")
    
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/signup", formdata)
      setSuccess(response.data.message)
      setLoading("")
      
      // Auto-redirect to Signin after 2 seconds so they can log in
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || error.message)
      setLoading("")
    }
  }

  return (
    <div className='row mt-1 justify-content-center p-4'>
      <div className='col-md-5 card shadow-sm border-0 p-4' style={{ backgroundColor: "lemonchiffon", borderRadius: "15px" }}>
        
        <h2 className='text-center mb-4' style={{ color: "teal", fontWeight: "bold" }}>Join Accessory Emporium</h2>
        
        {/* Status Messages */}
        <div className="text-center mb-3">
          {loading && <p className="text-warning fw-bold small">{loading}</p>}
          {success && <p className="text-success fw-bold small">✓ {success}</p>}
          {error && <p className="text-danger fw-bold small">⚠ {error}</p>}
        </div>

        <form onSubmit={handlesubmit}>
          <input 
            type="text" 
            className="form-control border-0 mb-3 shadow-sm p-2" 
            placeholder='👤 Username' 
            required
            onChange={(e) => setUsername(e.target.value)} 
          />
          
          <input 
            type="email" 
            className="form-control border-0 mb-3 shadow-sm p-2" 
            placeholder='✉️ Email Address' 
            required
            onChange={(e) => setEmail(e.target.value)} 
          />

          <input 
            type='password'
            className='form-control border-0 shadow-sm mb-4 p-2'
            placeholder='🔒 Create Password'
            required
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }}
          />
          
          {password && (
            <p className="mt-1 mb-3 " style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: strength === "Weak" ? "red" : strength === "Medium" ? "orange" : "green",
            }}>
              Strength: {strength}
            </p>
          )}

          <input 
            type="tel" 
            className="form-control border-0 mb-4 shadow-sm p-2" 
            placeholder='📞 Phone Number' 
            required
            onChange={(e) => setPhone(e.target.value)} 
          />

          <button 
            type='submit' 
            className='btn w-100 fw-bold shadow-sm' 
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Create Account
          </button>
        </form>

        <p className='text-center mt-4 mb-0 small'>
          Already have an account? <Link to="/signin" className="fw-bold" style={{ color: "teal", textDecoration: "none" }}>Sign in</Link>
        </p>

      </div>
      
      <div className="w-100 mt-5">
        <Prefooter />
        <Footer />
        <Columnfooter/>
      </div>
    </div>
  )
}

export default Signup