console.log('loaded');
const swan = document.querySelector(".button-swan");
swan.addEventListener("click", function (e) {
    document.getElementById("figure").classList.toggle("swan");
});