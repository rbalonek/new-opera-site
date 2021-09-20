import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
