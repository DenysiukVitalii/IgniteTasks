var leader = {
  name: "Василий Иванович",
  age: 35
};

var leaderToJSON = JSON.stringify(leader);
console.log(leaderToJSON);

var leaderToObj = JSON.parse(leaderToJSON);
console.log(leaderToObj);
