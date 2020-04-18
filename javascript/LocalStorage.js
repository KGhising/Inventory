//All code manipulating LocalStorage goes here

class Store{
    

    static get(key) {
        let values = localStorage.getItem(key);        
        if (values === null) {
            values = [];
        } else {
            values = JSON.parse(values);
        }
        return values;
    }

    
    static add(key, values){
        localStorage.setItem(key, values);
    }

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
