import React from "react";
import HomeLight from "../all-home-version/HomeLight";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <>
      <HomeLight />
    </>
  );
};

export default HomeDark;
