// Render welcome message
let haveFun = document.getElementById('have-fun');

function greetings() {
  let myName = document.getElementById('my-name').value;

  haveFun.textContent += myName;
  haveFun.textContent += "!💻";

  document.getElementById('welcome-scr').style.display = "none";
  document.getElementById('main-scr').style.display = "flex";
}

let count;
count = 0;

let countLog = document.getElementById('count-el');
let incBtn = document.getElementById('increment-btn');
let saveEl = document.getElementById('save-el');

function increment() {
  incBtn.textContent = "SEEN ANOTHER"
  count += 1;
  countLog.innerText = count;
  console.log(countLog)
}

function save() {
  let countStr = count + ' -'
  // saveEl.innerText += countStr
  // innerText only shows human readable content hence the space in our p is lost
  // hence we use .textcontent instead
  saveEl.textContent += countStr
  console.log(countStr)
  console.log(count)
  incBtn.textContent = "SEEN ONE"
  count = 0
  countLog.textContent = count
}

// // Strings
// let user = "Per";
// let message = "You have three new notifications";

// let messageToUser = message + "; " + user + "!";
// console.log(messageToUser)

// // Greetings
// let name = 'Joseph';
// let greeting = 'Hi, my name is '

// let myGreeting = greeting + name;

// console.log(myGreeting)

// // String and Num concatenation
// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints) // 410

// // examples
// console.log(4 + 5)  //9
// console.log("2" + "4")  // "24"
// console.log("5" + 1)  // "51"
// console.log(100 + "100")  // "100100"