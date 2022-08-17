// object 
var carObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  farePerKilo: 3,
  capacity: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var boatObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  farePerKilo: 3,
  capacity: 6,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var bikeObject = {
  vehicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1629501195857-db7a0fa0e078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",

  farePerKilo: 2,
  capacity: 2,

  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
// farePerKilo -> per kilometer cost for hiring the vehicle
var busObject = {
  vehicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",

  farePerKilo: 3,
  capacity: 30,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

const allList = [carObject, boatObject, bikeObject, busObject];
function showAll(arrLikeObject) {
  for (let i = 0; i < arrLikeObject.length; i++) {
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
  <div class="col">
          <div class="card mb-3 shadow" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${arrLikeObject[i].imageUrl}" class="h-100 img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${arrLikeObject[i].vehicle}</h5>
                  <p class="card-text">
                    ${arrLikeObject[i].description}
                  </p>
                  <p class="card-text"><small class="text-muted">Fare per kilo ${arrLikeObject[i].farePerKilo}</small> <small class="text-muted ms-3">Capacity ${arrLikeObject[i].capacity}</small></p>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${JSON.stringify(arrLikeObject[i])})' data-bs-target="#exampleModal">
              see details
        </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
    const parentSection = document.getElementById('main-section-body');
    parentSection.appendChild(cardDiv);
  }
}
function handleBooking(currentObject) {
  const modalBody = document.getElementById("modal-body");


  modalBody.innerHTML = `
    
    <div class="card mx-auto" style="width: 25rem;">
  <img src=${currentObject.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${currentObject.vehicle}</h5>
    <p class="card-text">${currentObject.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${currentObject.farePerKilo} </small>  <small class="text-muted ms-2">Capacity ${currentObject.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
     <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
    <input class="form-control my-2" id= "distance-input"  type="number" placeholder="Koto kilo jaba?" aria-label="Search"/>
    <input class="form-control my-2" type="number" id= "quantity-input" placeholder="koita gari lagbe?" aria-label="Search"/>
    <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${JSON.stringify(currentObject)})'>submit</button>
  </div>
  </div>
</div>
    
    `;
}

function calculateCost(currentObject) {
  const quantity = document.getElementById("quantity-input").value;
  const distance = document.getElementById("distance-input").value;

  const fareDiv = document.getElementById("fare");
  const fareCost = parseFloat(quantity * distance * currentObject.farePerKilo);
  fareDiv.innerText = fareCost;

  const tax = document.getElementById('tax');
  taxCost = fareCost * 0.08;
  tax.innerText = taxCost

  const total = document.getElementById('total-cost')
  total.innerText = taxCost + fareCost
  
}

showAll(allList)