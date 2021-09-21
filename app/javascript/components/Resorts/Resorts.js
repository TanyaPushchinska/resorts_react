import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios'
import Resort from "./Resort";
import {Link} from "react-router-dom";

const Resorts = () => {
  const [resorts, setResorts] = useState([])

  useEffect(() => {
    axios.get('/api/v1/resorts.json')
      .then( resp => {
          setResorts(resp.data)
        }
      )
      .catch( resp => console.log(resp) )
  }, [resorts.length])

  const grid = resorts.map( item => {
    return(
      <Resort
        key={item.name}
        attributes={item}
      />
    )
  })

  return (
    <div className={'home'}>
      <div className={'header'}>
        <h1>Super Resorts</h1>
        <div className={'subheader'}>
          Everything about summer
        </div>
      </div>
      <Link to="/resorts"><button type="button" className="add_resort">Add resort</button></Link>
      <div className={'initial_grid'}>
        {grid}
      </div>
    </div>
    // <Fragment>
    //   <div>Super Resorts</div>
    //   <ul>{list}</ul>
    // </Fragment>
  )
}

export default Resorts
