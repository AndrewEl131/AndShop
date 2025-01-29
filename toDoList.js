
const input = document.getElementById('to-do-input');
const button = document.getElementById('to-do-btn');
const listContainer = document.getElementById('list-container');
let array = [];


function addList(){
    let li = document.createElement('li');
    li.textContent = input.value;
    array.push('1')
    if(array.length === 15){
        li.style.display = 'none'
    } else if(array.length === 16){
        li.style.display = 'none'
    } else if(array.length === 17){
        li.style.display = 'none'
    } else if(array.length === 18){
        li.style.display = 'none'
    } else if(array.length === 19){
        li.style.display = 'none'
    } 
     else {
        listContainer.append(li)
    }
    console.log(array);
}