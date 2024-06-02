import React from 'react'
import './Layout.css'
import headerImage from '../../assets/image.jpg'
import LayoutCartButton from './LayoutCartButton'

const Layout = (props) => {
  return (
    <>
        <header className='header'>
            <h1>Hello Fresh Food Ordering App</h1>
            <LayoutCartButton onClick={props.onShowCart}/>
        </header>
        <div className='main-image'>
            <img src={headerImage} alt="" />
        </div>
    </>
  )
}

export default Layout;
