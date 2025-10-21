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
const transactionsContainer = document.querySelector(
  '.recent-transaction fieldset'
)

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
  if (incomeBtn.checked) {
    income += amt
  } else {
    expense += amt
  }

  balance = income - expense
  updateCards()
}

// render recent transaction to the UI

const addRecentTransaction = (desc, amt, isIncome) => {
  const sign = isIncome ? '' : '-'

  const rtTransaction = `
        <div class="rt-transaction ${isIncome ? 'in' : 'out'}">
            <p class="desc">${desc}</p>
            <p class="value">${sign}$${Math.abs(amt).toFixed(2)}</p>
            <div class="del-btn">
              <svg height="20" width="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H2zm3 9H4V7h1v7zm2 0H6V7h1v7zm2 0H8V7h1v7zm2 0h-1V7h1v7zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM9 2H6v-.987h3V2z" fill="currentColor"/>
              </svg>
            </div>
        </div>`

  transactionsContainer.insertAdjacentHTML('beforeend', rtTransaction)
}

addTransBtn.addEventListener('click', () => {
  const desc = transDesc.value.trim()
  const amt = Number(transAmt.value)
  const isIncome = incomeBtn.checked

  if (!desc || amt <= 0 || isNaN(amt)) {
    alert('Please enter a valid description and a positive amount.')
    return
  }

  addNewTransaction(desc, amt)
  addRecentTransaction(desc, amt, isIncome)
  transDesc.value = ''
  transAmt.value = ''
})
