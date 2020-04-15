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
        medicines.forEach(function(medicine){
            const ui = new UI;
            // Add item to ui
            ui.displayItemName(medicine);
        });  
    }
    static addMedicine(medicine){
        const medicines = Store.getMedicine();  
        medicines.push(medicine);
        localStorage.setItem('items', JSON.stringify(medicines));
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

