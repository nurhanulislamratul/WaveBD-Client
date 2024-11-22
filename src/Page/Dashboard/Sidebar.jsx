import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import useUser from "../../Hooks/useUser";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { userData } = useUser();
  const { logOut } = useAuth();

  const buyerLink = [
    {
      id: 1,
      path: "/dashboard/viewWishlist",
      title: "Wishlist",
      icon: <FaHeart size={24} />,
    },
    {
      id: 2,
      path: "/dashboard/viewcart",
      title: "Cart",
      icon: <FaCartShopping size={24} />,
    },
  ];

  const sellerLinks = [
    {
      id: 1,
      path: "/dashboard/add-product",
      title: "Add Item",
      icon: <IoIosAddCircle size={24} />,
    },
    {
      id: 2,
      path: "/dashboard/view-product",
      title: "View",
      icon: <HiViewGrid size={24} />,
    },
  ];
  const adminLinks = [
    {
      id: 1,
      path: "/dashboard/manage-users",
      title: "Users",
      icon: <FaUserShield size={24} />,
    },
  ];

  return (
    <div className="min-h-screen h-full pl-2 pt-8 bg-amber-400">
      <NavLink to="/" className="text-2xl btn font-bold font-serif">
        Cool Wave
      </NavLink>
      {/* LINKN ITEMS */}
      <div className="my-6 px-4 ">
        <div>
          {userData.role === "buyer" &&
            buyerLink.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={`btn flex items-center justify-start btn-block my-2`}
              >
                {item.icon} <span className="text-xl">{item.title}</span>
              </NavLink>
            ))}
          {userData.role === "seller" &&
            userData.status === "approved" &&
            sellerLinks.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={`btn flex items-center justify-start btn-block my-2`}
              >
                {item.icon} <span className="text-xl">{item.title}</span>
              </NavLink>
            ))}
          {userData.role === "admin" &&
            userData.status === "approved" &&
            adminLinks.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={`btn flex items-center justify-start btn-block my-2`}
              >
                {item.icon} <span className="text-xl">{item.title}</span>
              </NavLink>
            ))}
        </div>
        <div className="">
          <button
            onClick={logOut}
            className={`btn flex items-center justify-start btn-block`}
          >
            <TbLogout2 size={28} /> <span className="text-xl">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
