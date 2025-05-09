import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router"; 
import Root from "./Layouts/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Profile from "./components/Profile/Profile.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import PrivateRoute from "./Routes/PrivateRoutes.jsx";
import { HelmetProvider } from "react-helmet-async"; 
import Footer from "./components/Footer/Footer.jsx";
import Terms from "./components/Importants/terms.jsx";
import Privacy from "./components/Importants/Privacy.jsx";
import Contact from "./components/Importants/Contact.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {path:"/footer", Component: Footer},
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
