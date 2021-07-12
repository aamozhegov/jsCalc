/*
$(document).ready(function() {
    $("#demo").html("Hello, World!");
});

*/

var arrLang = {
    "en": {
        "CompInterestCalc" : "Compound Interest Calculator",
        "Introduction" : "Compound interest is the addition of interest to the principal sum of money, or in other words, interest on interest. Use our compound interest calculator to create a projection of how much your savings or investments might grow over a period of time using the power of compound interest.",
        "InitCapital" : "Initial Capital",
        "InvestDuration" : "Investment Duration (years):",
    },
    "ru": {
        "CompInterestCalc" : "Кальк сложных процентов",
        "Introduction" : "Сложные проценты - это добавление процентов к основной сумме денег, или, другими словами, проценты по процентам. Используйте наш калькулятор сложных процентов, чтобы составить прогноз того, насколько ваши сбережения или инвестиции могут вырасти за определенный период времени, используя силу сложных процентов.",
        "InitCapital" : "ИнитКапитал",
        "InvestDuration" : "ИнвестДурация?!",
    }
}




$(function() {
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        $(".lang").each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    });
});


