const fibonacci = (num) => {
    //guard clause edge
    if (num <= 0 || isNaN(num) || typeof num != 'number') return "OOPS"
    let a=0,b=1;
    for(let i=2;i<=num;i++){
       let next= a+b;
       a=b;
       b=next;
    }
    return b;

}



module.exports = fibonacci;