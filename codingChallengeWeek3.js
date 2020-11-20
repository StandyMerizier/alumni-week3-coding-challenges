const arrayOne = array => array.reduce((acc, value) => acc * value, 1)
console.log(arrayOne([1,2,3,4]))

const arrayTwo = array => [ Math.min(...array), Math.max(...array), Math.max(...array) - Math.min(...array) ]
console.log(arrayTwo([3,6,2,40]))

const arrayThree = array => array.sort((a, b) => a-b).slice(1, array.length -1).reduce((acc, value) => acc + value, 0)
console.log(arrayThree([ 6, 2, 1, 8, 10 ]))

const stringOne = string => string.substring(1, string.length -1)
console.log(stringOne("Resilient"))

const stringTwo = string => string.split('').map( char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')
console.log(stringTwo('HeLLo WoRLd'))

const stringThree = (string1, string2, string3) => string1.split('').map((char, i) => char + string2[i]+ string3[i]).join('')
console.log(stringThree("aa", "bb" , "cc"))
