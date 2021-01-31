/* ẩn hiện element */
$("selector").fadeOut("thời gian"); // ẩn
$("selector").fadeIn("thời gian", "hiệu ứng", "callback()"); // hiện

/* di chuyển element */
$("selector").animate({ "key : value"}, "tời gian", "callback()");

/* delay() hàm độ trễ của chuyển động */
$(".green").delay(1000).fadeTo(1000, 0.5);

/* callback trong hiệu ứng */
$(".red").fadeTo(1000, 0, function () {
  $(".green").fadeTo(1000, 0, function () {
    alert("lồng nhau");
  })
});

// TÌM KIẾM 

/* parent find children */

$("#list").find("li") // kiếm tất cả thẻ li có trong #list
$("#list").parent("li") // kiếm cha li gần nhất.
$("#list").parents("li") // kiếm tất cả cha li bên ngoài.
$("#list").children("li") // kiếm tất cả thẻ li con nằm trong list.
$("#list").siblings("element") // tìm kiếm cho element.
$("#list").prev() // element trước.
$("#list").next() // element sau.

/* filtering */
$("#list").find("li").filter(":even") // tìm kiếm tất cả các li chẵn.
$("#list").children("li").filter(":even") // tìm kiếm tất cả các li chẵn là con gần nhất.
$("li").first() // ngoài ra còn có last(), eq(), not().

/* THÊM ELEMENT */

/* thêm element vào trong phía sau */
$("#list").append("<div>element</div>") // thêm element vào trong list phía sau
$("<div>element</div>").appendTo("#list") // tương đồng với cách viết trên

/* thêm element vào trong phía trước */
$("#list").prepend("<div>element</div>") // thêm element vào phía trước.
$("<div>element</div>").prependTo("#list") // thêm element vào phía trước.

/* thêm element trước or sau cùng cấp */
$("#list").before(function () {
  return "element before";
})

$("#list").after(function () {
  return "element after";
})

/* THAY THẾ ELEMENT VÀ NỘI DUNG */

// Cách 1
$("li").replaceWith("<li>Replaced</li>") // thay thế tất cả thẻ li.
$("<li>Replaced</li>").replaceAll("li")// thay thế tất cả thẻ li.

// Cách 2
$("li").replaceWith(function () {
  return "element";
})

/* XÓA ELEMENT VÀ NỘI DUNG */
$("li").remove() // xóa li
$("li").empty() // xóa nội dụng li

/* THÊM CLASS VÀ XÓA CLASS */
$("p").addClass(function (index, currentClass) {
  return "teo";
});

$("p").removeClass("teo").addClass("green") // xóa class teo, thêm class green

/* THAY ĐỔI DỮ LIỆU CỦA ELEMENT */

/* data- */
$(".gallery").data("name", "The Awesome Gallery") // Thêm dữ liệu ở dạng data-name
$(".gallery").data("name") // Lấy dữ liệu data-name.
$(".gallery").removeData("name") // Xoá dữ liệu data-name.

/* EVENT TRONG JQUERY */

$(".btn").click(function () { /* code here! */ }) // sự kiện click chuột
$(".btn").hover(function () { /* code here! */ }) // sự kiện hover chuột
$(".btn").mouseenter(function () { /* code here! */ }) // sự kiện tác động khi rê chuột vào element.
$(".btn").mouseleave(function () { /* code here! */ }) // sự kiện tác động khi rê chuột ra khỏi element.

/* 2 sự kiện liên tiếp nhau */
box.hover(function () {
  $(this).stop().fadeTo(500, 0.7);
}, function () {
  $(this).stop().fadeTo(500, 1);
})

/* ================= Utilities ================== */
// 1. Jquery.container : Kiểm tra đối tương HTML này có nằm trong đối tượng HTML khác hay không.
$.contains(document.body, contained);

// 2. Each method : Vòng lặp cho Array và Object

// 3. Extend: Tích hợp các đối tượng jQuery lại với nhau

/* ================= Selectors ================== */

// 1. Empty: Kiểm tra xem nội dung của nó có rỗng hay không

/* ================= End Selectors ================== */
/* ================= Utilities ================== */
/* ================= Utilities ================== */
/* ================= Utilities ================== */