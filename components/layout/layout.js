import { useState, useEffect, Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import classes from "./layout.module.css";

export default function Layout(props) {
  // Create useState var for the page url
  const [pageURL, setPageURL] = useState();

  // Get href of page
  useEffect(() => {
    setPageURL(window.location.href);
  });

  return (
    <Fragment>
      <header className={classes.header} key={pageURL}>
        <Header />
      </header>
      <main className={classes.body}>{props.children}</main>
      <Footer className={classes.bottom} />
    </Fragment>
  );
}
