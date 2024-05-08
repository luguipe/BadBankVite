import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.scss';
import './index.css';
import * as bootstrap from 'bootstrap';
import App from './App.jsx';
import { BankProvider } from './components/BankContext.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BankProvider>
      <App />
    </BankProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>                                                                                   

// ReactDOM.createRoot(document.getElementById('root')).render(<App />) 


