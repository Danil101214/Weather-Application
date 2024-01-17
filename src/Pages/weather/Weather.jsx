import React, { useCallback, useContext, useEffect, useState } from 'react'
import WeatherItem from '../../components/weatherItem/WeatherItem'
import { WeatherService } from '../../services/WeatherService';
import Input from '../../components/Input/Input';
import './style.css'
import { LanguageContext } from '../../App';
import Loader from '../../components/Loader/Loader';

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false)
    const {language} = useContext(LanguageContext)
    let weatherLocal = JSON.parse(localStorage.getItem('weather')) || [];
    const weatherInformation = useCallback(async () => {
        if(city.length > 3) {
            if(weatherLocal.length >= 1 && weatherLocal.find((item) => item.name == city)) {
                setLoading(true);
                setText(language == "ru" ? "Ви вже писали це місто, не повторюйтесь" : "You have already written this city, do not repeat yourself")
                setLoading(false);
            } else {
                try {
                    setLoading(true);
                    const response = await WeatherService.getOne(city)
                    setWeather(prev => ([...prev, response]))
                    localStorage.setItem('weather', JSON.stringify([...weatherLocal, response]));
                    setLoading(false);
                } catch (error) {
                    if(error.response.data.message == 'city not found') {
                        setLoading(true);
                        setText(language == "ru" ? "Цього міста не знайдено" : "This city was not found");
                        setLoading(false);
                    }
                }
            }
        }
    }, [city])

    useEffect(() => {
        const timeId = setTimeout(() => {
            if(city.trim() !== '') {
                weatherInformation();
            }
        }, 2000)
        return () => clearInterval(timeId);
    }, [weatherInformation, city])

  return (
    <section className='page__weather weather'>
        <div className='weather__container'>
            <h1 className="weather__title">{language == "ru" ? "Сторінка пошуку погоди" : "Weather search page"}</h1>
            <div className="weather__input">
                <Input text={text} city={city} setCity={setCity} setText={setText}/>
            </div>
            <div className={loading ? "weather__body active" : "weather__body"}>
                {loading && <Loader />} 
                {!loading && weatherLocal?.length > 0 ? weatherLocal?.map((item, index) => (
                    <WeatherItem key={index} item={item} weather={weatherLocal} setWeather={setWeather}/>
                )) : <p className='weather__text'>{language == "ru" ? "Ще не було пошуків погоди" : "There were no weather searches yet"}</p>}
            </div>
        </div>
    </section>
  )
}

export default Weather;