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
        modalContent.style.marginTop = '135px';
    });

}

document.addEventListener('DOMContentLoaded', function () {
    var settingsImage = document.getElementById('settings');
    settingsImage.addEventListener('click', handleClick);
});

const rawData = [
    "748X871C75X89T1.981O2356",
    "1500X881CST1.195O123456",
    "1500X881C391X106T1.615O4",
    "1500X881C725X257T1.239O456",
    "1500X881CST0.933O56"
]

const processedData = rawData.map((raw) => {
    const time = raw.toLowerCase().split('t');
    const res = time[0].split('c')[0].split('x');
    const click = time[0].split('c')[1].split('x');

    const x = res[0];
    const y = res[1];

    const isSuccess = raw.includes("CST") && raw.split('-').length < 2;

    return {
        raw,
        isSuccess,
        res: {
            x,
            y
        },
        click: isSuccess ? null : {
            x: click[0] ? Math.round((100 * click[0].replace("-", "")) / x) + '%' : null,
            y: click[1] ? Math.round((100 * click[1].replace("-", "")) / y) + '%' : null
        },
        s: parseFloat(time[1])
    };
}).filter((data) => data.isSuccess);

const average = processedData.map((data) => data.s)
    .reduce((a, b) => a + b) / processedData.length;

console.log(average);

const successCount = processedData.length;

const failureData = rawData.filter((raw) => !processedData.some((data) => data.raw === raw));
const failureCount = failureData.length;

processedData.forEach(data => {
    if (!data.click) return;
    var el = document.createElement("div");
    el.style.top = data.click.y;
    el.style.left = data.click.x;
    el.className = 'heatmap';
    document.body.appendChild(el);
});

console.log(processedData);
console.log('Total:', rawData.length, 'Successful:', successCount, 'Percent Correct:', Math.round((100 * successCount) / rawData.length) + '%', 'Failure Count:', failureCount);