/* addEventListener('DOMContentLoad',() =>{
    const toggle = document.querySelector('.toggle')
    if(toggle){
        toggle.addEventListener('click',() =>{
            const menu = document.querySelector('.menu')
            menu.classList.toggle('show')
        })
    }
}) */


/* const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const btn_X = document.querySelector('.btn_X');
    
    if(menu.style.top = '-100vh'){
        menu.style.top = '0';
        btn_X.style.display = 'block'
       
    }else{
        menu.style.top = '-100vh' 
    }
}

function closeNav(){
    document.querySelector('.menu').style.top ='-100vh'  
} */



//cuando usamos el scrolls down 50px desde arriba, desaparece la flecha de scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     document.getElementById("header-title-scroll-down").style.display = "none"; 
  } else {
    document.getElementById("header-title-scroll-down").style.display = "block";
  }
}

