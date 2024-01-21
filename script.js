
let cards = document.querySelectorAll("#movies-container .card");


for(single_card of cards){
  single_card.addEventListener('mouseenter' , (event) => {
    console.log(event.target);
    event.target.classList.add("zoom");
  });

  single_card.addEventListener('mouseleave' , (event) => {
    event.target.classList.remove("zoom");
  });

} 
