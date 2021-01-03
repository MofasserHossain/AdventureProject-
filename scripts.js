//start
$(".open").on("click", function () {
  $(".nav-list").addClass("active");
});
$(".close").on("click", function () {
  $(".nav-list").removeClass("active");
});

// scrall

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  orgin: "top",
  duration: "1000",
  distance: "25rem",
  delay: "300",
});

sr.reveal(".animate-right", {
  orgin: "bottom",
  duration: " 1000",
  distance: "25rem",
  delay: "600",
});

// scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 300);
});
