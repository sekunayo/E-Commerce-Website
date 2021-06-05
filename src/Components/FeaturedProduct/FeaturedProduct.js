import React, { useEffect, useState } from "react";
import Product from "../Product/Product.js";
import { products, list } from "../../data.js";
import "../FeaturedProduct/featuredProduct.css";
import { Link } from "react-router-dom";
const featuredProduct = products.filter(
  (element) => element.category === "featuredProduct"
);
const newList = [...new Set(featuredProduct.map((element) => element.type))];
function FeaturedProduct() {
  const [defaultCategory, setDefaultCategory] = useState(
    featuredProduct.filter((element) => element.type === "Vegetables")
  );
  const [allCategory, setAllCategory] = useState(featuredProduct);
  const [vegetable, setVegetable] = useState(null);
  const [fruit, setFruit] = useState(null);
  const [apple, setApple] = useState(null);
  const [drink, setDrink] = useState(null);
  const [meat, setMeat] = useState(null);
  useEffect(() => {
    const vegetableCategory = allCategory.filter((element) => {
      return element.type === "Vegetables";
    });
    const fruitsCategory = allCategory.filter((element) => {
      return element.type === "Fruits";
    });
    const appleCategory = allCategory.filter((element) => {
      return element.type === "Apples";
    });
    const drinkCategory = allCategory.filter(
      (element) => element.type === "Hot Drinks"
    );
    const meatCategory = allCategory.filter(
      (element) => element.type === "Meats"
    );
    setVegetable(vegetableCategory);
    setFruit(fruitsCategory);
    setApple(appleCategory);
    setDrink(drinkCategory);
    setMeat(meatCategory);
  }, [allCategory]);

  const filter = (category) => {
    window.event.preventDefault();
    if (category === "Fruits") {
      setDefaultCategory(fruit);
    } else if (category === "Apples") {
      setDefaultCategory(apple);
    } else if (category === "Hot Drinks") {
      setDefaultCategory(drink);
    } else if (category === "Meats") {
      setDefaultCategory(meat);
    } else {
      setDefaultCategory(vegetable);
    }
  };
  return (
    <div className="featured-product-container">
      <div className="inner-featured-product-container">
        <h3>Featured Products</h3>
        <ul class="featured-product-links">
          {newList.map((element, index) => {
            return (
              <li key={index}>
                <a href="" onClick={() => filter(element)}>
                  {element}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="featured-box-container">
          {defaultCategory.map((element) => (
            <Link
              to={`/product/${element.type}/${element.id}`}
              className="nav__link"
            >
              <Product
                key={element.id}
                image={element.image}
                price={element.price}
                class={"featured-box"}
                id={element.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
