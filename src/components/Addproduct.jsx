// import axios from "axios"
// import { useState } from "react"
// import Footer from "./Footer"
// import Prefooter from "./Prefooter"

// const Addproduct = () => {
//   // declare the states here 
//   const [product_name, setProductName] = useState("")
//   const [product_description, setProductDescription] = useState("")
//   const [product_cost, setProductCost] = useState("")
//   const [product_photo, setProductPhoto] = useState("")

//   // define three states for posting data 
//   const [loading, setLoading] = useState("")
//   const [success, setSuccess] = useState("")
//   const [error, setError] = useState("")

//   // function to handle submit 
//   const handlesubmit = async (e) => {
//     e.preventDefault()
//     setLoading("Please wait...")
//     //  Create a digital envelope 
//     const formdata = new FormData()
//     formdata.append("product_name", product_name)
//     formdata.append("product_description", product_description)
//     formdata.append("product_cost", product_cost)
//     formdata.append("product_photo", product_photo)

//     try {
//       const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/addproduct", formdata)
//       setSuccess(response.data.message)
//       setLoading("")
//     } catch (error) {
//       setError(error.message)
//       setLoading("")
//     }
//   }
//   return (
//     <div className="row justify-content-center  ">
//       <div className="col-md-6 card card-shadow p-4" style={{backgroundColor:"lemonchiffon"}}>
//         <h1 className='text-center'>Add products💍📿</h1>

//         {/* bind the states here  */}

//         <h2 className="text-warning">{loading}</h2>
//         <h2 className="text-success">{success}</h2>
//         <h2 className="text-danger">{error}</h2>

//         <form action="" onSubmit={handlesubmit} style={{minHeight:100, }}  >
//           <label className='text-start'>Product Name</label>
//           <input type="text" className='form-control' onChange={(e) => setProductName(e.target.value)} /><br />
//           <label htmlFor="">Description</label>
//           <input type="text" className='form-control p-4 ' onChange={(e) => setProductDescription(e.target.value)} /><br />
//           <label htmlFor="">Cost(Ksh)</label>
//           <input type="number" className='form-control' onChange={(e) => setProductCost(e.target.value)} /><br />
//           <label htmlFor="">Product photo</label>
//           <input type="File" accept='image/*' className='form-control' onChange={(e) => setProductPhoto(e.target.files[0])} /><br />
//           <button type='submit' className=' btn btn-center text-center btn-primary text-white w-100'>Add Product</button><br />

//         </form>
//       </div> <br />
//       <Prefooter/>
//       <Footer/>
//     </div>
//   )
// }

// export default Addproduct
import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import { PlusCircle, Loader2 } from "lucide-react";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [preview, setPreview] = useState(null); // For physical preview

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductPhoto(file);
    // Create a temporary URL to show the image physically before upload
    setPreview(URL.createObjectURL(file));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading("Uploading product...");
    setSuccess("");
    setError("");

    const formdata = new FormData();
    formdata.append("product_name", product_name);
    formdata.append("product_description", product_description);
    formdata.append("product_cost", product_cost);
    formdata.append("product_photo", product_photo);

    try {
      const response = await axios.post("http://joysylviambuni.alwaysdata.net/api/addproduct", formdata);
      setSuccess("Product added successfully! 💍");
      setLoading("");
      // Clear form after success
      setProductName(""); setProductDescription(""); setProductCost(""); setPreview(null);
    } catch (error) {
      setError("Failed to upload. Please try again.");
      setLoading("");
    }
  };

  return (
    <div className="container-fluid p-0" >
      <div className="row justify-content-center py-5 m-0" >
        <div className="col-md-5 card border-0 shadow-lg p-4" style={{ backgroundColor: "lemonchiffon", borderRadius: "20px" }}>
          
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: "teal" }}>Add New Accessory <PlusCircle size={28} /></h1>
            <p className="text-muted">Expand your luxury collection</p>
          </div>

          {/* Status Notifications */}
          {loading && <div className="alert alert-info py-2 d-flex align-items-center gap-2"><Loader2 className="spinner-border spinner-border-sm" /> {loading}</div>}
          {success && <div className="alert alert-success py-2 text-center">{success}</div>}
          {error && <div className="alert alert-danger py-2 text-center">{error}</div>}

          <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label className="fw-bold mb-1" style={{ color: "teal" }}>Product Name</label>
              <input type="text" className="form-control border-0 shadow-sm" value={product_name} onChange={(e) => setProductName(e.target.value)} required placeholder="e.g. Gold Butterfly Ring" />
            </div>

            <div className="mb-3">
              <label className="fw-bold mb-1" style={{ color: "teal" }}>Description</label>
              <textarea className="form-control border-0 shadow-sm" rows="3" value={product_description} onChange={(e) => setProductDescription(e.target.value)} required placeholder="Describe the material and style..." />
            </div>

            <div className="mb-3">
              <label className="fw-bold mb-1" style={{ color: "teal" }}>Cost (Ksh)</label>
              <input type="number" className="form-control border-0 shadow-sm" value={product_cost} onChange={(e) => setProductCost(e.target.value)} required placeholder="e.g. 1200" />
            </div>

            <div className="mb-4">
              <label className="fw-bold mb-1" style={{ color: "teal" }}>Product Photo</label>
              <div className="d-flex align-items-center gap-3">
                <input type="file" accept="image/*" className="form-control border-0 shadow-sm" onChange={handleFileChange} required />
                {preview && (
                  <img src={preview} alt="Preview" className="rounded shadow-sm" style={{ width: "60px", height: "60px", objectFit: "cover", border: "2px solid teal" }} />
                )}
              </div>
            </div>

            <button type="submit" className="btn w-100 fw-bold py-2 shadow-sm text-white" style={{ backgroundColor: "teal", borderRadius: "10px" }}>
              Publish Product
            </button>
          </form>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default Addproduct;