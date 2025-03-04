import React from 'react'
import classes from "./Category.module.css";
// import { Link } from "react-router-dom";



function CategoryCard({data}) {
  return (
    <div>
       <>
      <div className={classes.category}>
        {/* <Link to={`category/${data.name}`}> */}
        <a href=''>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imgLink} alt="" />
          <p>shop now</p>
          </a>
        {/* </Link> */}
      </div>
    </>


    </div>
  )
}

export default CategoryCard
