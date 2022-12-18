/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";


import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import CardsFooter from "components/Footers/CardsFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import { Pricing } from "views/examples/Pricing";
import { Layout } from "views/dashboard/Layout";
import { Stock } from "views/dashboard/Stock";
import Feedback from "views/dashboard/Feedback";
import StockFinder from "views/dashboard/StockFinder";
import BudgetingTool from "views/dashboard/BudgetingTool";
import Watchlist from "views/dashboard/Watchlist";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" exact render={(props) => <><Index {...props} /><CardsFooter /></>} />
      {/* <Route
        path="/landing-page"
        exact
        render={(props) => <><Landing {...props} /></>}
      /> */}
      <Route
        path="/signup"
        exact
        render={(props) => <><Register {...props} /><CardsFooter /></>}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <><Profile {...props} /><CardsFooter /></>}
      />
      <Route
        path="/signin"
        exact
        render={(props) => <><Login {...props} /><CardsFooter /></>}
      />
      <Route
        path="/pricing"
        exact
        render={(props) => <><Pricing {...props} /><CardsFooter /></>}
      />
      <Route
        path="/dashboard/halal-stock-search"
        exact
        render={(props) =>  <Layout {...props} ><Stock /></Layout>}
      />
      <Route
        path="/dashboard/feedback"
        exact
        render={(props) =>  <Layout {...props} ><Feedback /></Layout>}
      />
      <Route
        path="/dashboard/stock-finder"
        exact
        render={(props) =>  <Layout {...props} ><StockFinder /></Layout>}
      />
      <Route
        path="/dashboard/budgeting-tool"
        exact
        render={(props) =>  <Layout {...props} ><BudgetingTool /></Layout>}
      />
      <Route
        path="/dashboard/watchlist"
        exact
        render={(props) =>  <Layout {...props} ><Watchlist /></Layout>}
      />
      <Redirect to="/" />
    </Switch>
    {/* <CardsFooter /> */}
  </BrowserRouter>
);
