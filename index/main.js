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






