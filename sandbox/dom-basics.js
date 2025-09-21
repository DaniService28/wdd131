const newParagraph = document.createElement("p");
// newParagraph.innerText = "Added with Javascript!";
newParagraph.innerHTML = "Added with <strong>Javascript!</strong>";
document.body.append(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("alt", "Random Image");
newImage.src = "https://picsum.photos/200";
newImage.alt = "Random Image";
document.body.append(newImage);