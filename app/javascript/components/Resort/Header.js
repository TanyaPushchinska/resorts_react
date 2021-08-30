import React from 'react'
import ReviewForm from "./ReviewForm"

const Header = (props) => {
  return (
    <div>
      <img className="card-img" src={props.attributes.image_url} alt={props.attributes.name}/>
      <ReviewForm/>
    </div>
  )
}

export default Header
