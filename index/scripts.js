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
    },

    "de": {
        "comp-interest-calc" : "Zinseszinsrechner",
        "introduction" : "Der Zinseszins ist die Aufstockung der Zinsen auf den Kapitalbetrag, also Zinsen auf Zinsen. Verwenden Sie unseren Zinseszinsrechner, um eine Prognose zu erstellen, wie viel Ihre Ersparnisse oder Investitionen über einen bestimmten Zeitraum mit der Kraft des Zinseszinses wachsen könnten.",
        "init-capital" : "Anfangskapital:",
        "invest-duration" : "Anlagezeitraum:",
        "profit-ratio" : "Jährlicher Zinssatz :",
        "invest-end" : "Endkapital:",
        "profit" : "Erhaltenen Zinszahlungen:",
    },

    "esp": {
        "comp-interest-calc" : "calculadora de interés compuesto",
        "introduction" : "El interés compuesto es la suma de los intereses a la suma principal de dinero, o en otras palabras, los intereses sobre los intereses. Utilice nuestra calculadora de interés compuesto para crear una proyección de cuánto podrían crecer sus ahorros o inversiones durante un período de tiempo utilizando el poder del interés compuesto.",
        "init-capital" : "Inversión inicial:",
        "invest-duration" : "Duración de la inversión (años):",
        "profit-ratio" : "Tasa de interés:",
        "invest-end" : "Ahorros totales:",
        "profit" : "Lucro:",
    },
}




$(function() {
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        $(".lang").each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    });
});


