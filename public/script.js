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
    targets: '.project_div',
    width: '0%'
})

tl.add({
    targets: '.project_div',
    width: '100%',
    boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.19), 0 10px 10px 5px rgba(0, 0, 0, 0.23)',
    delay: anime.stagger(100),

})

 tl.add({
    targets: '.project_div',
    width: '95%',
    delay: anime.stagger(100)
})

// PROJECTS //
$(".project_div").on('click', function(){
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







