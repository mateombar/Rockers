import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './styles/Layout.css';
function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      <div className="children__container">{children}</div>
      <Footer />
    </React.Fragment>
  );
}
export default Layout;
