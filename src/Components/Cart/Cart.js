import React,{useContext} from "react";
import OrderTable from "../Order/OrderTable/OrderTable";
import Product from "../Product/Product.js";
import "../Cart/cart.css";
import { products } from "../../data.js";
import {ProductContext} from '../../context/ProductContext.js';
import {Link} from 'react-router-dom'

function Cart() {
  const otherProducts = products.slice(3, 7);
  const {cart} = useContext(ProductContext);

  return (
    <div className="checkout__inner__container__form__container">
      <div className="cart__description__box">
        <p>Your shopping cart contains : {cart.length} Products </p>
      </div>
      <OrderTable products={cart} />
      <div className="cart__button__box">
        <button className="compare__button__box__button white__button">
          continue shopping
        </button>
        <Link to="/checkout">
        <button className="cart__button__box__button green__button">
          Proceed to checkout
        </button>
        </Link>
      </div>
      <div className="compare__sub__container">
        <h2 className="compare__sub__header">you may be interested</h2>
        <div className="product__grid__inner__container__box">
          {otherProducts.map((element) => {
            return (
              <Product
                key={element.id}
                image={element.image}
                price={element.price}
                class={"product__grid__box"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
