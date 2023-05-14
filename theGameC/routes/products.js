const express = require("express");
const page = express.Router();
const axios = require("axios");

const product_CRUD_select = require("./product_CRUD/p_select");
const product_CRUD_insert = require("./product_CRUD/p_insert");

/* 購物車頁 */
page.get("/shopping_cart", (req, res) => {
  res.render("shopping_cart");
});

/* 商品單頁 */
page.get("/product_ID/:product_id", async (req, res) => {
  /* 商品 */
  let productSelect = await axios.get(
    `http://localhost:80/products/api/productID/${req.params.product_id}`
  );
  // 類型 Icon
  var typeIcon = "";
  var typeCss = "";
  switch (productSelect.data.product_type) {
    case "動作":
      typeIcon = "/img/Products/ProductType/typeIAction.png";
      typeCss = "ProductPageBgAction";
      break;
    case "冒險":
      typeIcon = "/img/Products/ProductType/typeIAVG.png";
      typeCss = "ProductPageBgAVG";
      break;
    case "模擬":
      typeIcon = "/img/Products/ProductType/typeISLG.png";
      typeCss = "ProductPageBgSLG";
      break;
    case "策略":
      typeIcon = "/img/Products/ProductType/typeIStra.png";
      typeCss = "ProductPageBgStrategy";
      break;
    case "運動與競技":
      typeIcon = "/img/Products/ProductType/typeICom.png";
      typeCss = "ProductPageBgEsport";
      break;
  }
  // 年齡限制
  var ageRating = "";
  switch (productSelect.data.age_rating) {
    case "6":
      ageRating = "保護級";
      break;
    case "12":
      ageRating = "輔導級";
      break;
    case "18":
      ageRating = "限制級";
      break;
    default:
      ageRating = "普遍級";
      break;
  }

  /* 商品評分 */
  let productRatingSelect = await axios.get(
    `http://localhost/products/api/productID/${req.params.product_id}/rating`
  );
  let productRating = productRatingSelect.data.average_rating
    ? productRatingSelect.data.average_rating.toFixed(1)
    : "N";

  /* 判斷是否登入 */
  if (res.locals.LoginUserID) {
    // 已登入
    res.render("productPage", {
      typeIcon: typeIcon,
      typeCss: typeCss,
      ageRating: ageRating,
      productData: productSelect.data,
      productRating: productRating,
      login_user_id: res.locals.LoginUserID,
    });
  } else {
    // 未登入
    res.render("productPage", {
      typeIcon: typeIcon,
      typeCss: typeCss,
      ageRating: ageRating,
      productData: productSelect.data,
      productRating: productRating,
      login_user_id: res.locals.LoginUserID,
    });
  }
});

page.use("/", product_CRUD_select);
page.use("/", product_CRUD_insert);

module.exports = page;
