CƠ BẢN VỀ CSS VÀ CSS3

1. DISPLAY: NONE VÀ VISIBILITY: HIDDEN

- display: none --> ẩn đi luôn thẻ trong cây html.
- visibility: hidden --> ẩn đi nhưng vẫn chiếm khoảng trống trong cây html.

2. Z - INDEX

- Z-INDEX --> chỉ làm việc với position.

3. DISPLAY

- display --> inline: Các item kiểu này sẽ nằm cùng 1 hàng.

* Không thể set WIDTH và HEIGHT.
* Chỉ margin và padding LEFT và RIGHT ( top và bottom là không thể ).

- display: block --> Các item kiểu nàu sẽ sử dụng được:

* WIDTH, HEIGHT, MARGIN, PADDING.

- display: inline-block --> Các item kiểu nàu sẽ xếp cùng 1 hàng với nhau như inline. Và có thể sử dụng được thuộc tính width, height, margin, padding như block.

4. Position
   xác định vị trí của phần tử

- position: static --> giá trị mặc định của css;
- position: relative --> thiết lập giá trị của phần tử mà không gây ảnh hưởng tới việc hiển thị ban đầu của các phần tử khác.
- position: absolute --> giá trị thiết lập vị trí theo phần tử cha là relative.

5. GRADIENT

- LINEAR-GRADIENT: đường thẳng dùng để tạo ra hiệu ứng Gradient.

* Hiển thị màu từ trái quá phải. Từ trên xuống dưới hoặc bất kì góc nào.

6. ĐỂ CHO TEXT XUỐNG DÒNG.

- word-wrap:
- word-bread:

7. TRANSFORMS:
   HOVER: di chuột vào bố tác dụng thằng con.

- PARENT:

* perspective: 600px --> kích hoạt 3d. Giá trị càng thấp càng 3d.

- Children:

* translate: X ngang, Y dọc --> không làm thay đổi phần tử bên cạnh.
* translateZ: px --> điểm đặt máy quay. Đi kèm với perspective.
* rotateZ: độ deg --> Trục oz bình thường đâm thẳng màn hình.
* rotateX: độ deg --> Xoay theo trục ngang.
* rotateY: độ deg --> Xoay theo trục dọc.
* transform-origin: 50% 50% --> mặc định cách trái 50%, cách trên 50%.

8. Absolute và Relative

- Absolute không có thằng cha thì sẽ căn theo Body.

9. initial, inherit và unset

- Inherit: kế thừa thuộc tính của các phần tử cha gần nó nhất (parent element).

- Initial: sử dụng style mặc định của trình duyệt.

- Unset: khi đặt giá trị của thuộc tính là unset, trình duyệt sẽ sử dụng một trong hai thuộc tính inherit hoặc initial tùy thuộc vào thuộc tính của phần tử cha. Nếu phần tử cha có các thuộc tính đó, nó sẽ kế thừa (inherit) giá trị thuộc tính từ phần tử cha, nếu không có thì unset sẽ sử dụng giá trị mặc định của trình duyệt (initial).

10. BACKGROUND

- Background-image: url("hinh.png"),url("hinh.png");

11. TRANSITIONS

- Transitions: TenThuocTinh 2s.

12. ANIMATIONS

- Cho phép bạn tạo chuyển động nhiều slide.

13. FLEX BOX

- flex-grow : 1
  Chiều dài của phần tử tự động rông ra khi nội dung bên trong ngắn.
