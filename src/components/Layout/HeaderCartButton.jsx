import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  /**
   * use context for updating badge number
   * but we should update badge number for every new item of its kind
   */
  const cartCtx = useContext(cartContext);

  const numberOfCartitems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  // add bump effect to button
  const [buttonEffect, setButtonEffect] = useState(false);
  const btnClasses = `${styles.button} ${buttonEffect ? styles.bump : " "}`;
  useEffect(() => {
    if (items.length === 0) return;
    setButtonEffect(true);
    setTimeout(() => {
      setButtonEffect(false);
    }, 300);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>Your card</span>
      <span className={styles.badge}>{numberOfCartitems}</span>
    </button>
  );
};
export default HeaderCartButton;
