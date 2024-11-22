import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardMain from "../Page/Dashboard/DashboardMain";
import AddProduct from "../Page/Dashboard/AddProduct";
import ViewProduct from "../Page/Dashboard/viewProduct";
import UpdateProduct from "../Page/Dashboard/UpdateProduct";
import PrivateRoute from "../Private/PrivateRoute";
import SellerRoute from "../Private/SellerRoute";
import AdminRoute from "../Private/AdminRoute";
import ManageUsers from "../Page/Dashboard/ManageUsers";
import Products from "../Page/Products/Products";
import ShowWishlistItem from "../Page/Dashboard/Buyer/ShowWishlistItem";
import ShowCartItem from "../Page/Dashboard/Buyer/ShowCartItem";
import About from "../Page/About/About";
import Contact from "../Page/About/Contact";

const router = createBrowserRouter([
  // HOME LAYOUT
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // LOGIN AND REGISTRATION
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // DASHBOARD LAYOUT
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardMain />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/view-product",
        element: (
          <SellerRoute>
            <ViewProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/update-product/:id",
        element: (
          <SellerRoute>
            <UpdateProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/viewWishlist",
        element: (
          <PrivateRoute>
            <ShowWishlistItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/viewcart",
        element: (
          <PrivateRoute>
            <ShowCartItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
