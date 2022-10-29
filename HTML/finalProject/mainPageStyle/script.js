function load() {
    document.querySelector('.b1').style.marginLeft = "250px";
    let a = localStorage.getItem("log");
    let x = document.querySelector("#h1");
    iff();
    if (a == "yes") {
        show();
        setTimeout(() => { showw(); }, 3000);
        x.textContent = "User name: " + localStorage.getItem("Username");
        document.getElementById("btn").style.marginLeft = "250px";
    }
}
function iff() {
    let a = localStorage.getItem("log");
    if (a == "yes") {
        document.querySelector('.btn1').style.display = "none";
        document.querySelector('.b1').style.marginLeft = "25px"

    } else {
        document.querySelector('.b0').style.display = "none";
        document.querySelector('.btn2').style.display = "none";
    }
}
function show() {
    document.getElementById('h1').style.marginTop = "100px";
    document.getElementById('divvv').style.marginTop = "10px";

}
function showw() {
    document.getElementById('h1').style.marginTop = "10px";
    document.getElementById('divvv').style.marginTop = "-200px";
}
function loadd() {
    localStorage.clear();
}