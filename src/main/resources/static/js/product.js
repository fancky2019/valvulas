$(function () {
    /*公共部分
     * 导航栏
     * footer CopyRight
     */
    // $(".headerpage").load("../html/header.html");
    // $(".footerpage").load("../html/footer.html");

    // getProducts();
    // getProductByGet();
    $("#balance").click(function () {
        // getProductByGet("balance");
        $.cookie('product', 'balance');
    });

    $("#brassAngle").click(function () {
        $.cookie('product', 'brassAngle');
    });
    $("#brassBall").click(function () {
        $.cookie('product', 'brassBall');
    });
    $("#bronze").click(function () {
        $.cookie('product', 'bronze');
    });
    $("#check").click(function () {
        $.cookie('product', 'check');
    });
    $("#gate").click(function () {
        // getProductByGet("gate");
        $.cookie('product', 'gate');
    });
    $("#pressureReduce").click(function () {
        $.cookie('product', 'pressureReduce');

    });
    getProductByGet($.cookie('product'));
});

var getProducts = function () {

    $.ajax({
        type: "post",//向后台请求的方式，有post，get两种方法
        url: "/deleteUser",//url填写的是请求的路径
        cache: false,//缓存是否打开
        data: {//请求的数据，
            orgId: OrgId,
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
                    "                <h2 class=\"section-heading\">"+data[i].productname+"</h2>\n" +
                    "                <p class=\"lead\">Description:"+data[i].description+"</p>\n" +
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
                    "                <h2 class=\"section-heading\">"+data[i].productname+"</h2>\n" +
                    "                <p class=\"lead\">Description:"+data[i].description+"</p>\n" +
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
    });


}


var getProductByGet2 = function (product) {
    $.get("/getProducts?productname=" + product, function (data) {
        // for (let val of data) {
        //    val.imageURL
        // }
        for (let i = 0; i < data.length; i++) {
            if (i % 2 == 0) {
                $('.first-section-a').after("<div class=\"content-section-b\">\n" +
                    "\n" +
                    "    <div class=\"container\">\n" +
                    "\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">"+data[i].productname+"</h2>\n" +
                    "                <p class=\"lead\">Description:"+"+data[i].description+"+"</p>\n" +
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
                $('.first-section-a').after("<div class=\"content-section-a\">\n" +
                    "    <div class=\"container\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">"+data[i].productname+"</h2>\n" +
                    "                <p class=\"lead\">Description:"+"+data[i].description+"+"</p>\n" +
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
    });


}
//点击的事件源




