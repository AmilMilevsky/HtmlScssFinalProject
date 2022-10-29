let text1 = document.getElementById('inp1'),
    text2 = document.getElementById('inp2'),
    text3 = document.getElementById('inp3'),
    text5 = document.getElementById('inp5'),
    text6 = document.getElementById('inp6'),
    text7 = document.getElementById('inp7'),
    text8 = document.getElementById('inp8'),
    text10 = document.getElementById('inp10'),
    text11 = document.getElementById('inp11'),
     ln1, ln2, ln3, ln5, ln6, ln7, ln8, ln10, ln11;
text1.addEventListener('input',
    function () {
        ln1 = text1.value.length;
        if (ln1 > 3) {
            document.querySelector('.inv1').innerHTML = "Correct data.";
            document.querySelector('.inv1').style.color = "green";
        }
        else {
            document.querySelector('.inv1').innerHTML = "Invalid data.";
            document.querySelector('.inv1').style.color = "red";
        }
    });
text2.addEventListener('input',
    function () {
        ln2 = text2.value.length;
        if (ln2 > 3) {
            document.querySelector('.inv2').innerHTML = "Correct data.";
            document.querySelector('.inv2').style.color = "green";
        }
        else {
            document.querySelector('.inv2').innerHTML = "Invalid data.";
            document.querySelector('.inv2').style.color = "red";
        }
    });
text3.addEventListener('input',
    function () {
        ln3 = text3.value.length;
        if (ln3 > 3) {
            document.querySelector('.inv3').innerHTML = "Correct data.";
            document.querySelector('.inv3').style.color = "green";
        }
        else {
            document.querySelector('.inv3').innerHTML = "Invalid data.";
            document.querySelector('.inv3').style.color = "red";
        }
    });
text5.addEventListener('input',
    function () {
        ln5 = text5.value.length;
        if (ln5 > 3) {
            document.querySelector('.inv5').innerHTML = "Correct data.";
            document.querySelector('.inv5').style.color = "green";
        }
        else {
            document.querySelector('.inv5').innerHTML = "Invalid data.";
            document.querySelector('.inv5').style.color = "red";
        }
    });
text6.addEventListener('input',
    function () {
        ln6 = text6.value.length;
        if (ln6 > 3) {
            document.querySelector('.inv6').innerHTML = "Correct data.";
            document.querySelector('.inv6').style.color = "green";
        }
        else {
            document.querySelector('.inv6').innerHTML = "Invalid data.";
            document.querySelector('.inv6').style.color = "red";
        }
    });
text7.addEventListener('input',
    function () {
        ln7 = text7.value.length;
        if (ln7 > 3) {
            document.querySelector('.inv7').innerHTML = "Correct data.";
            document.querySelector('.inv7').style.color = "green";
        }
        else {
            document.querySelector('.inv7').innerHTML = "Invalid data.";
            document.querySelector('.inv7').style.color = "red";
        }
    });
text8.addEventListener('input',
    function () {
        ln8 = text8.value.length;
        if (ln8 > 3) {
            document.querySelector('.inv8').innerHTML = "Correct data.";
            document.querySelector('.inv8').style.color = "green";
        }
        else {
            document.querySelector('.inv8').innerHTML = "Invalid data.";
            document.querySelector('.inv8').style.color = "red";
        }
    });
text10.addEventListener('input',
    function () {
        ln10 = text10.value.length;
        if (ln10 > 3) {
            document.querySelector('.inv10').innerHTML = "Correct data.";
            document.querySelector('.inv10').style.color = "green";
        }
        else {
            document.querySelector('.inv10').innerHTML = "Invalid data.";
            document.querySelector('.inv10').style.color = "red";
        }
    });
text11.addEventListener('input',
    function () {
        ln11 = text11.value.length;
        if (ln11 > 3) {
            document.querySelector('.inv11').innerHTML = "Correct data.";
            document.querySelector('.inv11').style.color = "green";
        }
        else {
            document.querySelector('.inv11').innerHTML = "Invalid data.";
            document.querySelector('.inv11').style.color = "red";
        }
    });
