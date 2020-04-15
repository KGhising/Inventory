//All code manipulating UI goes here

//Define the UI variable:

class UIcontroller{


//loading an event listener

// loadEventListeners();

// function loadEventListeners(){

//     button.addEventListener('submit',addInformation);

displayItemName = function(items){

    let output = '';
    items.forEach(function(item){

        output  += `<li class = "collection-item" name = "medicine-${item.name}">

        <a href ="#" class ="secondary-content">
        <i class = "fa fa-pencil"></i>


        </li>`;

    });

    document.getElementById("medicine-list") = output;

}


getItems = function() {

const name =  document.getElementById('medicine-name');
const medicineType = document.getElementById('medicine-type');
const medicineImage = document.getElementById('medicine-image');
const medicineQuantity = document.getElementById('medicine-quantity');

}


}

var callover = new UIcontroller();
