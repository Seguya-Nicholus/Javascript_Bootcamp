const todo = ['Read a Book', 'Take a Walk', 'Watch a Movie', 'Fetch Water', 'Finish Assignment']
console.log(`You have ${todo.length} Todos in the List`)

console.log(`The first Item is -> ${todo[0]}`)
console.log(`The Second Last Item is -> ${todo[todo.length - 2]}`)


// Challenge Area
let lst = ['Note 1', 'Note 2', 'Note 3', 'Note 4']

//Delete the 3rd Item from the List
lst.splice(3,1)

// Add a new item to the end of the list
lst.push('New Note')

// Remove the first item from the list
lst.shift()
console.log('\n')
console.log('============ Using the forEach Method  =============================')

console.log(`You have ${lst.length} Notes in the List`)
// console.log(lst)

lst.forEach(function (item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
    
})

console.log('============ Using the For Loop =============================')
// console.log('\n')
console.log(`You have ${lst.length} Notes in the List`)
for (let count = 0; count < lst.length; count++){
    const num = count + 1
    console.log(`${num}. ${lst[count]}`)
}