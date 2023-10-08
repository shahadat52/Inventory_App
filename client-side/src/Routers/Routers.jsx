import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layouts/dashboardLayout";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Categories from "../Pages/Categories/Categories";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome />
            },
            {
                path: "/dashboard/categories",
                element: <Categories/>
            }
        ]
    }
])