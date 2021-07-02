// valueы of text inputs

// const totalCost = document.getElementById("regular-contribution"),
const primaryCapital = document.getElementById("primary-capital"),
      investmentPeriod = document.getElementById("investment-period"),
      interestRate = document.getElementById("percentage");


// values of range inputs

const totalCostRange = document.getElementById("regular-contribution-range");
	primaryCapitalRange = document.getElementById("primary-capital-range"),
	investmentPeriodRange = document.getElementById("investment-period-range"),
	percentageRange = document.getElementById("percentage-range");


//values of end calculations

const TotalInvestmentAmount = document.getElementById("investment-total"),
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
		TotalInvestmentAmount.innerHTML = '${primaryCapital} RUB';
	} else {
		TotalInvestmentAmount.innerHTML = inititalCapital;
	}
	
}





