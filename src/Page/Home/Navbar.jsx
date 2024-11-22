import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userIcon from "../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </div>
    </>
  );

  return (
    <div className="navbar container mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-serif italic">
          Wave BD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL || userIcon}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li className="disabled disabled:text-black">
                <a className="justify-between">{user?.email}</a>
              </li>
              <NavLink
                to="/dashboard"
                className="btn btn-outline btn-sm px-6 font-bold btn-neutral my-2"
              >
                Dashboard
              </NavLink>
              <button
                onClick={logOut}
                className="btn btn-outline btn-sm px-6 font-bold btn-neutral"
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline px-6 font-bold btn-neutral"
            >
              Login
            </Link>
            <Link to="/register" className="btn px-6 font-bold btn-neutral">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
