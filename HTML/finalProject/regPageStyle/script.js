"use strict"
function func() {
    // let aa = document.getElementById('namee').value,
    //     ss = document.getElementById('numee').value,
    //     dd = document.getElementById('unamee').value,
    //     ff = document.getElementById('pwdd').value;
    if (document.querySelector(".qqq").value.length > 3) {
        localStorage.setItem('Name', document.getElementById('namee').value);
        localStorage.setItem('Number', document.getElementById('numee').value);
        localStorage.setItem('Username', document.getElementById('unamee').value);
        localStorage.setItem('Password', document.getElementById('pwdd').value);
        showw();
        setTimeout(() => { window.open("/HTML/finalProject/loginPageStyle/loginPage.html", "_self"); }, 3000);
    }
    else {
        alert("Длина должна быть больше 3.");
    }

};
function showw() {
    document.getElementById('divvv').style.transition = "0.2s"
    document.getElementById('h11').style.transition = "0.5s"
    document.getElementById('divvv').style.marginTop = "10px";
    document.getElementById('h11').style.marginTop = "90px";
}
function show() {
    document.getElementById('divvv').style.transition = "0s"
    document.getElementById('h11').style.transition = "0s"
    document.getElementById('divvv').style.marginTop = "-300px";
    document.getElementById('h11').style.marginTop = "20px";

}

function validate(evt) {
    let theEvent = evt || window.event,
        key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /[0-9]|\.-/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
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
    if (document.querySelector('.qqq').style.borderColor = "red") {
        document.querySelector('.qwqw').style.color = "red"
        document.querySelector('.qwqw').style.opacity = "1.0";
    } else {
        document.querySelector('.qsqs').style.color = "green";
        document.querySelector('.qsqs').style.opacity = "1";

    }
}
