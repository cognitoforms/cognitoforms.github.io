document.querySelector('.back').addEventListener('click', function() {
  alert('Back is disabled.')
})

document.querySelector('.save').addEventListener('click', function() {
  alert('Your work has been saved.')
})

function generateCode(code) {
  return `${randomNum()}-${randomNum()}-${code}`;
}

function randomNum() {
  evenNums = [1,3,5,7,9];
  let number = ''; 
  for(let i = 0; i < evenNums[Math.floor(Math.random() * evenNums.length)]; i++){
    number += evenNums[Math.floor(Math.random() * evenNums.length)];
  }
  return number;
}