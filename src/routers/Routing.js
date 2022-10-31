import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import ErrorPage from "../globalComponent/ErrorPage/Error";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import SetNewPassword from "../pages/SetNewPassword/SetNewPassword";
import ClientCreation from "../pages/ClientCreation/ClientCreation";
import AdminFrontend from "../pages/AdminFrontend/AdminFrontend";
import ProductListing from "../pages/DpaiFrontend/ProductListing";
import Snop from "../pages/DpaiFrontend/Snop";
import PersonnelListing from "../pages/DpaiFrontend/PersonnelListing";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route
          path="/product"
          element={<ProductListing />}
          render={() => <ProductListing />}
        />
           <Route
          path="/personnel"
          element={<PersonnelListing />}
          render={() => <PersonnelListing />}
        />
        <Route 
          path="/dpai/snop"
          element={<Snop/>}
          render={() => <Snop />} />
          
        <Route
          path="/admin"
          element={<AdminFrontend />}
          render={() => <AdminFrontend />}
        />
        <Route
          path="/admin/client-creation"
          element={<ClientCreation />}
          render={() => <ClientCreation />}
        />
        {/* Protected routes */}

        {/* Wildcard route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routing;
