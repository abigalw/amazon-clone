import React from "react";
import classes from "./LowerHeader.module.css";
import { IoMenuSharp } from "react-icons/io5";


const LowerHeader = () => {
  return (
      <section className={classes.lower__navBar}>
        <div className={classes.lower__container}>

          <ul>
            <li>
              <IoMenuSharp />
              <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift ards</li>
            <li>Sell</li>
          </ul>
        </div>
      </section>
  );
};

export default LowerHeader;