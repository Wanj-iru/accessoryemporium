import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Prefooter from './Prefooter'
import Columnfooter from './Columnfooter'

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

      if (response.data.user) {
        // --- DATA CHECK ---
        // Log the response to see if 'username' or 'message' contains the name
        console.log("Backend Response:", response.data);

        // Save the user data. 
        // Ensure response.data contains the username key for the Navbar to read.
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setSuccess(`Welcome back! Logging you in...`);
        setLoading("");
        navigate("/");

        // Trigger the custom event so the Navbar updates the "Signed in as" text immediately
        // window.dispatchEvent(new Event("storage"));
        window.dispatchEvent(new Event("authChanged"));


        // setTimeout(() => {
        // }, 1500);
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
          <button type='submit' className='btn btn-info text-light text-center w-100 fw-bold shadow-sm' style={{ backgroundColor: "teal", border: "none" }}>
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
      <Columnfooter />
    </div>
  )
}

export default Signin