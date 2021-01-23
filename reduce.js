// Reduce

var numbers = [10,20,30]
var sum = 0;


// Forloop method
for(var i = 0; i < numbers.length; i++) {
    // sum += numbers[i]
}


// with reduce we will pass an initial value as a second argument
sum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(sum);

var myMarks = [35, 36, 45, 50];

var myTotal = myMarks.reduce((total, mark) => { return total + mark}, 0)

console.log(myTotal);

var primaryColors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
]

var colors = []

// Map method
primaryColors.map((color) => {
    return colors.push(color.color)
})

// reduce way
primaryColors.reduce((prev, color) => {
    prev.push(color.color);
    console.log(prev);
    return prev;
}, []);
console.log(colors);

// balanced or unbanaced

function isBalanced(string) {
    const balance = string.split("").reduce((sum, paren) => {
        if (sum < 0 ) { return sum; }
        if(paren === "(") { return ++sum; }
        if(paren === ")") { return --sum; }
        
        return sum;
    }, 0)
    return balance === 0;
    
}
console.log(isBalanced("())"))


let shafeequeMarks = [
    { name : 'IT', mark: 50, gracemark: [20, 25, 15] },
    { name : 'Social', mark: 35 },
    { name : 'Sience', mark: 37 }
]


let shafeequeMarksTotal = 0;

let myItGrace = shafeequeMarks[0].gracemark.reduce((a,b) => {return a+b});
console.log(myItGrace);

shafeequeMarks.reduce((accumulator, shafeeque) => {
    // console.log(shafeeque.gracemark.reduce((a,b) => { return a + b }, 0));
    return shafeequeMarksTotal = accumulator + shafeeque.mark;
}, 0);

console.log(shafeequeMarksTotal);


// Ecersice 1
// calculate distance
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((accumulator, trip) => { return accumulator + trip.distance}, 0);

console.log("totalDistance " + totalDistance);

// Excersice 2

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
  
// their solution
// var deskTypes = desks.reduce(function(previous, desk) {
//     if(desk.type === 'sitting') { ++previous.sitting }
//     if(desk.type === 'standing') { ++previous.standing }
//     return previous;
// }, { sitting: 0, standing: 0 });

var deskTypes = desks.reduce(function(prev, desk) {
    desk.type === 'sitting' ? prev.sitting++ : prev.standing++;
    return prev
}, { sitting: 0, standing: 0 });

console.log(deskTypes);


// remove duplocates from array

var mynumbers = [1,1,2,3,4,4, 5, 5];

function unique(array) {
    return array.reduce((previouseData, current) => {
       if(!previouseData.find((prevItem) => {
           return prevItem === current
       })) {
            previouseData.push(current)
       }
       return previouseData;
    }, [])
}

console.log(unique(mynumbers));