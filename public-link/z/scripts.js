var startTime = Date.now();
var code = window.innerWidth + 'X' + window.innerHeight;

function handleClick(event) {
    var image = event.target;
    var rect = image.getBoundingClientRect();
    var xPos = Math.floor((event.clientX - rect.left) * (image.naturalWidth / rect.width));
    var yPos = Math.floor((event.clientY - rect.top) * (image.naturalHeight / rect.height));

    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');

    if (xPos >= 220 && xPos <= 330 && yPos >= 60 && yPos <= 110) { // Workflow
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

const rawData = [

]

const processedData = rawData.map((raw) => {

    const score = raw.toLowerCase().split('o')[1]; //console.log(score);
    let totalscore = 0;

    if (score.includes(1)) {
        totalscore += 4;
    }
    if (score.includes(2)) {
        totalscore += 1;
    }
    if (score.includes(3)) {
        totalscore += 4;
    }
    if (score.includes(4)) {
        totalscore += 2;
    }
    if (score.includes(5)) {
        totalscore += 1;
    }
    if (score.includes(6)) {
        totalscore += 1;
    }
    if (score.includes(7)) { //TODO if we dont have 7 then we get angry
        totalscore += 0;
    }

    console.log(totalscore);

    const time = (raw.toLowerCase().split('t')[1]).split('o')[0]; // console.log(time);

    const res = (raw.toLowerCase().split('c')[0]).split('x'); // console.log(res);

    const click = ((raw.toLowerCase().split('c')[1]).split('t')[0]).split('x'); // console.log(click);


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
            x: click[0] ? click[0] + 'px' : null,
            y: click[1] ? click[1] + 'px' : null
        },
        s: parseFloat(time),
        totalscore
    };
}).filter((data) => data.isSuccess); //comment this line if you want to see the heatmap!


const averagetime = processedData.map((data) => data.s)
    .reduce((a, b) => a + b) / processedData.length;

console.log("Average time for Success: " + averagetime);

const successCount = processedData.length;

const failureData = rawData.filter((raw) => !processedData.some((data) => data.raw === raw));
const failureCount = failureData.length;

processedData.forEach(data => {
    if (!data.click) return;
    var el = document.createElement("div");
    el.style.top = data.click.y;
    el.style.left = data.click.x;
    el.className = 'heatmap';
    document.querySelector('#container').appendChild(el);
});

console.log(processedData);
console.log('Total:', rawData.length, 'Successful:', successCount, 'Percent Correct:', Math.round((100 * successCount) / rawData.length) + '%', 'Failure Count:', failureCount);