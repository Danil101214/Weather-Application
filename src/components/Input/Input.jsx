import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './style.css'

const Input = ({city, setCity, text, setText}) => {
    const [visible, setVisible] = useState(false);
    const [place, setPlace] = useState('');
    const handleClick = (event) => {
        event.preventDefault();
        const button = event._reactName;
        if(button == 'onClick') {
            setCity(place);
            setPlace('')
        }
    }

    useEffect(() => {
        if(text.length > 0) {
            setVisible(true)
            const timerId = setTimeout(() => {
                setVisible(false)
                setText('')
            }, 4000)
            return () => clearTimeout(timerId)
        }
    }, [text])
  return (
    <section className="page__form form">
        <div className="form__container">
            <form action="#" className="form__body">
            <p className={visible ? 'form__text active' : 'form__text'}>{text.length > 0 && text}</p>
            <div className="form__boxelement">
                <input className='form__input' type="text" 
                onChange={(event) =>  setPlace(event.target.value)} value={place}/>
                <div className='form__button' onClick={handleClick}><FaSearch onClick={handleClick}/></div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Input