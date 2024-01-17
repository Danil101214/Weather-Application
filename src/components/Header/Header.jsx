import React, { useContext, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ABOUT_US, WEATHER } from '../constants';
import { LanguageContext } from '../../App';
import logo from '../../../public/logo/logo.svg'

const Header = () => {
    const {language, setLanguage} = useContext(LanguageContext)
    return (
    <div className='header'>
        <div className="header__container">
            <div className="header__body">
                <div className="header__logo">
                    <Link to={ABOUT_US} className="header__logo-link">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link to={WEATHER} className="header__menu-link">{language == 'ru' ? "Погода" : "Weather"}</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to={ABOUT_US} className="header__menu-link">{language == 'ru' ? "Про нас" : "About"}</Link>
                        </li>
                        <li className="header__menu-item">
                        <select className='header__menu-select' name="language" id="select" onChange={(event) => setLanguage(event.target.value)}>
                            <option className='header__menu-selectOption' value="language" disabled selected>{language == "ru" ? 'Мова' : 'language'}</option>
                            <option className='header__menu-selectOption' value="ru">Russian</option>
                            <option className='header__menu-selectOption' value="en">English</option>
                        </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header