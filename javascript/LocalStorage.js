//All code manipulating LocalStorage goes here

class Store{

    static getMedicine(){
        let medicines;
        if (localStorage.getItem('medicines') === null) {
            medicines = [];
        } else {
            medicines = JSON.parse(localStorage.getItem('medicines'));
        }
        return medicines;
    }
    static displayMedicineName(){
        const medicines = Store.getMedicine();
        return medicines;
        // medicines.forEach(function(medicine){
        //     return medicine;
        // }); 
    }

    static addMedicine(medicine){
        const medicines = Store.getMedicine();  
        medicines.push(medicine);
        localStorage.setItem('medicines', JSON.stringify(medicines));
    }

    static updateItemStorage(medicine){
        let medicines = Store.getMedicine('medicines');

        medicines.forEach(function(med, index){
          if(med.ID === medicine.ID){
            medicines.splice(index, 1, medicine);
          }
        });
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
    static removeItemsFromStorage(id){
        const medicines = Store.getMedicine();
        // console.log(medicines);
        medicines.forEach(function(medicine, index){
            if(medicine.ID === id){
                medicines.splice(index, 1)
                // localStorage.removeItem(index);
            }
        });
        localStorage.setItem('medicines', JSON.stringify(medicines));
    }
} 
