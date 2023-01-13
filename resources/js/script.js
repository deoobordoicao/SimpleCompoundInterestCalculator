const compoundInterestCalculator = document.getElementById("CompoundInterestCalculator");

const initialBalance = document.getElementById("InitialBalance");
const interestRate = document.getElementById("InterestRate");
const year = document.getElementById("Years");
const monthlyContribution = document.getElementById("MonthlyContribution");
const result = document.getElementById("Result");
const yearTerm = document.getElementById("yearTerms");

//console.log(compoundInterestCalculator, initialBalance, interestRate, monthlyContribution, result);

compoundInterestCalculator.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);
  if (initialBalance.value === "" || interestRate.value === "" || year.value === "") {
    // Create form validation and Alert!
    alert("Complete all fields");
  } else {
    // console.log("valid");
    // calling the function
    calculateCompoundInterest();
    return yearTerm.innerHTML = year.value;
    console.log("Computed Successfully!");
  }
});

//  Create a function in javascript to calculate the compounded interest

function calculateCompoundInterest() {
  if (monthlyContribution.value === "") {
    return (result.innerHTML = compoundInterest(initialBalance.value, interestRate.value, year.value) + "$");
  } else {
    return (result.innerHTML =
      compoundInterestWithContribution(initialBalance.value, interestRate.value, year.value, monthlyContribution.value) + "$");
  }
}

function compoundInterest(principalAmount, interestRate, years) {

  //   A = P(1 + r / n) ^ nt;
  return (principalAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years)).toFixed(2);
  
}

// Calculate the compounded interest rate with monthly contributions

function compoundInterestWithContribution(principalAmount, interestRate, years, monthlyContribution) {
  return (
    principalAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
    (monthlyContribution * (Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1)) / (interestRate / 100 / 12)
    
  ).toFixed(2);
 
}

// Add animation using JavaScript and CSS keyframes

result.classList.add("fade");
setTimeout(function () {
  result.classList.remove("fade");
}, 1000);
