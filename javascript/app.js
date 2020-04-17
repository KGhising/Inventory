//All instantiation and connection code goes here
class Medicine{
    constructor(name, medicinetype, image, quantity){
        this.name = name;
        this.medicinetype = medicinetype;
        this.image = image;
        this.quantity = quantity;
    }
}
// Add event listerner
document.getElementById("add-item").addEventListener('click', addItemInInventory);
document.getElementById("delete-item").addEventListener('click', deleteItemFromInventory);
document.getElementById("update-item").addEventListener('click', updateItemInInventory);
// document.getElementById("add-item").addEventListener('click', addItemInInventor);


// function to add item in storage
function addItemInInventory(e){
    const name =  document.getElementById('medicine-name').value;
    const medicinetype = document.getElementById('medicine-type').value;
    const image = document.getElementById('medicine-image').value;
    const quantity = document.getElementById('medicine-quantity').value;

    //instatiating medicine class
    const medicine = new Medicine(name,medicinetype,image,quantity);
    Store.addMedicine(medicine);
    
    // Prevent default
    e.preventDefault();
}
// function to delete items from storage
function deleteItemFromInventory(){
    if(e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
          http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
              ui.showAlert('Post removed', 'alert alert-success');
              getPosts();
            })
            .catch(err => console.log(err));
        }
      }
      e.preventDefault();


}

// function to update items in storage
function updateItemInInventory(){


}
