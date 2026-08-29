function counter(start){

    let n = start;

    const add = (step) => {
         
        if (step === undefined) {
            step = 1;
         }
        n += step; 
    }



    const sub = (step) => {
        if (step === undefined) {
            step = 1;
        }
        n -= step;
    }


    const get = () => n;

    return [add, sub, get]
}


const [add, sub, get] = counter(10)
console.log(get()); //output 10
add()
add()
add(3)
console.log(get());// output 15
sub()
console.log(get()); //output 14