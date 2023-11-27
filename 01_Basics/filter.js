//Filters

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const n = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(n);

const books = [
    {
        title: "Book 1",
        genre: "History",
        publish: 2002,
        edition: 2016
    },
    {
        title: "Book 2",
        genre: "English",
        publish: 2013,
        edition: 2020
    },
    {
        title: "Book 3",
        genre: "History",
        publish: 2000,
        edition: 2010
    },
    {
        title: "Book 4",
        genre: "Science",
        publish: 2015,
        edition: 2018
    },
    {
        title: "Book 5",
        genre: "Fiction",
        publish: 2020,
        edition: 2020
    },
    {
        title: "Book 6",
        genre: "Fiction",
        publish: 2009,
        edition: 2018
    }
];
// const gen = books.filter( (num) => {
//         return num.genre === "History"
//     })

// const pub = books.filter( (num) => {
//         return num.publish >= 2015
//     })    
// console.log(pub);

//Map
//const myNums = [1,2,3,4,5,6,7,8,9,10]
//  const newNums = myNums.map( (num) =>  num+10)
// console.log(newNums);

//Chaining

// const newNums = myNums
//                 .map( (num) =>  num + 10)
//                 .map( (num) =>  num + 21)
//                 .filter( (num) => num > 10)

// console.log(newNums);


//Reduce

