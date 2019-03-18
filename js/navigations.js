$(document).ready(function () {
    resize();
    $('a[href^="#"]').click(function () {
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 90}, 800);
        return false;
        e.preventDefault();
    });

    //animations

    $(window).resize(function () {
        resize();
    });
});

$(window).load(function () {
    resize();
    $("#pre-loader").fadeOut(2000);
    animate();

    function animate() {
        $("#logo,#background-left").addClass("animated zoomIn");
    }
});

function resize() {
    bTHeight = $("#background-text").height();
    height = $("#background").height();
    if (height / 2 - bTHeight / 2 < 100) {
        $(".banner").css("minHeight", 250 + (bTHeight));
    } else {
        $(".banner").css("minHeight", height);
    }
    console.log(bTHeight);
    console.log(height);
    //bTHeight = $("#background-text").height();
    $("#background-text").css("marginTop", -1 * bTHeight / 2);//height($("#background").height());
}