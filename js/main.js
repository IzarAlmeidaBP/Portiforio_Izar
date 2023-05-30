const linkedin = document.querySelector("#img-linkedin");
const instagram = document.querySelector("#img-instagram");
const github = document.querySelector("#img-github");

linkedin.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/izar-almeida-barreto-paes-b78595235/",
    "_blank"
  );
});
instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/izaralmeida/", "_blank");
});
github.addEventListener("click", () => {
  window.open("https://github.com/IzarAlmeidaBP", "_blank");
});
