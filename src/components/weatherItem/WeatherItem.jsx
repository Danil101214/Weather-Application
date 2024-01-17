import React, { useContext } from 'react'
import './style.css'
import Icon from '../icon/icon';
import { LanguageContext } from '../../App';

const WeatherItem = ({item, weather, setWeather}) => {
    const {language} = useContext(LanguageContext)
    const description = item.weather[0].description;
  return (
    <div className='weather__column'>
        <div className='weather__item'>
            <Icon item={item} weather={weather} setWeather={setWeather}/>
            <div className="weather__header">
                <div className="weather__header-image">
                    {description == 'облачно с прояснениями' && <img src="../../../public/Weather/cloudySun.png" alt="cloudySun" />}
                    {description == 'пасмурно' && <img src="../../../public/Weather/cloudy.png" alt="cloudy" />}
                    {(description == 'переменная облачность' ||
                    description == 'небольшая облачность') && <img src="../../../public/Weather/cloudy.png" alt="timeCloudy" />}
                    {(description == 'небольшой снег' || description == 'снегопад' || description == 'снег' || description == 'небольшой снегопад') && 
                    <img src="../../../public/Weather/littleSnow.png" alt="littleSnow" />}
                    {description == 'ясно' && <img src="../../../public/Weather/Sun.svg" alt="Sun" />}
                    {(description == 'небольшой дождь' || description == 'дождь' || description == 'сильный дождь') && <img src="../../../public/Weather/rain.png" alt="rain" />}
                </div>
                <div className="weather__header-textbox">
                    <h4 className="weather__header-title">{item.name}</h4>
                    <p className="weather__header-day">{item.weather[0].description}</p>
                </div>
            </div>
                <p className="weather__degree">{(parseInt(item.main.temp))}<span>°C</span></p>
                <div className="weather__informations">
                    <div className="weather__information">
                        <div className="weather__information-ImageText">
                        <div className="weather__information-textbox">
                            <img src="../../../public/icons/visibility.svg" alt="visibility" />
                            <p className="weather__information-text">{language == "ru" ? "Видимість" : "Visibility"}</p>
                        </div>
                        <span>{item.wind.speed} m/s</span>
                        </div>
                        <div className="weather__information-ImageText">
                        <div className="weather__information-textbox">
                            <img src="../../../public/icons/humidity.svg" alt="humidity" />
                            <p className="weather__information-text">{language == "ru" ? "Вологість" : "Humidity"}</p>
                            </div>
                            <p>{item.main.humidity} %</p>
                        </div>
                    </div>
                    <div className="weather__information">
                        <div className="weather__information-ImageText">
                        <div className="weather__information-textbox">
                            <img src="../../../public/icons/feels like.svg" alt="feels like" />
                            <p className="weather__information-text">{language == "ru" ? "Відчувається" : "Feels like"}</p>
                        </div>
                        <p>{parseInt(item.main.feels_like)} °C</p>
                        </div>
                        <div className="weather__information-ImageText">
                        <div className="weather__information-textbox">
                            <img src="../../../public/icons/wind.svg" alt="Wind" />
                            <p className="weather__information-text">{language == "ru" ? "Вітер" : "Wind"}</p>
                        </div>
                            <span>{item.wind.speed} m/s</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WeatherItem;