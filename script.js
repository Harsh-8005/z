let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const colors = ['#ff9999', '#99ccff', '#99ff99', '#ffcc99', '#cc99ff', '#ffff99', '#99ffff', '#ff99ff', '#ccccff', '#ffccff'];
 

function showNextCard() {
    cards[currentIndex].classList.remove('show');
    cards[currentIndex].classList.add('hidden');
    
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * cards.length);
    } while (nextIndex === currentIndex);

    currentIndex = nextIndex;
    cards[currentIndex].classList.remove('hidden');
    cards[currentIndex].classList.add('show');
    
    
    cards[currentIndex].style.backgroundColor = colors[currentIndex];
}

setInterval(showNextCard, 3000);


cards[currentIndex].classList.add('show');
cards[currentIndex].style.backgroundColor = colors[currentIndex];

document.addEventListener("DOMContentLoaded", function() {
    var counterElement = document.getElementById("counter");
    var count = 0;

    function updateCounter() {
        counterElement.textContent = count;
        count++;
        if (count <= 1000) {
            setTimeout(updateCounter, 0.0002); // Adjust speed of counting here (milliseconds)
        }
    }

    updateCounter();
});
