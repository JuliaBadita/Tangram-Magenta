console.log('loaded');
const fox = document.querySelector(".button-fox");
fox.addEventListener("click", function (e) {
    document.getElementById("figure").classList.toggle("fox");
});
