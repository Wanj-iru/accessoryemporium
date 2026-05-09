// import React from 'react'
// import Chatbot from './Chatbot'

// const Footer = () => {
//   return (
//     <div>
//           <section class="row  pt-4" style={{backgroundColor:" #134745"}} >
//             <div class="col-md-4 mb-4">
//                 <h2 class="text-center text-white">About Us</h2>
//                 <p class="text-white">We have a variety of items which are of the best quality. Each category of items
//                     have different brands to fit you.</p>
//                 <h2 class="text-center text-white mt-4">Stay Connected</h2>
//                 <div class="d-flex justify-content-center">
//                     <a href="Getproduct" class="mx-2">
//                         <img src="images/fb.png" alt="Facebook" class="social-icon"/>
//                     </a>
//                     <a href="Signin" class="mx-2">
//                         <img src="images/in.png" alt="LinkedIn" class="social-icon"/>
//                     </a>
//                     <a href="Signup" class="mx-2">
//                         <img src="images/x.png" alt="Twitter" class="social-icon"/>
//                     </a>
//                 </div>
//                 <p class="text-white mt-3">You can reach us through our social media platforms. You can also order and
//                     give your reviews. Stay connected to be aware of all the offers we have.</p>
//             </div>
//             <div class="col-md-4 mb-4" style={{backgroundColor:"  #134745"}}>
//                 <h2 class="text-white text-center">Contact Us</h2>
//                 <form>
//                     <input type="email" class="form-control mb-3" placeholder="Enter your email "style={{backgroundColor:"bisque"}}
//                        />
//                     <textarea class="form-control mb-3" rows="5" placeholder="Leave a comment"style={{backgroundColor:"bisque"}}
//                        ></textarea>
//                     <button type="submit" class="btn w-100 text-dark" style={{backgroundColor:"bisque"}}>Send message</button>
//                 </form>
//             </div>
//             <div class="col-md-4 mb-4">
//                 <h2 class="text-white">Opening hours</h2>
//                 <table class="hours-table text-center text-dark" border="1" style={{backgroundColor:"bisque", width:"350px", height:"240px"}}>
//                     <tr>
//                         <td>Mon - Thu:</td>
//                         <td>8:00am - 9:00pm</td>
//                     </tr>
//                     <tr>
//                         <td>Fri - Sat:</td>
//                         <td>8:00am - 11:00pm</td>
//                     </tr>
//                     <tr>
//                         <td>Sunday:</td>
//                         <td>12:00am - 10:30pm</td>
//                     </tr>
//                 </table>
//             </div>
//         </section>

//         <footer class="p-3 text-center" style={{backgroundColor:"#215a57ff"}}>
//             <b class="text-white">Developed by Joysylvia &copy; 2026</b>
//         </footer>
//         <Chatbot/>
//         </div>
        
//   )
// }

// export default Footer
import React from 'react'
import Chatbot from './Chatbot'


const Footer = () => {
  return (
    <div>
      <section className="row pt-5 pb-4 px-4 m-0" style={{ backgroundColor: "#134745", borderTop: "5px solid #215a57" }}>
        
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

      <footer className="p-3 text-center" style={{ backgroundColor: "#0e3533" }}>
        <small className="text-white-50">
          Developed  by **Joysylvia** &copy; 2026 | Nairobi, Kenya
        </small>
      </footer>
      
      <Chatbot />
    </div>
  )
}

export default Footer