const filter = document.querySelector("#filter");
const imagesDiv = document.querySelector(".images");
let _data, unchangedData;

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
        getAllDatas();
    });
}

function getAllDatas() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            _data = data;
            unchangedData = data;
            setCards(_data)
        });
}

function setCards(data) {
    imagesDiv.innerHTML = "";
    data.forEach((value, key, map) => {

        imagesDiv.innerHTML += `
             <div class="card board d-flex"">
                 <img class="card-img-top img" style="border-radius: 20px;" src="https://picsum.photos/200/200" alt="Card image cap" width="200px">
                 <div class="card-body">
                      <div class="head">
                        <h5 class="card-title">${map[key].title.substring(0, 12)}</h5>
                      </div>
                      <div class="body">
                         <p class="card-text"> ${map[key].body.substring(0, 40)}</p>
                      </div>
                      <a href="#" class="btn btn-primary text-center buttons mt-2">Go somewhere</a>
                 </div>
             </div>
        `;
    })
}

function filterFunction() {
    let input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    _data = unchangedData;
    _data = [..._data.filter(d => d.title.toLowerCase().indexOf(filter) != -1)]
    setCards(_data)
}

/* PAGİNATİON JS*/

// const board = document.querySelectorAll(".board");
// const arrayPage =[getAllDatas()]
// const pagList = document.querySelectorAll('.pagination');
// const showList = document.querySelectorAll('.list');
//
// function paginationBtn(arr, size = 9) {
//     let btn = '';
//
//     pagList.forEach((elem, i) => {
//
//         for (let i = 0; i < arr.length / size; i++) {
//             btn += `<button class='pagination__btn'>${i + 1}</button>`
//         }
//         elem.innerHTML = btn;
//     });
// }
//
// paginationBtn(arrayPage);
// const btnPag = document.querySelectorAll('.pagination__btn');
//
// function smartList(page, size = 9) {
//     let arrayList = [];
//     arrayList = arrayPage.slice().splice(page * size, size);
//     showList.forEach((elem, i) => {
//         let item = '';
//         for (let i = 0; i < arrayList.length; i++) {
//             item += `<div class='list__item'>${arrayList[i]}</div>`
//         }
//         elem.innerHTML = item;
//     })
//     btnPag[0].classList.add('pagination__btn-active');
// }
//
// function addClass(btnElem, prevBtn) {
//     prevBtn.forEach(elem => elem.classList.remove('pagination__btn-active'));
//     btnElem.classList.add('pagination__btn-active');
// }
//
// btnPag.forEach((elem, i) => {
//     elem.addEventListener('click', () => {
//         smartList(i);
//         addClass(elem, btnPag);
//     });
// });
//
// smartList(0);
