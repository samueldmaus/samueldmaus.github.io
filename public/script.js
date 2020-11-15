// SET UP TIMELINE //
$(document).ready(function(){
    tl.play()
    $('.transbox').hide()
    $('.exitbutton').hide()
})

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
    autoplay: false
})

tl.add({
    targets: '.projectDiv',
    width: '0%'
})

tl.add({
    targets: '.projectDiv',
    width: '100%',
    delay: anime.stagger(100),

})

 tl.add({
    targets: '.projectDiv',
    width: '95%',
    delay: anime.stagger(100)
})

// PROJECTS //
$(".projectDiv").on('click', function(){
    let button = $(this).children('.exitbutton')
    let box = $(this).children('.transbox');
    box.show()
    button.show()
}).mouseleave(function(){
    let button = $(this).children('.exitbutton')
    let box = $(this).children('.transbox');
    button.hide()
    box.hide()
})







