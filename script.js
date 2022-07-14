//User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively


//Criteria

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Variable for Current Day
var pElement = document.querySelector("#currentDay");

//Display today's day and date
var currentDay = moment().format("MMMM Do YYYY"); // format for the current day using moment//
console.log(currentDay)
pElement.innerHTML = currentDay //calling the P element in my HTML to place the current day//

var currentHour = moment().hours()
console.log(currentHour)

//Using the forEach method to identify the past, present and future. Also linking my css, html to my js//

var timeLoop =  document.querySelectorAll(".time-block") //selecting the whole time block which is the same class for all the time session//
timeLoop.forEach(timeBlock => {
    var timeID = timeBlock.getAttribute("id")
    timeID = parseInt(timeID) //using parseInt here to change the string to number//
    console.log(timeID)
    //linking my css style for the past, present & future without having these class in my HTML//
    timeID < currentHour
    if ( timeID < currentHour){
    timeBlock.children[1].classList.add("past") // color gray was called in the css//
    }
    else if(timeID == currentHour){
        timeBlock.children[1].classList.add("present") //color red was called in the css//
    }else  {
        timeBlock.children[1].classList.add("future") // colore green was called in the css//
    }

    // Local storage using the parent and children element//
var storage = localStorage.getItem(timeID)
console.log(storage)
timeBlock.children[1].value = storage // children [1] is the textarea in each div//

 timeBlock.children[2].addEventListener("click", function(){ // children [2] is the the save btn//
    console.log("click")

    var text = timeBlock.children[1].value;
    console.log(text)
    localStorage.setItem(timeID , text)
})
});

