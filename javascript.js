
document.addEventListener("DOMContentLoaded", () => {

    const parentContainer = document.querySelector(".category-scroll");

    const n = 8;
    for (let i = 0; i < n; i++) {
        const categoryCard = document.createElement('div');
        categoryCard.className = "category-card";
        categoryCard.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
        const cardImage = document.createElement("img");
        cardImage.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8)}`;
        categoryCard.appendChild(cardImage);
        parentContainer.appendChild(categoryCard);
    }
});
