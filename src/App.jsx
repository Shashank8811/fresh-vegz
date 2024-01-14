import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Register,
  SingleVeg,
  Vegetables,
  Login,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "vegetables",
        element: <Vegetables />,
      },
      {
        path: "vegetables/:id",
        element: <SingleVeg />,
      },
      {
        path: "/",
        element: <Cart />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/",
        element: <Checkout />,
      },
      {
        path: "/",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
