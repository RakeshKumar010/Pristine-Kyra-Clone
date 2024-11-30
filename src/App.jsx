import React, { createContext, useRef, useState } from 'react'
import Layout from './Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const MyContext = createContext()
const App = () => {
  const [isPopUpOpen,setIsPopUpOpen]=useState(false)
  const home=useRef()
  const overview=useRef()
  const location=useRef()
  const unit=useRef()
  const amenitie=useRef()
  const gallery=useRef()
  const view=useRef()
  const memories=useRef()
  const price =useRef()
  const contact =useRef()
  // const []
  return (
    <MyContext.Provider value={{isPopUpOpen,setIsPopUpOpen,home,overview,location,unit,amenitie,gallery,view,memories,price,contact}}>
    <Layout/>
    </MyContext.Provider>
  )
}

export default App


