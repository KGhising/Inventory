//All instantiation and connection code goes here
class Medicine {
  constructor(name, medicinetype, image, quantity) {
    this.name = name;
    this.medicinetype = medicinetype;
    this.image = image;
    this.quantity = quantity;
  }
}

// Add event listerner
document.getElementById("add-item").addEventListener('click', addItemInInventory);
// document.getElementById("delete-item").addEventListener('click', deleteItemFromInventory);
document.getElementById("update-item").addEventListener('click', updateItemInInventory);
document.getElementById('medicine-list').addEventListener('click', displayDetails);

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', displayList);

// function to add item in storage
function addItemInInventory(e){
    const name =  document.getElementById('medicine-name').value;
    const medicinetype = document.getElementById('medicine-type').value;
    const image = document.getElementById('medicine-image').value;
    const quantity = document.getElementById('medicine-quantity').value;

    //instatiating medicine class
    const medicine = new Medicine(name,medicinetype,image,quantity);
    Store.addMedicine(medicine);
    
    // passing medicine
    displayList();
    // Prevent default
    e.preventDefault();
}

// Function to display list items
function displayList(){
  document.getElementById('medicine-list').innerHTML = '';
  UI.displayItemName();
}

// Function to display list items
function displayDetails(e){
  UI.displayItemsDetails(e);
}

// function to delete items from storage

// function to update items in storage
function updateItemInInventory(){


}
