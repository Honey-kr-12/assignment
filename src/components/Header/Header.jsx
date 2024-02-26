import React from 'react'
import './header.scss'
import FirstHeaderRow from './FirstHeaderRow'
import SecondHeaderRow from './SecondHeaderRow'
import ThirsHeaderRow from './ThirsHeaderRow'

const Header = () => {
    return (
        <div className='header-text'>
            <p className='heading'>Best Website Builder in the US</p>
            <div className='center-line'></div>
            <FirstHeaderRow />
            <div className='center-line2'></div>
            <SecondHeaderRow />
            <ThirsHeaderRow />

        </div>
    )
}

export default Header
