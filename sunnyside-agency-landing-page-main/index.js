var yellowh4 = $(".yellow h4")
yellowh4.hover(function () {
    yellowh4[0].style.setProperty("--softYellow", "hsl(51, 100%, 49%)");
}, function () {
    yellowh4[0].style.setProperty("--softYellow", "hsla(51, 100%, 49%,0.4)")
})

var redh4 = $(".red h4")
redh4.hover(function () {
    redh4[0].style.setProperty("--softRed", "hsl(7, 99%, 70%)");
}, function () {
    redh4[0].style.setProperty("--softRed", "hsla(7, 99%, 70%,0.4)")
})
