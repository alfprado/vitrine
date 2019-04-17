
import * as productView from "./views/productView";
import Repository from "./rep/Repository";
import styles from "../css/styles.css";
import normalize from "../css/normalize.css";

const state = {};

const loadData = async () => {
  const product = new Repository();
  await product.getProducts();
  state.products = product.products;

  productView.renderResults(state.products.recommendation);
  productView.renderRef(state.products.reference.item);
};


const previous = document.querySelector(".shop__btn-previous");
const next = document.querySelector(".shop__btn-next");

previous.addEventListener("click", (e) => {
  const btn = e.target.closest(".arrow");

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);

    productView.clearResults();
    productView.clearButtons();
    productView.renderResults(state.products.recommendation, goToPage);
  }
});

next.addEventListener("click", (e) => {
  const btn = e.target.closest(".arrow");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);

    productView.clearResults();
    productView.clearButtons();
    productView.renderResults(state.products.recommendation, goToPage);
  }
});

loadData();
