import React from "react";

import styles from "./Header.module.css";
import mealImage from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  //this component return header section and the image below the header
  return (
    <>
      <header className={styles.header}>
        <h1>React order app!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="A table full of foods" />
      </div>
    </>
  );
};
export default Header;
