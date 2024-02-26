import React from 'react'

const FirstHeaderRow = () => {
  return (
    <div className="header-items">
                <img className="tick" src="./images/img_image_blue_gray_600.svg" alt="image_Ten" />
                <p className="last-updated">Last Updated</p>
                <p className="tick" > -</p>
                <p className="date" >February 22, 2020</p>
                <img className="info-img"
                    src="./images/img_image_blue_gray_600_20x20.svg"
                    alt="image_Eleven" />
                <p className="info"
                    >Advertising Disclosure</p>
                <div className="top-relivent-container">
                    <p className="relivent-text">Top Relivent</p>
                    <img className="relivent-arrow" src="./images/img_arrowdown_blue_gray_600.svg" alt="arrow_down" />
                </div>
            </div>
  )
}

export default FirstHeaderRow
