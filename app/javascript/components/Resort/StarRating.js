import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return(
    <div>
      {[...Array(5)].map((score, index) => {
        const ratingValue = index + 1

        return (
          <label key="index">
            <input
              type='radio'
              name='score'
              value={ratingValue}
              id={index}
              onClick={() => setRating(ratingValue)}
              // onChange={props.handleChange}
              // onChange={props.handleChange}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffef12' : '#b0b0b0'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={50}/>
          </label>
        );
      })}
    </div>
  )
}

export default StarRating
