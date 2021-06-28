// variables for text user inputs

const totalCost = document.getElementById("regular-contribution"),
      anInitialFee = document.getElementById("an-initial-fee"),
      creditTerm = document.getElementById("credit-term")
      percentage = document.getElementById("percentage");


// variables for range inputs

const totalCostRange = document.getElementById("regular-contribution-range"),
	  anInitialFeeRange = document.getElementById("an-initial-fee-range"),
	  creditTermRange = document.getElementById("credit-term-range"),
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
	creditTerm.value = creditTermRange.value;
	percentage.value = percentageRange.value;
}

assignValue();

 
for(let input of inputRange) {
	input.addEventListener('input', () => {
		assignValue();
	})
}

const calculation = (regularContribution = 0, anInitialFee = 0, )





