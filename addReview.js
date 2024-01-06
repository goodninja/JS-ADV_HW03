// Сохранение отзывов

const nameProductEl = document.querySelector(".name_product");
const reviewEl = document.querySelector(".review");
const saveReviewEl = document.querySelector(".btn");
const errorMessage = document.querySelector(".error__message");
const changePageEl = document.querySelector(".changePage");

function saveReview() {
  const nameProduct = nameProductEl.value.trim();
  const review = reviewEl.value.trim();

  if (nameProduct && review) {
    saveReviewInStorage(nameProduct, review);
  } else {
    errorMessage.textContent = "Все поля должны быть заполнены";
  }
}

// Переход на другую страницу
function changePage() {
  window.open("product.html", "_self");
}

saveReviewEl.addEventListener("click", saveReview);

changePageEl.addEventListener("click", changePage);
