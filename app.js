// let likes = 14;
// let likes2 = 38

// function login(element) {
//     console.log("I'm clicking")
//     if (element.innerText === "Login") {
//         element.innerText = "Log Out";
//     } else {
//         element.innerText = "Login";
//     }  
// }

// function addOne(element) {
//     console.log("Adding One");
//     let addedlikes = likes;
//     element.innerText = `${addedlikes} likes`;
//     likes += 1
// }

// function addOne2(element) {
//     console.log("Adding One");
//     let addedlikes = likes2;
//     element.innerText = `${addedlikes} likes`;
//     likes2 += 1
// }

// function remove(element) {
//     console.log("Removed");
//     element.remove();
// }

// function out(element) {
//     element.classList.remove("shadow");
//     console.log("Remove Shadow");

// }

// function over(element) {
//     element.classList.add("shadow");
//     console.log("Add Shadow");
// }





// JS fuera del HTML y arrow functions

let loginBtn = document.querySelector("#login-btn");
let defBtn = document.querySelector("#def-btn");
let likeBtn = document.querySelectorAll("#like-btn");


loginBtn.addEventListener("click", () => {
    if (loginBtn.textContent === "Login") {
        loginBtn.textContent = "Logout";
    }
    else {
        loginBtn.textContent = "Login";
    }
});

defBtn.addEventListener("click", erasing);

function erasing() {
    defBtn.remove();
}

for (let i=0; i<likeBtn.length;i++) {
    likeBtn[i].addEventListener("click", addLike);

    let likeNumber = 1;
    function addLike(event) {
        alert("Ninja was liked")
        event.target.innerText = `${likeNumber} likes`;
        likeNumber = likeNumber+1;
}
}

