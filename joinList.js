const joinList = function(arr) {
  let list = "";
  for (let i = 0; i < arr.length;i++) {;
    list += arr[i];

    if(i !== arr.length-1) {
      list += ", "
  }
  }
  return list;
};
console.log(joinList(["gists", "types", "operators", "iteration", "problem solving"]));
