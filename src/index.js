import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './i18n';

// import reportWebVitals from "./reportWebVitals";

// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY_DSN,
//   integrations: [new BrowserTracing()],
//   // environment: process.env.NODE_ENV

//   /* Set tracesSampleRate to 1.0 to capture 100%  of transactions for performance monitoring.
//    We recommend adjusting this value in production */
//   tracesSampleRate: 1.0,
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();