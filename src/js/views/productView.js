// Create element for product reference
const renderReference = (product) => {
  const markup = `
        <div class="product">
            <a class="product__box-url" title="${product.name}" rel="product"
                href="https://${product.detailUrl}">

                <span class="product__img">
                    <img src="https://${product.imageName}"
                        class="" alt="${product.name}">
                </span>

                <p class="product__title">${product.name}</p>

                <span class="product__detail">
                    <span class="product__price">Por: <strong>${product.price}</strong></span>
                    <span>${product.productInfo.paymentConditions}</span>
                    <span class="product__payments"> sem juros</span>
                </span>

            </a>
        </div>
    `;

  const removeElements = elms => elms.forEach(el => el.remove());

  removeElements(document.querySelectorAll(".remove"));

  const reference = document.querySelector(".shop__reference");

  reference.insertAdjacentHTML("afterbegin", markup);
};

// Create element for product
const renderProduct = (product) => {
  const markup = `
        <div class="product">
            <a class="product__box-url" title="${product.name}" rel="product"
                href="https://${product.detailUrl}">

                <span class="product__img">
                    <img src="https://${product.imageName}"
                        class="" alt="${product.name}">
                </span>

                <p class="product__title">${product.name}</p>

                <span class="product__detail">
                    <span class="product__old-price ${product.oldPrice ? "" : "remove"}">De: ${product.oldPrice}</span>
                    <span class="product__price">Por: <strong>${product.price}</strong></span>
                    <span>
                        ${product.productInfo.paymentConditions}
                    </span>
                    <span class="product__payments"> sem juros</span>
                </span>

            </a>
        </div>
    `;

  const productList = document.querySelector(".shop__products");

  productList.insertAdjacentHTML("afterbegin", markup);
};

// Create element button (previous or next)
const createButton = (page, type) => `
    <div class="arrow arrow-${type}" data-goto=${type === "previous" ? page - 1 : page + 1}></div>
`;

// Render buttons
const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  if (page === 1 && pages > 1) {
    // Only button to go to next page
    const btnNext = createButton(page, "next");
    const shopBtnNext = document.querySelector(".shop__btn-next");

    shopBtnNext.insertAdjacentHTML("afterbegin", btnNext);
  } else if (page < pages) {
    // Both buttons
    const btnNext = `${createButton(page, "next")}`;
    const btnPrevious = `${createButton(page, "previous")}`;
    const shopBtnNext = document.querySelector(".shop__btn-next");
    const shopBtnPrevious = document.querySelector(".shop__btn-previous");

    shopBtnNext.insertAdjacentHTML("afterbegin", btnNext);
    shopBtnPrevious.insertAdjacentHTML("afterbegin", btnPrevious);
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    const btnPrevious = createButton(page, "previous");
    const vbtnPrevious = document.querySelector(".shop__btn-previous");

    vbtnPrevious.insertAdjacentHTML("afterbegin", btnPrevious);
  }
};

// Remove elements product
export const clearResults = () => {
  const shop = document.querySelector(".shop__products");

  shop.innerHTML = "";
};

// Remove button
export const clearButtons = () => {
  const btnPrevious = document.querySelector(".shop__btn-previous");

  btnPrevious.innerHTML = "";

  const btnNext = document.querySelector(".shop__btn-next");

  btnNext.innerHTML = "";
};

// Render product reference
export const renderRef = (product) => {
  renderReference(product);
};

// Render results of pagination
export const renderResults = (products, page = 1, resPerPage = 3) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  products.slice(start, end).forEach(renderProduct);

  renderButtons(page, products.length, resPerPage);
};
