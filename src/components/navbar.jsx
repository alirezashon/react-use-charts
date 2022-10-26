import { NavLink} from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import logo from '../images/logo.jpg' ;
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg text-light navigation">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link rounded   top-nav-items" aria-current="page" to="/">
                تیکت ها <FaClipboardList/> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded   top-nav-items" aria-current="page" to="/chat">
               گفتگو <BsFillChatTextFill/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded   top-nav-items" to="/recived">
             اجناس امانی <FaBarcode/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded   top-nav-items" to="/financial">
      درآمد      <FaMoneyCheck />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
