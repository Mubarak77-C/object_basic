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

// const greatAges = people
//     .map(peo => ({
//         ...peo,
//         age: peo.yearOfDeath-peo.yearOfBirth

//     })) //...peo copy all property from original array and then we add new obj age by calultion new column
// .sort((a,b)=>b.age-a.age)
//     console.log(greatAges)
// console.table(greatAges)

// console.log("finds the person with the greatest age!'");
//  const oldestAge=greatAges[0]
//  console.log(oldestAge);
//   console.log(oldestAge.name);


//## now with spec test way 
const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
    const greatAges = people.map(peo => {
        // If yearOfDeath is missing/undefined, use the currentYear instead!
        const deathYear = peo.yearOfDeath || currentYear;

        return{
        ...peo,
        age: deathYear - peo.yearOfBirth
        };
    }).sort((a, b) => b.age - a.age);

    return greatAges[0]; // Returns the whole object of the oldest person
};



module.exports = findTheOldest;