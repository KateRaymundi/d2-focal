
const password = function(password) {
  let obfuscate = password.split(''); // pass the argument inside of another variable and use this var to run a loop and a code 
  for (let i = 0; i < obfuscate.length; i++){
    if(obfuscate[i] === "a"){
      obfuscate[i] = '4'
    } else if(obfuscate[i] === "e") {
      obfuscate[i]= "3"
    } else if(obfuscate[i] === "o") {
      obfuscate[i] = "0"
    } else if (obfuscate[i] === "l") {
      obfuscate[i]= "1"
    }
  }
  return obfuscate.join('');
}
const args = process.argv// [1,2,3,4] = [3,4]
const lastArgs = process.argv.slice(2);
let str = lastArgs[0]
console.log(str)
console.log(password(str))

