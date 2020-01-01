let myAccount = {
    name: 'Seguya Nicholus',
    expense: 0,
    income: 0
}

let addExpense = function (account, amount) {
    myAccount.expense = myAccount.expense + amount
}

let addIncome = function (account,amount) {
    myAccount.income = myAccount.income + amount
}

addIncome(myAccount,1000)
addExpense(myAccount,0.5)
console.log(myAccount)