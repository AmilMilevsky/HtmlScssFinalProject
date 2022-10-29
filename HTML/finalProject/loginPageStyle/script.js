"use strict"
function func() {
    let n1 = document.getElementById('unamee').value,
        n2 = document.getElementById('pwdd').value,
        n11 = localStorage.getItem('Username'),
        n22 = localStorage.getItem('Password');
    if ((n1 == n11) && (n2 == n22)) {
        showw();
        setTimeout(() => { window.open("/HTML/finalProject/mainPageStyle/mainPage.html", "_self"); }, 3000);
        localStorage.setItem("log", "yes");
    }
    else {
        alert("Ошибка при введении данных. Повторите попытку.")
    }
}
function showw() {
    document.getElementById('suc').style.transition = "0.2s"
    document.getElementById('lbl').style.transition = "0.5s"
    document.getElementById('suc').style.marginTop = "10px";
    document.getElementById('lbl').style.marginTop = "90px";
}
function show() {
    document.getElementById('suc').style.transition = "0s"
    document.getElementById('lbl').style.transition = "0s"
    document.getElementById('suc').style.marginTop = "-300px";
    document.getElementById('lbl').style.marginTop = "20px";

}
function validatee(evt) {
    let theEvent = evt || window.event,
        key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\./;
    if (regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}