import React from 'react'

const Carousel = () => {
  return (
     <section class="row p-3">
            <div >
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="images/Affordable price buy Belts on Stylewe, SPU… - Copy.jpg"style={{height:"350px"}}
                                class="d-block w-100 " alt="Classy piece"/>
                            <div class="carousel-caption">
                                <p class="btn btn-dark text-light">Very classy piece</p>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="images/Go All Out With This Striking Statement Necklace… - Copy.jpg"style={{height:"350px"}}
                                class="d-block w-100" alt="Striking statement"/>
                            <div class="carousel-caption"/>
                                <p class="btn btn-dark text-light">A striking statement piece</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Make A Bold Statement With This Elegant Silver And….jpg"style={{height:"350px"}}
                                class="d-block w-100" alt="Bold statement"/>
                            <div class="carousel-caption">
                                <p class="btn btn-dark text-light">Make a bold statement!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Beautiful colorful Hibiscus flower hair claw… - Copy.jpg"style={{height:"350px"}}
                                class="d-block w-100" alt="Hibiscus hair clip"/>
                            <div class="carousel-caption">
                                <p class="btn btn-dark text-light">Beautiful colourful hibiscus!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Add A Touch Of Elegance To Your Hairstyle With… - Copy - Copy.jpg"style={{height:"350px"}}
                                class="d-block w-100" alt="Elegant hairstyle"/>
                            <div class="carousel-caption">
                                <p class="btn btn-dark text-light">What are you waiting for?</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Exaggerated Geometric Hollow Choker - Copy - Copy.jpg"style={{height:"350px"}}
                                class="d-block w-100" alt="Geometric choker"/>
                            <div class="carousel-caption">
                                <p class="btn btn-dark text-light">We have the best quality!!!!</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <!-- Valentine's Day Offer --> */}
                <div class="floating-box text-center" style={{backgroundColor:" #215a57ff"}}>
                    <h1 class="text-center " style={{color:"pink"}}>Easter offer!!!</h1>
                    <p class="text-center"style={{color:"bisque"}}>We have very many special offers for anyone looking for a gift to commemorate
                        the day. Make them feel special with our special pieces on that special day!Celebrate Easter in style!</p>
                    <span class="btn bg-info text-white text-center">Shop NOW!</span>
                </div>
            
        </section>
  )
}

export default Carousel