import React from "react";
import MicroFrontend from "../../MicroFrontend";
import Layout from "../../components/Layouts/Layout/Layout";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

const PersonnelListing = () => {
  const { REACT_APP_DPAI_HOST: dpaiHost } = process.env;

  function DpaiModule({ history }) {
    return <MicroFrontend history={history} host={dpaiHost} name="dpai" />;
  }

  return (
    <Layout>
      <div id="dpai">
        <div>
          <DpaiModule history={defaultHistory} />
        </div>
      </div>
    </Layout>
  );
};

export default PersonnelListing;
