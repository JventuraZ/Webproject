let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amoun')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}

function addCategory() {
    const newCategoryInput = document.getElementById('new-category-input');
    const newCategoryName = newCategoryInput.value.trim();

    if (newCategoryName === '') {
        alert('Please enter a category name');
        return;
    }

    // Check if the category already exists
    const categoryExists = Array.from(categorySelect.options).some(option => option.value === newCategoryName);
    if (categoryExists) {
        alert('Category already exists');
        return;
    }

    // Add the new category to the select options
    const novaOpcao = document.createElement('option');
    novaOpcao.value = newCategoryName;
    novaOpcao.textContent = newCategoryName;
    categorySelect.appendChild(novaOpcao);

    // Clear the input field
    newCategoryInput.value = '';

    
}