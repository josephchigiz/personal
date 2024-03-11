// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)


function race() {
  console.log(5)
  console.log(4)
  console.log(3)
  console.log(2)
  console.log(1)
}

race()

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLapTime(){
  console.log('\nTotal lap time:' + lap1+lap2+lap3)
}

totalLapTime()


////////////////////////////////////////////////////
let lapsCompleted;
lapsCompleted = 0;

// create function that increments the laps completed,
// variable with one
// Run it three times

function increment(){
  lapsCompleted = lapsCompleted + 1;
}

increment()
increment()
increment()

console.log('\n' + lapsCompleted)