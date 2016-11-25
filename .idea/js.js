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
    // 添加标签和文字到元素
    $("#target4").html("<em>target4</em>");
    // 移除 HTML 元素
    $("#target5").remove();
    // 剪切去别的 ID
    $("#target2").appendTo("#right-well");
    // 复制去别的 ID
    $("#target2").clone().appendTo("#left-well");
    // 父类
    $("#target1").parent().css("background-color", "red");
    // 子类
    $("#right-well").children().css("color", "orange")
    // 选择子类中的第二个元素
    $(".target:nth-child(2)").addClass("animated bounce");
    // 选择子类中的偶数索引，所以从0开始
    $(".target:even").addClass("animated shake");
});