$(function(){
    var $slider = $('.carousel')
    var $slideContainer = $('.carousel-img-con')
    var $slides = $('.carousel-img-group')

    var slideWidth = $slides.width()
    var slideHeight = $slides.height()
    var slideCount = $slides.length
    var totalWidth = slideCount * slideWidth

    $slider.css({
        width:slideWidth,
        height:slideHeight
    })

    $slideContainer.css({
        width:totalWidth,
        marginLeft:-slideWidth
    })

    $('#left-arrow').on('click', function(){
        $slideContainer.animate({
            left: + slideWidth
        },"slow",
        () => {
            $('.carousel-img-group:last-child').prependTo('.carousel-img-con')
            $('.carousel-img-con').css('left','0')
        })
    })

    $('#right-arrow').on('click', function(){
        $slideContainer.animate({
            left: - slideWidth
        },"slow",
        () => {
            $('.carousel-img-group:first-child').appendTo('.carousel-img-con')
            $('.carousel-img-con').css('left','0')
        })
    })

})
