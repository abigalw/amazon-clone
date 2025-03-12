import React from 'react'
import { categoryInfo } from './CategoryInfo'
import classes from "./Category.module.css";
import CategoryCard from './CategoryCard'


function Category() {
  return (
    <section className={classes.category__container}>
  {categoryInfo.map((info, index) => (
    <CategoryCard key={index} data={info} />
  ))}
</section>

  )
}

export default Category
