var time = "weekly";
let dailyList = [1, 2, 3, 1.5, 2, 1];
let lastWeek = [36, 8, 7, 5, 10, 2];
let weeklyList = [32, 10, 4, 4, 5, 2];
let monthlyList = [130, 38, 15, 16, 17, 8];
let cards = $(".stats");

$("#weekly").addClass("selected 1q" )
$(".time-frame").on("click", function (event) {
    $(".time-frame").removeClass("selected")
    $(this).addClass("selected")
    if (event.target.innerText.toLowerCase() === "daily") {

        for (let i = 0; i < cards.length; i++) {
            cards[i].children[0].innerText = dailyList[i] + " Hrs"
            cards[i].children[1].innerText
                = "Yesterday - " + (dailyList[i] - 0.5) + "hrs"
        }
    } else if (event.target.innerText.toLowerCase() === "weekly") {

        for (let i = 0; i < cards.length; i++) {
            cards[i].children[0].innerText = weeklyList[i] + " Hrs"
            cards[i].children[1].innerText = "Last week - " + lastWeek[i] + "hrs"
        }
    } else if (event.target.innerText.toLowerCase() === "monthly") {

        for (let i = 0; i < cards.length; i++) {
            cards[i].children[0].innerText = monthlyList[i] + " Hrs"
            cards[i].children[1].innerText = "Last month - " + (monthlyList[i] - 1.5) + "hrs"
        }
    }

})
$(".flip-card-inner").on("click", function () {
    $(this).toggleClass("flipped");
})
