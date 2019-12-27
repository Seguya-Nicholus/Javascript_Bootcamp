let isAccountLocked = false
let userRole = 'Admin'

if(isAccountLocked){
    console.log('Account is Locked')
}
else if(userRole === 'Admin'){
    console.log('Welcome Admin')
}
else{
    console.log('Welcome')
}


// Challenge Area
let temp = 45

if (temp <= 32){
    console.log('It is Freezing Outside!')
}
else if(temp >= 110){
    console.log('It is so Hot Outside!')
}
else{
    console.log('It is pretty Nice Outside!!!!!!')
}