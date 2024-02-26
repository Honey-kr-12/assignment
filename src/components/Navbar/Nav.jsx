import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div>
      <div className="header-main">
        <div className="header">
          <header className="navbar">
            <div className="image-sec">
              <img
                className="image"
                src="./images/img_image.svg"
                alt="image"
              />
            </div>
            <span
              className="categories"
              size="txtInterRegular14"
            >
              Categories
            </span>
            <span
              className="builder"
              size="txtInterRegular14"
            >
              Website Builders
            </span>
            <span
              className="deals"
              size="txtInterRegular14"
            >
              <span >Today's deals</span>
            </span>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Nav
