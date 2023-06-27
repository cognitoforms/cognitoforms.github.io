var startTime = Date.now();
var code = window.innerWidth + 'X' + window.innerHeight;

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    if (xPos <= 400 && yPos >= 430 && yPos <= 540) { // Public Links
        code = 'Thank you, your code is: ' + code + 'CST' + (Date.now() - startTime) / 1000;
    } else { // Anywhere Else
        code = 'Thank you, your code is: ' + code + 'C' + xPos + 'X' + yPos + 'T' + (Date.now() - startTime) / 1000;
    }


    modal.style.display = 'block';
    image.style.filter = 'blur(5px)';
    image.style.opacity = '0.5';
    image.style.pointerEvents = 'none';

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");

    button1.addEventListener("click", function () {
        modalContent.textContent = code + 'A';
        modalContent.style.marginTop = '52px';
    });
    button2.addEventListener("click", function () {
        modalContent.textContent = code + 'B';
        modalContent.style.marginTop = '52px';
    });
    button3.addEventListener("click", function () {
        modalContent.textContent = code + 'C';
        modalContent.style.marginTop = '52px';
    });
    button4.addEventListener("click", function () {
        modalContent.textContent = code + 'D';
        modalContent.style.marginTop = '52px';
    });

}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});
