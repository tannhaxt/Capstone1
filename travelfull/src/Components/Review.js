import React from 'react';

const ReviewComponent = ({ review }) => {
  return (
    <div className="review-card p-3 border rounded-3 mb-3">
      <div className="d-flex align-items-center mb-2">
        <img src={review.avatar} alt="Reviewer" className="rounded-circle me-3" style={{ width: '54px' }} />
        <div>
          <h5 className="mb-0">{review.name}</h5>
          <span>{review.date}</span>
        </div>
      </div>
      <p>{review.comment}</p>
      <div className="text-end">
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default ReviewComponent;
