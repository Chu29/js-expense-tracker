'use strict'

// select dom elements
const currentBalance = document.querySelector('.current-balance') // balance card
const currentIncome = document.querySelector('.current-income') // income card
const currentExpense = document.querySelector('.current-expense') // expense card
const transDesc = document.querySelector('.nt-description') // transaction des
const transAmt = document.querySelector('.nt-amount') // transaction amount
const addTransBtn = document.querySelector('.add-btn')

// toggle trans
const incomeBtn = document.querySelector('#toggle-income')
const transactionsContainer = document.querySelector('.recent-transactions')

// keep track of all balances
let balance = 0
let income = 0
let expense = 0

const updateCards = () => {
  currentBalance.innerHTML = `$${balance.toFixed(2)}`
  currentIncome.innerHTML = `$${income.toFixed(2)}`
  currentExpense.innerHTML = `$${expense.toFixed(2)}`
}

// initialize the UI
updateCards()

const addNewTransaction = (desc, amt) => {
  desc = transDesc.value.trim()
  console.log(desc);
  amt = Number(transAmt.value)
  if (incomeBtn.checked) {
    income += amt
  } else {
    expense += amt
  }

  balance = income - expense
  updateCards()
}

addTransBtn.addEventListener('click', () => {
  addNewTransaction()
})
