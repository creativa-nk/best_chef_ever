/* addEventListener('DOMContentLoad',() =>{
    const toggle = document.querySelector('.toggle')
    if(toggle){
        toggle.addEventListener('click',() =>{
            const menu = document.querySelector('.menu')
            menu.classList.toggle('show')
        })
    }
}) */


const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    
    if(menu.style.top = '-100vh'){
        menu.style.top = '0';
        toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"; /* cambia las 3 barras por X  */
    }else{
        menu.style.top = '-100vh' 
    }
}

function closeNav(){
    document.querySelector('.menu').style.top ='-100vh'  
}
