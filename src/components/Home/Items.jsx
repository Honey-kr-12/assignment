import React from 'react'
import Column2 from './Column2.jsx';

const Items = ({ props }) => {
  const { title, id, image, imgTit, info, highlight, discount, highlightData,extras, highlightPoint, rating, grade, stars, eimg, etype } = props;


  // console.log(props)
  return (
    <div className='item-cont' >
      <div className={`${eimg ? 'featured' : 'notFeatured'}`}>
        <img className='eimg' src={eimg} alt={etype} />
        <p className='etype' >{etype}</p>
      </div>
      <div className='col1' >
        <img className='himg' src={image} alt={title} />
        <p className='imgTit' >{imgTit}</p>
      </div>
      <Column2 title={title} info={info} discount={discount} highlight={highlight} extras={extras} highlightData={highlightData} highlightPoint={highlightPoint}/>
      <div className='col3'>
        <div className='lastCol'>
          <div className='lcItem' >
            <p className='rating' >{rating}</p>
            <p className='grade' >{grade}</p>
            <img className='stars' src={stars} alt="stars" />
          </div>
        </div>
      </div>
      <div className="view">View</div>
      <div className="idcon">
        <p className='id'>{id}</p>
      </div>
    </div>
  )
}

export default Items
