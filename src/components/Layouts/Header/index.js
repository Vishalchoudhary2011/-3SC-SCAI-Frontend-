import React from "react";
import "./header.scss";
import Logo from "../../../assets/logo.png";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../../../utils/ApiHandler";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Successfull !!!");
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header-logo-container">
        <img src={Logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-content">
        <h2 className="common-heading">3sc Global Personnel</h2>
        <div className="header-logout">
          <AiOutlineLogout
            className="header-logout-logo"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
