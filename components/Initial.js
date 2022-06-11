import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import classes from "./Initial.module.css";

const Initial = () => {
  return (
    <div className={classes.initial}>
      <img
        src="https://image.winudf.com/v2/image/Y29tLnRydWVhcHBzLnNhbW15Lm5hdHVyZV9zY3JlZW5zaG90c185XzFjMjdlMGY5/screen-8.jpg?fakeurl=1&type=.webp"
        alt="background-pic"
        className={classes.img}
      />
      <div className={classes.comp}>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Initial;
