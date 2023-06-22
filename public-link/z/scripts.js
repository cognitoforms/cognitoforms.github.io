var startTime = Date.now();

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var elapsedTime = (Date.now() - startTime) / 1000;

    var code = xPos + 'C' + yPos + 'T' + elapsedTime; // X & Y positions of the user's click, + Time spent on page.
    var code = code + 'x' + window.innerWidth + 'X' + window.innerHeight; // Users window size.


    if (xPos <= 210 && yPos >= 133 && yPos <= 220) { //Settings is selected
        alert('Thank you, your code is: ' + code + 'A');
    } else if (xPos >= 435 && xPos <= 667 && yPos >= 133 && yPos <= 220) { // Workflow is selected
        alert('Thank you, your code is: ' + code + 'B');
    } else //Neither were selected
        alert('Thank you, your code is: ' + code + 'C');

}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});