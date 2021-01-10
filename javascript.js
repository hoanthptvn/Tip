// 1. ===== HIỆU ỨNG CHUYỂN ĐỘNG TRONG TRANG =====

let scroll = window.requestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60)
}

let elToShow = document.querySelectorAll(".play-on-scroll");
let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  )
};

let loop = () => {
  elToShow.forEach((item, index) => {
    if (isElInViewPort(item)) {
      item.classList.add('start');
    } else {
      item.classList.remove('start');
    }
  })
  scroll(loop);
};
loop();

//2. ===== HIỆU ỨNG MENU BUTTON =====
Array.from(navItems).forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let currentItem = document.querySelector(".mb-nav-item.active");
    currentItem.classList.remove('active');

    item.classList.add('active');
    moveItem.style.left = index * "25" + '%';
  })
});

//3. ===== HIỆU ỨNG BACK TO TOP =====
let backToTopBtn = document.querySelector('.back-to-top');
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
}
