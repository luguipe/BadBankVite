import { useBankContext } from "../components/BankContext";

const Balance = () => {

  const { bank } = useBankContext();

  const renderDeposit = () => {
    if(bank.loggedInUser){
      const user = bank.users.find(user => user.username === bank.loggedInUser);
      return <p>Current Balance ${user.balance}</p>;
      } else {
      return <p>Please login to make a deposit</p>;
    }
  };

  return (
    <>
      <h1>Balance</h1>
      {renderDeposit()}
    </>
    )
  } ;

export default Balance;