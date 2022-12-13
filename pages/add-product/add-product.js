import sliderWidth from "../main/index.js";

const imageInput = document.getElementById("images");
const addImgContainer = document.querySelector(".add-img-container");

imageInput.addEventListener('change', (e) => {
    const image = document.createElement("img");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
       image.src = reader.result;
       addImgContainer.appendChild(image);
    });
    console.log(sliderWidth)
    reader.readAsDataURL(e.target.files[0]);
})