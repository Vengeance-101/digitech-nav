export const navbarScroll = () => {
  const header = document.getElementById(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Adjust this value based on when you want the color to change
      header.classList.add("header");
    } else {
      header.classList.remove("header");
    }
  });
};
