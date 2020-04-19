//All instantiation and connection code goes here
class Medicine {
  constructor(ID, name, medicinetype, image, quantity) {
    this.ID = ID;
    this.name = name;
    this.medicinetype = medicinetype;
    this.image = image;
    this.quantity = quantity;
  }
}
// Add event listerner
document.getElementById("add-item").addEventListener('click', addItemInInventory);
// document.getElementById("delete-item").addEventListener('click', deleteItemFromInventory);
document.getElementById("update-item").addEventListener('click', fillItemInform);
document.getElementById("updated-item").addEventListener('click', updateItemInInventory);
document.getElementById('medicine-list').addEventListener('click', displayDetails);

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', displayList);

// function to add item in storage
function addItemInInventory(e){
    const name =  document.getElementById('medicine-name').value;
    const medicinetype = document.getElementById('medicine-type').value;
    const image = document.getElementById('medicine-image').value;
    const quantity = document.getElementById('medicine-quantity').value;
    const data = Store.getMedicine();

    let ID;
      //Create ID
      if (data.length > 0) {
          ID = data[data.length - 1].ID + 1;
      } else {
          ID = 0;
      }
    
    if (name === '' || medicinetype === '' || quantity ==='') {
      alert('Please fill all fields');
    } else {
      //instatiating medicine class
      const medicine = new Medicine(ID, name,medicinetype,image,quantity);
      Store.addMedicine(medicine);
      
      // passing medicine
      displayList();

      UI.clearFields();
    }
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

// function to fill items in form
function fillItemInform(){
  UI.fillMedicine();
}

// Update items
function updateItemInInventory(){
  const name =  document.getElementById('medicine-update-name').value;
  const medicinetype = document.getElementById('medicine-update-type').value;
  const image = document.getElementById('medicine-update-image').value;
  const quantity = document.getElementById('medicine-update-quantity').value;
  const medicine = new Medicine(ID, name, medicinetype, image, quantity);
  console.log(medicine);
  Store.updateItemStorage(medicine);

  // refresh list
  displayList();

}