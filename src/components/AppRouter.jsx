import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from '../Router'

const AppRouter = () => {
  return (
    <>
    <main className='page'>
        <Routes>
            {router.map(({path, Element}, index) => {
                return <Route key={index} path={path} element={<Element/>} />
            })}
        </Routes>
        </main>
    </>
  )
}

export default AppRouter