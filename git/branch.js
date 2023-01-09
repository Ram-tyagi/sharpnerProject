var items = document.getElementByClassName('list-group-item');
console.log(items);

for(var i=0;i<items.length;i++){
    items[i].style.fontWieght = 'bold';
}
 