$(function () {
    /*公共部分
     * 导航栏
     * footer CopyRight
     */
    // $(".headerpage").load("../html/header.html");
    // $(".footerpage").load("../html/footer.html");
    createProductMenus();


});
var createProductMenus = function () {
    $.get("/getProductNames", function (data) {
        $('.dropdown-menu.dropdown-menu-left').empty();
        for (let i = 0; i < data.length; i++) {
            $(".dropdown-menu.dropdown-menu-left").append(" <li  class=\"text-center\"><a href=\"productDynamic\" menuName=\"" + data[i] + "\">" + data[i] + "</a></li>"
            );
        }


        $("[menuname]").click(function (e) {
            // alert($(e.target).attr("id"));
            let menuName = $(e.target).attr("menuName");

            //设置cookie
            $.cookie('product', menuName);
            //获取cookie
            // $.cookie('product')
        });

    });
}
