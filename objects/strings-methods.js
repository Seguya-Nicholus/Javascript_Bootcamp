let name = '  Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))

// =========== Method 2 ================================
let isValidPassword = function (pwdStr){
    if (pwdStr.length < 9 || pwdStr.includes('password')){
        console.log(pwdStr.length)
        return false
    }
    else{
        console.log(pwdStr.length)
        return true
    }
}

console.log(isValidPassword('hddjdjddj'))
console.log(isValidPassword('hddjdjddjpassword'))
console.log(isValidPassword('hddjdjddj@123'))