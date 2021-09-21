import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import axios from "axios";

const Resort = (props) => {
  const handleRemove = (slug) => {
    axios.delete(`/api/v1/resorts/${slug}` )
      .then(resp => {
        console.log(resp, 'success')
      })
      .catch(resp => {
        console.log(resp)
      })
  }

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
            <div className={'delete-btn'}>
              <Link to="/" onClick={() => handleRemove(props.attributes.slug)}>Delete the resort</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resort
