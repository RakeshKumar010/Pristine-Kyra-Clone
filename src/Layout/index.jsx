import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Privacy from '../pages/Privacy'
import TermsAndConditions from '../pages/TermsAndConditions'
import ThankYou from '../pages/ThankYou'

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/terms-conditions' element={<TermsAndConditions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout