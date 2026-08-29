const arr = [3, 6, 2, 8, 1, 7, 4, 9, 5]

const filtered = arr.filter(num => num > 5)

const newarr = filtered.map(num => num * 10)

console.log(filtered)

console.log(newarr)