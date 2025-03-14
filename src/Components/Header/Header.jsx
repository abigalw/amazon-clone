import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "../LowerHeader/Lowerheader";
import { DataContext } from "../../Components/DataProvider/Dateprovider";
import { auth } from "../../Utility/firebase";
import { MdLocationPin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiCartAdd } from "react-icons/bi";

const Header = () => {
  const [{ basket, user }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section className={classes.navBar}>
        <section className={classes.header__container}>

          {/* left header */}
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <MdLocationPin />
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
            <FaSearch size={37.5} />
          </div>

          {/* right header */}
          <div className={classes.order__container}>

            {/* right side link */}
            <Link to="#" className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* three component */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Sign In</p>
                    <span>Account & List</span>
                  </>
                )}
              </div>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={classes.cart}>
            
              {/* cart icon */}
              <BiCartAdd size={39} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;