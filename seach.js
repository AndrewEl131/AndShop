
const mainInput = document.getElementById('main-input');
let body = document.body;
let inputLetters = [];
let shoesName = ['green nike', 'red nike', 'orange big', 'blue nike', 'orange nike',
 'black nike', 'pink nike', 'rgb nike', 'yellow nike', 'black yellow nike'];

let shoeimg = document.createElement('img')
shoeimg.classList.add('shoeimg')
let shoeP = document.createElement('p')
shoeP.classList.add('shoeP')
let shoeH1 = document.createElement('h1')
shoeH1.classList.add('shoeH1')
// elements which hide when search
const txt = document.getElementById('andyShop-main-txt')
const txt2 = document.getElementById('best-of-all')
const txt3 = document.getElementById('shoes-category-div')
const txt4 = document.getElementById('categories-div')
const txt5 = document.getElementById('partners-div')
const txt6 = document.getElementById('to-do-div')
const txt7 = document.getElementById('h1')
const txt8 = document.getElementById('footer-txt')
mainInput.addEventListener('input', () => {
    inputLetters.push(mainInput.value)
    console.log(inputLetters);
    let searchCategory = document.createElement('div')
    searchCategory.classList.add('searchCategory')

    if(!mainInput){

      
    } else{
        body.appendChild(searchCategory)
        shoesName.forEach((element) => {
            for(let i = 0; i < shoesName.length; i++){
                if(inputLetters.includes(element[i])){
                    let list = document.createElement('li')
                    list.textContent = element
                    searchCategory.append(list)
                    list.addEventListener('click', function(){showShoe(list.textContent)})
                }
                
            }
        })
    }
    
})
function showShoe(shoe){
    switch(shoe){
        case 'green nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/nike-ragaca.png'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'Green nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;
        
        case 'red nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages//nike-red.png'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'red nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'orange big': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/Untitled(2).png'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'orange big'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'blue nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/shoe-nike-blue.jpg'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'blue nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'orange nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/nike-ornage-shoe.jpg'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'orange nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'black nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/nike-shoe-black.jpg'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'black nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'pink nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/nike-shoe-pink.jpg'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'pink nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;

        case 'rgb nike': 
        txt.style.display = 'none'
        txt2.style.display = 'none'
        txt3.style.display = 'none'
        txt4.style.display = 'none'
        txt5.style.display = 'none'
        txt6.style.display = 'none'
        txt7.style.display = 'none'
        txt8.style.display = 'none'
        shoeimg.src = './shoeImages/nike-shoe-rgb.jpg'
        shoeP.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at harum, earum animi consequatur vitae neque impedit nisi delectus architecto aliquid, ullam sed ratione? Eum aut tempora facere natus quas.'
        shoeH1.textContent = 'Rgb nike'
        body.append(shoeimg)
        body.append(shoeP)
        body.append(shoeH1)
        break;
    }
}