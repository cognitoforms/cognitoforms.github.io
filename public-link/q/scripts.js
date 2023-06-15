var startTime = Date.now();

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var elapsedTime = (Date.now() - startTime) / 1000;

    var code = xPos + 'C' + yPos + 'T' + elapsedTime;
    alert('Thank you, your code is: ' + code);

    /* We can infer correctness when we parse the data
        if (xPos >= 0 && xPos <= 800 && yPos >= 1000 && yPos <= 1080) {
            alert('Thank you, your code is: ' + code + 'A');
        } else
            alert('Thank you, your code is: ' + code + 'B');
    */
}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});