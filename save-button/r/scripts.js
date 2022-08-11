var code = window.innerWidth + 'X' + window.innerHeight;

document.body.addEventListener('click', function(e){
  code = code + 'C' + e.x + 'X' + e.y;
});

document.getElementById('save').addEventListener('click', function(e){
  code = code + 'T' + Math.round(e.timeStamp);
  alert('Thank you. Your code is: ' + code);
});
