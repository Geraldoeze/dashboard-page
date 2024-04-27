import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Message from "../pages/Message";
import Wallet from "../pages/Wallet";
import Chart from "../pages/Chart";

// Routes for page navigation
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={"/dashboard"} />,
    },

    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Dashboard /> }],
    },
    {
      path: "message",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Message /> }],
    },
    {
      path: "wallet",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Wallet /> }],
    },

    {
      path: "chart",
      element: <DashboardLayout />,
      children: [{ path: "", element: <Chart /> }],
    },
  ]);
}
