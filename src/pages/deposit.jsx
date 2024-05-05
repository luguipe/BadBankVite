import { Link, Outlet } from "react-router-dom";
import { useBankContext } from "../components/BankContext"

const Deposit = () => {
  const { bank } = useBankContext();

const [deposit, setDeposit] = useState('');

  const renderDeposit = () => {
    
      if(bank.loggedInUser){
        const user = bank.users.find(user => user.username === bank.loggedInUser);
        return <p>Current balance ${user.balance}</p> ;
      } else {
        return <p>Please login to make a deposit</p>
      }
  }
    return (
      <>
        <h1>Deposit</h1>
        {renderDeposit()}
      </>
    )
};

export default Deposit;


