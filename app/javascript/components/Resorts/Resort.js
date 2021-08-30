import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";

const Resort = (props) => {
  return (
    <div className="grid">
      <div className="grid-item">
        <div className="card">
          <img className="card-img" src={props.attributes.image_url} alt={props.attributes.image_url}/>
          <div className="card-content">
            <h1 className="card-header">{props.attributes.name}</h1>
            <p className="card-text">{props.attributes.avg_score}</p>
            <div className={'card-btn'}>
              <Link to={`/resorts/${props.attributes.slug}`}>Show the resort</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resort
