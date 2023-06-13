var startTime = Date.now();

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var naturalWidth = image.naturalWidth;
    var naturalHeight = image.naturalHeight;
    var xPos = (event.clientX - rect.left) * (naturalWidth / rect.width);
    var yPos = (event.clientY - rect.top) * (naturalHeight / rect.height);

    var endTime = Date.now();
    var elapsedTime = (endTime - startTime) / 1000;

    if (xPos >= 0 && xPos <= 800 && yPos >= 1000 && yPos <= 1080) {
        alert('Public Links Was Selected \nClicked at coordinates: X = ' + xPos + ', Y = ' + yPos + '\nTotal time spent: ' + elapsedTime + ' seconds');
    } else
        alert('Public Links Was Not Selected \nClicked at coordinates: X = ' + xPos + ', Y = ' + yPos + '\nTotal time spent: ' + elapsedTime + ' seconds');
}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});