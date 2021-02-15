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

- Linear Gradient ( Tuyến tính ):

* Hiển thị màu từ trái quá phải. Từ trên xuống dưới hoặc bất kì góc nào.

6. ĐỂ CHO TEXT XUỐNG DÒNG.

- word-wrap:
- word-bread:

7. ANIMATION:
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
