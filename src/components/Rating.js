import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating, numReviews }) => {
  return (
    <>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((num) => (
          <FontAwesomeIcon
            key={num}
            icon={
              // eslint-disable-next-line no-nested-ternary
              rating > num - 0.5
                ? faStar
                : rating === num - 0.5
                ? faStarHalfAlt
                : emptyStar
            }
          />
        ))}
      </div>
      {numReviews && <p className="text-center mt-2">{numReviews} reviews</p>}
    </>
  );
};

Rating.propTypes = {
  rating: propTypes.number.isRequired,
  numReviews: propTypes.number.isRequired,
};

export default Rating;
