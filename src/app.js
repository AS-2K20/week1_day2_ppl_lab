//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

var newArray;
var count;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var managerDetails = [managerName,managerAge,currentTeam,trophiesWon];
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation==""){
    return null;
  }
  var formation_Object ={"defender":formation[0], "midfield":formation[1], "forward":formation[2]}
  return formation_Object;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  newArray=[];
  for(let i=0;i<players.length;i++){
    if(players[i].debut==year){
      newArray.push(players[i]);
    }
  }
  return newArray;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  newArray=[];
  for(let i=0;i<players.length;i++){
    if(players[i].position==position){
    newArray.push(players[i]);
    }
  }
  return newArray;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  newArray=[];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name==awardName){
        newArray.push(players[i]);
      }
    }   
  }
  return newArray;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
    newArray=[];
    for(var i=0;i<players.length;i++){
      count=0;
      for(var j=0;j<players[i].awards.length;j++){
        if(players[i].awards[j].name==awardName){
          count++;
        }
      }
        if(count==noOfTimes){
          newArray.push(players[i]);
        }
    }
    return newArray;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  newArray=[];
  for(var i=0;i<players.length;i++){
    for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==awardName && players[i].country==country){
      newArray.push(players[i]);
      }
    }
  }
  return newArray;
} 

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  newArray=[];
  for(var i=0;i<players.length;i++){
    if(players[i].awards.length>=noOfAwards && players[i].team==team && players[i].age<age){
      newArray.push(players[i]);
    }
  }
  return newArray;
 }

//Progression 9 - Sort players in descending order of their age
// newArray=[];
// for(var i=0;i<players.length;i++){
// sortPlayersAge=Object.keys(players[i].age).sort(function(a,b){
//   return players[a]-players[b]
// })
// }
// console.log(sortPlayersAge)
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
