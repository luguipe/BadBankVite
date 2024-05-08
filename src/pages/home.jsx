import { Outlet } from "react-router-dom";
import Card from "../components/context";

function Home(){
  return (
    <>  
    
      <Card
        txtcolor="black"
        header=" Bad Bank Home Page "
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="../" className="img-fluid" alt="Responsive image" />)}
      />    
    </>
  );
  <Outlet />  
}

export default Home;
