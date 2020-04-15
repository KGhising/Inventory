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
    




class UIcontroller{}



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


document.getElementById("add-item").addEventListener('click',function(e){
    const name =  document.getElementById('medicine-name').value;
    const medicinetype = document.getElementById('medicine-type').value;
    const image = document.getElementById('medicine-image').value;
    const quantity = document.getElementById('medicine-quantity').value;
    
        e.preventDefault();
        const medicine = new Medicine(name,medicinetype,image,quantity);
    
    console.log(medicine);
    e.preventDefault();
    


    });


//inatantiating medicine

    


