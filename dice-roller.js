const diceRoller = function (number){
  let str = `Rolled ${number} dice: `
for (let i = 0; i < number; i++ ){
  let rng = Math.floor(Math.random() * Math.floor(6))
  str += rng

  if(i !== number-1){
    str += ", "
  }
  
}
return str
}

//const args = process.argv// [1,2,3,4] = [3,4]
const lastArgs = process.argv.slice(2); // uma array com um item
let input = lastArgs[0] // tira o primeiro item da array
//let input = process.argv[2]
console.log(diceRoller(input)) 
