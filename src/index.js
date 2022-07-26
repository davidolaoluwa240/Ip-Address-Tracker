// Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Components
import { Provider } from "react-redux";
import App from "./app/App";

// Reducers
import reducers from "./reducers/index";

// Assets
import "./assets/sass/main.scss";

// Configure Store
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, enhancedCompose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
