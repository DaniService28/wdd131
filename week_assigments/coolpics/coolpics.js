const menuButton = document.querySelector("#menuButton")


function toggleMenu(){
    const menu = document.querySelector('nav');
    menu.classList.toggle('hide');
}

function handleResize(){
    const menu = document.querySelector("nav")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide")
    }

    else{
        menu.classList.add("hide")
    }  
}

function viewerTemplate(src, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${src}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const pictureClicked = event.target;
    

	// get the src attribute from that element and 'split' it on the "-"
    const imgSrc = pictureClicked.src.split("-");


	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImgSrc = imgSrc[0] + "-full.jpeg";

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImgSrc, pictureClicked.alt));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeViewer = document.querySelector(".close-viewer");
    closeViewer.addEventListener("click", () => {
        document.body.removeChild(closeViewer.parentElement);
    });
}

menuButton.addEventListener("click", toggleMenu);
handleResize()
window.addEventListener("resize", handleResize);
document.body.addEventListener("click", viewHandler);