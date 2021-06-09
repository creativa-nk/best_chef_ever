/*--------- Funcion para pausal el slider-------- */

var imgs = $('.sliding-background'),
playState = 'animation-play-state';
    imgs.click(function() {
        imgs.css(playState, function(i, v) {
        return v === 'paused' ? 'running' : 'paused'; 
    });
    $('body').toggleClass('paused', $(this).css(playState) === 'paused'); });

