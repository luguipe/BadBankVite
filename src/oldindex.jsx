import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Route       = ReactRouterDOM.Route; 
const Link        = ReactRouterDOM.Link; 
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);



// function Spa() {
//   return (
//     <HashRouter>
//       {/* <NavBar/> */}
//       <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
//         <div className="container" style={{padding: "20px"}}>
//           {/* <Route path="/" exact component={Home} /> */}
//           {/* <Route path="/createaccount/" component={CreateAccount} /> */}
//           <Route path="/login/" component={Login} />
//           <Route path="/deposit/" component={Deposit} />
//           <Route path="/withdraw/" component={Withdraw} />
//           <Route path="/balance/" component={Balance} />
//           <Route path="/alldata/" component={AllData} />
//         </div>
//       </UserContext.Provider>      
//     </HashRouter>
//   );
// }

// //ReactDOM.createRoot(<Spa/>,document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<Spa />) 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
 
    <App />
  
</React.StrictMode>
  
);
