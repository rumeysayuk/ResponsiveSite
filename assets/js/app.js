const imagesDiv = document.querySelector(".images");
const form = document.querySelector("#form");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
let _data, unchangedData;
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
        getAllDatas();
        hamburger.addEventListener("click", mobileMenu);
        navLink.forEach(n => n.addEventListener("click", closeMenu));
    });
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function showContact() {
    // if (form.style.display === "block") {
    //     form.style.display = "none";
    // } else {
    //     form.style.display = "block";
    // }
}

function showProduct() {
    // if (imagesDiv.style.display === "block") {
    //     imagesDiv.style.display = "none";
    // } else {
    //     imagesDiv.style.display = "block";
    // }
}

function getAllDatas() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            _data = data;
            unchangedData = data;
            data.forEach((item, index) => {
                item['url'] = "https://picsum.photos/300/200?random=" + (index)

            });
            setCards(_data)
        });
}

function setCards(data) {
    imagesDiv.innerHTML = "";
    for (let i = 0; i < Math.min(data.length, 12); i++) {
        imagesDiv.innerHTML += `
             <div class="card board d-flex">
                 <img class="card-img-top img" style="border-radius: 20px;" src="${data[i].url}" alt="Card image cap" width="200px">
                 <div class="card-body">
                      <div class="head">
                        <h6 class="card-title text-small text-center">${data[i].title.substring(0, 12)}</h6>
                      </div>
                      <div class="body">
                         <p class="card-text text-small text-center"> ${data[i].body.substring(0, 40)}</p>
                      </div>
               
                 </div>
             </div>
        `;
    }
}

function myPlay() {
    let audio = new Audio("music/a.mp3");
    audio.play();
}

function filterFunction() {
    let input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    _data = unchangedData;
    _data = [..._data.filter(d => d.title.toLowerCase().indexOf(filter) !== -1)]
    setCards(_data)
}

