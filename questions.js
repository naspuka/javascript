Question 1

let is_date = (date) => {
    const res = Object.prototype.toString.call(date) === "[object Date]"
    return console.log(res)
};


let dateVerifier = is_date("October 13, 2014 11:13:00");


Question 2


\
let date  = new Date();

let day = date.getDate() 
let month = date.getMonth()
let year = date.getFullYear()
    
date = day+'/'+month+'/'+year;

console.log(date);

Question 3
let getDaysInMonth = (month, year) => {
    let date = new Date(year, month, 0);
    res = date.getDate();
    return res;
};

console.log(getDaysInMonth(2, 2012));

Question 4

let month_name = (month) => {
    monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    res = monthList[month.getMonth()];
    return res;
};

console.log(month_name(new Date("4/11/2009")));

Question 5

let compare_dates = (date1, date2) => {
    if(date1 === date2) {
        return ("Date1 = Date2");
    }else if(date1 > date2){
        return ("Date1 > Date2");
    }else {
        return ("Date1 < Date2");
    }
};

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 

Question 6
let add_minutes = (date, minute) => {
    res = new Date(date.getTime() + minute*60000);
    return res;
};

console.log(add_minutes(new Date(2014,10,2), 30).toString());

Question 7

let is_weekend  = (date) => {
    let newDate = new Date(date);
    if (newDate.getDay() == 6 || newDate.getDay() == 0) {
    return "weekend";
    }
};

console.log(is_weekend('Nov 15, 2014')); 


Question 9
let lastday = (year, month) =>{
    let date = new Date(year, month, 0).getDate();
    return date;
};

console.log(lastday(2014,0));

//Question 10

//the Minion Game
let minionGame = (string) => {
    kevin, stuart = 0, 0
    for(let i, c = 0 ; i, c in string{
        if(c in "AEIOU"){
            kevin +=
        }
    })
}