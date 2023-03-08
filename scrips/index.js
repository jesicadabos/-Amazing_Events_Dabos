import data from "./amazing.js";

const divCardsIndex = document.getElementById ('cardsIndex')
let cardsIndex = '';
function allEvents(events){
    for(let event of events){
        cardsIndex += `<div class="card mx-2 my-2">
        <div class="card" style="width: 18rem;">
            <img src="${event.image}  " class="card-img-top" alt="${event.category}">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <a href="../paginas/details.html" class="btn btn-primary">Information</a>
            </div>
          </div>`
    }
    return cardsIndex;
}


divCradsIndex.innerHTML= allEvents(data.events)



