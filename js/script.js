var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

button.addEventListener("click", function (){
    // console.log("it's working");
    // cat.classList.add("show");
    if (cat.classList.contains("show")) {
        // console.log("yes");
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
    } else {
        // console.log("no");
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
    }
})