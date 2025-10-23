const recommendations = [
    {
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
{
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
{
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
{
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
{
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
{
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Sample Tag 1", "Sample Tag 2"],
  rating: 3, // de 5
  reviews: 35,
  title: "Sample Title",
  description: "This is a sample description for the recommendation card. It provides a brief overview of the content.",
  link: "#more-info"
},
];


function createHTMLCard(card) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<span class="star">${i < card.rating ? "★" : "☆"}</span>`
  ).join("");

  const tagsInfo = card.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  return `
    <section class="option-card">
      <div class="top-card">
        <img src="${card.image}" alt="${card.title}">
      </div>
      <div class="tags-rating-container">
        <div class="tags">${tagsInfo}</div>
        <div class="rating">
          <p>${stars}</p>
          <p class="counted-reviews">${card.reviews} Reviews</p>
        </div>
      </div>
      <div class="card-bottom">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <a href="${card.link}">more...</a>
      </div>
    </section>
  `;
}

document.querySelector('.search-bar').addEventListener('submit', function(event) {
  event.preventDefault();

  const islandOptions = document.querySelector("#island-options").value;
  const category = document.querySelector("#categories").value;

  const filteredCards = recommendations.filter(card =>
    (islandOptions === "" || card.island === islandOptions) &&
    (category === "" || card.category === category)
  );

  const container = document.querySelector('.card-container');

  if (filteredCards.length > 0) {
    container.innerHTML = filteredCards.map(createHTMLCard).join("");
  } else {
    container.innerHTML = "<p>No recommendations found for the selected criteria.</p>";
  }
});
