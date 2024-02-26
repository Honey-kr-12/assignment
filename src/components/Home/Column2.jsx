import React from 'react'
import Point from './Point'

const Column2 = ({ highlight, highlightData, discount, highlightPoint,extras, title, info }) => {
    return (
        <div className="col2">
            <p className='title'> {title}</p>
            <p className='info'> {info}</p>
            {discount?
            <p className='discount' >{discount} Off</p> 
            : '' }
            <div className='highlight'>{highlight}</div>
            
            {highlightData && <p className='highata'>{highlightData}</p>}
            <Point highlightPoint={highlightPoint} extras={extras} />

            <div className='detail' >
                <p >Show more
                    <img className='show' src="./images/img_arrowdown.svg" alt="" />
                </p>
            </div>
        </div>
    )
}

export default Column2
