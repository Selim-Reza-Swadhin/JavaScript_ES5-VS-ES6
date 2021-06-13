// Start Writing Code Here
//console.log(alert('Hello World'));

function showAlert() {
    alert('Alert by Function Call');
}

//========================================
const clickMeBtn = document.getElementById('btn-click-me');
console.dir(clickMeBtn);

//onclick
clickMeBtn.onclick = function () {
    console.log('Button Clicked');
}

//onmouseover
clickMeBtn.onmouseover = function () {
    console.log('Mouse Over');
}
