import React from 'react'

const Footer = () => {
  return (
    <div>
          <section class="row  pt-4" style={{backgroundColor:" #134745"}} >
            <div class="col-md-4 mb-4">
                <h2 class="text-center text-white">About Us</h2>
                <p class="text-white">We have a variety of items which are of the best quality. Each category of items
                    have different brands to fit you.</p>
                <h2 class="text-center text-white mt-4">Stay Connected</h2>
                <div class="d-flex justify-content-center">
                    <a href="Getproduct" class="mx-2">
                        <img src="images/fb.png" alt="Facebook" class="social-icon"/>
                    </a>
                    <a href="Signin" class="mx-2">
                        <img src="images/in.png" alt="LinkedIn" class="social-icon"/>
                    </a>
                    <a href="Signup" class="mx-2">
                        <img src="images/x.png" alt="Twitter" class="social-icon"/>
                    </a>
                </div>
                <p class="text-white mt-3">You can reach us through our social media platforms. You can also order and
                    give your reviews. Stay connected to be aware of all the offers we have.</p>
            </div>
            <div class="col-md-4 mb-4" style={{backgroundColor:"  #134745"}}>
                <h2 class="text-white text-center">Contact Us</h2>
                <form>
                    <input type="email" class="form-control mb-3" placeholder="Enter your email "style={{backgroundColor:"bisque"}}
                       />
                    <textarea class="form-control mb-3" rows="5" placeholder="Leave a comment"style={{backgroundColor:"bisque"}}
                       ></textarea>
                    <button type="submit" class="btn w-100 text-white">Send message</button>
                </form>
            </div>
            <div class="col-md-4 mb-4">
                <h2 class="text-white">Opening hours</h2>
                <table class="hours-table text-center text-dark" border="1" style={{backgroundColor:"bisque", width:"350px", height:"240px"}}>
                    <tr>
                        <td>Mon - Thu:</td>
                        <td>8:00am - 9:00pm</td>
                    </tr>
                    <tr>
                        <td>Fri - Sat:</td>
                        <td>8:00am - 11:00pm</td>
                    </tr>
                    <tr>
                        <td>Sunday:</td>
                        <td>12:00am - 10:30pm</td>
                    </tr>
                </table>
            </div>
        </section>

        <footer class="p-3 text-center" style={{backgroundColor:"#215a57ff"}}>
            <b class="text-white">Developed by Joysylvia &copy; 2026</b>
        </footer>
        </div>
  )
}

export default Footer