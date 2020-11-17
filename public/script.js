// SET UP TIMELINE //
$(document).ready(function(){
    tl.play()
    $('.transbox').hide()
    $('.exitbutton').hide()
})

// keep navbar at top when scrolling
$(document).on('scroll', function(){
    if($(document).scrollTop() > 3){
        $(".navbar").addClass("shadow");
    }else {
        $(".navbar").removeClass("shadow");
    }
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

// animation for name logo
anime({
    targets: '#logo path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 2000,
    delay: function(el, i) { return i * 100 },
    direction: 'alternate',
    loop: true
})


// Email logic //
$("#email_link").on('click', function(){
    window.location.href = "mailto:samueldmaus@gmail.com"
})

// Animation for project links
let project_click_anime = anime({
    targets: ".transbox.children('h2')",
    delay: 100,
    rotate: 360,
    autoplay: false,
})

// PROJECTS //
$(".project_div").on('click', function(){
    let box = $(this).children('.transbox');
    box.show()
}).mouseleave(function(){
    let box = $(this).children('.transbox');
    box.hide()
})







