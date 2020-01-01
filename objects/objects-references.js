let myAccount = {
    name: 'Seguya Nicholus',
    expense: 0,
    income: 0
}

let addExpense = function (account, amount) { 
    account.expense = account.expense + amount
    account.balance = account.balance - account.expense
    console.log(`Account for ${account.name} has reduced by $${amount} and current balance is $${account.balance}`)
    amount = 0;
    return account.expense
    
}

let addIncome = function (account,amount) {
    account.income = account.income + amount
    account.balance = account.balance + account.income
    console.log(`Account for ${account.name} has increased by $${amount} and current balance is $${account.balance}`)
    amount =  0;
    return account.income
    
}


let resetAccount = function (account) {
    account.balance = 0;
    account.income = 0;
    account.expense = 0;
    console.log(`Account for ${account.name} has been reset and current balance is $${account.balance}`)
}

let getAccountSummary = function (account){

    return `Account for ${account.name} has $${account.balance} as Balance . $${account.income} in Income and $${account.expense} in Expenses`

}

console.log(getAccountSummary(myAccount))
addIncome(myAccount,1000)
addExpense(myAccount,100)
addExpense(myAccount, 100)
addIncome(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
console.log('================================ Solution ====================================')

let myAccount1 = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense1 = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome1 = function (account, income) {
    account.income = account.income + income
}

let resetAccount1 = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary1 = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome1(myAccount1, 2000)
addExpense1(myAccount1, 2.50)
addExpense1(myAccount1, 160)
console.log(getAccountSummary1(myAccount1))
resetAccount1(myAccount1)
console.log(getAccountSummary1(myAccount1))

