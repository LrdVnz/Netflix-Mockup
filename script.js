/* Script per l'animazione di zoom delle cards */

const cards = document.getElementsByClassName("card");

for(single_card of cards){
  single_card.addEventListener('mouseenter' , (event) => {
    console.log(event.target);
    event.target.classList.add("zoom");
  });

  single_card.addEventListener('mouseleave' , (event) => {
    event.target.classList.remove("zoom");
  });

} 

const rows = document.getElementsByClassName("row");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
       if (entry.isIntersecting){
        entry.target.classList.add("scroll-show")
       } else if (!entry.isIntersecting) {
        entry.target.classList.remove("scroll-show")
       }
    })
   },
    {
        threshold: 1, 
    },

    rows.forEach(row => {
        observer.observe(row)
    })
)
