/**
 * Created by yuchengkai on 2016/11/22.
 */
document.write("hello")
$(document).ready(function () {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("#target1").css("color", "blue");
    $("#target1").prop("disabled", true);
});