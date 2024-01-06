const changePageEl = document.querySelector(".changePage");
const contentEl = document.querySelector(".content");
const reviewList = productFromStorage();

const contentHtml = reviewList
  .map(
    (el) => `<article>
               <h1>${el.nameProduct}</h1>
               <ul class="reviewList" style="display: none;">${el.review
                 .map((i) => `<li>${i}</li>`)
                 .join(" ")}</ul>
               <button class="reviewList__btn">Отзывы</button>
            </article>`
  )
  .join(" ");

contentEl.innerHTML = contentHtml;

const reviewListEl = document.querySelectorAll(".reviewList");
const reviewListBtnEl = document.querySelectorAll(".reviewList__btn");

// Показывает или скрывает отзывы на конкретный продукт
for (let i = 0; i < reviewListBtnEl.length; i++) {
  reviewListBtnEl[i].addEventListener("click", () => {
    if (reviewListEl[i].style.display === "none") {
      reviewListEl[i].style.display = "block";
      reviewListBtnEl[i].innerHTML = "Скрыть";
    } else {
      reviewListEl[i].style.display = "none";
      reviewListBtnEl[i].innerHTML = "Показать";
    }
  });
}

function changePage() {
  window.open("addReview.html", "_self");
}

changePageEl.addEventListener("click", changePage);
