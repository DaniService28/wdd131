const recommendations = [
    {
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Snorkeling", "Sea lions"],
  rating: 5, // de 5
  reviews: 35,
  title: "Santa Fe Snorkeling & Fishing Tour",
  description: "Snorkel in crystal-clear waters with sea lions, sea turtles, and vibrant fish. Explore Santa Fe Island’s wildlife and enjoy fishing on a scenic return cruise",
  link: "01010"
},
{
  image: "images/pinzon.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Snorkeling", "Sharks"],
  rating: 4, // de 5
  reviews: 35,
  title: "Pinzon Island Snorkeling Adventure",
  description: "Dive into the underwater world of Pinzon Island, where you can swim with sharks, rays, and colorful fish. This tour offers a unique opportunity to explore the rich marine life of the Galapagos.",
  link: "01011"
},
{
  image: "images/floreana.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Snorkeling", "Sea turtles"],
  rating: 4, // de 5
  reviews: 35,
  title: "Floreana Island Snorkeling Tour",
  description: "Explore the underwater beauty of Floreana Island, where you can snorkel with sea turtles, colorful fish, and unique marine life. This tour offers a chance to discover the vibrant ecosystem of the Galapagos.",
  link: "01012"
},
{
  image: "images/bartolome.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Hiking", "Snorkeling"],
  rating: 5, // de 5
  reviews: 35,
  title: "Bartolome Island Adventure - Pinnacle Rock Hike",
  description: "Hike to the summit of Bartolome Island for panoramic views of Pinnacle Rock and the surrounding islands. After the hike, enjoy snorkeling in the clear waters teeming with marine life.",
  link: "01013"
},
{
  image: "images/tuneles.jpg",
  island: "isabela",
  category: "tours",
  tags: ["Hiking", "Snorkeling"],
  rating: 5, // de 5
  reviews: 12,
  title: "Tunnels under water tour",
  description: "Explore the unique lava formations and marine life around Tuneles de Cabo Rosa. This tour includes hiking and snorkeling opportunities in the areas around the tunnels.",
  link: "02013"
},
{
  image: "images/isabelaDayTour.jpg",
  island: "isabela",
  category: "tours",
  tags: ["Hiking", "Snorkeling"],
  rating: 4, // de 5
  reviews: 23,
  title: "Isabela Day Tour - Tintoreras Islet, Flamengos and Tortoise Breeding Center",
  description: "Enjoy a full-day tour of Isabela Island, including visits to Tintoreras Islet looking for penguins and boobies, the flamingo lagoon, and the Tortoise Breeding Center.",
  link: "02014"
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
        <a href="moreInformation.html?id=${card.link}">more...</a>
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

  renderCards(filteredCards.length > 0 ? filteredCards : []);
});

function renderCards(cards) {
  const container = document.querySelector('.card-container');
  if (cards.length > 0) {
    container.innerHTML = cards.map(createHTMLCard).join("");
  } else {
    container.innerHTML = "<p>No recommendations found for the selected criteria.</p>";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  renderCards(recommendations);
});

