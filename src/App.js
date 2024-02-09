import React from 'react'
import Main from './Main'
import { Route, Routes } from 'react-router'
import Shop from './Components/Shoppage/Shop'
import Contact from './Components/Contactus/Contact'
import Productdetail from './Components/Productdetails/Productdetail'
import Component from './Components/ApiComponent/Component'
import ModalOtp from './Components/ModalOtp'

const App = () => {
  return (
    <div>
         <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Shop" element={<Shop />} />
     <Route path="/Contact" element={<Contact/>} />
     <Route path="/Productdetails" element={<Productdetail />} />
     <Route path="/OTP" element={<ModalOtp />} />
     </Routes>

     {/* <Component/> */}
    </div>
     
     
  )
}

export default App