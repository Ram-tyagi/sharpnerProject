var items = document.getElementByClassName('list-group-item');
console.log(items);
items[2].style.backgroundcolor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWieght = 'bold';
}
 