import React from 'react'

import classes from "./Header.module.css";
import LowerHeader from "../LowerHeader/Lowerheader";

import { IoSearch } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


const Header = () => {
return (
    <section className={classes.fixed}>
      <section className={classes.navBar}>
        <section className={classes.header__container}>

          {/* left header */}
          <div className={classes.logo__container}>

            {/* logo */}
            <a href=''>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log' />
            </a>


             {/* delivery */}
             <div className={classes.delivery}>
              <span>

                {/* icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Denver</span>
              </div>
            </div>
          </div>

          {/* middle header */}
          <div className={classes.search}>

            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            {/* search icon */}
            <IoSearch size={25} />
          </div>


          {/* right header */}
          <div className={classes.order__container}>
            {/* right side link */}

            {/* <Link to="#" */}
             <a href=''className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
                alt="US flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
              {/* </Link> */}
              </a>

         {/* three component */}
         {/* <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Log Out
                    </span>
                  </>
                ) : (
                  <> */}
                  <a href=''>
                    <p>Sign In</p>
                    <span>Account & List</span>
                  </a>
                  {/* </> */}
                {/* )}
              </div>
            </Link> */}

            {/* orders */}
            <a href='' >
            {/* <Link to="/orders"> */}
              <p>returns</p>
              <span>& Orders</span>
            {/* </Link> */}
            </a>

            {/* cart */}
            {/* <Link to="/cart" */}
            <a href='' className={classes.cart}>

              {/* cart icon */}
              <MdOutlineAddShoppingCart size={35} />
              <span>0</span>
            {/* </Link> */}
            </a>


          </div>
        </section>
        <LowerHeader />
      </section>
    </section>
    
  );
};

export default Header;


<a href='' >
    
</a>