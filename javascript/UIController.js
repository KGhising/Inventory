//All code manipulating UI goes here

//Define the UI variable:

// loadImage('').then((img )=>{
//     console.log(img)
// })

// function loadImage(imgUrl) {
//     return new Promise((relose, reject) => {
//         let img = new Image();
//         img.onload = () => {
//             relose(img);
//         };
//         img.onerror= (e)=>{
//             reject(e);
//         }
//         img.src=imgUrl;
//     });
// }
class UI{
    static displayItemName() {

        const medicineName = Store.displayMedicineName();
        // console.log(medicineName);

        medicineName.forEach(element => {
            // console.log(element);
            //Add medicine name in list
            const list = document.getElementById('medicine-list');
            // console.log(list);
            const li = document.createElement('li');

            //Add class
            li.className = 'list-group-item';
            li.setAttribute("data-toggle", "modal");
            li.setAttribute("data-target", "#list-modal");

            //Create text node and append to li
            li.appendChild(document.createTextNode(element.name));

            //Append the li to ul
            list.appendChild(li); 
        });
        
    }

    static displayItemsDetails(e) {
        // console.log(e.target.firstChild);
        const medicineName = e.target.firstChild.nodeValue;
        // console.dir(e.target);
        // console.log(medicineName);
        const items = Store.displayMedicineName();
   
        items.forEach((item)=>{
            const medicine = item.name;
            const type = item.medicinetype;
            const quantity = item.quantity;
                
            if(medicine === medicineName) {
                const itemDetails = document.querySelector('.medicine-details-list');
                itemDetails.innerHTML = `
                <li><span>Name: </span> ${medicine}</li>
                <li><span>Type: </span> ${type}</li>
                <li><span>Quantity: </span> ${quantity}</li>
                `;
                document.getElementById('delete-item').setAttribute('data-id', item.ID)
                UI.fillMedicine(item);
            }
        }); 
        e.preventDefault();
    }
    // clear fields
    static clearFields(){
        document.getElementById('medicine-name').value = '';
        document.getElementById('medicine-type').value = '';
        document.getElementById('medicine-image').value = '';
        document.getElementById('medicine-quantity').value = '';
    }

    static fillMedicine(item) {
        document.getElementById('medicine-update-id').value = `${item.ID}`;
        document.getElementById('medicine-update-name').value = `${item.name}`;
        document.getElementById('medicine-update-type').value = `${item.medicinetype}`;

        document.getElementById('medicine-update-quantity').value = `${item.quantity}`;
        // return item;
    }

    // static idName(id){
    //     // const ids = id.ID;
    //     // console.log(ids);
    //     return id;
    // }
    
}
