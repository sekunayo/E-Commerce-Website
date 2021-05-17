import React, { useState } from "react";
import Header from "../src/Components/LargeScreenHeader/Header.js";
import SmallScreenModal from "../src/Components/SmallScreenModal/SmallScreenModal.js";
import Footer from "./Components/Footer/Footer.js";
import ProductDescription from "./Components/ProductDescription/ProductDescription.js";
import "../src/app.css";
import ProductGrid from "./Components/ProductGrid/ProductGrid.js";
import { productData1, productData2 } from "../src/data.js";
function ProductPage() {
  const [showModal, setshowModal] = useState(false);
  const onModal = () => {
    setshowModal(true);
  };
  const offModal = () => {
    setshowModal(false);
  };
  return (
    <div className="app-container">
      <Header onModal={onModal} />
      {showModal && <SmallScreenModal offModal={offModal} />}
      <ProductDescription />
      <ProductGrid productData={productData1}>{"related products"}</ProductGrid>
      <ProductGrid productData={productData2}>{"upsell products"}</ProductGrid>
      <Footer />
    </div>
  );
}

export default ProductPage;
