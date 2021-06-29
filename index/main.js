// variables for text user inputs

const totalCost = document.getElementById("regular-contribution"),
      anInitialFee = document.getElementById("an-initial-fee"),
      investmentPeriod = document.getElementById("investment-period")
      interestRate = document.getElementById("percentage");


// variables for range inputs

const totalCostRange = document.getElementById("regular-contribution-range"),
	  anInitialFeeRange = document.getElementById("an-initial-fee-range"),
	  investmentPeriodRange = document.getElementById("investment-period-range"),
	  percentageRange = document.getElementById("percentage-range");


//variables for the results

const TotalAmountOfCredit = document.getElementById("investment-total"),
      TotalMonthlyPayment = document.getElementById("monthly-payment"),
      TotalRecommendedIncome = document.getElementById("recommended-income");

//variable to initiate the calculations 

const inputRange = document.querySelectorAll(".input-range");

// Arrow function expression (стрелочная функция)

const assignValue = () => {
	totalCost.value = totalCostRange.value; 
	anInitialFee.value = anInitialFeeRange.value;
	investmentPeriod.value = investmentPeriodRange.value;
	interestRate.value = percentageRange.value;
}

assignValue();

 
for(let input of inputRange) {
	input.addEventListener('input', () => {
		assignValue();
		calculation(totalCost.value, anInitialFee.value, investmentPeriod.value  );
	})
}

/* 
anInitialFee = initial principal balance
interestRate = amount of interest per period (year)
regularContribution = not done yet
investmentPeriod = compounding frecuency

*/

const calculation = (anInitialFee = 0, interestRate = 0, investmentPeriod = 0) => {
	newCapital = anInitialFee * (1 + (interestRate/investmentPeriod));
	const endCapital = Math.pow(newCapital, investmentPeriod);
	const endCapitalRounded = Math.round(endCapital);
	console.log(endCapitalRounded);
}





