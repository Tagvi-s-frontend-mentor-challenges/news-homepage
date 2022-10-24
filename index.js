const menu = document.querySelector(".menu");
const openButton = document.querySelector(".btn-open");
const closeButton = document.querySelector(".btn-close");
const backdrop = document.querySelector(".backdrop");
function toggle() {
  menu.classList.toggle("open");
  backdrop.classList.toggle("hidden");
}
openButton.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle);
function assignHeightToImages() {
  const posts = document.querySelectorAll("ol li");
  for (const post of posts) {
    const height = post
      .querySelector(".content")
      .getBoundingClientRect().height;
    post.querySelector("img").style.height = `${height}px`;
  }
}
assignHeightToImages();
window.addEventListener("resize", assignHeightToImages);
