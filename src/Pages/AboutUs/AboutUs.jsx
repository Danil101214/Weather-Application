import React, { useContext } from 'react'
import './style.css'
import { LanguageContext } from '../../App'
import Girl from '../../../public/AboutUs/Girl.png'

const AboutUs = () => {
    const {language} = useContext(LanguageContext)
      return (
    <section className='page__aboutUs aboutUs'>
        <div className="aboutUs__container">
            <div className="aboutUs__body">
            <h1 className="aboutUs__title">{language == 'ru' ? "Про нас" : "About Us"}</h1>
                <div className="aboutUs__row">
                    <p className="aboutUs__text">
                        {language == 'ru' ? "Всім привіт, це веб-сайт погоди, ви можете написати у пошук своє місто та ви отримаєте, яка зараз погода на теперешній час, назви міст пишіть або англійською мовою або російською мовою виключно, гарного користування!"
                        : "Hello everyone, this is a weather website, you can write your city in the search and you will get the current weather, write the names of the cities either in English or in Russian, good use!"}
                    </p>
                    <div className="aboutUs__image">
                        <img src={Girl} alt="Girl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs