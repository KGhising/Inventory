//All code manipulating UI goes here

//Define the UI variable:
// constructor for main event button
  class UI{
    construtor(){
        this.addItems = document.querySelector('#add-item');
        this.itemDetails = document.querySelector('.medicine-details-list');
        this.updateItem = document.querySelector('#update-item');
        this.deleteItem = document.querySelector('#delete-item');
        this.imageImage = document.querySelector('#image');
    }
}

// Get posts on DOM load
     document.addEventListener('DOMContentLoaded', displayList);

    // // display list
    document.querySelector('#add-item').addEventListener('click', displayList);

    function displayList(e) {

        const medicineName = Store.getMedicine();
        console.log(medicineName);

        medicineName.forEach(element => {
           //Add medicine name in list
            const list = document.getElementById('medicine-list');
            // console.log(list);
            const li = document.createElement('li');

            //Add class
            li.className = 'list-group-item';
            // li.dataToggle = 'modal';
            // li.dataTarget ='#list-modal';

            //Create text node and append to li
            li.appendChild(document.createTextNode(element.name));

            //Append the li to ul
            list.appendChild(li); 
        });
    }


    //some refrence code

    // // Event Listner for Medicine details
    // document.querySelector('.list-group-item').addEventListener('click', function(){
    //     const dataDetails = Store.getMedicine();
    //     let output = '';
    //     let image = '';
    //     dataDetails.forEach(function(details){
    //         image = `
    //             <img src=${details.image} alt="medicine Image">
    //         `;
    //         output  += `
    //             <li class = "collection-item" name = "medicine-${details.name}"> </li>
    //             <li class = "collection-item" name = "medicine-${details.medicinetype}"> </li>
    //             <li class = "collection-item" name = "medicine-${details.quantity}"> </li>
    //         `;
    //     });
    //     this.imageImage.innerHTML = image;
    //     this.itemDetails.innerHTML = output;
    // });


        // function loadImage(src) {
        //     return new Promise((resolve, reject) => {
        //       const img = new Image();
        //       img.addEventListener("load", () => resolve(img));
        //       img.addEventListener("error", err => reject(err));
        //       img.src = src;
        //     });
        //   }; 
        //   loadImage(dataDetails.image)
        //     .then(img => console.log(`w: ${img.width} | h: ${img.height}`))
        //     .catch(err => console.error(err));
//     });
