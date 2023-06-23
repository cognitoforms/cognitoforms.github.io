var startTime = Date.now();
var code = window.innerWidth + 'X' + window.innerHeight;

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');


    if (xPos <= 210 && yPos >= 133 && yPos <= 220) { // CSS - Settings is selected
        modalContent.textContent = 'Thank you, your code is: ' + code + 'CSS' + Math.round((Date.now() - startTime) / 1000);
    } else if (xPos >= 435 && xPos <= 667 && yPos >= 133 && yPos <= 220) { // CSW - Workflow is selected
        modalContent.textContent = 'Thank you, your code is: ' + code + 'CSW' + Math.round((Date.now() - startTime) / 1000);
    } else //Neither were selected
        modalContent.textContent = 'Thank you, your code is: ' + code + 'C' + xPos + 'X' + yPos + "T" + Math.round((Date.now() - startTime) / 1000);

    modal.style.display = 'block';
    image.style.filter = 'blur(5px)';
    image.style.opacity = '0.5';
    image.style.pointerEvents = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});