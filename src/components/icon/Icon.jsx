import React, { useContext, useState } from 'react'
import './style.css'
import { LanguageContext } from '../../App';

const Icon = ({item, weather, setWeather}) => {
    const [isActive, setIsActive] = useState(false);
    const {language} = useContext(LanguageContext)
    
    const deleteWeather = () => {
        const index = weather.findIndex((weather) => weather.name === item.name);
        weather.splice(index, 1);
        setWeather([...weather])
        localStorage.setItem('weather', JSON.stringify([...weather]))
        setIsActive(!isActive)
    }

    return (
    <>
    <div className='weather__item-icon' onClick={() => setIsActive(!isActive)}>
        <span></span>
    </div>
        <div className={isActive ? "weather__item-delete active" : "weather__item-delete"}>
            <p className='weather__item-deleteText' onClick={deleteWeather}>{language == "ru" ? "Видалити цей прогноз погоди" : "Delete this weather forecast"}</p>
        </div>
    </>
  )
}

export default Icon;