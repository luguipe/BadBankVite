import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">BadBank </Link>
        <div className="navbar-expand" id="navbarNavAltMarkup">
          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="nav-item nav-link active" to="home">Home </Link>
            <Link className="nav-item nav-link active" to="createaccount">Create Account </Link>
            <Link className="nav-item nav-link active" to="balance">Balance </Link>
            <Link className="nav-item nav-link active" to="deposit">Deposit </Link>
            <Link className="nav-item nav-link active" to="withdraw">Withdraw </Link>
            <Link className="nav-item nav-link active" to="login">Login </Link>
            <Link className="nav-item nav-link active" to="alldata">AllData </Link>
          </div>
      </div>
    </nav>
    </>
  );
}
export default NavBar;
