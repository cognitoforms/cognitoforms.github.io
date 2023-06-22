var startTime = Date.now();
var code = window.innerWidth + 'X' + window.innerHeight;

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    if (xPos >= 0 && xPos <= 800 && yPos >= 1000 && yPos <= 1080) { // Public Links
        alert('Thank you, your code is: ' + code + 'CST' + Math.round((Date.now() - startTime) / 1000));
    } else { // Anywhere Else
        alert('Thank you, your code is: ' + code + 'C' + xPos + 'X' + yPos + "T" + Math.round((Date.now() - startTime) / 1000));
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});