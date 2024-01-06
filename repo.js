const reviewKey = "review";

// Сохранение отзывов
function saveReviewInStorage(nameProductIn, reviewIn) {
  if (localStorage.getItem(reviewKey)) {
    const reviewList = JSON.parse(localStorage.getItem(reviewKey));
    let index = -1;

    for (let i = 0; i < reviewList.length; i++) {
      if (reviewList[i].nameProduct === nameProductIn) {
        index = i;
      }
    }

    if (index === -1) {
      reviewList.push({ nameProduct: nameProductIn, review: [reviewIn] });
    } else {
      reviewList[index].review.push(reviewIn);
    }
    localStorage.setItem(reviewKey, JSON.stringify(reviewList));
  } else {
    localStorage.setItem(
      reviewKey,
      JSON.stringify([{ nameProduct: nameProductIn, review: [reviewIn] }])
    );
  }
}

function productFromStorage() {
  const reviewList = JSON.parse(localStorage.getItem(reviewKey));
  return reviewList;
}
