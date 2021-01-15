import React from "react";
import Navbar from "./Navbar";
import './styles/Layout.css';
function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      <div className="children__container">{children}</div>
    </React.Fragment>
  );
}
export default Layout;
