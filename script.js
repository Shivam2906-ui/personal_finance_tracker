// JavaScript source code
// Global variables
let transactions = [];
let balance = 0;

// DOM elements
const transactionForm = document.getElementById('transactionForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const transactionList = document.getElementById('transactionList');
const balanceElement = document.getElementById('balance');

// Event listeners
transactionForm.addEventListener('submit', addTransaction);

// Function to add a transaction
function addTransaction(event) {
    event.preventDefault();

    const description = descriptionInput.value;
    const amount = +amountInput.value; // Convert to number
    const type = typeInput.value;

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter valid values for description and amount.');
        return;
    }

    const transaction = {
        id: Date.now().toString(),
        description,
        amount,
        type
    };

    transactions.push(transaction);

    updateUI();
    resetForm();
}

// Function to delete a transaction
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateUI();
}

// Function to update the user interface
function updateUI() {
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <span class="${transaction.type}">${transaction.description} - $${transaction.amount}</span>
      <button onclick="deleteTransaction('${transaction.id}')">Delete</button>
    `;
        transactionList.appendChild(listItem);
    });

    calculateBalance();
}

// Function to calculate the balance
function calculateBalance() {
    balance = transactions.reduce
}