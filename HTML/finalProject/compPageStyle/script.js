'use strict'

// function searchTable() {
//     let input, filter, found, table, tr, td, i, j;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tbl");
//     tr = localStorage.getItem("namee");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (j = 0; j < td.length; j++) {
//             if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 found = true;
//             }
//         }
//         if (found) {
//             tr[i].style.display = "";
//             found = false;
//         } else {
//             tr[i].style.display = "none";
//         }
//     }
// }

let modal = document.getElementById("myModal"),
    btn = document.getElementById("myBtn"),
    span = document.getElementsByClassName("close")[0],
    form = document.getElementById('form'),
    button = document.getElementById('clearr');

button.addEventListener('click', () => form.reset());
btn.onclick = function () {
    modal.style.display = "block";
}
let btn11 = document.getElementById('ccc');
btn11.onclick = function () {
    modal.style.display = "block";
}


let category, namee, price, description,
    neww, photo, ram, processor, rom, romtype,
    opsystem, gpu;

let a1 = +1, a2, a3, a4, a5;
function fnc() {
    addRow('tbl');
}
let buttonb = document.createElement("p");
buttonb.value = "BTNn";
function addRow(tableID) {
    a2 = localStorage.getItem("name");
    a3 = localStorage.getItem("photo");
    a4 = localStorage.getItem("price");
    a5 = '<a href="http://www.google.com">Link5<br>goes<br>here</a>'
    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(-1);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = document.createElement("td");
    let newCell3 = document.createElement("td");
    let newCell4 = document.createElement("td");
    let newCell5 = document.createElement("td");
    newRow.appendChild(newCell2)
    newRow.appendChild(newCell3)
    newRow.appendChild(newCell4)
    newRow.appendChild(newCell5)
    let newText1 = document.createTextNode(a1);
    let newText2 = document.createTextNode(a2);
    let newText3 = document.createTextNode(a3);
    let newText4 = document.createTextNode(a4);
    let ahr = document.createElement('a');
    ahr.href = "/HTML/finalProject/mainPageStyle/mainPage.html";
    ahr.setAttribute('class', 'aaa clearb');
    ahr.innerHTML = 'Clear';
    let ahr1 = document.createElement('button');
    ahr1.href = "#";
    ahr1.setAttribute('class', 'ccc');
    ahr1.setAttribute('id', 'ccc');
    ahr1.innerHTML = 'Change';
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(newText4);
    newCell5.appendChild(ahr);
    newCell5.appendChild(ahr1);
    a1++;
}
function validateForm() {
    if (document.querySelector('.inp').value.length < 3) {
        alert("Заполните все поля");
    } else {
        alert("Всё верно.");
        category = document.getElementById('aa').value;
        namee = document.getElementById('inp1').value;
        price = document.getElementById('inp2').value;
        description = document.getElementById('inp3').value;
        neww = document.getElementById('bb').value;
        photo = document.getElementById('inp5').value;
        ram = document.getElementById('inp6').value;
        processor = document.getElementById('inp7').value;
        rom = document.getElementById('inp8').value;
        romtype = document.getElementById('cc').value;
        opsystem = document.getElementById('inp10').value;
        gpu = document.getElementById('inp11').value;
        localStorage.setItem("category", category);
        localStorage.setItem("name", namee);
        localStorage.setItem("price", price);
        localStorage.setItem("description", description);
        localStorage.setItem("neww", neww);
        localStorage.setItem("photo", photo);
        localStorage.setItem("ram", ram);
        localStorage.setItem("processor", processor);
        localStorage.setItem("rom", rom);
        localStorage.setItem("romtype", romtype);
        localStorage.setItem("opsystem", opsystem);
        localStorage.setItem("gpu", gpu);
        modal.style.display = "none";
    }
}

let buttonn = document.getElementById('subm');
buttonn.addEventListener('click', () => validateForm());
span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
