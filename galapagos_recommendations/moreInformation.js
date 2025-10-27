const recommendations = [
    {
  image: "images/santafe.jpg",
  island: "santa-cruz",
  category: "tours",
  tags: ["Snorkeling", "Sea lions"],
  rating: 5, // de 5
  reviews: 35,
  title: "Santa Fe Snorkeling & Fishing Tour",
  fullDescription: "Snorkel in crystal-clear waters with sea lions, sea turtles, and vibrant fish. Explore Santa Fe Island’s wildlife and enjoy fishing on a scenic return cruise",
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
  fullDescription: "Dive into the underwater world of Pinzon Island, where you can swim with sharks, rays, and colorful fish. This tour offers a unique opportunity to explore the rich marine life of the Galapagos.",
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
  fullDescription: "Explore the underwater beauty of Floreana Island, where you can snorkel with sea turtles, colorful fish, and unique marine life. This tour offers a chance to discover the vibrant ecosystem of the Galapagos.",
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
  fullDescription: "Hike to the summit of Bartolome Island for panoramic views of Pinnacle Rock and the surrounding islands. After the hike, enjoy snorkeling in the clear waters teeming with marine life.",
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
  fullDescription: "Explore the unique lava formations and marine life around Tuneles de Cabo Rosa. This tour includes hiking and snorkeling opportunities in the areas around the tunnels.",
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
  fullDescription: "Enjoy a full-day tour of Isabela Island, including visits to Tintoreras Islet looking for penguins and boobies, the flamingo lagoon, and the Tortoise Breeding Center. with opportunities for hiking and snorkeling along the way. starting from Puerto Villamil at 8:00 AM and returning at 5:00 PM.",
  link: "02014"
},
];


function getParameterByName(name) {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(name);
}

const id = getParameterByName("id");
const item = recommendations.find(obj => obj.link === `${id}`);

if (item) {
  // Título
  document.querySelector("h2").textContent = item.title;

  // Imagen principal
  const imgElement = document.querySelector(".images-container img");
  imgElement.src = item.image;
  imgElement.alt = item.title;

  // Tags
  const tagsContainer = document.querySelector(".tags");
  tagsContainer.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  // Rating
  const ratingContainer = document.querySelector(".rating p");
  const fullStars = "★".repeat(item.rating);
  const emptyStars = "☆".repeat(5 - item.rating);
  ratingContainer.innerHTML = `<span class="star">${fullStars}${emptyStars}</span>`;

  // Reviews
  document.querySelector(".counted-reviews").textContent = `${item.reviews} Reviews`;

  // Descripción
  document.querySelector(".activity-description").textContent = item.fullDescription;
} else {
  document.querySelector("main").innerHTML = "<p>Item not found.</p>";
}











// Image Gallery Functionality

let currentIndex = 0;
const imgElement = document.querySelector('.images-container img');

function updateImage() {
  imgElement.src = imagenes.galeria[currentIndex];
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagenes.galeria.length) % imagenes.galeria.length;
    updateImage();
})

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagenes.galeria.length;
    updateImage();
})

updateImage();