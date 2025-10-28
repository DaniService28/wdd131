import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  'https://ehhkqlvanqpbfbjbysbn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaGtxbHZhbnFwYmZiamJ5c2JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzQyNTIsImV4cCI6MjA3NzE1MDI1Mn0.AxBGJ3_FdqVrytWe04zOm-hbe2c0rE_-uB7f8-6pM50'
);

 // Obtener el ID desde la URL
  function getParameterByName(name) {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get(name);
  }

  const id = getParameterByName("id");

  // Consultar el item desde Supabase
  async function fetchItemById(id) {
    const { data, error } = await supabase
      .from("recommendations")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      document.querySelector("main").innerHTML = "<p>Item not found.</p>";
      console.error("Error fetching item:", error);
      return;
    }

    renderItem(data);
    setupGallery(data.image);
  }

  // Renderizar el contenido
  function renderItem(item) {
    document.querySelector("h2").textContent = item.title;

    const imgElement = document.querySelector(".images-container img");
    imgElement.src = item.image[0];
    imgElement.alt = item.title;

    const tagsContainer = document.querySelector(".tags");
    tagsContainer.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

    const ratingContainer = document.querySelector(".rating p");
    const fullStars = "★".repeat(item.rating);
    const emptyStars = "☆".repeat(5 - item.rating);
    ratingContainer.innerHTML = `<span class="star">${fullStars}${emptyStars}</span>`;

    document.querySelector(".counted-reviews").textContent = `${item.reviews} Reviews`;

    document.querySelector(".activity-description").textContent = item.full_description;
  }

  // Galería de imágenes
  function setupGallery(images) {
    let currentIndex = 0;
    const imgElement = document.querySelector(".images-container img");

    function updateImage() {
      imgElement.src = images[currentIndex];
    }

    document.getElementById("prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });

    document.getElementById("next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    updateImage();
  }

  // Ejecutar al cargar
  document.addEventListener("DOMContentLoaded", () => {
    fetchItemById(id);
  });

