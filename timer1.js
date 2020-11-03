let arr = process.argv.slice(2);
let numbers = [];

if (!arr.length){
  return
  // stop the program if there are no numbers
}
arr.forEach(element => {
  // if the element is not a number or a number above/= to 0, dont keep it
  if (element >= 0){
    numbers.push(element)
  } 
});

let sorting = function (a, b){
  // sort the array numerically acending
  return(a - b)
}
numbers.sort(sorting)

for (let i = 0; i < numbers.length; i++){
  setTimeout(() => {
    process.stdout.write("\x07")
  }, numbers[i] * 1000)
  // beep at every number in numbers (im ms hence *1000)
}

