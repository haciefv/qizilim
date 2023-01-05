
const imageInput = document.getElementById("images");
const addImgContainer = document.querySelector(".add-img-container");
let counter = 0;

imageInput.addEventListener('change', (e) => {

    counter++;
    const div = document.createElement("div")
    div.classList.add("cover_image")
    div.id = counter
    const button = document.createElement("button");
    button.innerHTML = "Örtük et"
    button.id = counter
    button.classList.add("do_cover")
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Sil";
    deleteBtn.classList.add("delete");
    const image = document.createElement("img");
    const reader = new FileReader();

    // upload cover image and take image url
    reader.addEventListener("load", () => {

        image.src = reader.result;
        div.appendChild(image);
        div.appendChild(button);
        div.appendChild(deleteBtn);
        addImgContainer.appendChild(div);

        if (document.querySelectorAll(".cover_image").length === 1) {
            document.querySelectorAll(".cover_image")[0].children[1].style.opacity = "0.3";
            document.querySelectorAll(".cover_image")[0].children[2].style.opacity = "0.3";
            document.querySelectorAll(".cover_image")[0].children[1].disabled = true;
            document.querySelectorAll(".cover_image")[0].children[2].disabled = true;
        }else {
            document.querySelectorAll(".cover_image")[0].children[1].style.opacity = "1";
            document.querySelectorAll(".cover_image")[0].children[2].style.opacity = "1";
            document.querySelectorAll(".cover_image")[0].children[1].disabled = false;
            document.querySelectorAll(".cover_image")[0].children[2].disabled = false;
        }
        // select cover image
        document.querySelectorAll(".do_cover").forEach(btn => {
            btn.addEventListener("click", () => {
                btn.innerHTML = "Örtük şəkili edildi";
                btn.previousElementSibling.style.opacity = "1";
                btn.nextElementSibling.disabled = true;
                btn.nextElementSibling.style.opacity = "0.3";
                btn.parentElement.style.border = "1px solid #C1957C";
                btn.parentElement.style.backgroundColor = "#F6F7FA";
                btn.parentElement.style.borderRadius = "10px";

                document.querySelectorAll(".cover_image").forEach(button => {
                    if (btn.id !== button.id) {
                        button.children[0].style.opacity = "0.3";
                        button.children[1].innerHTML = 'Örtük et';
                        button.children[0].style.border = "none";
                        button.children[2].disabled = false;
                        button.children[2].style.opacity = "1"
                        button.children[1].parentElement.style.border = "none";
                        button.children[1].parentElement.style.backgroundColor = "#fff";
                        button.children[1].parentElement.style.borderRadius = "10px";
                    }
                })
            })

        });
        // delete cover image
        document.querySelectorAll(".delete").forEach(btn => {
            btn.addEventListener("click", () => {
                addImgContainer.removeChild(btn.parentElement);

                if (document.querySelectorAll(".cover_image").length == 0) {

                    imageInput.value = "";
                    counter = 0;
                }

                if (document.querySelectorAll(".cover_image").length === 1) {
                    document.querySelectorAll(".cover_image")[0].children[1].innerHTML = "Örtük et";
                    document.querySelectorAll(".cover_image")[0].children[2].disabled = false
                    document.querySelectorAll(".cover_image")[0].children[2].style.opacity = "1";
                    document.querySelectorAll(".cover_image")[0].style.border = "none";
                    document.querySelectorAll(".cover_image")[0].style.backgroundColor = "#fff";
                    document.querySelectorAll(".cover_image")[0].style.borderRadius = "10px";
                    document.querySelectorAll(".cover_image")[0].children[1].disabled = true;
                    document.querySelectorAll(".cover_image")[0].children[1].style.opacity = "0.3"
                }
            })
        })
    });

    reader.readAsDataURL(e.target.files[0]);
});



