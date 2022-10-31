import React from "react";
import "./sidebar.scss";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const sideBarMenu = [
    {
      title: "Client Creation",
      icon: "fa fa-suitcase",
      path: "/admin",
    },
    { title: "Product", icon: "fa fa-archive", path: "/product" },
    { title: "Personnel", icon: "fa fa-user-circle", path: "/personnel" },
    { title: "S&OP", icon: "fa fa-user-circle", path: "/dpai/snop" },
    { title: "User", icon: "fa fa-user-circle", path: "/user" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="sidebar-menu-header">System Admin</div>
        <div className="sidebar-menu-container">
          <ul className="sidebar-menu-list m-0 p-0">
            {sideBarMenu.map((item, index) => (
              <a href={item.path} key={index}>
                <li
                  className={`sidebar-menu-item ${
                    location.pathname === item.path && "active"
                  } `}
                >
                  <i className={`${item.icon} sidebar-menu-icon`}></i>{" "}
                  <span>{item.title}</span>{" "}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
