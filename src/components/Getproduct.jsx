import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'


const Getproduct = () => {
  const navigate = useNavigate()
  // declare the states here 
  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  // function to get products 
  const getproducts = async () => {
    setLoading("Please wait...")
    try {
      const response = await axios.get("http://joysylviambuni.alwaysdata.net/api/getproducts")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError("Something went wrong")
      setLoading("")
    }
  }
  // call the function 
  useEffect(() => {
    getproducts()
  }, [])
  const imagepath = "http://joysylviambuni.alwaysdata.net/static/images/"
  return (
    <div className="row">
      {/* carousel goes here  */}
      <Carousel />
      {/* navbar goes here  */}
      <h1 className='text-center 'style={{color:"lemonchiffon", textDecoration:"overline"}}>Available products!!</h1>
      {/* bind the states  */}
      <h2 className='text-warning'>{loading}</h2>
      <h2 className="text-danger">{error}</h2>
      {/* map the products  */}
      {products.map(singleproduct => (
        <div className="col-md-3 mb-4 p-4">
          <div className="card shadow h-100 " style={{backgroundColor:"lemonchiffon"}}>
            <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px"}} />
            <div className="card-body text-center">
              <h2 style={{color:"#316d6a"}}>{singleproduct.product_name}</h2>
              <p>{singleproduct.product_description}</p>
               <div class="card-footer ">
              <b style={{color:"#349691ff"}}>Kshs {singleproduct.product_cost}</b><br />
              <button className='btn btn-info w-100' onClick={() => navigate("/makepayment",{state:{singleproduct}})}>Purchase Now</button>

               
              </div>
              
            </div>
          

          </div>
        </div> 
      ))}
      <Footer/>
    </div>
    
  )
}

export default Getproduct