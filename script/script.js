let yearOfBirth = prompt("Enter your year of birth: ");
let monthOfBirth = parseInt(prompt("Enter your month of birth: "));
let dayOfBirth = parseInt(prompt("Enter your day of birth"));
let gender = prompt("Are you male or female");

const getDayOfWeekMale = (yearOfBirth, monthOfBirth, dayOfBirth) =>{
  let dayOfWeekNumber = Math.round((((parseInt(yearOfBirth.slice(0,2))/4)-2*parseInt(yearOfBirth.slice(0,2))-1)+((5*parseInt(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
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
  }
}

const getDayOfWeekFemale = (yearOfBirth, monthOfBirth, dayOfBirth) =>{
  let dayOfWeekNumber = Math.round((((parseInt(yearOfBirth.slice(0,2))/4)-2*parseInt(yearOfBirth.slice(0,2))-1)+((5*parseInt(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
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
  }
}

if (gender.toLowerCase() == "male") {
  getDayOfWeekMale(yearOfBirth, monthOfBirth, dayOfBirth);
} else if (gender.toLowerCase() == "female") {
  getDayOfWeekFemale(yearOfBirth, monthOfBirth, dayOfBirth);
} else {
  alert("Invalid data");
}
