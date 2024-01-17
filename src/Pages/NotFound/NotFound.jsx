import React, { useContext } from 'react'
import './style.css'
import { LanguageContext } from '../../App'

const NotFound = () => {
  const {language} = useContext(LanguageContext)
  return (
    <section className='page__notFound notFound'>
      <div className="notFound__container">
        <div className="notFound__body">
          <h1 className='notFound__title'>{language == "ru" ? "Сторінка не знайдена" : "Page NotFound"}</h1>
        </div>
      </div>
    </section>
  )
}

export default NotFound