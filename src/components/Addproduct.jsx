import axios from "axios"
import { useState } from "react"
import Footer from "./Footer"

const Addproduct = () => {
  // declare the states here 
  const [product_name, setProductName] = useState("")
  const [product_description, setProductDescription] = useState("")
  const [product_cost, setProductCost] = useState("")
  const [product_photo, setProductPhoto] = useState("")

  // define three states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // function to handle submit 
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("Please wait...")
    //  Create a digital envelope 
    const formdata = new FormData()
    formdata.append("product_name", product_name)
    formdata.append("product_description", product_description)
    formdata.append("product_cost", product_cost)
    formdata.append("product_photo", product_photo)

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/addproduct", formdata)
      setSuccess(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }
  return (
    <div className="row justify-content-center  ">
      <div className="col-md-6 card card-shadow p-4" style={{backgroundColor:"lemonchiffon"}}>
        <h1 className='text-center'>Add products💍📿</h1>

        {/* bind the states here  */}

        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" onSubmit={handlesubmit} style={{minHeight:100, }}>
          <label className='text-start'>Product Name</label>
          <input type="text" className='form-control' onChange={(e) => setProductName(e.target.value)} /><br />
          <label htmlFor="">Description</label>
          <input type="text" className='form-control p-4 ' onChange={(e) => setProductDescription(e.target.value)} /><br />
          <label htmlFor="">Cost(Ksh)</label>
          <input type="number" className='form-control' onChange={(e) => setProductCost(e.target.value)} /><br />
          <label htmlFor="">Product photo</label>
          <input type="File" accept='image/*' className='form-control' onChange={(e) => setProductPhoto(e.target.files[0])} /><br />
          <button type='submit' className=' btn btn-center text-center btn-primary text-white w-100'>Add Product</button><br />

        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Addproduct