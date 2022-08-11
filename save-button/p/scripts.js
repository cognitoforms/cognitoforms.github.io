var code = window.innerWidth + 'X' + window.innerHeight;

document.body.addEventListener('click', function(e){
  code = code + 'C' + e.x + 'X' + e.y;
  alert('Thank you. Your code is: ' + code + 'T' + Math.round(e.timeStamp));
  code = code + '-';
});

document.getElementById('save').addEventListener('click', function(e){
  e.stopPropagation();
  
  code = code + 'CST' + Math.round(e.timeStamp);
  alert('Thank you. Your code is: ' + code);
  code = code + '-';
});
