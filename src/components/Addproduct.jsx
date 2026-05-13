
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Prefooter from "./Prefooter";
import { PlusCircle, Loader2 } from "lucide-react";
import Columnfooter from "./Columnfooter";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [category, setCategory] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [preview, setPreview] = useState(null); // For physical preview

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  // Revoke object URL when preview changes/unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setProductPhoto(null);
      setPreview(null);
      return;
    }
    setProductPhoto(file);
    // Create a temporary URL to show the image physically before upload
    const url = URL.createObjectURL(file);
    setPreview(url);
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
    formdata.append("category", category);
  
    try {
      // Ensure multipart/form-data header so server receives file correctly
      const response = await axios.post(
        "http://joysylviambuni.alwaysdata.net/api/addproduct",
        formdata,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSuccess(response?.data?.message ?? "Product added successfully! 💍");
      setLoading("");
      // Clear form after success
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setCategory("");
      setProductPhoto(null);
      if (preview) {
        URL.revokeObjectURL(preview);
        setPreview(null);
      }
    } catch (error) {
      // Prefer server message when available
      setError(error?.response?.data?.message ?? error.message ?? "Failed to upload. Please try again.");
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
            <div className="mb-3">
              <label className="fw-bold mb-1" style={{ color: "teal" }}>Category </label>
              <input type="text" className="form-control border-0 shadow-sm " rows="2" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Can either be men,women,traditional or aesthetic "/> 
              
              

            </div>

            <button type="submit" disabled={!!loading} className="btn w-100 fw-bold py-2 shadow-sm text-white" style={{ backgroundColor: "teal", borderRadius: "10px" }}>
              Publish Product
            </button>
          </form>
        </div>
      </div>

      <Prefooter />
      
      <Footer />
      <Columnfooter/>
    </div>
  );
};
  
export default Addproduct;