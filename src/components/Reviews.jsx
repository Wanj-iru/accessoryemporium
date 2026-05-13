import React, { useState } from 'react';
import { Star, MessageSquare,  Quote } from 'lucide-react';
import Footer from './Footer';
import Prefooter from './Prefooter';
import Columnfooter from './Columnfooter';

const Reviews = () => {
  // Mock data - In a real app, you'd fetch this from your Flask API
  const [reviews, setReviews] = useState([
    { id: 1, name: "Anita W.", rating: 5, comment: "The gold-plated bangles are stunning! They haven't tarnished at all.", date: "May 2026" },
    { id: 2, name: "Brian O.", rating: 4, comment: "Great gift for my sister. The customization engraving was very neat.", date: "April 2026" },
    { id: 3, name: "Zuhura M.", rating: 5, comment: "Fast delivery in Nairobi and the packaging feels very premium.", date: "May 2026" },
  ]);

  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Add logic to POST to your Flask backend here
    const reviewToAdd = { ...newReview, id: Date.now(), date: "Just now" };
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ name: "", comment: "", rating: 5 });
    alert("Thank you for your review!");
  };

  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: "teal" }}>
        <h1 className="display-4 fw-bold">Customer Experiences</h1>
        <p className="lead">See why our community loves our curated accessories.</p>
      </section>

      <div className="container my-5">
        <div className="row g-5">
          
          {/* Left Column: Review Form */}
          <div className="col-md-5">
            <div className="card p-4 border-0 shadow-sm" style={{ backgroundColor: "lemonchiffon", borderRadius: "20px" }}>
              <h3 className="fw-bold mb-4" style={{ color: "teal" }}>Leave a Review</h3>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-3">
                  <label className="fw-bold">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control border-0" 
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Rating</label>
                  <select 
                    className="form-select border-0"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                  >
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Good</option>
                    <option value="3">3 Stars - Average</option>
                    <option value="2">2 Stars - Poor</option>
                    <option value="1">1 Star - Terrible</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="fw-bold">Comment</label>
                  <textarea 
                    className="form-control border-0" 
                    rows="4"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 fw-bold py-2" style={{ backgroundColor: "teal", border: "none" }}>
                  Post Review
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Reviews List */}
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-4">
              <MessageSquare className="me-2" style={{ color: "teal" }} />
              <h3 className="fw-bold mb-0">Recent Feedback</h3>
            </div>

            {reviews.map((rev) => (
              <div key={rev.id} className="card mb-3 border-0 shadow-sm" style={{ borderRadius: "15px", position: "relative" }}>
                <div className="card-body p-4">
                  <Quote size={40} className="position-absolute opacity-10" style={{ top: 10, right: 10 }} />
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="fw-bold mb-0" style={{ color: "teal" }}>{rev.name}</h5>
                    <span className="text-muted small">{rev.date}</span>
                  </div>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < rev.rating ? "#FFD700" : "none"} 
                        stroke={i < rev.rating ? "#FFD700" : "#ccc"} 
                      />
                    ))}
                  </div>
                  <p className="mb-0 text-secondary italic">"{rev.comment}"</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Prefooter />
      <Footer />
      <Columnfooter/>
    </div>
  );
};

export default Reviews;