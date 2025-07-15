document.addEventListener("DOMContentLoaded", function () {
    // This runs AFTER the HTML is fully loaded
    let element = document.getElementById("haha");
    element.textContent = "Hello World!";
    console.log(element);
});

document.addEventListener("DOMContentLoaded", function () {
let talk = document.getElementById("ha");
talk.textContent = "oats and honey";
console.log(talk);

});

function myFunction() {
  document.getElementById("demo").innerHTML = "YESSSS!!";
}




//  document.getElementById("cat");
// document.addEventListener("DOMContentLoaded", function () {
//     let catImage = document.getElementById("cat");
//     catImage.src = "./picturess/cats.jpg"; // Ensure the path is correct
//     console.log(catImage);
// });


