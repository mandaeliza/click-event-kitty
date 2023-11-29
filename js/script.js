var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

button.addEventListener("click", function (){
    // console.log("it's working");
    // cat.classList.add("show");
    if (cat.classList.contains("show")) {
        console.log("yes");
    } else {
        console.log("no");
    }
})