import React from "react";
import Footer from "../components/Footer";
import Cities from "../components/Cities";
import CircleText from "../components/CircleText";
import Copyright from "../components/Copyright";

export default {
  title: "Footer",
  component: Footer
};

export const Default = () => <Footer />;
export const CitiesDefault = () => <Cities />;
export const CopyrightDefault = () => <Copyright />;
export const CircleTextDefault = () => (
  <div style={{ padding: "40px" }}>
    <CircleText />
  </div>
);
