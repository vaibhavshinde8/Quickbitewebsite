import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import MindCart from "./components/Offers";
import Location from "./components/Location";
import './index.css';
import AboutMe from "./components/AboutMe";
import LoginRegister from "./components/LoginRegister";
// Lazy load the Grosary component
const Grosary = lazy(() => import("./components/Grosary"));

// Layout component that includes the Header and renders children routes
const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

// Define routes with the RouterProvider
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/contact", element: <ContactUs /> },
            { path: "/AboutMe", element: <AboutMe/> },
            {
                path: "/grosary",
                element: (
                    <Suspense fallback={<h1>Loading... Please wait! 😊</h1>}>
                        <Grosary />
                    </Suspense>
                ),
            },
          
            { path: "/restaurants/:resId", element: <RestaurantMenu /> },
            { path: "/cart", element: <Cart /> },
            { path: "/offers", element: <MindCart /> },
            { path: "/LoginRegister", element: <LoginRegister/> },
        ],
        errorElement: <Error />,
    },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
