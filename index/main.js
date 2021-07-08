// variables for  values of text inputs

// const totalCost = document.getElementById("regular-contribution"),
const primaryCapital = document.getElementById("primary-capital"),
      investmentPeriod = document.getElementById("investment-period"),
      interestRate = document.getElementById("interest-rate");


// variables for values of range inputs

// const totalCostRange = document.getElementById("regular-contribution-range");
const	primaryCapitalRange = document.getElementById("primary-capital-range"),
	investmentPeriodRange = document.getElementById("investment-period-range"),
	interestRateRange = document.getElementById("interest-rate-range");


//variables for values of investments by the end of investment period

const TotalCapital = document.getElementById("total-capital"),
      TotalMonthlyPayment = document.getElementById("monthly-payment"),
      TotalRecommendedIncome = document.getElementById("recommended-income");

//variable to initiate the calculations 

const inputRange = document.querySelectorAll(".input-range");

// Arrow function expression (стрелочная функция)

const assignValue = () => {
	totalCost.value = totalCostRange.value; 
	primaryCapital.value = primaryCapitalRange.value;
	investmentPeriod.value = investmentPeriodRange.value;
	interestRate.value = percentageRange.value;
}

assignValue();

 
for(let input of inputRange) {
	input.addEventListener('input', () => {
		assignValue();
		calculation(totalCost.value, primaryCapital.value, investmentPeriod.value  );
	})
}

/* 
primaryCapital = initial principal balance
interestRate = amount of interest per period (year)
regularContribution = not done yet
investmentPeriod = compounding frecuency

*/

const calculation = (primaryCapital = 0, interestRate = 0, investmentPeriod = 0) => {
	let newCapital; // Investment by the end of the term
	let inititalCapital = primaryCapital;

	newCapital = inititalCapital * (1 + (interestRate/investmentPeriod));
	const endCapital = Math.pow(newCapital, investmentPeriod);
	const endCapitalRounded = Math.round(endCapital);
	if (endCapitalRounded < 0) {
		return false; 
	} else if (interestRate == 0) {
		TotalCapital.innerHTML = '${primaryCapital} RUB';
	} else {
		TotalCapital.innerHTML = inititalCapital;
	}
	
}

// Multi-Language logic

const langEl = document.querySelector(".lang-wrap");
const link = document.querySelectorAll("a");
const titleEl = document.querySelector(".title");
const descriptionEl = document.querySelector(".description");

link.forEach(el => {
	el.addEventListener("click", () => {
		langEl.querySelector(".active-lang").classList.remove(".active-lang");
		el.classList.add(".active-lang");

		const attr = el.getAttribute("language");

		titleEl.textContent = data[attr].title;
		descriptionEl.textContent = data[attr].description;
	});
});

var data = {
	"eng": {
		"title": "Compound Interest Calculator",
		"description": "Compound interest is the addition of interest to the principal sum of money, or in other words, interest on interest. Use our compound interest calculator to create a projection of how much your savings or investments might grow over a period of time using the power of compound interest."
	}

	"esp": {
		"title": "Calculadora de interés compuesto",
		"description": "El interés compuesto es la suma de los intereses a la suma principal de dinero, o en otras palabras, los intereses sobre los intereses. Utilice nuestra calculadora de interés compuesto para crear una proyección de cuánto podrían crecer sus ahorros o inversiones durante un período de tiempo utilizando el poder del interés compuesto."
	}

	"de": {
		"title": "Zinseszinsrechner",
		"description": "Der Zinseszins ist die Aufstockung der Zinsen auf den Kapitalbetrag, also Zinsen auf Zinsen. Verwenden Sie unseren Zinseszinsrechner, um eine Prognose zu erstellen, wie viel Ihre Ersparnisse oder Investitionen über einen bestimmten Zeitraum mit der Kraft des Zinseszinses wachsen könnten."
	}

}






