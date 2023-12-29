import { Link } from "react-router-dom";
import logo from "../../.././assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user?.email ? (

        <>
        <li>
        <Link to="/bookings">Bookings</Link>
      </li>
          <li onClick={handleLogout}>
            <Link>logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-1 mb-2 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="h-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-accent">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
