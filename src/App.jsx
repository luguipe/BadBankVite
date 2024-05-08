import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { BankProvider } from './components/BankContext.jsx';
import NavBar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import CreateAccount from './pages/createaccount';
import Login from './pages/login';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import Balance from './pages/balance';
import AllData from './pages/alldata';
import './App.css'
import Card from "./components/context.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='*' element={<App />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='createaccount' element={<CreateAccount />} />
                <Route path='login' element={<Login />} />
                <Route path='deposit' element={<Deposit />} />
                <Route path='withdraw' element={<Withdraw />} />
                <Route path='balance' element={<Balance />} />
                <Route path='alldata' element={<AllData />} />
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
