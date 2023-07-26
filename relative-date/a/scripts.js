var startTime = Date.now();

function insertLineBreaks(str, n) {
    const regex = new RegExp(`.{1,${n}}`, 'g');
    return str.match(regex).join('\n');
}

document.addEventListener("DOMContentLoaded", function () {
    const emailbar = document.getElementById("emailbar");
    const datePicker = document.getElementById("relativedates");
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modalContent');
    var userInput = document.getElementById('userInput');
    var submitButton = document.getElementById('submitButton');

    emailbar.addEventListener("click", function () {
        datePicker.style.display = "block";
    });

    datePicker.addEventListener("click", function (event) {
        const datePickerRect = datePicker.getBoundingClientRect();
        const xPos = Math.floor(event.clientX - datePickerRect.left);
        const yPos = Math.floor(event.clientY - datePickerRect.top);
        var code = 'Thank you, your code is: ' + xPos + 'X' + yPos + 'T' + (Date.now() - startTime) / 1000;
        modal.style.display = 'block';
        emailbar.style.filter = 'blur(5px)';
        datePicker.style.filter = 'blur(5px)';

        submitButton.addEventListener("click", function () {
            var userInputValue = userInput.value; // Get the value from the textarea
            code = code + "_" + btoa(userInputValue);
            var checkboxes = document.querySelectorAll("#checkbox-container input[type='checkbox']:checked");
            var selectedCheckboxValues = Array.from(checkboxes).reduce(function (result, checkbox) {
                return result + checkbox.value;

            }, "");
            code += 'O' + selectedCheckboxValues;

            modalContent.textContent = insertLineBreaks(code, 20);

            modalContent.style.fontSize = "20px";
            modalContent.style.marginTop = '220px';
        });

    });
}); 