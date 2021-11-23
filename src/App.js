// Import modules
import "./App.css";
import React, { Fragment } from "react";
import Customer from "./Component/Customer";
import Manager from "./Component/Manager";
import AuthContextProvider from "./Component/context/authContext";
import BookContextProvider from "./Component/context/bookContext";
import MngContextProvider from "./Component/context/mngContext";

// Main func
function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <BookContextProvider>
          <MngContextProvider>
            <Manager />

            <Customer />
          </MngContextProvider>
        </BookContextProvider>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
