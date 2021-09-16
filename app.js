const filter = document.querySelector("#filter");
let myul;
let myultemp;
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
        getAllDatas();
        myul = document.getElementsByClassName("board");
        myultemp = myul;
    });
}

function getAllDatas() {
    const imagesDiv = document.querySelector(".images");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((value, key, map) => {
                imagesDiv.innerHTML +=
                    `
<div class="card board d-flex"">
  <img class="card-img-top img" src="indir.png" alt="Card image cap" width="200px">
  <div class="card-body">
  <div class="head">
     <h5 class="card-title " >${map[key].title.substring(0, 12)}</h5>
</div>
 <div class="body">
  <p class="card-text"> ${map[key].body.substring(0, 40)}</p>
</div>
   
    <a href="#" class="btn btn-primary text-center buttons mt-2">Go somewhere</a>
  </div>
</div>
                `;
            })
        });
}

function myFunction() {
    let input, filter, li, a, i, body, images, buttons, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    myul = myultemp;
    li = document.getElementsByClassName("head");
    body = document.getElementsByClassName("body");
    buttons = document.getElementsByClassName("buttons")
    images = document.getElementsByClassName("img")
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            body[i].style.display = "";
            buttons[i].style.display = ""
            images[i].style.display = ""
        } else {
            li[i].style.display = "none";
            body[i].style.display = "none";
            buttons[i].style.display = "none";
            images[i].style.display = "none";
            myul[i].remove()
        }
        if (filter <= 1) {
            console.log("asd")
            window.location.reload();
        }
    }
}


/* PAGİNATİON JS*/

// const board = document.querySelectorAll(".board");
// const arrayPage =["sewf","dvgdf"]
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
