
const imageInput = document.getElementById("images");
const addImgContainer = document.querySelector(".add-img-container");
let arr = []
imageInput.addEventListener('change', (e) => {
    arr = Object.values(e.target.files)
    arr.forEach(it => {
        const image = document.createElement("img");
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            image.src = reader.result;
            addImgContainer.appendChild(image);
        });
        reader.readAsDataURL(e.target.files[0]);
    })


})