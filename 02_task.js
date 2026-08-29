function maxOFThree(a,b,c){
    
    if(a >= b && a >= c){
        return a
    }
    else if(b >= a && b >= c){
        return b
    }
    else {
        return c
    }

}

console.log(maxOFThree(67, 12, 10))