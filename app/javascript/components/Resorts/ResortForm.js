import React, {useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const ResortForm = () => {
  const [resort, setResort] = useState({})
  console.log(resort)

  const handleSubmit = (e) => {
    axios.post('/api/v1/resorts', {resort} )
      .then(resp => {
        console.log(resp)
        setResort(resort)
      })
      .catch(resp => {
        console.log(resp)
      })
  }

  const handleChange = (e) => {
    console.log('handleChange', e);
    setResort(Object.assign({}, resort, {[e.target.name]: e.target.value}))
  }

  return(
    <div className="resort_form">
      <form onSubmit={handleSubmit}>
        <div className="home header">
          <h1>Create new resort</h1>
        </div>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" id="name" name="name" placeholder="Name of resort"/>
        <label htmlFor="image_irl">Image url</label>
        <input onChange={handleChange} type="text" id="image_irl" name="image_url" placeholder="Image url"/>
        <label htmlFor="slug">Slug</label>
        <input onChange={handleChange} type="text" id="slug" name="slug" placeholder="Slug for resort"/>
        <input type="submit" value="Create"/>
        <Link to="/"><button type="button" className="cancel_button">Cancel</button></Link>
      </form>
    </div>
  )
}

export default ResortForm
