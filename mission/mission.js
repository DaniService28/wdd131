const selectElement = document.querySelector("select")
selectElement.addEventListener("change", changeTheme)

function changeTheme(){
    const themeValue = selectElement.value
    const body = document.body
    const logoImage = document.getElementById("uLogo")

    if(themeValue === "dark"){
        body.classList.add("dark")
        logoImage.src = "/byui-logo_white.png"
        logoImage.alt = "Logo Dark Theme"
    }
    else{
        body.classList.remove("dark")
        logoImage.src = "/byui-logo_blue.webp"
        logoImage.alt = "BYUI logo"
    }

}