import React from "react";
import MicroFrontend from "../../MicroFrontend";
import Layout from "../../components/Layouts/Layout/Layout";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

const ClientCreation = () => {
  const { REACT_APP_ADMIN_HOST: adminHost } = process.env;

  function AdminModule({ history }) {
    return (
      <MicroFrontend history={history} host={adminHost} name="admin" />
    );
  }

  return (
    <Layout>
      <div id="admin">
        <div className="">
          <AdminModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default ClientCreation;
