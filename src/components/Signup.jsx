import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // declare the states here 
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  // define 3 states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  // function to signup user 
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please wait...")
    //  create a digital envelope to store user inputs 
    // NB: it is empty and we need to append(add/attach) 
    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/signup", formdata)
      // update setsuccess 
      setSuccess(response.data.message)
      // update setLoading 
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")

    }
  }
  return (
    <div className='row mt-1 justify-content-center'>
      <div className='col-md-6 card shadow' style={{backgroundColor:"lemonchiffon"}} >
        <h1 className='text-center'>Signup</h1>
        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className='text-danger'>{error}</h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="text" className="form-control" placeholder='👤Enter Username' onChange={(e) => setUsername(e.target.value)} /><br />
          <input type="email" className="form-control" placeholder='✉️Enter Email' onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" className="form-control" placeholder='🔒Enter Password' onChange={(e) => setPassword(e.target.value)} /><br />
          <input type="tel" className="form-control" placeholder='📞Enter phone' onChange={(e) => setPhone(e.target.value)} /><br />
          <button type='submit' className=' btn btn-center text-center btn-primary text-white w-100'>Sign up</button><br />
        </form>
        <p className='text-center'>Already have an account?<Link to="/Signin">Sign in</Link></p>

      </div>
    </div>
  )
}

export default Signup