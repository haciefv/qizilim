
const imageInput = document.getElementById("images");
const addImgContainer = document.querySelector(".add-img-container");
let arr = []
imageInput.addEventListener('change', (e) => {
    arr = Object.values(e.target.files)
    arr.forEach((it, index) => {
        const div = document.createElement("div")
        div.classList.add("cover_image")
        const button = document.createElement("button");
        button.innerHTML = "Örtük et"
        button.classList.add("do_cover")
        const image = document.createElement("img");
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            image.src = reader.result;
            div.appendChild(image)
            div.appendChild(button)
            addImgContainer.appendChild(div);
        });
        reader.readAsDataURL(e.target.files[index]);
    })


})