import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import * as bootstrap from 'bootstrap'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Card from './components/context.jsx'
import { NavBar } from './components/navbar.jsx'

import Home from          './home.jsx'
import CreateAccount from './pages/createaccount.jsx'
import Login from         './pages/login.jsx'
import Deposit from       './pages/deposit.jsx'
import Withdraw from      './pages/withdraw.jsx'
import Balance from       './pages/balance.jsx'
import AllData from       './pages/alldata.jsx'

    <React.StrictMode>
    <BankProvider>
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
    </BankProvider> 
  </React.StrictMode>                                                                                   



ReactDOM.createRoot(document.getElementById('root')).render(<App />) 


