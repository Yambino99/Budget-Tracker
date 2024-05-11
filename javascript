// Define variables
let income = 0;
let expenses = 0;
let balance = 0;
const transactions = [];

// Function to update balance
function updateBalance() {
  balance = income - expenses;
  document.getElementById('balance').textContent = balance;
}

// Function to add income
function addIncome(amount) {
  income += parseFloat(amount);
  updateBalance();
}

// Function to add expense
function addExpense(amount) {
  expenses += parseFloat(amount);
  updateBalance();
}

// Function to update transaction history
function updateTransactionHistory() {
  const transactionsList = document.getElementById('transactions');
  transactionsList.innerHTML = ''; // Clear previous transactions

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = transaction;
    transactionsList.appendChild(li);
  });
}

// Event listener for adding income
document.getElementById('add-income').addEventListener('click', () => {
  const incomeInput = document.getElementById('income');
  const amount = incomeInput.value.trim();
  if (amount !== '' && !isNaN(amount) && parseFloat(amount) > 0) {
    addIncome(amount);
    transactions.push(`Income: +${amount}`);
    updateTransactionHistory();
    incomeInput.value = ''; // Clear input field
  }
});

// Event listener for adding expense
document.getElementById('add-expense').addEventListener('click', () => {
  const expenseInput = document.getElementById('expense');
  const amount = expenseInput.value.trim();
  if (amount !== '' && !isNaN(amount) && parseFloat(amount) > 0) {
    addExpense(amount);
    transactions.push(`Expense: -${amount}`);
    updateTransactionHistory();
    expenseInput.value = ''; // Clear input field
  }
});
