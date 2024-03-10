//create new Date object to rep current date
const now = new Date();

//Use getTime() method of the Date object to get the number of milliseconds since said Date
const time = now.getTime();
console.log(time);

//create new Date object with specified date and time
//pass a date string into the Date() constructor:
const d = new Date('December 08, 2023 18:18:12');
console.log(d.getTime());

//to calculate the milliseconds between the two times you call the getTime() method and use the - operator. For example:
const d1 = new Date('December 08, 2023 18:18:12');
const d2 = new Date('August 02, 2024 00:00:00');

const time1 = d2.getTime() - d1.getTime();
console.log(time1);

//the countdown timer will need to calculate the time rem and display it on a webpage

//the following declares a time variable with the value 150000 milliseconds:
const time2  = 150000;

//to get minutes from milliseconds, divide the ms by 1000 to get the seconds and the seconds by 60 to get the minutes:
console.log(time2/1000/60);

//to get the remaining minutes(2), use Math.floor() function:
const minutes = Math.floor(time2 / 1000 / 60);
console.log(minutes);

// and for seconds(30), you use the modulus operator that returns the division remainder
const seconds  = Math.floor(time2 / 1000) % 60;
console.log(seconds);

// ! Develop the COUNTDOWN class
//first create new Countdown:
    // it should be initialized with:
    // 1.an expired date
    // 2.a callback that is responsible for rendering the countdown timer
    // 3.and another callback that will be called when the countdown completes

class Countdown {
    constructor(expiredDate, onRender, onComplete) {
        this.onRender = onRender;
        this.onComplete = onComplete;
        // handle the expired date
        this.expiredDate = expiredDate;
    }
    timeRemaining = expiredDate.getTime() - currentTime;
}

// Based on the expiredDate argument, you can calculate the rem time in ms
const currentTime = new Date().getTime();
// const timeRemaining = expiredDate.getTime() - currentTime;

// since you'll need to access the remaining time(timeRemaining) across methods of the class, you should define it as a property of the Countdown class