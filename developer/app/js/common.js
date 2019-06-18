document.addEventListener("DOMContentLoaded", function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img"
  });

  var header = document.querySelector("header");
  var h1 = document.querySelector("h1");
  window.onscroll = function() {
    var scrollTop = window.scrollY,
      elHeight = header.offsetHeight,
      offset = elHeight / 2,
      calc = 1 - scrollTop / (elHeight - offset);

    h1.style.opacity = calc;

    if (calc > 1) {
      h1.style.opacity = 1;
    } else if (calc < 0) {
      h1.style.opacity = 0;
    }
  };
});
