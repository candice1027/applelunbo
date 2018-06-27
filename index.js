$('.lunbo-tab li').on('click',function() {
    let index = $(this).index();
    let leftDistance = -(index*920)+'px';
    $('.lunbo-img ul').css('transform','translateX('+leftDistance+')')
    $(this).addClass('curr').siblings().removeClass('curr');
})