/*--------- Funcion para pausal el slider-------- */

    function stop(){
        var img = document.getElementById('sliding-background')
        
        if(img.style.animationPlayState === 'running'){
            img.style.animationPlayState = 'paused'; 
        } else {
            img.style.animationPlayState ='running';
        }
    }