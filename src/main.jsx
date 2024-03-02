import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { reduxCounterStore } from "./components/redux/reduxCounter/reduxCounterStore.js";
import {Provider} from "react-redux";
import {reduxBankStore} from './components/redux/reduxBankAccount/reduxBankAccountStore.js'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxBankStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
