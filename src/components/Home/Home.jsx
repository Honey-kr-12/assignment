import React from 'react'
import './home.scss'
import './columns.scss'
import Items from './Items'

const Home = ({data}) => {
    // console.log(data)
  return (
    <div className='home-sec' >
        <div className='data' >
        {data.map((props)=>(
        <Items key={props.id} props={props} />
      ))}
        </div>
    </div>
  )
}

export default Home
