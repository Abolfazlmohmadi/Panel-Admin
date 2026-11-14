import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/",
  //   element: <h1>داشبورد مدیریت</h1>,
  // },
  // {
  //   path: "/admin/products",
  //   element: <h1>محصولات</h1>,
  // },
]);

export default router;
