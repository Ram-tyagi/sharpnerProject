var items = document.getElementsByClassName('list-group-item');
//console.log(items);
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWieght = 'bold';
}
 var titles = document.querySelectorAll('.title');
 var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
 for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red';
    
 }
