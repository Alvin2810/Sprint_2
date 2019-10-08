//Adding event listener to the Add Expense button//
function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', addRecord, false);

}
//function to display expense added, total expense and get the data for the chart//
window.sum=[];
window.category1 = [];
window.expense = []
function addRecord() {
window.category_input = document.getElementById('category1');
window.expense_input = document.getElementById('expense');

  window.expense.push(window.expense_input.value);
  window.category1.push(category_input.value);
  window.sum.push({name: window.category_input.value, value:Number(window.expense_input.value)});
  window.category_input.value = "";
  window.expense_input.value="";
  window.total_expense = Number(expense.reduce(myFunc))
  document.getElementById("expense_added").innerHTML = window.category1.join ("<br/> ");
  document.getElementById("expense_added2").innerHTML = "$" +window.expense.join("<br/> $");
  document.getElementById("expense_total").innerHTML = "Expense - $"+window.expense.reduce(myFunc);
  document.getElementById("expense_total1").innerHTML = "$"+window.expense.reduce(myFunc);
  if (window.total_income==null){
    document.getElementById("total").innerHTML = "Balance: $ -" +  window.total_expense;
  }
  else{
    var expense_input = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML ="Balance: $" + expense_input;
  }
  function myFunc(total, expense) {
  return Number(total) + Number(expense);
}
}


window.addEventListener('load', add_Expense, false)
