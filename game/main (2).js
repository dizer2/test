let topPos = 50;
let leftPos = 50;

document.body.onkeyup = function (e) {

    if (e.keyCode == 38) {
        topPos--;
        player1.style.top = topPos + '%';
        checkWinner();
    } else if (e.keyCode == 40) {
        topPos++;
        player1.style.top = topPos + '%';
        checkWinner();
    } else if (e.keyCode == 39) {
        leftPos++;
        player1.style.left = leftPos + '%';
        checkWinner();
    }
    else if (e.keyCode == 37) {
        leftPos--;
        player1.style.left = leftPos + '%';
        checkWinner();
    }
    console.log(e.keyCode);
}
let targetTop = 50;
let targetLeft = 50;
function setTarget() {
    targetTop = Math.floor(Math.random() * 100);
    targetLeft = Math.floor(Math.random() * 100);
    target.style.top = targetTop + '%';
    target.style.left = targetLeft + '%';
}
setTarget();
function checkWinner() {
    if (topPos == targetTop && leftPos == targetLeft) {
        setTarget();
    }
}