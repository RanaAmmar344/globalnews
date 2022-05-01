import React from 'react'
import PropTypes from 'prop-types'
const NewsSection =(props)=> {

    let {title,description,imageUrl,newsUrl,author,date}=  props;
    return (
      <div>
       <div className="card" style= {{width:"20rem;" }}>
  <img src={!imageUrl?'https://static.foxnews.com/foxnews.com/content/uploads/2022/02/USFL1.png': imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}.....<h5><span class="badge bg-warning">New</span></h5></h5>
    <p className="card-text">{description}....</p>
    <p className="card-text"><small className="text-muted"> By <strong className='text-ganger'>{!author?"RANA AMMAR":author}</strong> <br /> On <strong>{date} </strong> </small></p>
    <a  rel="noreferrer"  href={newsUrl} target='_blank' className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>

      </div>
    )
 
}

export default NewsSection
