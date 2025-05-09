import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.jsx";
import Root from "./Layouts/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";


import Privacy from "./components/Importants/Privacy.jsx";
import Contact from "./components/Importants/Contact.jsx";

import EventPage from "./components/EventPage/EventPage.jsx";
import MyReservations from "./components/EventPage/MyReservations.jsx";

import AuthProvider from "./contexts/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoutes.jsx";

import { HelmetProvider } from "react-helmet-async";
import Terms from "./components/Importants/terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/footer", element: <Footer /> },
      { path: "/terms", element: <Terms /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/contact", element: <Contact /> },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reservations",
        element: (
          <PrivateRoute>
            <MyReservations />
          </PrivateRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
