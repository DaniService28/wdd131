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
  fullDescription: "Snorkel in crystal-clear waters with sea lions, sea turtles, and vibrant fish. Explore Santa Fe Island’s wildlife and enjoy fishing on a scenic return cruise",
  link: "0101"
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
  fullDescription: "Dive into the underwater world of Pinzon Island, where you can swim with sharks, rays, and colorful fish. This tour offers a unique opportunity to explore the rich marine life of the Galapagos.",
  link: "0102"
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
  fullDescription: "Explore the underwater beauty of Floreana Island, where you can snorkel with sea turtles, colorful fish, and unique marine life. This tour offers a chance to discover the vibrant ecosystem of the Galapagos.",
  link: "0103"
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
  fullDescription: "Hike to the summit of Bartolome Island for panoramic views of Pinnacle Rock and the surrounding islands. After the hike, enjoy snorkeling in the clear waters teeming with marine life.",
  link: "0104"
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
  fullDescription: "Explore the unique lava formations and marine life around Tuneles de Cabo Rosa. This tour includes hiking and snorkeling opportunities in the areas around the tunnels.",
  link: "0201"
},
{
  image: "images/isabelaDayTour.jpg",
  island: "isabela",
  category: "tours",
  tags: ["Hiking", "Snorkeling"],
  rating: 4, // de 5
  reviews: 23,
  title: "Isabela Day Tour - Tintoreras Islet, Flamengos and Tortoise Breeding Center",
    description: "Enjoy a full-day tour of Isabela Island, including visits to Tintoreras Islet looking for penguins and boobies, the flamingo lagoon, and the Tortoise Breeding Center. with opportunities for hiking and snorkeling along the way. starting from Puerto Villamil at 8:00 AM and returning at 5:00 PM.",
  fullDescription: "Enjoy a full-day tour of Isabela Island, including visits to Tintoreras Islet looking for penguins and boobies, the flamingo lagoon, and the Tortoise Breeding Center. with opportunities for hiking and snorkeling along the way. starting from Puerto Villamil at 8:00 AM and returning at 5:00 PM.",
  link: "0202"
},
];

function escapeCSV(value) {
  if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function formatArray(arr) {
  return `{${arr.map(tag => tag.replace(/"/g, '""')).join(",")}}`;
}

function generateCSV(data) {
  const headers = [
    "id",
    "title",
    "image",
    "island",
    "category",
    "tags",
    "rating",
    "reviews",
    "description",
    "full_description"
  ];

  const rows = data.map(item => [
    escapeCSV(item.link),
    escapeCSV(item.title),
    escapeCSV(item.image),
    escapeCSV(item.island),
    escapeCSV(item.category),
    formatArray(item.tags),
    item.rating,
    item.reviews,
    escapeCSV(item.description),
    escapeCSV(item.fullDescription || "") // usa "" si no está definido
  ]);

  const csv = [headers.join(","), ...rows.map(row => row.join(","))].join("\n");
  return csv;
}

const csvOutput = generateCSV(recommendations);
console.log(csvOutput);