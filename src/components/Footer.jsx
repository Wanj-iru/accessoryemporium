
import React from 'react'
import Chatbot from './Chatbot'


const Footer = () => {
  return (
    <div>
      <section className="row pt-5 pb-4 px-4 m-0" style={{ backgroundColor: "#105c59ff", borderTop: "5px solid #318682ff" }}>
        
        {/* About & Socials */}
        <div className="col-md-4 mb-4 text-center text-md-start">
          <h2 className="text-white fw-bold mb-3" style={{ letterSpacing: "1px" }}>About Us</h2>
          <p className="text-white-50 small">
            Accessory Emporium offers a curated collection of high-quality pieces designed to elevate your everyday style. 
            From traditional heritage to modern aesthetic, we have something for every soul.
          </p>
          
          <h5 className="text-white mt-4 mb-3">Follow Our Journey</h5>
          <div class="d-flex justify-content-center">
                    <a href="Getproduct" class="mx-2">
                        <img src="images/fb.png" alt="Facebook" class="social-icon"/>
                    </a>                     <a href="Signin" class="mx-2">                         <img src="images/in.png" alt="LinkedIn" class="social-icon"/>
                    </a>
                    <a href="Signup" class="mx-2">
                         <img src="images/x.png" alt="Twitter" class="social-icon"/>
                     </a>
                 </div>
         
        </div>

        {/* Contact Form */}
        <div className="col-md-4 mb-4">
          <h2 className="text-white text-center fw-bold mb-3">Get In Touch</h2>
          <form className="px-2">
            <input 
              type="email" 
              className="form-control mb-3 border-0 shadow-sm" 
              placeholder="Your Email" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "8px" }}
            />
            <textarea 
              className="form-control mb-3 border-0 shadow-sm" 
              rows="3" 
              placeholder="How can we help?" 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "8px" }}
            ></textarea>
            <button 
              type="submit" 
              className="btn w-100 fw-bold d-flex align-items-center justify-content-center gap-2" 
              style={{ backgroundColor: "lemonchiffon", color: "#134745", borderRadius: "8px" }}
            >
               Send Message
            </button>
          </form>
        </div>

        {/* Opening Hours */}
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <h2 className="text-white fw-bold mb-3">Opening Hours</h2>
          <div 
            className="p-3 shadow-sm" 
            style={{ 
              backgroundColor: "lemonchiffon", 
              borderRadius: "15px", 
              width: "100%", 
              maxWidth: "300px",
              color: "#134745" 
            }}
          >
            <table className="table table-borderless mb-0 small">
              <tbody>
                <tr className="border-bottom border-dark border-opacity-10">
                  <td className="fw-bold">Mon - Thu:</td>
                  <td className="text-end">8:00am - 9:00pm</td>
                </tr>
                <tr className="border-bottom border-dark border-opacity-10">
                  <td className="fw-bold">Fri - Sat:</td>
                  <td className="text-end">8:00am - 11:00pm</td>
                </tr>
                <tr>
                  <td className="fw-bold">Sunday:</td>
                  <td className="text-end">12:00am - 10:30pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

     
      
      <Chatbot />
    </div>
  )
}

export default Footer