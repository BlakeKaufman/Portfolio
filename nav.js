// elelmets

// making nav pop up at a certian space
function sticky(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.style.filter = "opacity(0.7)";
    nav.style.backgroundColor = "black";
    nav.style.backdropFilter = "blur(50px)";
  } else {
    nav.style.backgroundColor = "unset";
    nav.style.filter = "none";
    nav.style.backdropFilter = "none";
  }
}
const stickyHeader = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0.1,
});
stickyHeader.observe(mainContent);

// setting smooth scorlling nav elements
navContainer.forEach(function (nav) {
  nav.addEventListener("click", function (e) {
    if (e.target.classList.contains("navLink")) {
      e.preventDefault();
      console.log(e.target.getAttribute("href"));
      const s1Cordinates = document
        .querySelector(e.target.getAttribute("href"))
        .getBoundingClientRect();
      window.scrollTo({
        left: s1Cordinates.left + window.pageXOffset,
        top: s1Cordinates.top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  });
});
