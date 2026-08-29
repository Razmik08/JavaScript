const arr = [1, 2, 3, 4, 5]

const newobj = arr.map(num => ({ value: num, isEven: num % 2 === 0}))

console.log(newobj)