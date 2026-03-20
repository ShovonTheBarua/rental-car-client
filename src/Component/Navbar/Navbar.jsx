import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/addCar">Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/myListings">My Listings</NavLink>
          </li>
          <li>
            <NavLink to="/myBookings">My Bookings</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/browseCars">Browse Cars</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            className="h-15 w-50 object-cover "
            src="https://i.ibb.co.com/xK11M1NM/rentwheels-carbon-fiber-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <img src={user.photoURL} className="rounded-full w-10" alt="" />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-[9999] w-52 p-2 shadow-sm"
              >
                <li className="mb-2">
                  <a>{user.displayName}</a>
                  <a>{user.email}</a>
                </li>
                <li>
                  <Link
                    onClick={handleLogOut}
                    to="/register"
                    className="btn btn-primary"
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/register" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
