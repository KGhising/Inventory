//All code manipulating UI goes here

//Define the UI variable:

class Medicine{

    constructor(name, medicinetype, image, quantity){
    
        this.name = name;
        this.medicinetype = medicinetype;
        this.image = image;
        this.quantity = quantity;
    }
    
    }
    
    document.getElementById("add-item").addEventListener('click',function(e){

        const name =  document.getElementById('medicine-name').value;
        const medicinetype = document.getElementById('medicine-type').value;
        const image = document.getElementById('medicine-image').value;
        const quantity = document.getElementById('medicine-quantity').value;
        
        //instatiating medicine class
        const medicine = new Medicine(name,medicinetype,image,quantity);
<<<<<<< HEAD
        
        Store.addMedicine(medicine);

      
=======
        //Add medicine name in list
        const list = document.getElementById('medicine-list');
        console.log(list);
        
        // const medicineName = `
        //     <li class="list-group-item">${medicine.name}</li>
        // `;
        const li = document.createElement('li');

        //Add class
        li.className = 'list-group-item';

        //Create text node and append to li
        li.appendChild(document.createTextNode(name));

        //Append the li to ul
        list.appendChild(li);


            
        
        Store.addMedicine(medicine);
        
>>>>>>> data_controller
        
        e.preventDefault();
        
   
    
        });
    



class UIcontroller{


}




// displayMedicineName(items){

//     let output = '';
//     items.forEach(function(item){

//         output  += `<li class = "collection-item" name = "medicine-${item.name}">

//         <a href ="#" class ="secondary-content">
//         <i class = "fa fa-pencil"></i>


//         </li>`;

//     });

//     document.getElementById("medicine-list") = output
// }


// document.getElementById("add-item").addEventListener('click',function(e){
//     const name =  document.getElementById('medicine-name').value;
//     const medicinetype = document.getElementById('medicine-type').value;
//     const image = document.getElementById('medicine-image').value;
//     const quantity = document.getElementById('medicine-quantity').value;
    
//         e.preventDefault();
//         const medicine = new Medicine(name,medicinetype,image,quantity);
    
//     console.log(medicine);
//     e.preventDefault();
    


//     });


//inatantiating medicine

    


