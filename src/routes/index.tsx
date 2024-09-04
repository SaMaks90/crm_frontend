import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider";
import { ProtectedRoute } from "./ProtectedRoute";
import { CustomerPage, SignIn } from "../components";
import { SignOut } from "../components/sign-out/SignOut";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about-us",
      element: <h3>About Us</h3>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/dashboard",
          element: <h2>Dashboard</h2>,
        },
        {
          path: "/customer",
          element: <CustomerPage />,
        },
        {
          path: "/item",
          element: <h2>Items</h2>,
        },
        {
          path: "/profile",
          element: <h2>Profile</h2>,
        },
        {
          path: "/logout",
          element: <SignOut />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <SignIn />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
