import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import { products } from "../../data.js";
function Shop() {
  const productList = products.slice(0, 8);
  return (
    <div className="shop__list">
      {productList.map((element) => {
        return (
          <ShopItem
            key={element.id}
            name={element.name}
            oldPrice={element.oldPrice}
            newPrice={element.price}
            image={element.image}
            description={element.description}
          />
        );
      })}
    </div>
  );
}

export default Shop;
