import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCard = () => {
  // Settings for the carousel inside the card
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = [
   "images/🌸 Metal Flower Waist Chain - Bohemian Elegance….jpg",
    "images/Men's Genuine Leather Black Bracelet Set (P2) Set… (1).jpg",
    "images/2025 Fashion Acrylic Bracelet Resin Bracelets… - Copy - Copy.jpg",
    "images/dennis-irorere-uv_XMZ7h664-unsplash.jpg"

  ];

  return (
    <div className="card" style={{ width: "550px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden",height:"250px" }}>
      {/* Carousel Section */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} style={{ width: "100%", height:"auto",objectFit:"contain"}} className="img-fluid" />
          </div>
        ))}
      </Slider>
{/* 
      {/* Card Content Section */}
      {/* <div className="card-body" style={{ padding: "15px" }}>
        <h3>Product Title</h3>
        <p>This is a description of the product featured in the carousel above.</p>
        <button style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
          Learn More
        </button>
      </div> */}
    </div> 
  );
};

export default CarouselCard;