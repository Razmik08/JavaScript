const arr = [5, 3, 8, 1, 9, 2, 7, 4, 6]

let min = arr[0]

let max = arr[8]

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
}

console.log(min)

for(let j = 0; j < arr.length; j++){
    if(arr[j] > max){
        max = arr[j]
    }
}

console.log(max)

console.log("The sum of min and max is -> " + (min + max))

