// image upload
function readURL(input) {
    if (input.files) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#medicine-image-base64').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// image update
function readUpdateURL(input) {
    if (input.files) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#medicine-update-image-base64').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
// event listner for upload and update image
$("#medicine-image").change(function () {
    readURL(this);
});

$("#medicine-update-image").change(function () {
    readUpdateURL(this);
});
