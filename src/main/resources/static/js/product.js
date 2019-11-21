$(function () {

    // onclick="selectAttr(this);

    // $("[menuname]").click(function (e) {
    //     // alert($(e.target).attr("id"));
    //     let menuName = $(e.target).attr("menuName");
    //     //设置cookie
    //     $.cookie('product', menuName);
    //     //获取cookie
    //     // $.cookie('product')
    //     getProductByGet(menuName);
    // });


    // $("#balance").click(function () {
    //     $.cookie('product', 'balance');
    // });

    createProductMenus();
    getProductByGet($.cookie('product'));
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
            //   $.cookie('product', menuName);
            //获取cookie
            // $.cookie('product')
            getProductByGet(menuName);
        });

    });
}


var deleteProducts = function () {

    $.ajax({
        type: "post",//向后台请求的方式，有post，get两种方法
        url: "/deleteUser",//url填写的是请求的路径
        cache: false,//缓存是否打开
        data: {//请求的数据，
            "userIds": userId
        },
        dataType: 'json',//请求的数据类型
        success: function (data) {//请求的返回成功的方法
            if (data && data.success) {
                alert("已经删除成功。");
                postData();
            } else {
                alert("删除失败，原因：" + data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {//请求的失败的返回的方法
            alert("删除失败，请稍后再次尝试删除！");
        }

    });
}

let clearHref = function () {
    let children = $(".dropdown-menu.dropdown-menu-left").find('a');
    for (let i = 0; i < children.length; i++) {
        children[i].setAttribute("href", "#");
    }
}

var getProductByGet = function (product) {
    $.get("/getProducts?productname=" + product, function (data) {
        // for (let val of data) {
        //    val.imageURL
        // }

        $('#content').empty();
        for (let i = 0; i < data.length; i++) {
            if (i % 2 == 0) {
                $('#content').append("<div class=\"content-section-b\">\n" +
                    "\n" +
                    "    <div class=\"container\">\n" +
                    "\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">" + data[i].productname + "</h2>\n" +
                    "                <p class=\"lead\">Description:" + data[i].description + "</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
                    "                <img class=\"img-responsive\" src=\"" + data[i].imagepath + "\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "    <!-- /.container -->\n" +
                    "\n" +
                    "</div>");
            } else {
                $('#content').append("<div class=\"content-section-a\">\n" +
                    "    <div class=\"container\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">" + data[i].productname + "</h2>\n" +
                    "                <p class=\"lead\">Description:" + data[i].description + "</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
                    "                <img class=\"img-responsive\" src=\"" + data[i].imagepath + "\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>" +
                    "")
            }
        }

        clearHref();
    });


}





