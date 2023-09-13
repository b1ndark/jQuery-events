$(document).ready(function () {
    $("#stream1_btn").click(function () {
        $(".stream1").fadeTo(1000, 0.5);

    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    $("myButton").removeClass("blueBox").addClass("border");

    $("p").css("color", "blue").slideUp(2000).slideDown(2000);

    $("a").attr("href", "https//wwww.google.com");

}); 