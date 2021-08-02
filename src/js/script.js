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

function previousPage() {
    var oldURL = document.referrer.split('/')[2].split(':')[0];
    var newURL = window.location.hostname;
    alert(oldURL);
    alert(newURL);
    if (oldURL == newURL)
        window.history.go(-1);
    else 
        window.location.href = "https://www.sannicolastech.com/"
}