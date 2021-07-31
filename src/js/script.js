window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var scrolltotop = document.getElementById("scroll-to-top");
        scrolltotop.style.bottom = "80px";
    }
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
        var scrolltotop = document.getElementById("scroll-to-top");
        scrolltotop.style.bottom = "40px";
    }
};