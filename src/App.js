import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Error from "./components/Error";
import Contact from "./pages/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerInstaMart from "./components/ShimmerInstaMart";
import { Provider } from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerInstaMart />}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
