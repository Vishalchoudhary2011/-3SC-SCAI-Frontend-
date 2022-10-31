import React, { useEffect } from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
import Layout from "../../components/Layouts/Layout/Layout";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
const defaultHistory = createBrowserHistory();

const AdminFrontend = () => {
  const { REACT_APP_ADMIN_HOST: adminHost } = process.env;
  let navigate = useNavigate();

  function AdminModule({ history }) {
    return <MicroFrontend history={history} host={adminHost} name="admin" />;
  }

  useEffect(() => {
    if (isEmpty(localStorage.getItem("user"))) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("user")]);

  return (
    <Layout>
      <div id="admin">
        <div>
          <AdminModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default AdminFrontend;
