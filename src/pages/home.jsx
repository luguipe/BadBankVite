import { Outlet } from "react-router-dom";
import Card from "../components/context";
import NavBar from "../components/navbar";

function Home(){
  return (
    <>  
    <NavBar/>
    
      <Card
        txtcolor="black"
        bgcolor="light"
        header=" Bad Bank Home Page "
        title="Welcome to the bank"
        text="Do never trust banks cause as you may know, the dealer never lose."
        body={(<img src="../" className="img-fluid" alt="Responsive image" />)}
      />    
    </>
  );
  <Outlet />  
}

export default Home;
