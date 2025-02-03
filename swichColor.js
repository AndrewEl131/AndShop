       
// COLORS
let lightColor = '#fff'
let textColorForLight = '#262626'

let darkColor = '#262626';
let textColorForDark = '#d8d9dd';

// TEXTS
let bodyW = document.body;
let containers = document.querySelectorAll('div')
let paragraph = document.querySelectorAll('p')
let icon = document.querySelectorAll('i')
let h = document.querySelectorAll('h1')
let H2 = document.querySelectorAll('h2')
let buttons = document.querySelectorAll('button')
let list = document.querySelectorAll('li')

/*function light(){

} */
function dark(){
    bodyW.style.backgroundColor = darkColor;
    paragraph.forEach((pa) => pa.style.color = textColorForDark)
    icon.forEach((ic) => ic.style.color = textColorForDark)
    containers.forEach((c) => {c.style.color = textColorForDark})
    h.forEach((t) => t.style.color = textColorForDark)
    H2.forEach((tt) => tt.style.color = textColorForDark)
    buttons.forEach((btn) => btn.style.color = textColorForDark)
    list.forEach((l) => l.style.color = textColorForDark)
}

function light(){
    bodyW.style.backgroundColor = lightColor;
    paragraph.forEach((pa) => pa.style.color = textColorForLight)
    icon.forEach((ic) => ic.style.color = textColorForLight)
    containers.forEach((c) => {c.style.color = textColorForLight})
    h.forEach((t) => t.style.color = textColorForLight)
    H2.forEach((tt) => tt.style.color = textColorForLight)
    buttons.forEach((btn) => btn.style.color = textColorForLight)
    list.forEach((l) => l.style.color = textColorForLight)
}
