import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Card from './components/context.jsx'
import { NavBar } from './components/navbar.jsx'

import Home from          './pages/home'
import CreateAccount from './pages/createaccount'
import Login from         './pages/login'
import Deposit from       './pages/deposit'
import Withdraw from      './pages/withdraw'
import Balance from       './pages/balance'
import AllData from       './pages/alldata'

    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'               element={<App />}>
          <Route index                element={<Home />}/>
          <Route path='home'          element={<Home/>}/>
          <Route path='createaccount' element={<CreateAccount/>}/>
          <Route path='login'         element={<Login/>}/>
          <Route path='deposit'       element={<Deposit/>}/>
          <Route path='withdraw'      element={<Withdraw/>}/>
          <Route path='balance'       element={<Balance/>}/>
          <Route path='alldata'       element={<AllData/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>                                                                                   



ReactDOM.createRoot(document.getElementById('root')).render(<App />) 


