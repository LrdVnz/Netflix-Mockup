/* Script per l'animazione di zoom delle cards */

const cards = document.querySelectorAll("#movies-container .card");

for (single_card of cards) {
  single_card.addEventListener("mouseenter", (event) => {
    event.target.classList.add("zoom");
  });

  single_card.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("zoom");
  });
}

/* Script per il fade-in */

const rows = document.querySelectorAll(".row");

console.log("le rows sono");
console.log(typeof rows);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-show");
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove("scroll-show");
      }
    });
  },
  {
    threshold: 0.8,
  }
);

rows.forEach((row) => {
  observer.observe(row);
});
