$(function(){

    $('ul.tabs li').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('on');
        $('.tab_content').removeClass('on');
        $(this).addClass('on');
        $('#' + activeTab).addClass('on');
});
$('.list').slick({
    dots: true,
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow2">',
    prevArrow:'<i class="fa-solid fa-arrow-left left_arrow2">'
});
$(".tabs").click(function(){
    $('.list').slick('refresh');
});   
 
$('.tabs2 li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.tabs2 li').removeClass('on');
    $('.tab_content2').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
});
$('.list2').slick({
    dots: true,
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow3">',
    prevArrow:'<i class="fa-solid fa-arrow-left left_arrow3">'
});
$(".tabs2").click(function(){
    $('.list2').slick('refresh');
});
});

$(window).on('load',function(){
    setTimeout(function(){
$('.post-slider').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
centerMode: true,
variableWidth: true,
nextArrow:'<i class="fa-solid fa-arrow-right right_arrow">',
prevArrow:'<i class="fa-solid fa-arrow-left left_arrow">'
});

$('.post-slider2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow">',
    prevArrow:'<i class="fa-solid fa-arrow-left left_arrow">'
    });
});

// currentDate
document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);
document.getElementById('currentDate1').value = new Date().toISOString().substring(0, 10);
});
