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
          if(medicine.ID === med.ID){
            medicines.splice(index, 1, medicine);
          }
        });
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
    // static removeItemsFromStorage(id){
    //     const medicines = Store.getMedicine();

    //     items.forEach(function(medicine, index){
    //         if(medicine.id === id){
    //             medicine.splice(index, 1)
    //         }
    //     });
    //     localStorage.setItem('medicines', JSON.stringify(medicines));
    // }
} 
