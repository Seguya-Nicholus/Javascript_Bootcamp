let lst = ['Note 1', 'Note 2', 'Note 3', 'Note 4']
console.log(lst.length)

// Insert an element at the end of the list and returns its index
lst.push('Note 5')
console.log(lst)

// Removes and returns the last element from the list and returns its index
lst.pop()
console.log(lst)

// Removes and returns the first element from the list
console.log(lst.shift())
console.log(lst)

lst.unshift('Note 1')
console.log(lst)

let months = ['Jan', 'Mar', 'Apr', 'Jun']

// Inserts at the 1st index position
months.splice(1, 0, 'Feb')
console.log(months)

// Replaces the 1st element at the 4th index position
months.splice(4, 1,'May')
console.log(months)