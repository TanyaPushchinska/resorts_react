import React, {Fragment} from 'react'
import {Link} from "react-router-dom";

const ReviewForm = (props) => {
  const ratingOptions = [1, 2, 3, 4, 5].map( (score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          name="score"
          onChange={props.handleChange}
          id={index}/>
      </Fragment>
    )
  })

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>Please, estimate {props.attributes.name}</div>
        <div>
          <input onChange={props.handleChange} type="text" name="title" placeholder="Title"/>
        </div>
        <div>
          <input onChange={props.handleChange} type="text" name="description" placeholder="Description"/>
        </div>
        <div>
          <div>
            <div>Rate this resort</div>
            {ratingOptions}
          </div>
        </div>
        <button type="submit">Submit</button>
        <br/>
        <Link to="/"><button type="button">Back to resorts</button></Link>
      </form>
    </div>
  )
}

export default ReviewForm
