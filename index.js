const url = 'http://localhost:3000/getData';

const getData = function() {
  console.log('getData');
  const request = new XMLHttpRequest();

  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
    updateHtml(JSON.parse(request.response));
  };

  request.send();
};

const updateHtml = function(res){
  document.getElementById('number').innerHTML = res.id;
  document.getElementById('name').innerHTML = res.Name;
  document.getElementById('data').innerHTML = res.someDate;
};

document.addEventListener("DOMContentLoaded", function(event) {
  const p = document.createElement('div');
  p.innerHTML = 'JS is working!';
  document.body.appendChild(p);

  getData();

  const intervalID = setInterval(getData, 5000);
});
