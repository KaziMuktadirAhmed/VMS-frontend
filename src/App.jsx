import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";

import Home from "./pages/home/home";
import Auth from "./pages/auth/auth";
import Dashboard from "./pages/dashboard/dashboard";

import "./App.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Layout>
  );
}
