console.log("hi")
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log("finds the person with the greatest age!'");
// const greatAge = people.sort((a,b)=>{
//     let ageLiveA=a.yearOfDeath-a.yearOfBirth;
//     let ageLiveB= b.yearOfDeath-b.yearOfBirth;
//     return ageLiveB-ageLiveA; // Swapped to b - a for longest-lived first!
// })

const greatAges = people
    .map(peo => ({
        ...peo,
        age: peo.yearOfDeath-peo.yearOfBirth

    })) //...peo copy all property from original array and then we add new obj age by calultion new column
.sort((a,b)=>b.age-a.age)
    console.log(greatAges)
console.table(greatAges)




//module.exports=findTheOldest;