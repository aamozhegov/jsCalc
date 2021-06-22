// variables for text user inputs

const totalCost = document.getElementById("total-cost"),
      anInitialFee = document.getElementById("an-initial-fee"),
      creditTerm = document.getElementById("credit-term");


// variables for range inputs

const totalCostRange = document.getElementById("total-cost-range"),
	  anInitialFeeRange = document.getElementById("an-initial-fee-range"),
	  creditTermRange = document.getElementById("credit-term-range");


//variables for the results

const TotalAmountOfCredit = document.getElementById("amount-of-credit"),
      TotalMonthlyPayment = document.getElementById("monthly-payment"),
      TotalRecommendedIncome = document.getElementById("recommended-income");

//variable to initiate the calculations 

const inputRange = document.querySelectorAll(".input-range");

// Arrow function expression (стрелочная функция)

const assignValue = () => {
	totalCost.value = totalCostRange.value; 
	anInitialFee.value = anInitialFeeRange.value;
	creditTerm.value = creditTermRange.value;
}

assignValue();





