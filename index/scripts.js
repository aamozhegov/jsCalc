// Multi-Language logic

var arrLang = {
    "en": {
        "comp-interest-calc" : "The Power of Compound Interest shows how you can really put your money to work!",
        "introduction" : "Compound interest is the addition of interest to the principal sum of money, or in other words, interest on interest. Use our compound interest calculator to create a projection of how much your savings or investments might grow over a period of time using the power of compound interest.",
        "init-capital" : "Initial Investment:",
        "invest-duration" : "Investment Duration:",
        "profit-ratio" : "Interest Rate:",
        "invest-end" : "Total Savings:",
        "profit" : "Profit:",
    },
    "ru": {
        "comp-interest-calc" : "Сила сложного процента показывает, как действительно можно заставить свои деньги работать",
        "introduction" : "Сложные проценты - это добавление процентов к основной сумме денег, или, другими словами, проценты по процентам. Используйте наш калькулятор сложных процентов, чтобы составить прогноз того, насколько ваши сбережения или инвестиции могут вырасти за определенный период времени, используя силу сложных процентов.",
        "init-capital" : "Первоначальный Взнос:",
        "invest-duration" : "Срок:",
        "profit-ratio" : "Процентная ставка:",
        "invest-end" : "Конечная сумма:",
        "profit" : "Наращенная сумма:",
    },

    "de": {
        "comp-interest-calc" : "Die Macht des Zinseszinses zeigt, wie Sie Ihr Geld wirklich einsetzen können!",
        "introduction" : "Der Zinseszins ist die Aufstockung der Zinsen auf den Kapitalbetrag, also Zinsen auf Zinsen. Verwenden Sie unseren Zinseszinsrechner, um eine Prognose zu erstellen, wie viel Ihre Ersparnisse oder Investitionen über einen bestimmten Zeitraum mit der Kraft des Zinseszinses wachsen könnten.",
        "init-capital" : "Anfangskapital:",
        "invest-duration" : "Anlagezeitraum:",
        "profit-ratio" : "Jährlicher Zinssatz :",
        "invest-end" : "Endkapital:",
        "profit" : "Erhaltenen Zinszahlungen:",
    },

    "esp": {
        "comp-interest-calc" : "¡El poder del interés compuesto muestra cómo puede realmente poner su dinero a trabajar!",
        "introduction" : "El interés compuesto es la suma de los intereses a la suma principal de dinero, o en otras palabras, los intereses sobre los intereses. Utilice nuestra calculadora de interés compuesto para crear una proyección de cuánto podrían crecer sus ahorros o inversiones durante un período de tiempo utilizando el poder del interés compuesto.",
        "init-capital" : "Inversión inicial:",
        "invest-duration" : "Duración de la inversión:",
        "profit-ratio" : "Tasa de interés:",
        "invest-end" : "Ahorros totales:",
        "profit" : "Lucro:",
    },
}


document.addEventListener("DOMContentLoaded", getLocalLang)

// set language feature

$(function() {
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        $(".lang").each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    });
});



// local storage for language saving

function saveLocalLang(language) {
    let langs
    if (localStorage.getItem("langs") === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem("langs"))
    }
    langs.push(language)
    localStorage.setItem("langs", JSON.stringify(langs))
}

function getLocalLang() {
    let langs
    if (localStorage.getItem("langs") === null) {
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem("langs"))
    }
    langs.forEach(function(language) {
        let lang = langs[langs.length - 1]
        setTimeout(() => {
            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr("key")]);
            });
        }, )
    })
}

