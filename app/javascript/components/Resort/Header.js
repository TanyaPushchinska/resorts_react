import React from 'react'
import ReviewForm from "./ReviewForm"

const Header = (props) => {
  return (
    <div>
      <div className="home header"><h1>{props.attributes.name}</h1></div>
      <img className="card-img" src={props.attributes.image_url} alt={props.attributes.name}/>
      <div>Average score is: <b>{props.attributes.avg_score}</b></div>
      <h3>{props.reviews.length} reviews</h3>
      <ReviewForm
        attributes={props.attributes}
        reviews={props.reviews}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
    </div>
  )
}

export default Header
