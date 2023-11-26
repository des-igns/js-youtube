// const myArr = [1,2,3,4,5]
// console.log(myArr[0])

// const team = new Array(1,2,3,4,5)
// team.push(6)

// team.pop()

//console.log(team)


const marvel = ['hulk', 'thor','ironman']
const dc = ['aquaman', 'batman','flash']

//concat always give output in a new array
// const all = marvel.concat(dc)

const all = [...marvel,...dc]
console.log(all)
