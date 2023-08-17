import React from 'react'
import { useState } from 'react'
import logo from '../../assets/svg/logo.svg'
import frame from '../../assets/svg/Frame.svg'
import './style.css'

export default function Navbar() {
    const [active, setActive] = useState("menu")
    const [ToggleIcon, setToggleIcon] = useState('nav-toggler')
    const navToggler = () => {
        active === "menu" ? setActive('menu nav-active') : setActive('menu')
        ToggleIcon === 'nav-toggler' ? setToggleIcon('nav-toggler toggle') : setToggleIcon('nav-toggler')
    }

    return (
        <>
            <div className="navbar">
                <div className="flex">
                    <div className="content">
                        <img className='logo' src={logo} />
                        <a href="#header"><img  className='frame' src={frame} /></a>
                    </div>
                    <div className={active}>
                        <div className="menu-text"><a href="#about">About</a></div>
                        <div className="menu-text"><a href="#services">Services</a></div>
                        <div className="menu-text"><a href="#technologies">Technologies</a></div>
                        <div className="menu-text"><a href="#howto">How To</a></div>
                    </div>
                    <div className="btns">
                        <button className='contact'>Contact Us</button>
                        <button className='join'>Join Hydra</button>
                    </div>
                    <div onClick={navToggler} className={ToggleIcon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}