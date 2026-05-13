import axios from "axios"
import { useState } from "react"
import Footer from "./Footer"
import Prefooter from "./Prefooter"
import Columnfooter from "./Columnfooter"

const Customize = () => {
  // declare the states here 
 
  const [description, setDescription] = useState("")
  
  const [photo, setPhoto] = useState("")
    const [phone_number, setPhone_number] = useState("")

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
    
    formdata.append("description", description)
    
    formdata.append("photo", photo)
    formdata.append("phone_number", phone_number)

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/customize", formdata)
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
        <h1 className='text-center'>Customize products💍📿</h1>

        {/* bind the states here  */}

        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" onSubmit={handlesubmit} style={{minHeight:100, }}>
         
          <label htmlFor="">Phone Number</label>
          <input type="phone" className='form-control ' onChange={(e) => setPhone_number(e.target.value)} /><br />
          <label htmlFor="">Description</label>
          <input type="text" placeholder="Add the name you would like to be engraved" className='form-control p-4 ' onChange={(e) => setDescription(e.target.value)} /><br />
          <label htmlFor="">Product photo</label>
          <input type="File" accept='image/*' className='form-control' onChange={(e) => setPhoto(e.target.files[0])} /><br />
          <button type='submit' className=' btn btn-center text-center btn-primary text-white w-100'>Send</button><br />

        </form>
      </div>
      <Prefooter/>
      <Footer/>
      <Columnfooter/>
    </div>
  )
}

export default Customize