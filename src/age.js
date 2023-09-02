// Get the birthdate from the YAML front matter
// const birthdate = new Date('1996-07-01');
// Get the birthdate from the data attribute
const birthdate = new Date(document.querySelector('#age').getAttribute('data-birthdate'));

// Calculate age function
function calculateAge(birthdate) {
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // Average days in a month
  const ageInYears = ageInMonths / 12;

  // Calculate the age as a single float value
  const age = ageInYears + (ageInMonths % 1) / 12;

  return age;
}

// Update the age on the webpage
function updateAge() {
  const age = calculateAge(birthdate);
  const ageElement = document.getElementById('age'); // Replace 'age' with the ID of the HTML element where you want to display the age

  if (ageElement) {
    ageElement.textContent = `${age.toFixed(7)}`;
  }
}

// Update the age initially
updateAge();

// Update the age every 20 milliseconds (adjust the interval as needed)
setInterval(updateAge, 500);
