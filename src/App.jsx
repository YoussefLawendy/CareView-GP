// src/App.jsx
import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./Components/Signup/Signup.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import CheckYourMail from "./Components/CheckYourMail/CheckYourMail.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import LandPage from "./Components/LandPage/LandPage.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer.jsx";

let routers = createBrowserRouter([
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "forgetpassword", element: <ForgetPassword /> },
    { path: "checkmail", element: <CheckYourMail /> },
    { path: "resetpassword", element: <ResetPassword /> },
    { path: "LandPage", element: <LandPage /> },
    { index: true, element: <LandPage /> },
]);

function App() {
    return (
        <>
            <AuthContextProvider>
                <Toaster />
                <RouterProvider router={routers} />

            </AuthContextProvider>
        </>
    );
}

export default App;
