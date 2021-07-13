// Multi-Language logic

var arrLang = {
    "en": {
        "comp-interest-calc" : "Compound Interest Calculator",
        "introduction" : "Compound interest is the addition of interest to the principal sum of money, or in other words, interest on interest. Use our compound interest calculator to create a projection of how much your savings or investments might grow over a period of time using the power of compound interest.",
        "init-capital" : "Initial Investment:",
        "invest-duration" : "Investment Duration (years):",
        "profit-ratio" : "Interest Rate:",
        "invest-end" : "Total Savings:",
        "profit" : "Profit:",
    },
    "ru": {
        "comp-interest-calc" : "Калькулятор сложного процента",
        "introduction" : "Сложные проценты - это добавление процентов к основной сумме денег, или, другими словами, проценты по процентам. Используйте наш калькулятор сложных процентов, чтобы составить прогноз того, насколько ваши сбережения или инвестиции могут вырасти за определенный период времени, используя силу сложных процентов.",
        "init-capital" : "Первоначальный Взнос:",
        "invest-duration" : "Срок:",
        "profit-ratio" : "Процентная ставка:",
        "invest-end" : "Конечная сумма:",
        "profit" : "Наращенная сумма:",
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


