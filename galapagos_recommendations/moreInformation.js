function getParameterByName(name) {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get(name);
}

const imagenes = {
  galeria: [
    'images/bartolome.jpg',
    'images/floreana.jpg',
    'images/pinzon.jpg',
    'images/santafe.jpg'
  ]
};
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