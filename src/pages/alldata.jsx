import { Link, Outlet } from "react-router-dom";
import  { useBankContext } from '../components/BankContext.jsx';

const AllData = () => {
  const bank = useBankContext();

  return (
    <div>
      <h1>All Data</h1>
      <pre>{JSON.stringify(bank, null, 2)}</pre>
    </div>
  );
}

export default AllData;
