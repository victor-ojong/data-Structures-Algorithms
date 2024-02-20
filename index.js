// const listOfNumbers = [90, 45, 7, 7, 400]

// const calcMaxNumber = arr => {
//    let  maXNumber = arr.at(0)
//   for (let i = 0; i < listOfNumbers.length; i++) {
   
//     if (arr[i] > maXNumber) {
//       maXNumber = arr[i]
//     }
//   }
//   return maXNumber
// }



// console.log(calcMaxNumber(listOfNumbers))

// const name = true ? 'victor': "Adedamola"

// const newMethond = listOfNumbers.sort((a, b) => b - a)[(listOfNumbers.length-1)]

// console.log(newMethond)


// // Palidrone read backward as forward

// const isPalidrome = (str) => {

//   str =   str.split(' ').join('')
//   const reversedString = str.split('').reverse().join('')

//   return str === reversedString
// }

// console.log(isPalidrome('rise  to  vote sir'))

// // anagram a string that has characters when sorted result to the same letter

// const stringSorter = (text) => {
  
//   return text.split('').sort().join('')

// }


// const isAnagram = (str1, str2) => {

//   const sortedString1 = stringSorter(str1)
//   const sortedString2 = stringSorter(str2)
//   console.log(sortedString1)
//   console.log(sortedString2)

//   return sortedString1 === sortedString2
// }

// console.log(isAnagram('isiii77vict', 'iiiis77vict'))


// const memo = ['memo', 'memo', 'memo','memo','memo','memo','memo','memo','memo']

// const large = new Array(70).fill('memo')

// function findMemo(arr) {

//   const t0 = performance.now()
//   for (let i = 0; i<arr.length; i++){
//     if (arr[0] === 'memo') {
//       console.log('Found Memo!')

//       break
//     }
//   }

//   console.log(arr[10])
//   const t1 = performance.now()

//   return (`Hello Victor this process took ${t1-t0} milliseconds`)
// }

// console.log(findMemo(large))


// Matching arrays in the between two arrays


// function containsSameElements(arr1, arr2){

//   for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr2.length; j++){

//       if (arr1[i] === arr2[j]) {
//         return true;
//       }

//     }
//   }
//   return false;
// }

// console.log(containsSameElements(array1, array2))



// const matchingSameValues = (array1, array2) => {

//   // using hash maps - objects

//   let sortedObjects = {}

//   for (let i = 0; i < array1.length; i++){
//     if (!sortedObjects[array1[i]]) {
//       sortedObjects[array1[i]] = true
//     }
//   }
  


//   for (let j = 0; j < array2.length; j++){
  
//   if (sortedObjects[array2[j]]) {
//      return true
//   }
//   }
//    return false
//   }

// console.log(matchingSameValues(array1, array2))



// const reverseSortedArrays = (arr1, arr2) =>arr1.concat(arr2).sort((a,b)=> a-b )

// console.log(reverseSortedArrays(array1, array2))


// const array1 = [1, 2, 3, 4, 6, 2]
// const array2 = [8, 9, 0, 10, 6, 7]


// const sumOfNumbersAndThierIndexes = (arr1, arr2, target) => {


//   // error handling
//   if (arr1.length < 1 || arr2.length < 1 || ((typeof arr1) !== 'object')) {
    
//     return 'Invalid Inputs'
    
//   }

//   const firstSetObject = {}
  
//   let arrayOfCombinators = []

//   //  create a hash table of the first array to avoid nested arrays TC of 0(n^2)
//   for (let i = 0; i < arr1.length; i++){

//     if (!firstSetObject[arr1[i]]) {

//       firstSetObject[arr1[i]] = arr1[i]
      
//     }

//   }

//   //O(a)


//   for (let j = 0; j < arr2.length; j++){

//     if ((firstSetObject[arr1[j]] + arr2[j]) === target) {
      
//      arrayOfCombinators = arrayOfCombinators.concat([arr1.indexOf(arr1[j]) , arr2.indexOf(arr2[j]) ])

//     }
//   }
//   //O(b)
  
//   return arrayOfCombinators
// }

// console.log(sumOfIndex(array1, array2, 9))

// O(a+b)  Time complexity

// const findFirstRecurrentNumber = (numbers) => {

//   // do a hash table that stores all the array of numbers
//   // do a for loop that loops through that object and if a particular match is identified, then return that number

//   const toHashTable = {}

//   for (let i = 0; i < numbers.length; i++){
//     const isCounted = toHashTable[numbers[i]]
//     if (isCounted) {
//       return isCounted
//     }
//     toHashTable[numbers[i]] = numbers[i]
//   }
//   return undefined
// }

// console.log(findFirstRecurrentNumber([ 3, 4, 6, 2, ]))



// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     }

//     this.tail = this.head

//     this.length = 1
//   }
// }

// const LinkedList1 = new LinkedList(70)
// console.log(LinkedList1)

//   let times = 0

// function fibonacci() {
//   const cache = {}

//   return function fib(n) {
//      times++
//    if (n < 2) {
//     return n
//   }

//   if (n in cache) {
//     return cache[n]
//      }

//      cache[n] = fib(n - 1) + fib(n - 2)
     
//      return cache[n]
//   }
// }


// const fibo = fibonacci()

// console.log(fibo(1))
// console.log(times)
// time complexity of o(2^n) really slow to execute
// but by using dynamic programming - caching and closures we have achieved a time complexity of O(n) and space complexity of O(n)



// LINKED LIST

class firstLinkedList {
  constructor(value) {
    this.head = {
      value,
      next:null
    }

    this.tail = this.head
    this.length= 1
  }

  append(value) {

    const newNode = {
      value,
      next:null
    }

    this.tail.next = newNode

    this.tail = newNode

    this.length++
    
    return this
    
  }


  prepend(value) {

    const newNode = {
      value, 
      next: null
    }

    newNode.next = this.head

    this.head = newNode

    this.length++

    return  this
    
  }
}

const LinkedList2 = new firstLinkedList(10)

console.log(LinkedList2.append(5))

console.log(LinkedList2.prepend(16))
