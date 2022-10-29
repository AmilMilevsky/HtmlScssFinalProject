let text1 = document.getElementById('namee'),
    text2 = document.getElementById('numee'),
    text3 = document.getElementById('unamee'),
    text4 = document.getElementById('pwdd'),
    ln1, ln2, ln3, ln4;
text1.addEventListener('input',
    function () {
        ln1 = text1.value.length;
        if (ln1 > 3) {
            document.querySelector('.nol1').innerHTML = "Correct data.";
            document.querySelector('.nol1').style.color = "green";
        }
        else {
            document.querySelector('.nol1').innerHTML = "The value can't be null. Min length: 4, max length: 30.";
            document.querySelector('.nol1').style.color = "red";
        }
    });
text2.addEventListener('input',
    function () {
        ln2 = text2.value.length;
        if (ln2 > 3) {
            document.querySelector('.nol2').innerHTML = "Correct data.";
            document.querySelector('.nol2').style.color = "green";
        }
        else {
            document.querySelector('.nol2').innerHTML = "The value can't be null. Min length: 4, max length: 30.";
            document.querySelector('.nol2').style.color = "red";
        }
    });
text3.addEventListener('input',
    function () {
        ln3 = text3.value.length;
        if (ln3 > 3) {
            document.querySelector('.nol3').innerHTML = "Correct data.";
            document.querySelector('.nol3').style.color = "green";
        }
        else {
            document.querySelector('.nol3').innerHTML = "The value can't be null. Min length: 4, max length: 30.";
            document.querySelector('.nol3').style.color = "red";
        }
    });
text4.addEventListener('input',
    function () {
        ln4 = text4.value.length;
        if (ln4 > 3) {
            document.querySelector('.nol4').innerHTML = "Correct data.";
            document.querySelector('.nol4').style.color = "green";
        }
        else {
            document.querySelector('.nol4').innerHTML = "The value can't be null. Min length: 4, max length: 30.";
            document.querySelector('.nol4').style.color = "red";
        }
    });