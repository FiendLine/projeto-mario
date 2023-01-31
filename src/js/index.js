const trailerButton = document.querySelector('.trailer_button');
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal-close");
const video = document.getElementById("video");
const videoLink = video.src;

function modalAlter(){
    modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
    modalAlter();
    video.setAttribute("src", videoLink);
});

closeModalButton.addEventListener("click", () => {
    modalAlter();
    video.setAttribute("src", "");
})