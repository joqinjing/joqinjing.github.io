// JavaScript Document
$(document).ready(function() {
    $("#scroll1").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top-100
        }, 1000);
    });
});
$(document).ready(function() {
    $("#scroll2").click(function() {
        $('html, body').animate({
            scrollTop: $("#skill").offset().top-100
        }, 1000);
    });
});
$(document).ready(function() {
    $("#scroll3").click(function() {
        $('html, body').animate({
            scrollTop: $("#hobby").offset().top-100
        }, 1000);
    });
});
$(document).ready(function() {
    $("#scroll4").click(function() {
        $('html, body').animate({
            scrollTop: $("#coninf").offset().top
        }, 1000);
    });
});