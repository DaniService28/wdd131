import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  'https://ehhkqlvanqpbfbjbysbn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaGtxbHZhbnFwYmZiamJ5c2JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzQyNTIsImV4cCI6MjA3NzE1MDI1Mn0.AxBGJ3_FdqVrytWe04zOm-hbe2c0rE_-uB7f8-6pM50'
);

async function fetchRecommendations() {
  const { data, error } = await supabase
    .from('recommendations')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  return data;
}



function createHTMLCard(card) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    `<span class="star">${i < card.rating ? "★" : "☆"}</span>`
  ).join("");

  const tagsInfo = card.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  return `
    <section class="option-card">
      <div class="top-card">
        <img src="${card.image[0]}" alt="${card.title}">
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
        <a href="moreInformation.html?id=${card.id}">more...</a>
      </div>
    </section>
  `;
}

// 🎯 Filtro por isla y categoría
document.querySelector('.search-bar').addEventListener('submit', function(event) {
  event.preventDefault();

  const islandOptions = document.querySelector("#island-options").value;
  const category = document.querySelector("#categories").value;

  const filteredCards = window.allRecommendations.filter(card =>
    (islandOptions === "" || card.island === islandOptions) &&
    (category === "" || card.category === category)
  );

  renderCards(filteredCards.length > 0 ? filteredCards : []);
});

// 🖼️ Renderizar tarjetas
function renderCards(cards) {
  const container = document.querySelector('.card-container');
  if (cards.length > 0) {
    container.innerHTML = cards.map(createHTMLCard).join("");
  } else {
    container.innerHTML = "<p>No recommendations found for the selected criteria.</p>";
  }
}

//Cargar datos al iniciar
document.addEventListener("DOMContentLoaded", async function() {
  const recommendations = await fetchRecommendations();
  window.allRecommendations = recommendations;
  renderCards(recommendations);
});

const test = await supabase.from("recommendations").select("*");
console.log(test);
