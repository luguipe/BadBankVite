import { Outlet } from 'react-router-dom';
import { BankProvider } from './components/BankContext';
import NavBar from './components/navbar.jsx';
import './App.css'




function App() {

  return (
    <BankProvider>
      <div className='container'>
        <NavBar />
        <Outlet />
      </div>
    </BankProvider>
  )
}

export default App
