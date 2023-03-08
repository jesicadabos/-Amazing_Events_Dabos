import data from "./amazing.js";

const divCardIndex = document.getElementById ('cardIndex');

function allEvents(events){
   let cardIndex = '';
  for(let event of events){
        cardIndex += `<div class="card" style="width: 18rem;">
            <img src="${event.image}  " class="card-img-top" alt="${event.category}">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <p class="card-text">$${event.price}</p>
              <a href="../paginas/details.html" class="btn btn-primary">Information</a>
            </div>
          </div>`
    }
    return cardIndex; 
}


divCardIndex.innerHTML= allEvents(data.events);



