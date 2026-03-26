import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Signin = () => {
  // define the 2 states to sign in 
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  // define 3 states for posting data 
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to sign in user
  const handlesubmit=async(e)=>{
   e.preventDefault()
   setLoading("Please wait...")
  //  create a digital envelope 
  const formdata = new FormData()
  formdata.append("email",email)
  formdata.append("password",password)

  try{
    const response=await axios.post("http://joysylviambuni.alwaysdata.net/api/signin",formdata)
    // update setSuccess
    setSuccess(response.data.message)
    // update setLoading
    setLoading("")
  }
  catch(error){
     setError(error.message)
      setLoading("")
  }
  }
  return (
    <div className='row mt-1 justify-content-center p-4 pb-4 '>
      <div className=" card card-shadow col-md-6 p-4"style={{backgroundColor:"lemonchiffon"}}>
        <h2 className='text-center'>Sign in</h2>
        {/* bind the states  */}
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2> 
        <form action="" onSubmit={handlesubmit}>
          <input type="email" className="form-control" placeholder='✉️Enter Email' onChange={(e)=>setEmail(e.target.value)}/> <br />
          <input type="password" className='form-control' placeholder='🔒Enter password' onChange={(e)=>setPassword(e.target.value)} /><br />
          <button type='submit' className='btn btn-primary text-light text-center w-100'>Sign in</button><br />
        </form>
        <p className='text-center'>Don't have an account?<Link to="/Signup"> Sign up</Link></p>
      </div>
      <Footer/>
    </div>

  )
}

export default Signin