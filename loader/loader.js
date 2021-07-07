/* ------------------LOADING------------------- */
/* window.addEventListener('load',function(){
    document.getElementById('loader').classList.toggle('loader2'),10000
}) */
var fn =  function(){
    var loader = document.getElementById('loader');

    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
    loader.style.zIndex = '-5'
}

/* window.onload = function() { setInterval(fn,4000)};  */ //4seg