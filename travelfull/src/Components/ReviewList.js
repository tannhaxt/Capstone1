// ReviewsList.js
import React from 'react';
import ReviewComponent from './Review';

const ReviewsList = ({ reviews }) => {
  return (
    <div className="reviews-list">
      <h4>Nhận xét</h4>
      {reviews.map((review, index) => (
        <ReviewComponent key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
