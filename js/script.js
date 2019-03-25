var link = document.querySelector(".second-main-search-descript .butt");
var popup = document.querySelector(".container");
var date = document.querySelector(".first-forms");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  date.focus();
})
