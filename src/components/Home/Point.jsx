import React from 'react'

const Point = ({ highlightPoint, extras }) => {
    return (
        <div>
            <div className={`${highlightPoint ? 'pointsContainer' : ''}`} >
                {highlightPoint?.map((point, index) => (
                    <div className="point">
                        <button className='pointId' >{point.id}</button>
                        <p className='pointData' >{point.point}</p>
                    </div>
                ))}
            </div>

            {extras && (
                <div>
                    <p>Why we love it</p>
                    {extras.map((extra, index) => (
                        <div key={index}>
                            <div className='extraContainer'>
                                <img src="./images/img_image_blue_50.svg" alt="" />
                                <p className='extraPoint' >{extra.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Point
