// ReviewComponent.js
import React from 'react';

const ReviewComponent = ({ review }) => {
  return (
    <div className="review-card p-3 border rounded-3 mb-3">
      <div className="d-flex align-items-center mb-2">
        <img src={review.userProfile?.avatar?.urlTemplate?.replace("{width}", "54").replace("{height}", "54")} alt="Reviewer" className="rounded-circle me-3" style={{ width: '54px' }} />
        <div>
          <h5 className="mb-0">{review.userProfile?.displayName || "Người dùng ẩn danh"}</h5>
          <span>{review.publishedDate}</span>
        </div>
      </div>
      <p><strong>{review.title}</strong></p>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewComponent;
