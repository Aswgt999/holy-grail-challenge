function toggleNav() {
  const outergrid = document.querySelector(".outer-grid");
  outergrid.classList.toggle("outer-grid-extended");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
