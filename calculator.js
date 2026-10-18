console.log('hi');

// function add(a,b){
//     console.log(a+b) ;
// }
// add(2,2); //call function

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}



const sum = (arrays) => {
    let total = 0;

    for (arr of arrays) {

        total += arr;

    }
    return total;

}

const multiply = (arrays) => {
    let multi = 1;
    for (arr of arrays) {
        multi *= arr;
    }
    return multi;
}

const power = (a, b) => {
    return a ** b;
}

const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }

    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;  //i taken num instead i so two result failed
    }
    return result;
}





module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};