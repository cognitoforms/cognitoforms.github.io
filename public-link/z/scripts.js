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

    if (xPos >= 1 && xPos <= 208 && yPos >= 136 && yPos <= 219) {
        alert('Settings Was Selected \n Clicked at coordinates: X = ' + xPos + ', Y = ' + yPos + '\nTotal time spent: ' + elapsedTime + ' seconds');
    } else if (xPos >= 435 && xPos <= 667 && yPos >= 136 && yPos <= 219) {
        alert('Workflow Was Selected \n Clicked at coordinates: X = ' + xPos + ', Y = ' + yPos + '\nTotal time spent: ' + elapsedTime + ' seconds');
    } else
        alert('Neither Were Selected \n Clicked at coordinates: X = ' + xPos + ', Y = ' + yPos + '\nTotal time spent: ' + elapsedTime + ' seconds');
}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});