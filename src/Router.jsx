
import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "../src/Components/ProtectRoute/ProtectRoute";
import Layout from "../src/Components/Layout/Layout";
import Landing from "./Pages/Landing/Landing";
import Auth from "../src/Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Four04 from "./Pages/Four04/Four04";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Results";




const stripePromise = loadStripe("pk_test_51R1NXDIWvFTUedADdu97efPathzlUJkpHOWyTw9T9TWTBlHhjYDrkhaF8pbZ5zFmRodpcA81LOPwYoHlLrbEoezf00TCOkX66g");

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/payment",
        element: (
          <ProtectRoute msg={"you must log in to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectRoute>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: (
          <ProtectRoute
            msg={"you must log in to see your order"}
            redirect={"/orders"}
          >
            <Orders />
          </ProtectRoute>
        ),
      },
      {
        path: "/category/:categoryName",
        element: <Results />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/electronics/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/jewelery/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/men's clothing/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/women's clothing/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Four04 />,
  },
]);