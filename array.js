
const letterScores = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3,
  n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
}; 


const calculateWordScore = (word) => {
   const wordarray = word.toLowerCase().split(''); 
    
   let total = 0; 
   for(const letter of wordarray) {
         if(!letterScores[letter]) {
              return 0; 
         }else{
                total += letterScores[letter]; 
         }
   } 

   return total; 
}
console.log(calculateWordScore("hello"));
console.log(calculateWordScore("javascript")); 
console.log(calculateWordScore("quirky"));




const findMostFrequent = (arr) => {
const counts = {};

  for (const item of arr) {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }
let mostFrequent = 0;
  let maxCount = 0;

  for (const item in counts) {
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
};
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(findMostFrequent(fruits));






const areAnagrams = (str1, str2) => {
  const format = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return format(str1) === format(str2);
};


console.log(areAnagrams("listen", "silent"));  
console.log(areAnagrams("Dormitory", "dirty room"));
console.log(areAnagrams("hello", "world")); 
console.log(areAnagrams("apple", "pale")); 






const shoppingCart = [
  { name: 'Laptop', price: 1200, quantity: 1 },
  { name: 'Mouse', price: 25, quantity: 2 },
  { name: 'Keyboard', price: 75, quantity: 1 },
  { name: 'Monitor', price: 300, quantity: 2 },
];
for (const item of shoppingCart) {
  console.log(item.name);      
  console.log(item.price);     
  console.log(item.quantity);  
}

let totalCost = 0;

for (const item of shoppingCart) {
  const itemTotal = item.price * item.quantity;
  totalCost += itemTotal;
}

console.log("Total cost:", totalCost); 
