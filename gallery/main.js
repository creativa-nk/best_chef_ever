//cuando usamos el scrolls down 50px desde arriba, desaparece la flecha de scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     document.getElementById("scroll-ups").style.display = "none"; 
  } else {
    document.getElementById("scroll-ups").style.display = "block";
  }
}