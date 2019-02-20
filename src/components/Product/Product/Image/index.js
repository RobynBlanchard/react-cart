import React from 'react'
import './index.css';

const Image = ({imageURL, title}) => {
  return (
      <div className="image image">
          <img
            src={imageURL}
            alt={title}
          />
      </div>
  )
}

export default Image