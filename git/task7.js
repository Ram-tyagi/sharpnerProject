var ItemList=document.querySelector('#items');
ItemList.parentElement.style.backgroundColor='#f4f4f4';
ItemList.firstElementChild.textContent='Hello item 1';
ItemList.lastElementChild.textContent='hello 4';
console.log(ItemList.nextElementSibling);
console.log(ItemList.previousSibling);

console.log(ItemList.previousElementSibling);


var newDiv=document.querySelector('div');
newDiv.className='hello';
newDiv.id='hello 1';
newDiv.setAttribute('title','hello dic');
var newDivText=document.createTextNode('hello word');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
