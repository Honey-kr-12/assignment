import React from 'react'

const Cards = () => {
    return (
        <div className='card'>
            <div className='cardData'>
                <img className='imgg' src="./images/img_download1.png" alt="" />
                <div className='cardInfo'>
                    <div className='discountContainer' >
                        <span className='discount' >20%off</span>
                        <span className='LT' >limited time</span>
                    </div>
                    <h4 className='title' >websuilder</h4>
                    <p className='desc' >computer modern classic with wix support</p>
                    <div className="price">
                        <p className='nPrice' >$39.96</p>
                        <p className='bPrice' >$39.96</p>
                        <p className='dPrice' >$39.96</p>
                    </div>
                    <button className='viewDeal' >View Deal</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
