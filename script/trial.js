// defining variables using the document object model
let yearOfBirth = document.querySelector("#year-input").value;
let monthOfBirth = parseInt(document.querySelector("#month-input").value);
let dayOfBirth = parseInt(document.querySelector("#day-input").value);
let gender = document.querySelector("#gender-input").value;
let submitButton = document.querySelector("#get-name");

// creating functions that generate Akan names based on form values\
const getDayOfWeekMale = function (yearOfBirth, monthOfBirth, dayOfBirth) {
  let dayOfWeekNumber = Math.round((((parseInt(yearOfBirth.slice(0,2))/4)-2*parseInt(yearOfBirth.slice(0,2))-1)+((5*parseInt(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  console.log(dayOfWeekNumber);
  if (dayOfWeekNumber === 1) {
    alert("Sunday: Kwasi")
  } else if (dayOfWeekNumber === 2) {
    alert("Monday: Kwadwo");
  } else if (dayOfWeekNumber === 3) {
    alert("Tuesday: Kwabena");
  } else if (dayOfWeekNumber === 4) {
    alert("Wednesday: Kwaku");
  } else if (dayOfWeekNumber === 5) {
    alert("Thursday: Yaw");
  } else if (dayOfWeekNumber === 6) {
    alert("Friday: Kofi");
  } else if (dayOfWeekNumber === 7) {
    alert("Saturday: Kwame");
  } else {
    alert ("You entered invalid input, try again");
  }
}

const getDayOfWeekFemale = function (yearOfBirth, monthOfBirth, dayOfBirth) {
  let dayOfWeekNumber = Math.round((((parseInt(yearOfBirth.slice(0,2))/4)-2*parseInt(yearOfBirth.slice(0,2))-1)+((5*parseInt(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
  console.log(dayOfWeekNumber);
  if (dayOfWeekNumber === 1) {
    alert("Sunday: Akosua")
  } else if (dayOfWeekNumber === 2) {
    alert("Monday: Adwoa");
  } else if (dayOfWeekNumber === 3) {
    alert("Tuesday: Abenaa");
  } else if (dayOfWeekNumber === 4) {
    alert("Wednesday: Akua");
  } else if (dayOfWeekNumber === 5) {
    alert("Thursday: Yaa");
  } else if (dayOfWeekNumber === 6) {
    alert("Friday: Afua");
  } else if (dayOfWeekNumber === 7) {
    alert("Saturday: Ama");
  } else {
    alert ("You entered invalid input, try again");
  }
}

// adding event listener to generate name when button is clicked
submitButton.addEventListener("click", function(){
  if (gender.toLowerCase() == "male") {
    getDayOfWeekMale(yearOfBirth, monthOfBirth, dayOfBirth);
  } else if (gender.toLowerCase() == "female") {
    getDayOfWeekFemale(yearOfBirth, monthOfBirth, dayOfBirth);
  } else {
    alert("Invalid data");
  }
});
