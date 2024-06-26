import Error404 from "../pages/404";
import Home from "../pages/home";
import Order from "../pages/orders";
import Product from "../pages/products";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import ProductDetail from "../pages/productDetail";
import TypeProductPages from "../pages/typeProductPages";

export const routes = [
  {
    path: "/",
    page: Home,
    isShowheader: true,
  },
  {
    path: "/order",
    page: Order,
    isShowheader: true,
  },
  {
    path: "/products",
    page: Product,
    isShowheader: true,
  },
  {
    path: "/sign-in",
    page: SignIn,
    isShowheader: false,
  },
  {
    path: "/sign-up",
    page: SignUp,
    isShowheader: false,
  },
  {
    path: "/product-detail",
    page: ProductDetail,
    isShowheader: true,
  },
  {
    path: "/:type",
    page: TypeProductPages,
    isShowheader: true,
  },
  {
    path: "*",
    page: Error404,
  },
];
