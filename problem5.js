const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// 5. Sort the inventors by years lived


const TotalYear = inventors.sort((a, b) => {
    return ((a.passed - a.year) - (b.passed - b.year))
})
console.log(TotalYear)


// const TotalYear = inventors.map((data) => {
//     let difference = (data.passed - data.year)
//     return difference
// }).sort((a, b) => {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }
//     return 0
// }).map(value=>{
//     if(value===inventors.passed-inventors.year){
//         return inventors
//     }
// })
// console.log(TotalYear);


