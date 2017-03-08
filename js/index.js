'use strict';

var ul = document.getElementById('runners'),
    url = 'https://randomuser.me/api/?gender=female&results=10';

var createNode = function createNode(element) {
  return document.createElement(element);
};
var append = function append(parent, el) {
  return parent.appendChild(el);
};

fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  var runners = data.results;
  return runners.map(function (runner) {
    var li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = runner.picture.medium;
    span.innerHTML = runner.name.first + ' ' + runner.name.last;
    append(li, img);
    append(li, span);
    append(ul, li);
  });
}).catch(function (error) {
  console.log(error);
});