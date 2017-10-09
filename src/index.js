import _ from 'lodash';
import printMe from './print.js';

function component(){
  var elem = document.createElement('div');
  var btn = document.createElement('button');

  elem.innerHTML = _.join(["Hello", "webpack"], ' ');

  btn.innerHTML = "clica";
  btn.onclick = printMe;

  elem.appendChild(btn);
  return elem;
}

document.body.appendChild(component());
