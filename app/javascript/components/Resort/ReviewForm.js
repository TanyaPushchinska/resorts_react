import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import ShellRating from "./ShellRating";
import StarRating from "./StarRating";

const ReviewForm = (props) => {
  // const ratingOptions = [1, 2, 3, 4, 5].map( (score, index) => {
  //   return (
  //     <Fragment key={index}>
  //       <input
  //         type="radio"
  //         value={score}
  //         name="score"
  //         onChange={props.handleChange}
  //         id={index}/>
  //     </Fragment>
  //   )
  // })

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="home header"><h2>Please, estimate {props.attributes.name}</h2></div>
        <label htmlFor="title">Title</label>
        <input onChange={props.handleChange} type="text" id="title" name="title" placeholder="Title"/>
        <label htmlFor="description">Name</label>
        <input onChange={props.handleChange} type="text" id="description" name="description" placeholder="Description"/>
        <div>
          <div>
            <label htmlFor="rate_this_resort">Rate this resort</label>
            {/*<ShellRating/>*/}
            <StarRating
              id="rate_this_resort"
              handleChange={props.handleChange}/>
            {/*{ratingOptions}*/}
          </div>
        </div>
        <input type="submit" value="Create"/>
        <br/>
        <Link to="/"><button type="button" className="cancel_button">Back to resorts</button></Link>
      </form>
    </div>
  )
}

export default ReviewForm
