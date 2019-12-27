let temp = 45

// Logical And is True if both sides are True and False otherwise
//Logical Or is True if atleast on side is True False otherwise

if(temp >= 50 && temp<=80){
    console.log('It is pretty nice Outside')
}else if(temp<=0 || temp>=120){
    console.log('Donot go Outside')
}else{
    console.log('Ehhh Do what you want')
}


// Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("Only Offer up Vegan Dishes")
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Make sure to offer up some vegan options");
}else{
    console.log("Offer anything on the menu");
}