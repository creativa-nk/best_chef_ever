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
} */

/* function closeNav(){
    document.querySelector('.menu').style.top ='-100vh'  
}
 */


//cuando usamos el scrolls down 50px desde arriba, desaparece la flecha de scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     document.getElementById("scroll-ups").style.display = "none"; 
  } else {
    document.getElementById("scroll-ups").style.display = "block";
  }
}


/* ---------------pestañas-----------------tabs-------------- */

const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]')

targets.forEach(target =>{
    target.addEventListener('click',() =>{
        content.forEach(c=>{
            c.classList.remove('active') 
        })
        const t = document.querySelector(target.dataset.target)
        t.classList.add('active') 
    })
})

/* -----------NavBar Movil--------------- */
menu = $("nav ul");
btn = $("nav .menu_movil li");
toggle = $("nav ul .menu");
logo = $('nav .menu_movil .logo')

toggle.on("click", function() {
  if (menu.hasClass("active")) {
    menu.removeClass("active");
    logo.removeClass("active");
  } else {
    menu.addClass("active");
    logo.addClass("active");
  }
});

btn.on('click',function(){
  logo.removeClass("active");
   menu.removeClass("active"); /*  cierra menu dando a cualquier opcion del menu */
})

function reload() {
  window.location.reload();
 }


 /* -------------CONTACTO--------retrasar el link------------- */
