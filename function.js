function getNumbers(a) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum+= a[i];
  }

  if (sum > 18) {
    return sum + " is eligible to vote";
  }
  else {
    return sum + " is not eligible to vote";
  }
}

let a = [1, 7, 9, 14];
console.log(a)
let number = getNumbers(a);
console.log(" result: " + number);


sum in array
let numbers=[1,2,3,4,5]
let sum=0;
for(i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log("total sum="+sum)

sum even numbers
let numbers=[2,5,6,7,8,10,20]
let sum=0;
for(i=0;i<numbers.length;i++){
if(numbers[i]%2!==0){
    sum+=numbers[i];
}
}
console.log("even numbers sum="+sum) ;  


let matrix=[
    [1,2,3,7],
    [4,5,6,9],
    [7,8,9,4],
    [7,8,9,4],
];
let sum=0;
for (i=0;i<matrix.length;i++){
    console.log(matrix[i][i]);
    sum=sum+matrix[i][i];
}

console.log("Dionagal sum:"+sum)


let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum=0;
for (i=0;i<matrix.length;i++){
    
    sum=sum+matrix[i][matrix.length-1-i]
}

console.log("Dionagal sum:"+sum)

const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
console.log(newArr);

const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);


let words = ["hello", "world"];
let result = words.flatMap(word => word.split(""));
console.log(result); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]



