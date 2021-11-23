// Import module
import React, { Fragment, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./Customer/header";
import Navbar from "./Customer/navbar";
import Formsignup from "./Customer/form_signup";
import Footer from "./Customer/footer";
import Formsignin from "./Customer/form_signin";
import Homepage from "./Customer/homepage";
import Calendarbook from "./Customer/booking/calendar";
import Chooseservice from "./Customer/booking/chooseservice";
import Bookinginformation from "./Customer/booking/information";
import Payment from "./Customer/booking/payment";
import Mngbooking from "./Customer/mngbooking/Mngbooking";

import { authContext } from "./context/authContext";

// Main func
function Customer() {
  // Variables
  let loading;

  let bodyIn, bodyUp, booking;

  // Context
  const {
    authState: { isAuthenticated, authLoading, user },
  } = useContext(authContext);

  // Check Admin or Customer
  if (user != null && user.username === "admin") return "";

  // Redirect Booking & Sign In & Sign Up
  if (authLoading)
    loading = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-info " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  else if (isAuthenticated) {
    bodyIn = <Redirect to="/" />;
    bodyUp = <Redirect to="/" />;
    booking = <Calendarbook />;
  } else {
    bodyUp = <Formsignup />;
    bodyIn = <Formsignin />;
    booking = <Redirect to="/signin" />;
  }

  // Render FE
  return (
    <Fragment>
      <Router>
        <Header />

        <Navbar status={1} />

        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/signin" exact>
            {!loading ? bodyIn : loading}
          </Route>

          <Route path="/signup" exact>
            {!loading ? bodyUp : loading}
          </Route>

          <Route path="/booking" exact>
            {!loading ? booking : loading}
          </Route>

          <Route path="/booking/chooseservice">
            <Chooseservice />
          </Route>

          <Route path="/booking/information">
            <Bookinginformation />
          </Route>

          <Route path="/booking/payment">
            <Payment />
          </Route>

          <Route path="/managementbooking">
            <Mngbooking />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default Customer;
