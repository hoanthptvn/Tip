1. background: url("../img/offer.jpg") no-repeat center/cover;

- Điều đặc biệt ở đâu ở cuối cùng ( center/cover ): ở giữa và cân bằng hình.

2. filter: opacity(70%);

- Làm mờ.

3. justify-content: initial;

- initial: trở lại style mặc định của trình duyệt.
- Unset: trình duyệt sẽ sử dụng initial hoặc inherit tùy thuộc vào thẻ cha.

4. BOX-SHADOW.

- box-shadow: x y blur scale color.

5 . body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

- Đoạn code này giải quyết vấn font chữ tiêu đề nó gồ ghề và dày hơn ==> cần fix.

6. Muốn cuộn chuột nó bị dính trên một vị trí với GRID.

- cha: align-items: baseline;
- con: position: sticky;

7. COPY MỘT ĐỐI TƯỢNG.

- webkit-box-reflect: + below 10px: Đối xứng xuống dưới. + about 10px: Đối xứng ở trên. + left, right: Đối xứng trái phải. + left 10px linear-gradient(transparent 50%, white 50%): Đối xứng nửa không màu nửa trắng.

8. THUỘC TÍNH GHI CHỮ TRONG KHỐI.

- <div contenteditable="true">: áp dụng vơi text.

9. Ribbons ( làm các ri băng buộc sổ, bút, quà, vv... ) trong css

- Sử dụng đọ dầy của border(left, right, top, bottom) làm bóng.

10. Mẹo sử dụng animation với box-shadow:

- Chúng ta sử dụng :before và after để tăng hiệu năng.

11. BORDER-RADIUS BO TRÒN TRONG MỌI TRƯỜNG HỢP

- border-radius: 999px.

12. SELECTOR: NOT()

- :not(:nth-child()): css trừ thể gì đó.
- :nth-child(2n): Chọn phần tử 2, 4, 6, 8,...
- :nth-child(2n + 1): Chọ phần tử 1, 3, 5, 7,...

- :nth-child(-n + 5): Chọn phần tử từ 1 --> 5.
- :nth-child(n + 3):nth-child(-n + 7): Chọn phần tử từ 3 đến 7.

13. CHIA ĐỀU WIDTH CHO CÁC CỘT TRONG TABLE

- table { table-layout: fixed }

14. REMOVE KHOẢNG CÁCH THỪA Ở DƯỚI IMAGE

- img{ vertical-align: middle }

15. FLEX BOX VỚI margin-left: auto

16. flex: 1 cho text: fix lỗi icon bị méo

17. BOX-SIZING: BORDER-BOX.

- html { box-sizing: border-box }.
- \*, \*:before, \*:after { box-sizing: inherit }.

18. TEXT HIỂN THỊ THEO CHIỀU DỌC

- white-space: nowrap.
- writing-mode: vertical-lr.

19. CẮT (TEXT...) NHIỀU DÒNG.

/_ stylelint-disable-next-line value-no-vendor-prefix _/
display: -webkit-box;
/_ autoprefixer: off _/
-webkit-box-orient: vertical;
line-clamp: 3;
overflow: hidden;
text-overflow: ellipsis;

20. NÊN DÙNG FONT-WEIGHT: 700 HƠN LÀ FONT-WEIGHT: BOLD.

21. LINE-HEIGHT:

- Nên sử dụng ở thẻ <body>.
- line-height: (32px / 16px) --> CSS: line-height: 2.

22. ANIMATION DỪNG VÀO TIẾP TỤC

- animation-play-state: paused --> dừng hành động animation.
- animation-play-state: running --> tiếp tục chạy animation.

23. RESET TRẠNG THÁI FOCUS CỦA BUTTON VÀ INPUT

- btn:focus:not(:focus-visible) { box-shadow: none }.

24. DISABLE BUTTON VÀ CHẶN COPY TEXT.

- pointer-events: none;
- pointer-events: all; trở vì bình thường
- tắt những tác động của layout này, khi đang trên layout khác.

25. SỬ DỤNG IMAGE, VIDEO FIXED FULL SCREEN WINDOW
    Yêu cầu các component phải sử dụng cùng một loại thẻ: <section>,...

<section> css: height: 100%, background: none,

- Parent:
  - min-width, min-height: 100%,
  - width, height: auto.
  - z-index-1 : để cho lớp này nằm dưới.

26. TÙY CHỈNH THANH SCROLL

- ::-webkit-scrollbar: chỉnh background ở đây.
- ::-webkit-scrollbar-thumb: chỉnh background nút.
