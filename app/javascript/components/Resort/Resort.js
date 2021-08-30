import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios";
import Header from "./Header"

const Resort = (props) => {
  const [resort, setResort] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/resorts/${slug}`

    axios.get(url)
      .then(resp => {
        console.log(resp.data)
        setResort(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    console.log('handleChange', e);
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    const resort_id = resort.data.id
    axios.post(`api/v1/reviews`, { ...review, resort_id })
      .then(resp => {
        console.log('success')
        const included = [...resort.included, resp.data.data]
        setResort({...resort, included})
        setReview({title: '', description: '', score: 0})
      })
      .catch(resp => console.log(resp))
  }

  return (
    <div className="wrapper">
      {
        loaded &&
          <Fragment>
            <div className="column">
              <div className="main">
                <Header
                  attributes={resort.data.attributes}
                  reviews={resort.included}
                />
                <div className="reviews">
                </div>
              </div>
            </div>
          </Fragment>
      }
    </div>
  )
}

export default Resort
