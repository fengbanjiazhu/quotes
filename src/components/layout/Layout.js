import React from "react";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
