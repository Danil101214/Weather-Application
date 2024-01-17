import { createContext, useState } from 'react'
import './App.css'
import Weather from './Pages/weather/Weather';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import AppRouter from './components/AppRouter';

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('ru')
  return (
    <>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <Header />
        <AppRouter />
      </LanguageContext.Provider>
    </>
  )
}

export default App;