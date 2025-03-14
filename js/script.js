function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

function setYear() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const elements = document.getElementsByClassName(
    "text-end d-none d-md-block"
  );
  if (elements.length > 0) {
    elements[0].innerHTML = `
      <p class="text-end d-none d-md-block">
        Copyright &copy; Blog Mastery ${currentYear}
      </p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  userScroll();
  setYear();
});
