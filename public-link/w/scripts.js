var startTime = Date.now();
var code = window.innerWidth + 'X' + window.innerHeight;

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    if (xPos <= 400 && yPos >= 495 && yPos <= 540) { // Public Links
        code = 'Thank you, your code is: ' + code + 'CST' + (Date.now() - startTime) / 1000;
    } else { // Anywhere Else
        code = 'Thank you, your code is: ' + code + 'C' + xPos + 'X' + yPos + 'T' + (Date.now() - startTime) / 1000;
    }

    modal.style.display = 'block';
    image.style.filter = 'blur(5px)';
    image.style.opacity = '0.5';
    image.style.pointerEvents = 'none';

    var button1 = document.getElementById("button1");

    button1.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll("#checkbox-container input[type='checkbox']:checked");
        var selectedCheckboxValues = Array.from(checkboxes).reduce(function (result, checkbox) {
            return result + checkbox.value;

        }, "");
        code += 'O' + selectedCheckboxValues;

        modalContent.textContent = code;
        modalContent.style.marginTop = '150px';
    });

}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});