
function getAkanName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
  let gender = document.getElementById("gender-input").value;

  // validation functions
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }

  //validation variables
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
  let dayOfWeekNumber = Math.round((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

  //creating arrays of Akan names for males and females
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ]

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ]

  //condition statement that validates input
  if (gender === "male" && yearOfBirth !== " " && yearOfBirth != null && monthOfBirth !== " " && monthOfBirth != null && dayOfBirth !== " " && dayOfBirth != null && monthValid == true && dayValid == true){
    switch (dayOfWeekNumber) {
      case 1:
        // document.getElementById('result').style.border = "inset 8px";
        document.getElementById('result').innerHTML = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        return false;
        break;
      case 2:
        document.getElementById('result').innerHTML = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
        return false;
        break;
      case 3:
        document.getElementById('result').innerHTML = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
        return false;
        break;
      case 4:
        document.getElementById('result').innerHTML = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
        return false;
        break;
      case 5:
        document.getElementById('result').innerHTML = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
        return false;
        break;
      case 6:
        document.getElementById('result').innerHTML = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
        return false;
        break;
      case 7:
        document.getElementById('result').innerHTML = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
        return false;
        break;
      default:
        document.getElementById('result').style.color = "#FCD116";
        document.getElementById('result').innerHTML = "Oops, check your inputs";
        alert("mmh");

    }
  } else if(gender === "female" && yearOfBirth !== " " && yearOfBirth != null && monthOfBirth !== " " && monthOfBirth != null && dayOfBirth !== " " && dayOfBirth != null && monthValid == true && dayValid == true) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').innerHTML = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        return false;
        break;
      case 2:
        document.getElementById('result').innerHTML = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').innerHTML = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
        return false;
        break;
      case 4:
        document.getElementById('result').innerHTML = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
        return false;
        break;
      case 5:
        document.getElementById('result').innerHTML = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
        return false;
        break;
      case 6:
        document.getElementById('result').innerHTML = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
        return false;
        break;
      case 7:
        document.getElementById('result').innerHTML = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
        return false;
        break;
      default:
        document.getElementById('result').style.color = "#FCD116";
        document.getElementById('result').innerHTML = "Oops, check your inputs";
        alert("mmh");
      }
    } else {
      alert("You entered invalid month or day");
    }
  }
