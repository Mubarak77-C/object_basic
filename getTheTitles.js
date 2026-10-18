

//## mistake not taken function direct call becuase
//That error happens because books isn't defined as a global variable in your file.
// const getTheTitles = books.map((book)=>{
//    return book.title  
// }); 

//1st create arrowfunction with parameter pass then inside define map()
const getTheTitles=(books)=>{  //here array pass from spec.js file
    return books.map(book=>book.title);
}


//const getTheTitles = books.map(book => book.title); // ✅ Clean and concise
module.exports = getTheTitles;