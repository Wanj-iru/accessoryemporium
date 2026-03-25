import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Mpesapayment = () => {
  const {singleproduct}= useLocation().state||{}
  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/"
  // declre the states 
  const[phone,setPhone]=useState("")
  // 3 states for posting data 
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to make payment 
  const handlesubmit= async(e)=>{
   e.preventDefault()
   setLoading("Please wait... ")
  //  create a digital envelope 
  const formdata= new FormData()
  formdata.append("phone",phone)
  formdata.append("amount",singleproduct.product_cost)
  try {
    const response= await axios.post("http://joysylviambuni.alwaysdata.net/api/mpesa_payment",formdata)
    // update success 
    setSuccess(response.data.message)
    // update setLoading 
    setLoading("")
  } catch (error) {
    
    setError(error.message)
    setLoading("")
  }
  }
  return (
    <div className='text-center row justify-content-center'>
      <h1 className='text-success'>Make payment-Lipa na Mpesa</h1>
      <div className="card shadow col-md-8 p-4">
        {/* image goes here  */}
            <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"400px",objectFit:"fill"}}/>

        <h5 className='text-start text-info'>{singleproduct.product_name}</h5>
        <p className='text-start'>{singleproduct.product_description}</p>
        <b className='text-warning text-start'>{singleproduct.product_cost}</b><br />
         {/* bind the states here  */}

        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="number" className="form-control" placeholder='📞Enter phone (254 xxxxxxxxx)'onChange={(e)=>setPhone(e.target.value)} /><br />
          <button type='submit' className='btn btn-info w-100'>Make Payment</button>
        </form>
      </div>
    </div>
  )
}

export default Mpesapayment